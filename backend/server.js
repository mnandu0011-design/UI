const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
const DATA_FILE = path.join(ROOT, 'data', 'db.json');
const PORT = process.env.PORT || 3000;

function seed() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
    const now = new Date().toISOString();
    fs.writeFileSync(DATA_FILE, JSON.stringify({
      users: [
        { id: 'u1', name: 'Demo Admin', email: 'mafiaadmin@gmail.com', password: 'mafia0011', role: 'admin' },
        { id: 'u2', name: 'ServiceNow Customer', email: 'mafiacustomer@gmail.com', password: 'mafia0011', role: 'customer' }
      ],
      agents: [
        { id: 'a1', name: 'Research Agent', description: 'Researches business information and prepares summaries.', status: 'Active', tasksCompleted: 42, createdAt: now },
        { id: 'a2', name: 'Email Agent', description: 'Drafts and classifies customer email requests.', status: 'Idle', tasksCompleted: 27, createdAt: now },
        { id: 'a3', name: 'Analytics Agent', description: 'Analyzes revenue and unusual activity signals.', status: 'Active', tasksCompleted: 35, createdAt: now }
      ],
      tasks: [
        { id: 't1', agentId: 'a1', name: 'Market research summary', status: 'Completed', createdAt: now },
        { id: 't2', agentId: 'a3', name: 'Revenue anomaly scan', status: 'Running', createdAt: now },
        { id: 't3', agentId: 'a2', name: 'Customer email classification', status: 'Queued', createdAt: now }
      ],
      workflows: [
        { id: 'w1', name: 'Customer Insight Workflow', status: 'Active', description: 'Request → Agent → Analyze → Generate Result' },
        { id: 'w2', name: 'Revenue Monitoring Workflow', status: 'Active', description: 'Collect → Detect → Review → Report' }
      ],
      notifications: [
        { id: 'n1', title: 'Agent completed task', message: 'Research Agent completed market research.', type: 'success', read: false, createdAt: now },
        { id: 'n2', title: 'Workflow running', message: 'Revenue Monitoring Workflow is currently running.', type: 'info', read: false, createdAt: now },
        { id: 'n3', title: 'Review required', message: 'An unusual activity signal needs review.', type: 'warning', read: false, createdAt: now }
      ],
      activity: [
        { id: 'l1', message: 'Research Agent completed a task', type: 'success', createdAt: now },
        { id: 'l2', message: 'Revenue Monitoring Workflow started', type: 'info', createdAt: now },
        { id: 'l3', message: 'Unusual activity signal detected', type: 'warning', createdAt: now }
      ]
    }, null, 2));
  }
}
function readDb() { seed(); return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')); }
function writeDb(db) { fs.writeFileSync(DATA_FILE, JSON.stringify(db, null, 2)); }
function send(res, status, data, type = 'application/json') {
  const body = type === 'application/json' ? JSON.stringify(data) : data;
  res.writeHead(status, { 'Content-Type': type, 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS' });
  res.end(body);
}
function body(req) { return new Promise((resolve, reject) => { let raw=''; req.on('data', c => raw += c); req.on('end', () => { try { resolve(raw ? JSON.parse(raw) : {}); } catch(e) { reject(e); } }); }); }
function id(prefix) { return prefix + crypto.randomBytes(4).toString('hex'); }

async function api(req, res, pathname) {
  const db = readDb();
  if (req.method === 'GET' && pathname === '/api/health') return send(res, 200, { ok: true, service: 'ServiceNow Backend', time: new Date().toISOString() });
  if (req.method === 'POST' && pathname === '/api/login') {
    const b = await body(req);
    const email = String(b.email || '').trim().toLowerCase();
    const password = String(b.password || '');
    const role = String(b.role || '').trim().toLowerCase();

    // Match credentials case-insensitively for email and allow role to be omitted.
    // This also repairs the older customer-email typo from previous project versions.
    const user = db.users.find(u => {
      const storedEmail = String(u.email || '').trim().toLowerCase();
      const storedRole = String(u.role || '').toLowerCase();
      const legacyEmailMatches =
        (storedRole === 'admin' && email === 'mafiaadmin@gmail.com' && storedEmail === 'mafiadmin@gmail.com') ||
        (storedRole === 'customer' && email === 'mafiacustomer@gmail.com' && storedEmail === 'mafiacustomer@gmail');
      const emailMatches = storedEmail === email || legacyEmailMatches;
      const roleMatches = !role || storedRole === role;
      return emailMatches && u.password === password && roleMatches;
    });
    if (!user) return send(res, 401, { success: false, message: 'Invalid email, password or role. Check all three fields and try again.' });

    // Normalize the legacy admin record so future logins use the corrected address.
    if (user.role === 'admin') user.email = 'mafiaadmin@gmail.com';
    if (user.role === 'customer') user.email = 'mafiacustomer@gmail.com';
    writeDb(db);
    return send(res, 200, { success: true, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  }
  if (req.method === 'GET' && pathname === '/api/dashboard') {
    const activeAgents = db.agents.filter(a => a.status === 'Active').length;
    const completedTasks = db.tasks.filter(t => t.status === 'Completed').length;
    const unread = db.notifications.filter(n => !n.read).length;
    return send(res, 200, { agents: db.agents.length, activeAgents, completedTasks, unreadNotifications: unread, tasks: db.tasks.length, workflows: db.workflows.length });
  }
  const match = pathname.match(/^\/api\/(agents|tasks|workflows|notifications|activity)(?:\/([^/]+))?$/);
  if (!match) return send(res, 404, { error: 'API route not found' });
  const collection = match[1]; const itemId = match[2];
  if (req.method === 'GET') {
    let items = db[collection] || [];
    if (itemId) { const item = items.find(x => x.id === itemId); return item ? send(res, 200, item) : send(res, 404, { error: 'Not found' }); }
    return send(res, 200, items);
  }
  if (req.method === 'POST') {
    const b = await body(req); const prefixes = { agents:'a', tasks:'t', workflows:'w', notifications:'n', activity:'l' };
    const item = { ...b, id: id(prefixes[collection]), createdAt: new Date().toISOString() };
    db[collection].push(item); writeDb(db); return send(res, 201, item);
  }
  if (req.method === 'PUT' && itemId) {
    const index = db[collection].findIndex(x => x.id === itemId); if (index < 0) return send(res, 404, { error: 'Not found' });
    db[collection][index] = { ...db[collection][index], ...(await body(req)), id: itemId }; writeDb(db); return send(res, 200, db[collection][index]);
  }
  if (req.method === 'DELETE' && itemId) {
    const before = db[collection].length; db[collection] = db[collection].filter(x => x.id !== itemId);
    if (db[collection].length === before) return send(res, 404, { error: 'Not found' });
    writeDb(db); return send(res, 200, { success: true, id: itemId });
  }
  return send(res, 405, { error: 'Method not allowed' });
}

function serveFile(req, res, pathname) {
  let filePath = path.join(ROOT, pathname === '/' ? 'index.html' : pathname);
  if (!filePath.startsWith(ROOT) || filePath.includes('..')) return send(res, 403, 'Forbidden', 'text/plain');
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) return send(res, 404, 'Not found', 'text/plain');
  const ext = path.extname(filePath); const types = { '.html':'text/html', '.css':'text/css', '.js':'application/javascript', '.json':'application/json' };
  send(res, 200, fs.readFileSync(filePath), types[ext] || 'application/octet-stream');
}

seed();
http.createServer(async (req, res) => {
  try {
    const pathname = new URL(req.url, `http://${req.headers.host || 'localhost'}`).pathname;
    if (req.method === 'OPTIONS') return send(res, 204, '');
    if (pathname.startsWith('/api/')) return await api(req, res, pathname);
    return serveFile(req, res, pathname);
  } catch (e) { console.error(e); send(res, 500, { error: 'Server error', details: e.message }); }
}).listen(PORT, () => console.log(`ServiceNow full-stack app running at http://localhost:${PORT}`));
