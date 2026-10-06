const chatBox=document.getElementById('chatBox');const userInput=document.getElementById('userInput');
function sendMessage(){const message=userInput.value.trim();if(!message)return;addUserMessage(message);userInput.value='';setTimeout(()=>generateAIResponse(message),450)}
function addUserMessage(message){const div=document.createElement('div');div.className='message user';div.innerHTML=`<div class="bubble">${escapeHtml(message)}</div><div class="avatar">You</div>`;chatBox.appendChild(div);scrollChat()}
function generateAIResponse(message){const text=message.toLowerCase();let response;if(text.includes('revenue')||text.includes('sales'))response='<strong>Revenue insight</strong><br><br>The current ServiceNow dashboard shows monthly revenue growth in the <strong>25–30%</strong> range. I can also open the Insights page for the report.';else if(text.includes('unusual')||text.includes('activity'))response='<strong>Unusual activity</strong><br><br><strong>3 signals</strong> are currently flagged for review. The workflow can classify and analyze each signal before generating a customer-facing summary.';else if(text.includes('report'))response='<strong>Report ready</strong><br><br>You can open the <a href="company-profile.html#revenue-report">company report page</a> for the revenue and activity sections.';else if(text.includes('workflow'))response='<strong>Workflow</strong><br><br>User Request → AI Agent → Analyze → Generate Result. Open the Workflow page and click each stage to see its details.';else response='<strong>ServiceNow AI</strong><br><br>I can help with revenue, unusual activity, reports and workflow analysis. Try asking: “Show monthly revenue” or “Find unusual activity.”';addAIMessage(response)}
function addAIMessage(message){const div=document.createElement('div');div.className='message ai';div.innerHTML=`<div class="avatar">M</div><div class="bubble">${message}</div>`;chatBox.appendChild(div);scrollChat()}
function askQuestion(question){userInput.value=question;sendMessage()}function handleKey(event){if(event.key==='Enter')sendMessage()}function scrollChat(){chatBox.scrollTop=chatBox.scrollHeight}function escapeHtml(value){const d=document.createElement('div');d.textContent=value;return d.innerHTML}


const revenueSets={
  '3months':{amount:'₹21.2L',trend:'↗ 30%',label:'Last 3 months',months:[['Jul',48],['Aug',64],['Sep',82],['Oct',76],['Nov',94],['Dec',100]]},
  'thismonth':{amount:'₹24.8L',trend:'↗ 25–30%',label:'This month',months:[['Week 1',38],['Week 2',54],['Week 3',72],['Week 4',100]]},
  'year':{amount:'₹86.4L',trend:'↗ 50%',label:'Last year',months:[['Q1',42],['Q2',58],['Q3',73],['Q4',100]]}
};
function updateRevenueChart(){
  const select=document.getElementById('revenueRange');
  const chart=document.getElementById('revenueChart');
  if(!select||!chart)return;
  const data=revenueSets[select.value] || revenueSets.thismonth;
  const amount=document.getElementById('revenueAmount');
  const trend=document.getElementById('revenueTrend');
  const label=document.getElementById('revenueLabel');
  if(amount) amount.textContent=data.amount;
  if(trend) trend.textContent=data.trend;
  if(label) label.textContent=data.label;
  chart.innerHTML=data.months.map((item,i)=>`<div class="bar-col ${i===data.months.length-1?'current':''}" style="--bar-height:${item[1]}%"><span class="bar-value">${item[1]}%</span><div class="bar"><i></i></div><small>${item[0]}</small></div>`).join('');
}
document.addEventListener('DOMContentLoaded',updateRevenueChart);
