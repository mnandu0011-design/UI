const API_BASE = (window.location.port === '3000' || window.location.hostname === '127.0.0.1' && window.location.port === '') ? '/api' : 'http://localhost:3000/api';
async function apiRequest(endpoint, options = {}) {
  const response = await fetch(API_BASE + endpoint, { headers: { 'Content-Type': 'application/json', ...(options.headers || {}) }, ...options });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || data.error || 'Request failed');
  return data;
}
async function loadDashboardData() { return apiRequest('/dashboard'); }
async function loadAgents() { return apiRequest('/agents'); }
async function loadNotifications() { return apiRequest('/notifications'); }
