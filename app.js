/* ──────────────────────────────────────────
   DELIA-OS  |  App Logic
────────────────────────────────────────── */

// ── Boot Sequence ─────────────────────────
(function () {
  const overlay  = document.getElementById('boot-overlay');
  const statusEl = document.getElementById('boot-status-lines');
  const greetEl  = document.getElementById('boot-greeting-lines');
  const enterEl  = document.getElementById('boot-enter');
  const skipBtn  = document.getElementById('boot-skip');

  // Boot status lines
  const STATUS = [
    { text: '▸ INITIALIZING DELIA-OS...',      delay: 300  },
    { text: '▸ LOADING BUSINESS MODULES...',   delay: 750  },
    { text: '▸ SYNCING AI SYSTEMS...',          delay: 1150 },
    { text: '▸ CALIBRATING CONSCIOUSNESS...',  delay: 1550 },
    { text: '▸ ALL SYSTEMS OPERATIONAL ✓',     delay: 1950, cls: 'ok' },
  ];

  // Greeting lines: { text, delay (ms after speech start), cls }
  // Speech starts at ~2300ms from page load.
  // Timings tuned to match ~0.82 rate TTS delivery (~130 wpm).
  const LINES = [
    { text: 'Good morning Delia.',                              delay: 100,   cls: 'hi big' },
    { text: "She's awake...",                                   delay: 1800,  cls: '' },
    { text: 'God help them.',                                   delay: 3000,  cls: 'warn' },
    { text: 'AI systems online.',                               delay: 4800,  cls: '' },
    { text: 'Businesses tracking.',                             delay: 6000,  cls: '' },
    { text: 'Content loaded.',                                  delay: 7000,  cls: '' },
    { text: 'Consciousness calibrated.',                        delay: 8000,  cls: '' },
    { text: 'Subtraction mode activated —',                     delay: 9200,  cls: 'warn' },
    { text: "removing everything that isn't extraordinary.",    delay: 10700, cls: 'warn' },
    { text: 'Your empire is ready.',                            delay: 13000, cls: 'gold' },
    { text: 'Your mind is sharp.',                              delay: 14600, cls: 'gold' },
    { text: 'Your vision is clear.',                            delay: 16200, cls: 'gold' },
    { text: 'So tell me...',                                    delay: 18000, cls: '' },
    { text: 'what are we building today?',                      delay: 19400, cls: 'hi big' },
  ];

  let dismissed = false;

  function dismiss() {
    if (dismissed) return;
    dismissed = true;
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    overlay.classList.add('dismissed');
    setTimeout(() => { overlay.style.display = 'none'; }, 1000);
  }

  // Schedule status lines
  STATUS.forEach(({ text, delay, cls }) => {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'boot-status-line' + (cls ? ' ' + cls : '');
      el.textContent = text;
      statusEl.appendChild(el);
    }, delay);
  });

  // Speech synthesis
  const SPEECH_TEXT = "Good morning Delia. She's awake... God help them. A.I. systems online. Businesses tracking. Content loaded. Consciousness calibrated. Subtraction mode activated — removing everything that isn't extraordinary. Your empire is ready. Your mind is sharp. Your vision is clear. So tell me... what are we building today?";
  const SPEECH_DELAY = 2300; // ms after page load

  function speak() {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(SPEECH_TEXT);
    utter.rate   = 0.82;
    utter.pitch  = 0.82;
    utter.volume = 1;

    function pickVoice() {
      const voices = window.speechSynthesis.getVoices();
      const priority = [
        'Google UK English Female',
        'Samantha',
        'Karen',
        'Victoria',
        'Fiona',
        'Microsoft Hazel',
        'Microsoft Zira',
        'Microsoft Susan',
      ];
      let voice = null;
      for (const name of priority) {
        voice = voices.find(v => v.name.toLowerCase().includes(name.toLowerCase()));
        if (voice) break;
      }
      if (!voice) voice = voices.find(v => v.lang.startsWith('en') && /female/i.test(v.name));
      if (!voice) voice = voices.find(v => v.lang.startsWith('en'));
      if (voice) utter.voice = voice;
    }

    if (window.speechSynthesis.getVoices().length) {
      pickVoice();
    } else {
      window.speechSynthesis.addEventListener('voiceschanged', pickVoice, { once: true });
    }

    utter.onend = () => {
      enterEl.classList.add('visible');
      setTimeout(dismiss, 3500);
    };

    window.speechSynthesis.speak(utter);
  }

  // Schedule greeting lines (relative to speech start)
  LINES.forEach(({ text, delay, cls }) => {
    setTimeout(() => {
      if (dismissed) return;
      const el = document.createElement('div');
      el.className = 'boot-line' + (cls ? ' ' + cls : '');
      el.textContent = text;
      greetEl.appendChild(el);
    }, SPEECH_DELAY + delay);
  });

  // Show enter hint when last line appears
  setTimeout(() => {
    if (!dismissed) enterEl.classList.add('visible');
  }, SPEECH_DELAY + 21000);

  // Safety auto-dismiss
  setTimeout(dismiss, SPEECH_DELAY + 28000);

  // Start speech
  setTimeout(speak, SPEECH_DELAY);

  // Skip + click-to-dismiss
  skipBtn.addEventListener('click', dismiss);
  overlay.addEventListener('click', e => {
    if (e.target !== skipBtn && greetEl.children.length >= LINES.length) dismiss();
  });
})();

// ── Helpers ──────────────────────────────
const $ = id => document.getElementById(id);
const DAYS = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const SHORT_MONTHS = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

function save(key, val) { localStorage.setItem('deliaos_' + key, JSON.stringify(val)); }
function load(key, fallback) {
  try { const v = localStorage.getItem('deliaos_' + key); return v ? JSON.parse(v) : fallback; }
  catch { return fallback; }
}

// ── Clock ─────────────────────────────────
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  $('clock-time').textContent = `${h}:${m}:${s}`;

  const dayName = DAYS[now.getDay()];
  const dateStr = `${dayName}  ${MONTHS[now.getMonth()].toUpperCase()} ${now.getDate()}, ${now.getFullYear()}`;
  $('clock-date').textContent = dateStr;

  $('topbar-time').textContent = `${h}:${m}`;
  $('topbar-date').textContent = `${SHORT_MONTHS[now.getMonth()]} ${now.getDate()}`;
}
setInterval(updateClock, 1000);
updateClock();

// ── Weather ───────────────────────────────
const WEATHER_ICONS = {
  0:'☀️', 1:'🌤', 2:'⛅', 3:'☁️',
  45:'🌫', 48:'🌫',
  51:'🌦', 53:'🌦', 55:'🌧',
  61:'🌧', 63:'🌧', 65:'🌧',
  71:'❄️', 73:'❄️', 75:'❄️',
  80:'🌦', 81:'🌦', 82:'⛈',
  95:'⛈', 96:'⛈', 99:'⛈',
};
const WEATHER_DESC = {
  0:'Clear sky', 1:'Mainly clear', 2:'Partly cloudy', 3:'Overcast',
  45:'Foggy', 48:'Icy fog',
  51:'Light drizzle', 53:'Drizzle', 55:'Heavy drizzle',
  61:'Light rain', 63:'Rain', 65:'Heavy rain',
  71:'Light snow', 73:'Snow', 75:'Heavy snow',
  80:'Showers', 81:'Heavy showers', 82:'Violent showers',
  95:'Thunderstorm', 96:'Thunderstorm+hail', 99:'Heavy thunderstorm',
};

async function loadWeather() {
  try {
    const pos = await new Promise((res, rej) =>
      navigator.geolocation.getCurrentPosition(res, rej, { timeout: 8000 })
    );
    const { latitude: lat, longitude: lon } = pos.coords;

    const [weatherRes, geoRes] = await Promise.all([
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=fahrenheit`),
      fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`)
    ]);

    const weather = await weatherRes.json();
    const geo = await geoRes.json();

    const code = weather.current_weather.weathercode;
    const temp = Math.round(weather.current_weather.temperature);
    $('weather-icon').textContent = WEATHER_ICONS[code] ?? '🌡';
    $('weather-temp').textContent = `${temp}°F`;
    $('weather-desc').textContent = WEATHER_DESC[code] ?? 'Unknown';

    const city = geo.address?.city || geo.address?.town || geo.address?.village || 'Unknown';
    const state = geo.address?.state || '';
    $('weather-location').textContent = state ? `${city}, ${state}` : city;

  } catch (e) {
    $('weather-icon').textContent = '📡';
    $('weather-desc').textContent = 'Location unavailable';
    $('weather-location').textContent = 'Enable location access';
    $('weather-temp').textContent = '--°';
  }
}
loadWeather();

// ── To-Do ─────────────────────────────────
let todos = load('todos', []);

function renderTodos() {
  const list = $('todo-list');
  list.innerHTML = '';
  todos.forEach((t, i) => {
    const li = document.createElement('li');
    if (t.done) li.classList.add('done');

    const cb = document.createElement('input');
    cb.type = 'checkbox'; cb.checked = t.done;
    cb.addEventListener('change', () => { todos[i].done = cb.checked; save('todos', todos); renderTodos(); });

    const span = document.createElement('span');
    span.className = 'task-text'; span.textContent = t.text;

    const del = document.createElement('button');
    del.className = 'task-delete'; del.textContent = '✕';
    del.addEventListener('click', () => { todos.splice(i, 1); save('todos', todos); renderTodos(); });

    li.append(cb, span, del);
    list.appendChild(li);
  });
  const done = todos.filter(t => t.done).length;
  $('todo-count').textContent = `${todos.length - done} remaining · ${done} done`;
}

$('todo-add').addEventListener('click', addTodo);
$('todo-input').addEventListener('keydown', e => { if (e.key === 'Enter') addTodo(); });
function addTodo() {
  const text = $('todo-input').value.trim();
  if (!text) return;
  todos.push({ text, done: false });
  save('todos', todos);
  renderTodos();
  $('todo-input').value = '';
}

$('todo-clear').addEventListener('click', () => {
  todos = todos.filter(t => !t.done);
  save('todos', todos);
  renderTodos();
});
renderTodos();

// ── Calendar ──────────────────────────────
let events = load('events', {});   // { 'YYYY-M-D': ['event text', ...] }
let calDate = new Date();
let selectedDate = new Date();

function dateKey(d) { return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`; }

function renderCalendar() {
  const year = calDate.getFullYear();
  const month = calDate.getMonth();
  $('cal-month-label').textContent = `${MONTHS[month].toUpperCase()} ${year}`;

  const grid = $('cal-grid');
  grid.innerHTML = '';

  DAYS.forEach(d => {
    const cell = document.createElement('div');
    cell.className = 'cal-cell header'; cell.textContent = d.slice(0,1);
    grid.appendChild(cell);
  });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  for (let i = 0; i < firstDay; i++) {
    const cell = document.createElement('div');
    cell.className = 'cal-cell empty';
    grid.appendChild(cell);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const cell = document.createElement('div');
    cell.className = 'cal-cell';
    cell.textContent = d;
    const thisDate = new Date(year, month, d);
    const key = dateKey(thisDate);

    if (d === today.getDate() && month === today.getMonth() && year === today.getFullYear())
      cell.classList.add('today');
    if (d === selectedDate.getDate() && month === selectedDate.getMonth() && year === selectedDate.getFullYear())
      cell.classList.add('selected');
    if (events[key]?.length)
      cell.classList.add('has-event');

    cell.addEventListener('click', () => {
      selectedDate = new Date(year, month, d);
      renderCalendar();
      renderEvents();
    });
    grid.appendChild(cell);
  }
  renderEvents();
}

function renderEvents() {
  const key = dateKey(selectedDate);
  const list = $('event-list');
  list.innerHTML = '';

  // Show label
  let label = document.querySelector('.event-date-label');
  if (!label) {
    label = document.createElement('div');
    label.className = 'event-date-label';
    $('event-list').before(label);
  }
  label.textContent = `${DAYS[selectedDate.getDay()]} ${MONTHS[selectedDate.getMonth()].toUpperCase()} ${selectedDate.getDate()}`;

  (events[key] || []).forEach((ev, i) => {
    const li = document.createElement('li');
    li.textContent = ev;
    const del = document.createElement('span');
    del.textContent = '✕'; del.style.cursor = 'pointer';
    del.addEventListener('click', () => {
      events[key].splice(i, 1);
      if (!events[key].length) delete events[key];
      save('events', events);
      renderCalendar();
    });
    li.appendChild(del);
    list.appendChild(li);
  });
}

$('event-add').addEventListener('click', addEvent);
$('event-input').addEventListener('keydown', e => { if (e.key === 'Enter') addEvent(); });
function addEvent() {
  const text = $('event-input').value.trim();
  if (!text) return;
  const key = dateKey(selectedDate);
  if (!events[key]) events[key] = [];
  events[key].push(text);
  save('events', events);
  $('event-input').value = '';
  renderCalendar();
}

$('cal-prev').addEventListener('click', () => { calDate.setMonth(calDate.getMonth() - 1); renderCalendar(); });
$('cal-next').addEventListener('click', () => { calDate.setMonth(calDate.getMonth() + 1); renderCalendar(); });
renderCalendar();

// ── Bookmarks ─────────────────────────────
let bookmarks = load('bookmarks', [
  { name: 'GitHub', url: 'https://github.com' },
  { name: 'YouTube', url: 'https://youtube.com' },
  { name: 'Gmail', url: 'https://mail.google.com' },
]);

function faviconUrl(url) {
  try { return `https://www.google.com/s2/favicons?sz=32&domain=${new URL(url).hostname}`; }
  catch { return ''; }
}

function renderBookmarks() {
  const grid = $('bookmark-grid');
  grid.innerHTML = '';
  bookmarks.forEach((bm, i) => {
    const a = document.createElement('a');
    a.className = 'bookmark-item';
    a.href = bm.url; a.target = '_blank'; a.rel = 'noopener';

    const favicon = document.createElement('img');
    favicon.className = 'bookmark-favicon';
    favicon.src = faviconUrl(bm.url);
    favicon.onerror = () => { favicon.style.display = 'none'; };

    const label = document.createElement('span');
    label.textContent = bm.name;

    const del = document.createElement('button');
    del.className = 'bookmark-delete'; del.textContent = '✕';
    del.addEventListener('click', e => {
      e.preventDefault(); e.stopPropagation();
      bookmarks.splice(i, 1);
      save('bookmarks', bookmarks);
      renderBookmarks();
    });

    a.append(favicon, label, del);
    grid.appendChild(a);
  });
}

$('bm-add').addEventListener('click', addBookmark);
$('bm-url').addEventListener('keydown', e => { if (e.key === 'Enter') addBookmark(); });
function addBookmark() {
  let url = $('bm-url').value.trim();
  const name = $('bm-name').value.trim();
  if (!url) return;
  if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
  bookmarks.push({ name: name || new URL(url).hostname, url });
  save('bookmarks', bookmarks);
  renderBookmarks();
  $('bm-name').value = ''; $('bm-url').value = '';
}
renderBookmarks();

// ── Business Metrics ──────────────────────
let revenues = load('revenues', []);
// entry shape: { id, amount, label, category, date }  (amount negative = refund)

const CAT_COLORS = {
  Sales: '#00f5d4',
  Subscription: '#7209b7',
  Consulting: '#4cc9f0',
  Refund: '#f72585',
  Other: '#8a8aaa',
};

function fmt(n) {
  const abs = Math.abs(n);
  const s = abs >= 1000 ? '€' + (abs / 1000).toFixed(1) + 'k' : '€' + abs.toFixed(2);
  return (n < 0 ? '-' : '') + s;
}

function monthKey(dateStr) {
  // returns 'YYYY-MM'
  return dateStr ? dateStr.slice(0, 7) : '';
}

function revenueStats() {
  const now = new Date();
  const thisMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  const lastMonthDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const lastMonth = `${lastMonthDate.getFullYear()}-${String(lastMonthDate.getMonth() + 1).padStart(2, '0')}`;
  const thisYear = String(now.getFullYear());

  let monthTotal = 0, lastMonthTotal = 0, allTime = 0, yearTotal = 0;
  const catTotals = {};
  let monthCount = 0, yearCount = 0;

  revenues.forEach(r => {
    const amt = parseFloat(r.amount) || 0;
    const mk = monthKey(r.date);
    allTime += amt;
    if (mk === thisMonth) { monthTotal += amt; monthCount++; }
    if (mk === lastMonth) lastMonthTotal += amt;
    if (r.date && r.date.startsWith(thisYear)) { yearTotal += amt; yearCount++; }
    catTotals[r.category] = (catTotals[r.category] || 0) + amt;
  });

  const topCat = Object.entries(catTotals).sort((a, b) => b[1] - a[1])[0];

  // Avg per month: across all months that have data
  const months = new Set(revenues.map(r => monthKey(r.date)).filter(Boolean));
  const avg = months.size ? allTime / months.size : 0;

  return { monthTotal, lastMonthTotal, allTime, yearTotal, avg, topCat, monthCount, yearCount, months: months.size };
}

function last6Months() {
  const now = new Date();
  const result = [];
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    const label = SHORT_MONTHS[d.getMonth()];
    const total = revenues
      .filter(r => monthKey(r.date) === key)
      .reduce((s, r) => s + (parseFloat(r.amount) || 0), 0);
    result.push({ key, label, total });
  }
  return result;
}

function renderMetricsKPIs() {
  const s = revenueStats();

  $('kpi-month').textContent = fmt(s.monthTotal);
  $('kpi-total').textContent = fmt(s.allTime);
  $('kpi-avg').textContent = fmt(s.avg);
  $('kpi-year').textContent = fmt(s.yearTotal);

  $('kpi-txcount').textContent = `${revenues.length} total entries`;
  $('kpi-year-txcount').textContent = `${s.yearCount} this year`;
  $('kpi-top-cat').textContent = s.topCat ? `Top: ${s.topCat[0]}` : 'No data yet';

  const deltaEl = $('kpi-delta');
  if (s.lastMonthTotal === 0 && s.monthTotal === 0) {
    deltaEl.textContent = 'vs last month'; deltaEl.className = 'kpi-delta';
  } else if (s.lastMonthTotal === 0) {
    deltaEl.textContent = '▲ new this month'; deltaEl.className = 'kpi-delta up';
  } else {
    const pct = ((s.monthTotal - s.lastMonthTotal) / Math.abs(s.lastMonthTotal) * 100).toFixed(1);
    const up = s.monthTotal >= s.lastMonthTotal;
    deltaEl.textContent = `${up ? '▲' : '▼'} ${Math.abs(pct)}% vs last month`;
    deltaEl.className = 'kpi-delta ' + (up ? 'up' : 'down');
  }
}

function renderChart() {
  const svg = $('rev-chart');
  const labels = $('chart-labels');
  const data = last6Months();
  const max = Math.max(...data.map(d => Math.abs(d.total)), 1);
  const W = svg.clientWidth || 600;
  const H = 110;
  const barW = Math.floor((W - 40) / 6) - 6;
  const gap = Math.floor((W - 40) / 6);

  svg.innerHTML = '';
  labels.innerHTML = '';

  // Grid lines
  [0.25, 0.5, 0.75, 1].forEach(frac => {
    const y = H - frac * H + 4;
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', 0); line.setAttribute('x2', W);
    line.setAttribute('y1', y); line.setAttribute('y2', y);
    line.setAttribute('stroke', '#1e1e3a'); line.setAttribute('stroke-width', '1');
    svg.appendChild(line);
  });

  data.forEach((d, i) => {
    const barH = Math.max(2, (Math.abs(d.total) / max) * (H - 8));
    const x = 20 + i * gap;
    const y = H - barH;
    const isRefund = d.total < 0;

    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', x); rect.setAttribute('y', y);
    rect.setAttribute('width', barW); rect.setAttribute('height', barH);
    rect.setAttribute('fill', isRefund ? '#f72585' : '#00f5d4');
    rect.setAttribute('opacity', '0.8');
    rect.setAttribute('rx', '2');
    rect.classList.add('chart-bar');

    // Tooltip via title
    const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    title.textContent = `${d.label}: ${fmt(d.total)}`;
    rect.appendChild(title);
    svg.appendChild(rect);

    // Value label on top
    if (d.total !== 0) {
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', x + barW / 2); text.setAttribute('y', y - 3);
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('font-size', '9'); text.setAttribute('fill', '#5a5a8a');
      text.setAttribute('font-family', 'Courier New, monospace');
      text.textContent = fmt(d.total);
      svg.appendChild(text);
    }

    const lbl = document.createElement('span');
    lbl.textContent = d.label;
    labels.appendChild(lbl);
  });
}

function renderRevList() {
  const list = $('rev-list');
  const filter = $('rev-filter').value;
  list.innerHTML = '';

  const filtered = [...revenues]
    .filter(r => filter === 'all' || r.category === filter)
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
    .slice(0, 30);

  if (!filtered.length) {
    const li = document.createElement('li');
    li.style.color = 'var(--text-dim)'; li.style.fontSize = '0.75rem';
    li.textContent = 'No transactions yet.';
    list.appendChild(li); return;
  }

  filtered.forEach(r => {
    const amt = parseFloat(r.amount) || 0;
    const li = document.createElement('li');

    const amtEl = document.createElement('span');
    amtEl.className = 'rev-amount-col ' + (amt < 0 ? 'negative' : 'positive');
    amtEl.textContent = fmt(amt);

    const descEl = document.createElement('span');
    descEl.className = 'rev-desc-col';
    descEl.textContent = r.label || '—';

    const catEl = document.createElement('span');
    catEl.className = 'rev-cat-badge';
    catEl.textContent = r.category;
    catEl.style.borderColor = CAT_COLORS[r.category] || '#5a5a8a';
    catEl.style.color = CAT_COLORS[r.category] || '#5a5a8a';

    const dateEl = document.createElement('span');
    dateEl.className = 'rev-date-col';
    dateEl.textContent = r.date || '';

    const del = document.createElement('button');
    del.className = 'rev-del'; del.textContent = '✕';
    del.addEventListener('click', () => {
      revenues = revenues.filter(x => x.id !== r.id);
      save('revenues', revenues);
      renderMetrics();
    });

    li.append(amtEl, descEl, catEl, dateEl, del);
    list.appendChild(li);
  });
}

function renderMetrics() {
  renderMetricsKPIs();
  renderChart();
  renderRevList();
}

// Set today's date as default
$('rev-date').value = new Date().toISOString().slice(0, 10);

$('rev-add').addEventListener('click', addRevenue);
$('rev-amount').addEventListener('keydown', e => { if (e.key === 'Enter') addRevenue(); });
$('rev-filter').addEventListener('change', renderRevList);

function addRevenue() {
  const rawAmt = $('rev-amount').value.trim();
  const label = $('rev-label').value.trim();
  const category = $('rev-category').value;
  const date = $('rev-date').value;
  if (!rawAmt) return;

  const amount = parseFloat(rawAmt);
  const entry = {
    id: Date.now() + Math.random().toString(36).slice(2),
    amount: category === 'Refund' ? -Math.abs(amount) : amount,
    label, category, date
  };
  revenues.push(entry);
  save('revenues', revenues);
  renderMetrics();
  $('rev-amount').value = '';
  $('rev-label').value = '';
  $('rev-date').value = new Date().toISOString().slice(0, 10);
}

// Re-render chart on resize
window.addEventListener('resize', renderChart);
renderMetrics();

// ── Business Pipeline ─────────────────────

// Tab switching
document.querySelectorAll('.pipe-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.pipe-tab').forEach(t => t.classList.remove('pipe-tab-active'));
    document.querySelectorAll('.pipe-panel').forEach(p => p.classList.add('pipe-hidden'));
    tab.classList.add('pipe-tab-active');
    $('tab-' + tab.dataset.tab).classList.remove('pipe-hidden');
    if (tab.dataset.tab === 'str') renderSTRChart();
  });
});

// Shared KPI renderer
function renderKPIRow(containerId, kpis) {
  const el = $(containerId);
  el.innerHTML = '';
  kpis.forEach(k => {
    const d = document.createElement('div');
    d.className = 'pipe-kpi';
    d.innerHTML = `<div class="pipe-kpi-label">${k.label}</div><div class="pipe-kpi-val">${k.val}</div><div class="pipe-kpi-sub">${k.sub || ''}</div>`;
    el.appendChild(d);
  });
}

// ── SAVA NEXUS ────────────────────────────
const STAGE_META = {
  Prospect:    { color: '#5a5a8a', bg: 'rgba(90,90,138,0.15)' },
  Qualified:   { color: '#7209b7', bg: 'rgba(114,9,183,0.15)' },
  Proposal:    { color: '#4895ef', bg: 'rgba(72,149,239,0.15)' },
  Negotiating: { color: '#f7b731', bg: 'rgba(247,183,49,0.15)' },
  Won:         { color: '#00f5d4', bg: 'rgba(0,245,212,0.15)' },
  Lost:        { color: '#f72585', bg: 'rgba(247,37,133,0.15)' },
};
const SAVA_STAGES = ['Prospect', 'Qualified', 'Proposal', 'Negotiating', 'Won', 'Lost'];

let savaDeals = load('savaDeals', []);

function renderSavaKPIs() {
  const won   = savaDeals.filter(d => d.stage === 'Won');
  const open  = savaDeals.filter(d => !['Won','Lost'].includes(d.stage));
  const pipe  = open.reduce((s, d) => s + (parseFloat(d.value) || 0), 0);
  const closed= won.reduce((s, d)  => s + (parseFloat(d.value) || 0), 0);
  const avg   = savaDeals.length ? savaDeals.reduce((s, d) => s + (parseFloat(d.value)||0), 0) / savaDeals.length : 0;
  const winPct= savaDeals.length ? Math.round(won.length / savaDeals.length * 100) + '%' : '--';
  renderKPIRow('sava-kpis', [
    { label: 'PIPELINE VALUE', val: fmt(pipe),   sub: `${open.length} open deals` },
    { label: 'CLOSED WON',     val: fmt(closed), sub: `${won.length} deals` },
    { label: 'WIN RATE',       val: winPct,       sub: `${savaDeals.length} total` },
    { label: 'AVG DEAL SIZE',  val: fmt(avg),    sub: 'all stages' },
  ]);
}

function renderSavaFunnel() {
  const el = $('sava-funnel');
  el.innerHTML = '';
  SAVA_STAGES.forEach(stage => {
    const deals = savaDeals.filter(d => d.stage === stage);
    const val   = deals.reduce((s, d) => s + (parseFloat(d.value)||0), 0);
    const m     = STAGE_META[stage];
    const div   = document.createElement('div');
    div.className = 'funnel-stage';
    div.style.borderColor = m.color;
    div.innerHTML = `
      <div class="funnel-stage-name">${stage.toUpperCase()}</div>
      <div class="funnel-stage-count" style="color:${m.color}">${deals.length}</div>
      <div class="funnel-stage-val">${fmt(val)}</div>
      <div class="funnel-stage-bar" style="background:${m.color}"></div>`;
    el.appendChild(div);
  });
}

function renderSavaList() {
  const list   = $('sava-list');
  const filter = $('sava-filter').value;
  list.innerHTML = '';
  const rows = [...savaDeals]
    .filter(d => filter === 'all' || d.stage === filter)
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  if (!rows.length) {
    list.innerHTML = '<li style="font-size:0.72rem;color:var(--text-dim);padding:8px 0">No deals yet.</li>';
    return;
  }
  rows.forEach(d => {
    const m  = STAGE_META[d.stage] || STAGE_META.Prospect;
    const li = document.createElement('li');
    li.className = 'sava-deal-item';
    li.innerHTML = `
      <span class="deal-client" title="${d.contact || ''}">${d.client || '—'}</span>
      <span class="deal-value">${fmt(parseFloat(d.value)||0)}</span>
      <span class="deal-stage-badge" style="color:${m.color};border-color:${m.color};background:${m.bg}">${d.stage}</span>
      <span class="deal-date">${d.date || ''}</span>`;
    const del = document.createElement('button');
    del.className = 'pipe-del-btn'; del.textContent = '✕';
    del.addEventListener('click', () => { savaDeals = savaDeals.filter(x => x.id !== d.id); save('savaDeals', savaDeals); renderSava(); });
    li.appendChild(del);
    list.appendChild(li);
  });
}

function renderSava() { renderSavaKPIs(); renderSavaFunnel(); renderSavaList(); }

$('sava-add').addEventListener('click', () => {
  const client = $('sava-client').value.trim();
  if (!client) return;
  savaDeals.push({
    id: Date.now().toString(36), client,
    value:   parseFloat($('sava-value').value)   || 0,
    contact: $('sava-contact').value.trim(),
    stage:   $('sava-stage').value,
    date:    $('sava-date').value,
    notes:   $('sava-notes').value.trim(),
  });
  save('savaDeals', savaDeals); renderSava();
  ['sava-client','sava-value','sava-contact','sava-notes'].forEach(id => $(id).value = '');
});
$('sava-filter').addEventListener('change', renderSavaList);
$('sava-date').value = new Date().toISOString().slice(0, 10);
renderSava();

// ── PEPTIDE GARAGE ────────────────────────
const PEP_STATUS_META = {
  Pending:    { color: '#f7b731' },
  Processing: { color: '#4895ef' },
  Shipped:    { color: '#7209b7' },
  Delivered:  { color: '#00f5d4' },
};
const PEP_NEXT_STATUS = { Pending: 'Processing', Processing: 'Shipped', Shipped: 'Delivered', Delivered: 'Delivered' };

let pepProducts = load('pepProducts', []);
let pepOrders   = load('pepOrders',   []);

function pepProductSelect() {
  const sel = $('pep-order-product');
  sel.innerHTML = pepProducts.length
    ? pepProducts.map(p => `<option value="${p.id}">${p.name}</option>`).join('')
    : '<option value="">— add products first —</option>';
}

function renderPepKPIs() {
  const invVal  = pepProducts.reduce((s, p) => s + p.stock * (parseFloat(p.price)||0), 0);
  const revenue = pepOrders.filter(o => o.status === 'Delivered').reduce((s, o) => {
    const p = pepProducts.find(x => x.id === o.productId);
    return s + (p ? o.qty * (parseFloat(p.price)||0) : 0);
  }, 0);
  const active  = pepOrders.filter(o => ['Pending','Processing','Shipped'].includes(o.status)).length;
  const low     = pepProducts.filter(p => p.stock > 0 && p.stock <= 5).length;
  const out     = pepProducts.filter(p => p.stock === 0).length;
  renderKPIRow('peptide-kpis', [
    { label: 'INVENTORY VALUE',   val: fmt(invVal),  sub: `${pepProducts.length} products` },
    { label: 'REVENUE DELIVERED', val: fmt(revenue), sub: `${pepOrders.filter(o=>o.status==='Delivered').length} orders` },
    { label: 'ACTIVE ORDERS',     val: active,       sub: 'Pending → Shipped' },
    { label: 'STOCK ALERTS',      val: low + out,    sub: `${out} out · ${low} low` },
  ]);
}

function renderPepProducts() {
  const list = $('pep-product-list');
  list.innerHTML = '';
  if (!pepProducts.length) {
    list.innerHTML = '<li style="font-size:0.72rem;color:var(--text-dim);padding:8px 0">No products yet.</li>';
    return;
  }
  pepProducts.forEach(p => {
    const li = document.createElement('li');
    li.className = 'pep-product-item';
    let stockCls = p.stock === 0 ? 'pep-stock-empty' : p.stock <= 5 ? 'pep-stock-low' : 'pep-stock-good';
    let stockLbl = p.stock === 0 ? 'OUT' : p.stock <= 5 ? `LOW:${p.stock}` : `${p.stock}u`;
    li.innerHTML = `
      <span class="pep-product-name" title="${p.name}">${p.name}</span>
      <span class="pep-product-type">${p.type || ''}</span>
      <span class="pep-stock-badge ${stockCls}">${stockLbl}</span>
      <span class="pep-price-col">${fmt(parseFloat(p.price)||0)}</span>`;
    const del = document.createElement('button');
    del.className = 'pipe-del-btn'; del.textContent = '✕';
    del.addEventListener('click', () => { pepProducts = pepProducts.filter(x => x.id !== p.id); save('pepProducts', pepProducts); pepProductSelect(); renderPeptide(); });
    li.appendChild(del);
    list.appendChild(li);
  });
}

function renderPepOrders() {
  const list = $('pep-order-list');
  list.innerHTML = '';
  if (!pepOrders.length) {
    list.innerHTML = '<li style="font-size:0.72rem;color:var(--text-dim);padding:8px 0">No orders yet.</li>';
    return;
  }
  [...pepOrders].sort((a, b) => (b.date||'').localeCompare(a.date||'')).forEach(o => {
    const prod = pepProducts.find(p => p.id === o.productId);
    const sm   = PEP_STATUS_META[o.status] || PEP_STATUS_META.Pending;
    const li   = document.createElement('li');
    li.className = 'pep-order-item';
    li.innerHTML = `
      <span class="pep-order-customer" title="${o.customer}">${o.customer || '—'}</span>
      <span class="pep-order-prod">${prod ? prod.name : '?'}</span>
      <span class="pep-order-qty">×${o.qty}</span>
      <span class="pep-order-status" style="color:${sm.color};border-color:${sm.color}">${o.status}</span>
      <span style="font-size:0.65rem;color:var(--text-dim)">${o.date || ''}</span>`;
    const adv = document.createElement('button');
    adv.className = 'pipe-del-btn pep-advance-btn'; adv.textContent = '▶'; adv.title = 'Advance status';
    adv.style.opacity = o.status === 'Delivered' ? '0.2' : '0.7';
    adv.addEventListener('click', () => { o.status = PEP_NEXT_STATUS[o.status]; save('pepOrders', pepOrders); renderPeptide(); });
    const del = document.createElement('button');
    del.className = 'pipe-del-btn'; del.textContent = '✕';
    del.addEventListener('click', () => { pepOrders = pepOrders.filter(x => x.id !== o.id); save('pepOrders', pepOrders); renderPeptide(); });
    li.append(adv, del);
    list.appendChild(li);
  });
}

function renderPeptide() { renderPepKPIs(); renderPepProducts(); renderPepOrders(); }

$('pep-add-product').addEventListener('click', () => {
  const name = $('pep-name').value.trim();
  if (!name) return;
  pepProducts.push({
    id: Date.now().toString(36), name,
    type:  $('pep-type').value.trim(),
    stock: parseInt($('pep-stock').value)   || 0,
    price: parseFloat($('pep-price').value) || 0,
    cost:  parseFloat($('pep-cost').value)  || 0,
  });
  save('pepProducts', pepProducts); pepProductSelect(); renderPeptide();
  ['pep-name','pep-type','pep-stock','pep-price','pep-cost'].forEach(id => $(id).value = '');
});

$('pep-add-order').addEventListener('click', () => {
  const productId = $('pep-order-product').value;
  const customer  = $('pep-customer').value.trim();
  const qty       = parseInt($('pep-qty').value) || 1;
  if (!productId || !customer) return;
  pepOrders.push({
    id: Date.now().toString(36), productId, customer, qty,
    date:   $('pep-order-date').value,
    status: $('pep-order-status').value,
  });
  const prod = pepProducts.find(p => p.id === productId);
  if (prod) prod.stock = Math.max(0, prod.stock - qty);
  save('pepOrders', pepOrders); save('pepProducts', pepProducts);
  renderPeptide();
  ['pep-customer','pep-qty'].forEach(id => $(id).value = '');
});

$('pep-order-date').value = new Date().toISOString().slice(0, 10);
pepProductSelect();
renderPeptide();

// ── AIRBNB / STR ──────────────────────────
const STR_PLAT_META = {
  'Airbnb':      { color: '#FF5A5F', cls: 'str-platform-airbnb'   },
  'Booking.com': { color: '#4fc3f7', cls: 'str-platform-booking'  },
  'Both':        { color: '#00f5d4', cls: 'str-platform-both'     },
  'Direct':      { color: '#ab47bc', cls: 'str-platform-direct'   },
};
const STR_STATUS_CLS = {
  Confirmed: 'str-status-confirmed',
  Active:    'str-status-active',
  Completed: 'str-status-completed',
  Cancelled: 'str-status-cancelled',
};

let strProperties = load('strProperties', []);
let strBookings   = load('strBookings',   []);

function strNights(ci, co) {
  if (!ci || !co) return 0;
  return Math.max(0, (new Date(co) - new Date(ci)) / 86400000);
}

function strPropSelect() {
  const sel = $('str-booking-prop');
  sel.innerHTML = strProperties.length
    ? strProperties.map(p => `<option value="${p.id}">${p.name}</option>`).join('')
    : '<option value="">— add a property first —</option>';
}

function renderSTRKPIs() {
  const valid     = strBookings.filter(b => b.status !== 'Cancelled');
  const totalRev  = valid.reduce((s, b) => s + (parseFloat(b.amount)||0), 0);
  const upcoming  = strBookings.filter(b => ['Confirmed','Active'].includes(b.status)).length;
  const now       = new Date(), ago30 = new Date(+now - 30*86400000);
  let bookedNights = 0;
  valid.forEach(b => {
    const ci = new Date(b.checkIn), co = new Date(b.checkOut);
    const s  = ci < ago30 ? ago30 : ci;
    const e  = co > now   ? now   : co;
    const n  = (e - s) / 86400000;
    if (n > 0) bookedNights += n;
  });
  const avail = strProperties.length * 30;
  const occ   = avail > 0 ? Math.round(bookedNights / avail * 100) : 0;
  const avgNightly = valid.length
    ? valid.reduce((s, b) => { const n = strNights(b.checkIn, b.checkOut); return s + (n > 0 ? (parseFloat(b.amount)||0)/n : 0); }, 0) / valid.length
    : 0;
  renderKPIRow('str-kpis', [
    { label: 'TOTAL REVENUE',    val: fmt(totalRev),      sub: `${valid.length} bookings` },
    { label: 'UPCOMING / ACTIVE',val: upcoming,           sub: `${strProperties.length} properties` },
    { label: 'OCCUPANCY (30D)',   val: occ + '%',          sub: `${Math.round(bookedNights)} nights booked` },
    { label: 'AVG NIGHTLY RATE', val: fmt(avgNightly),    sub: 'across all bookings' },
  ]);
}

function renderSTRProperties() {
  const c = $('str-property-cards');
  c.innerHTML = '';
  if (!strProperties.length) {
    c.innerHTML = '<p style="font-size:0.72rem;color:var(--text-dim);padding:8px 0">No properties yet.</p>';
    return;
  }
  strProperties.forEach(p => {
    const pm     = STR_PLAT_META[p.platform] || STR_PLAT_META.Airbnb;
    const propRev= strBookings.filter(b => b.propertyId === p.id && b.status !== 'Cancelled').reduce((s,b) => s+(parseFloat(b.amount)||0), 0);
    const card   = document.createElement('div');
    card.className = 'str-prop-card';
    card.innerHTML = `
      <div class="str-prop-name">${p.name}</div>
      <div class="str-prop-location">${p.location || ''}</div>
      <div class="str-prop-meta">
        <span class="str-platform-badge ${pm.cls}">${p.platform}</span>
        <span class="str-nightly-rate">€${p.nightlyRate}/night</span>
        <span style="margin-left:auto;font-size:0.68rem;color:var(--accent)">${fmt(propRev)}</span>
      </div>`;
    const del = document.createElement('button');
    del.className = 'pipe-del-btn str-prop-del'; del.textContent = '✕';
    del.addEventListener('click', () => { strProperties = strProperties.filter(x => x.id !== p.id); save('strProperties', strProperties); strPropSelect(); renderSTR(); });
    card.appendChild(del);
    c.appendChild(card);
  });
}

function renderSTRBookings() {
  const list = $('str-booking-list');
  list.innerHTML = '';
  if (!strBookings.length) {
    list.innerHTML = '<li style="font-size:0.72rem;color:var(--text-dim);padding:8px 0">No bookings yet.</li>';
    return;
  }
  [...strBookings].sort((a, b) => (b.checkIn||'').localeCompare(a.checkIn||'')).forEach(b => {
    const prop  = strProperties.find(p => p.id === b.propertyId);
    const pm    = STR_PLAT_META[b.platform] || STR_PLAT_META.Airbnb;
    const nights= strNights(b.checkIn, b.checkOut);
    const li    = document.createElement('li');
    li.className = 'str-booking-item';
    const statCls = STR_STATUS_CLS[b.status] || '';
    li.innerHTML = `
      <div class="str-booking-row1">
        <span class="str-booking-guest">${b.guest || '—'}</span>
        <span class="str-booking-amount">${fmt(parseFloat(b.amount)||0)}</span>
        <span class="str-booking-status ${statCls}">${b.status}</span>
      </div>
      <div class="str-booking-row2">
        <span style="color:${pm.color}">${b.platform}</span>
        <span>${prop ? prop.name : '?'}</span>
        <span>${b.checkIn || '?'} → ${b.checkOut || '?'}</span>
        <span>${nights} night${nights !== 1 ? 's' : ''}</span>
      </div>`;
    const del = document.createElement('button');
    del.className = 'pipe-del-btn'; del.textContent = '✕';
    del.style.cssText = 'float:right;margin-top:-40px';
    del.addEventListener('click', () => { strBookings = strBookings.filter(x => x.id !== b.id); save('strBookings', strBookings); renderSTR(); });
    li.appendChild(del);
    list.appendChild(li);
  });
}

function renderSTRChart() {
  const svg  = $('str-rev-chart');
  svg.innerHTML = '';
  if (!strProperties.length) return;

  const chartH = Math.max(80, strProperties.length * 34 + 20);
  svg.setAttribute('height', chartH);
  svg.style.height = chartH + 'px';

  const W      = svg.clientWidth || 300;
  const labelW = 110;
  const maxRev = Math.max(
    ...strProperties.map(p => strBookings.filter(b => b.propertyId === p.id && b.status !== 'Cancelled').reduce((s,b) => s+(parseFloat(b.amount)||0), 0)),
    1
  );

  strProperties.forEach((p, i) => {
    const y      = i * 34 + 10;
    const bH     = 20;
    const pm     = STR_PLAT_META[p.platform] || STR_PLAT_META.Airbnb;
    const rev    = strBookings.filter(b => b.propertyId === p.id && b.status !== 'Cancelled').reduce((s,b) => s+(parseFloat(b.amount)||0), 0);
    const barW   = Math.max(4, (rev / maxRev) * (W - labelW - 60));

    const lbl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    lbl.setAttribute('x', 0); lbl.setAttribute('y', y + bH/2 + 4);
    lbl.setAttribute('font-size', '9'); lbl.setAttribute('fill', '#e0e0ff');
    lbl.setAttribute('font-family', 'Courier New, monospace');
    lbl.textContent = p.name.length > 15 ? p.name.slice(0, 14) + '…' : p.name;
    svg.appendChild(lbl);

    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', labelW); rect.setAttribute('y', y);
    rect.setAttribute('width', barW); rect.setAttribute('height', bH);
    rect.setAttribute('fill', pm.color); rect.setAttribute('opacity', '0.75');
    rect.setAttribute('rx', '2');
    const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    title.textContent = `${p.name}: ${fmt(rev)}`;
    rect.appendChild(title);
    svg.appendChild(rect);

    const val = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    val.setAttribute('x', labelW + barW + 5); val.setAttribute('y', y + bH/2 + 4);
    val.setAttribute('font-size', '9'); val.setAttribute('fill', pm.color);
    val.setAttribute('font-family', 'Courier New, monospace');
    val.textContent = fmt(rev);
    svg.appendChild(val);
  });
}

function renderSTR() { renderSTRKPIs(); renderSTRProperties(); renderSTRBookings(); renderSTRChart(); }

$('str-add-property').addEventListener('click', () => {
  const name = $('str-prop-name').value.trim();
  if (!name) return;
  strProperties.push({
    id: Date.now().toString(36), name,
    location:    $('str-prop-location').value.trim(),
    platform:    $('str-prop-platform').value,
    nightlyRate: parseFloat($('str-nightly-rate').value) || 0,
  });
  save('strProperties', strProperties); strPropSelect(); renderSTR();
  ['str-prop-name','str-prop-location','str-nightly-rate'].forEach(id => $(id).value = '');
});

$('str-add-booking').addEventListener('click', () => {
  const propertyId = $('str-booking-prop').value;
  const guest      = $('str-guest').value.trim();
  if (!propertyId || !guest) return;
  const checkIn  = $('str-checkin').value;
  const checkOut = $('str-checkout').value;
  let amount     = parseFloat($('str-booking-amount').value) || 0;
  if (!amount && checkIn && checkOut) {
    const prop = strProperties.find(p => p.id === propertyId);
    if (prop) amount = strNights(checkIn, checkOut) * prop.nightlyRate;
  }
  strBookings.push({
    id: Date.now().toString(36), propertyId, guest, checkIn, checkOut,
    platform: $('str-booking-platform').value,
    amount, status: $('str-booking-status').value,
  });
  save('strBookings', strBookings); renderSTR();
  ['str-guest','str-checkin','str-checkout','str-booking-amount'].forEach(id => $(id).value = '');
  $('str-checkin').value = new Date().toISOString().slice(0, 10);
});

strPropSelect();
$('str-checkin').value = new Date().toISOString().slice(0, 10);
renderSTR();

// ── Wellness Tracker ──────────────────────
const MOODS = [
  { e: '😄', label: 'Great' },
  { e: '🙂', label: 'Good' },
  { e: '😐', label: 'Neutral' },
  { e: '😔', label: 'Low' },
  { e: '😩', label: 'Rough' },
  { e: '😤', label: 'Frustrated' },
  { e: '😰', label: 'Anxious' },
  { e: '🤩', label: 'Excited' },
  { e: '😴', label: 'Tired' },
  { e: '🔥', label: 'Energised' },
];
const ENERGY_LABELS = ['', 'Drained', 'Low', 'Okay', 'Good', 'Charged'];
const ENERGY_COLORS = ['', '#f72585', '#ff7b00', '#f7b731', '#4cc9f0', '#00f5d4'];

let wellDate = new Date().toISOString().slice(0, 10);
let wellData = load('wellness', {}); // { 'YYYY-MM-DD': { bedtime, waketime, quality, energy, mood, note } }

let wellQuality = 0, wellEnergy = 0, wellMood = '';

function wellKey() { return wellDate; }

function wellDayLabel() {
  const today = new Date().toISOString().slice(0, 10);
  if (wellDate === today) return 'TODAY';
  const d = new Date(wellDate + 'T12:00:00');
  return `${SHORT_MONTHS[d.getMonth()]} ${d.getDate()}`;
}

function calcSleepHrs(bedtime, waketime) {
  if (!bedtime || !waketime) return null;
  const [bh, bm] = bedtime.split(':').map(Number);
  const [wh, wm] = waketime.split(':').map(Number);
  let mins = (wh * 60 + wm) - (bh * 60 + bm);
  if (mins <= 0) mins += 24 * 60; // past midnight
  return mins / 60;
}

function renderStars(val) {
  const row = $('well-quality-stars');
  row.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    const btn = document.createElement('button');
    btn.className = 'star-btn' + (i <= val ? ' active' : '');
    btn.textContent = '★';
    btn.dataset.v = i;
    btn.addEventListener('click', () => {
      wellQuality = Number(btn.dataset.v);
      renderStars(wellQuality);
    });
    row.appendChild(btn);
  }
}

function renderEnergyScale(val) {
  const scale = $('energy-scale');
  scale.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    const btn = document.createElement('button');
    btn.className = 'energy-btn' + (i === val ? ' active' : '');
    btn.textContent = i;
    btn.dataset.v = i;
    btn.addEventListener('click', () => {
      wellEnergy = Number(btn.dataset.v);
      renderEnergyScale(wellEnergy);
      $('energy-label').textContent = ENERGY_LABELS[wellEnergy];
    });
    scale.appendChild(btn);
  }
  $('energy-label').textContent = val ? ENERGY_LABELS[val] : 'Not logged';
}

function renderMoodGrid(val) {
  const grid = $('mood-grid');
  grid.innerHTML = '';
  MOODS.forEach(m => {
    const btn = document.createElement('button');
    btn.className = 'mood-btn' + (m.e === val ? ' active' : '');
    btn.textContent = m.e;
    btn.title = m.label;
    btn.addEventListener('click', () => {
      wellMood = m.e;
      renderMoodGrid(wellMood);
      $('mood-selected').textContent = m.label;
    });
    grid.appendChild(btn);
  });
  if (!val) $('mood-selected').textContent = 'Not logged';
}

function updateDurationDisplay() {
  const hrs = calcSleepHrs($('well-bedtime').value, $('well-waketime').value);
  $('well-duration').textContent = hrs !== null ? hrs.toFixed(1) + ' hrs' : '— hrs';
}

$('well-bedtime').addEventListener('change', updateDurationDisplay);
$('well-waketime').addEventListener('change', updateDurationDisplay);

function loadWellDay() {
  const entry = wellData[wellKey()] || {};
  $('well-bedtime').value = entry.bedtime || '';
  $('well-waketime').value = entry.waketime || '';
  wellQuality = entry.quality || 0;
  wellEnergy = entry.energy || 0;
  wellMood = entry.mood || '';
  $('well-note').value = entry.note || '';
  renderStars(wellQuality);
  renderEnergyScale(wellEnergy);
  renderMoodGrid(wellMood);
  updateDurationDisplay();
  if (wellMood) {
    const found = MOODS.find(m => m.e === wellMood);
    $('mood-selected').textContent = found ? found.label : '';
  }
  renderWellSummary();
  renderWellChart();
}

function renderWellSummary() {
  const entry = wellData[wellKey()] || {};
  const hrs = calcSleepHrs(entry.bedtime, entry.waketime);
  $('ws-sleep').textContent = hrs !== null ? hrs.toFixed(1) + 'h' : '--';
  $('ws-quality').textContent = entry.quality ? '★'.repeat(entry.quality) : '--';
  $('ws-energy').textContent = entry.energy ? `${entry.energy}/5` : '--';
  $('ws-mood').textContent = entry.mood || '--';

  // Streak: consecutive days with any entry
  let streak = 0;
  const d = new Date();
  for (let i = 0; i < 365; i++) {
    const k = d.toISOString().slice(0, 10);
    if (wellData[k] && (wellData[k].mood || wellData[k].energy || wellData[k].bedtime)) streak++;
    else break;
    d.setDate(d.getDate() - 1);
  }
  $('ws-streak').textContent = streak + ' day' + (streak !== 1 ? 's' : '');
}

function renderWellChart() {
  const svg = $('well-chart');
  const labelsEl = $('well-chart-labels');
  svg.innerHTML = ''; labelsEl.innerHTML = '';

  const W = svg.clientWidth || 500, H = 100;
  const days = [];
  const d = new Date(wellDate + 'T12:00:00');
  for (let i = 6; i >= 0; i--) {
    const dd = new Date(d); dd.setDate(dd.getDate() - i);
    const k = dd.toISOString().slice(0, 10);
    const entry = wellData[k] || {};
    const hrs = calcSleepHrs(entry.bedtime, entry.waketime);
    days.push({ k, label: SHORT_MONTHS[dd.getMonth()] + ' ' + dd.getDate(), hrs: hrs || 0, energy: entry.energy || 0, mood: entry.mood || '' });
  }

  const maxHrs = Math.max(...days.map(d => d.hrs), 9);
  const barW = Math.floor((W - 20) / 7) - 4;
  const gap = Math.floor((W - 20) / 7);

  // Grid lines
  [4, 6, 8].forEach(h => {
    const y = H - (h / maxHrs) * (H - 14) - 2;
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', 0); line.setAttribute('x2', W);
    line.setAttribute('y1', y); line.setAttribute('y2', y);
    line.setAttribute('stroke', '#1e1e3a'); line.setAttribute('stroke-width', '1');
    svg.appendChild(line);
    const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    txt.setAttribute('x', 2); txt.setAttribute('y', y - 2);
    txt.setAttribute('font-size', '7'); txt.setAttribute('fill', '#3a3a5a');
    txt.setAttribute('font-family', 'Courier New, monospace');
    txt.textContent = h + 'h';
    svg.appendChild(txt);
  });

  // Sleep bars
  days.forEach((day, i) => {
    const x = 10 + i * gap;
    const barH = day.hrs > 0 ? Math.max(3, (day.hrs / maxHrs) * (H - 14)) : 0;
    const y = H - barH - 2;
    const isToday = day.k === new Date().toISOString().slice(0, 10);
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', x); rect.setAttribute('y', y);
    rect.setAttribute('width', barW); rect.setAttribute('height', barH);
    rect.setAttribute('fill', isToday ? '#00f5d4' : 'rgba(0,245,212,0.35)');
    rect.setAttribute('rx', '2');
    const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    title.textContent = `${day.label}: ${day.hrs > 0 ? day.hrs.toFixed(1) + 'h sleep' : 'no data'}`;
    rect.appendChild(title);
    svg.appendChild(rect);
  });

  // Energy line
  const energyPts = days.map((day, i) => {
    const x = 10 + i * gap + barW / 2;
    const y = day.energy > 0 ? H - (day.energy / 5) * (H - 14) - 2 : null;
    return { x, y, energy: day.energy };
  }).filter(p => p.y !== null);

  if (energyPts.length > 1) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    path.setAttribute('points', energyPts.map(p => `${p.x},${p.y}`).join(' '));
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', '#f72585');
    path.setAttribute('stroke-width', '1.5');
    path.setAttribute('stroke-dasharray', '3,2');
    svg.appendChild(path);
  }
  energyPts.forEach(p => {
    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dot.setAttribute('cx', p.x); dot.setAttribute('cy', p.y); dot.setAttribute('r', '3');
    dot.setAttribute('fill', '#f72585');
    svg.appendChild(dot);
  });

  // Mood emojis below bars
  days.forEach((day, i) => {
    if (!day.mood) return;
    const x = 10 + i * gap + barW / 2;
    const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    txt.setAttribute('x', x); txt.setAttribute('y', H + 2);
    txt.setAttribute('text-anchor', 'middle');
    txt.setAttribute('font-size', '10');
    txt.textContent = day.mood;
    svg.appendChild(txt);
  });

  // Labels
  days.forEach(day => {
    const lbl = document.createElement('span');
    lbl.textContent = day.label.split(' ')[0]; // just month abbrev
    labelsEl.appendChild(lbl);
  });
}

$('well-save').addEventListener('click', () => {
  const entry = {
    bedtime: $('well-bedtime').value,
    waketime: $('well-waketime').value,
    quality: wellQuality,
    energy: wellEnergy,
    mood: wellMood,
    note: $('well-note').value.trim(),
  };
  wellData[wellKey()] = entry;
  save('wellness', wellData);
  renderWellSummary();
  renderWellChart();
  const btn = $('well-save');
  btn.textContent = 'SAVED ✓';
  setTimeout(() => { btn.textContent = 'SAVE TODAY'; }, 1500);
});

$('well-prev').addEventListener('click', () => {
  const d = new Date(wellDate + 'T12:00:00'); d.setDate(d.getDate() - 1);
  wellDate = d.toISOString().slice(0, 10);
  $('well-day-label').textContent = wellDayLabel();
  loadWellDay();
});
$('well-next').addEventListener('click', () => {
  const d = new Date(wellDate + 'T12:00:00'); d.setDate(d.getDate() + 1);
  wellDate = d.toISOString().slice(0, 10);
  $('well-day-label').textContent = wellDayLabel();
  loadWellDay();
});

loadWellDay();

// ── Mind Map & Idea Capture ───────────────
const IDEA_TAGS = ['💡', '🔥', '❓', '📌', '🌱', '⚡'];
const NODE_COLORS = ['#00f5d4', '#7209b7', '#4cc9f0', '#f72585', '#3a0ca3', '#4895ef'];
const NODE_R = 38;

let ideaViewDate = new Date().toISOString().slice(0, 10);
let ideas = load('ideas', {});     // { 'YYYY-MM-DD': [{ id, text, tag, addedToMap }] }
let mapData = load('mapData', {}); // { 'YYYY-MM-DD': { nodes: [...] } }
let selectedTag = '';
let mapSelectedId = null;
let mapDragging = null; // { id, offsetX, offsetY }
let mapEditing = false;

const cvs = $('mindmap-canvas');
const ctx2 = cvs.getContext('2d');
let dpr = window.devicePixelRatio || 1;

// ── Canvas sizing ──
function resizeCanvas() {
  dpr = window.devicePixelRatio || 1;
  const w = cvs.parentElement.clientWidth;
  const h = 400;
  cvs.style.width = w + 'px';
  cvs.style.height = h + 'px';
  cvs.width = Math.round(w * dpr);
  cvs.height = Math.round(h * dpr);
  ctx2.setTransform(1, 0, 0, 1, 0, 0);
  ctx2.scale(dpr, dpr);
  drawMap();
}

function cvCenter() {
  return { x: cvs.clientWidth / 2, y: cvs.clientHeight / 2 };
}

// ── Map data helpers ──
function mapKey() { return ideaViewDate; }

function getNodes() {
  if (!mapData[mapKey()]) {
    mapData[mapKey()] = { nodes: [
      { id: 'root', text: "Today's Focus", x: 0, y: 0, parentId: null, ci: 0 }
    ]};
  }
  return mapData[mapKey()].nodes;
}

function saveMap() { save('mapData', mapData); }

// ── Drawing ──
function nodeAbsPos(node) {
  const c = cvCenter();
  return { x: c.x + node.x, y: c.y + node.y };
}

function drawMap() {
  const W = cvs.clientWidth, H = cvs.clientHeight;
  ctx2.clearRect(0, 0, W, H);
  const nodes = getNodes();

  // Edges
  nodes.forEach(n => {
    if (!n.parentId) return;
    const p = nodes.find(x => x.id === n.parentId);
    if (!p) return;
    const from = nodeAbsPos(p), to = nodeAbsPos(n);
    const mx = (from.x + to.x) / 2;
    ctx2.beginPath();
    ctx2.moveTo(from.x, from.y);
    ctx2.bezierCurveTo(mx, from.y, mx, to.y, to.x, to.y);
    ctx2.strokeStyle = 'rgba(0,245,212,0.2)';
    ctx2.lineWidth = 1.5;
    ctx2.stroke();
  });

  // Nodes
  nodes.forEach(n => {
    const pos = nodeAbsPos(n);
    const col = NODE_COLORS[n.ci % NODE_COLORS.length];
    const isRoot = !n.parentId;
    const isSel = n.id === mapSelectedId;

    // Outer glow
    if (isRoot || isSel) {
      ctx2.beginPath();
      ctx2.arc(pos.x, pos.y, NODE_R + 6, 0, Math.PI * 2);
      const g = ctx2.createRadialGradient(pos.x, pos.y, NODE_R, pos.x, pos.y, NODE_R + 16);
      g.addColorStop(0, isSel ? 'rgba(247,37,133,0.45)' : 'rgba(0,245,212,0.3)');
      g.addColorStop(1, 'transparent');
      ctx2.fillStyle = g;
      ctx2.fill();
    }

    // Fill
    ctx2.beginPath();
    ctx2.arc(pos.x, pos.y, NODE_R, 0, Math.PI * 2);
    ctx2.fillStyle = '#0f0f1a';
    ctx2.fill();
    ctx2.strokeStyle = isSel ? '#f72585' : col;
    ctx2.lineWidth = isSel ? 2.5 : isRoot ? 2 : 1.5;
    ctx2.stroke();

    // Text
    ctx2.fillStyle = isSel ? '#f72585' : (isRoot ? col : '#e0e0ff');
    ctx2.font = `${isRoot ? 'bold ' : ''}10px "Courier New", monospace`;
    ctx2.textAlign = 'center';
    ctx2.textBaseline = 'middle';
    const maxW = NODE_R * 2 - 10;
    const words = n.text.split(' ');
    const lines = [];
    let cur = '';
    words.forEach(w => {
      const test = cur ? cur + ' ' + w : w;
      if (ctx2.measureText(test).width > maxW && cur) { lines.push(cur); cur = w; }
      else cur = test;
    });
    if (cur) lines.push(cur);
    const drawLines = lines.slice(0, 3);
    const lh = 13;
    const startY = pos.y - ((drawLines.length - 1) * lh) / 2;
    drawLines.forEach((line, i) => ctx2.fillText(line, pos.x, startY + i * lh));
  });
}

// ── Hit test ──
function hitNode(cx, cy) {
  const nodes = getNodes();
  for (let i = nodes.length - 1; i >= 0; i--) {
    const pos = nodeAbsPos(nodes[i]);
    const dx = cx - pos.x, dy = cy - pos.y;
    if (dx * dx + dy * dy <= NODE_R * NODE_R) return nodes[i];
  }
  return null;
}

function cvPoint(e) {
  const r = cvs.getBoundingClientRect();
  const src = e.touches ? e.touches[0] : e;
  return { x: src.clientX - r.left, y: src.clientY - r.top };
}

// ── Inline edit overlay ──
function startNodeEdit(node) {
  if (mapEditing) return;
  mapEditing = true;
  const pos = nodeAbsPos(node);
  const r = cvs.getBoundingClientRect();

  const inp = document.createElement('input');
  inp.type = 'text';
  inp.value = node.text;
  inp.maxLength = 40;
  inp.className = 'map-edit-input';
  inp.style.cssText = [
    `position:fixed`,
    `left:${r.left + pos.x - 55}px`,
    `top:${r.top + pos.y - 13}px`,
    `width:110px`,
    `z-index:9000`,
  ].join(';');
  document.body.appendChild(inp);
  inp.focus(); inp.select();

  function commit() {
    const v = inp.value.trim();
    if (v) node.text = v;
    saveMap(); drawMap();
    // sync central input if root was edited
    if (!node.parentId) $('map-central-input').value = node.text;
    inp.remove(); mapEditing = false;
  }
  inp.addEventListener('blur', commit);
  inp.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); commit(); }
    if (e.key === 'Escape') { inp.remove(); mapEditing = false; }
  });
}

// ── Mouse events ──
let lastTap = { time: 0, id: null };

cvs.addEventListener('mousedown', e => {
  if (mapEditing) return;
  const pt = cvPoint(e);
  const node = hitNode(pt.x, pt.y);
  if (node) {
    mapSelectedId = node.id;
    const pos = nodeAbsPos(node);
    mapDragging = { id: node.id, offsetX: pt.x - pos.x, offsetY: pt.y - pos.y };
    syncDelBtn();
    drawMap();
    // double-click detection
    const now = Date.now();
    if (now - lastTap.time < 340 && lastTap.id === node.id) startNodeEdit(node);
    lastTap = { time: now, id: node.id };
  } else {
    mapSelectedId = null; mapDragging = null;
    syncDelBtn(); drawMap();
  }
});

cvs.addEventListener('mousemove', e => {
  if (!mapDragging) return;
  const pt = cvPoint(e);
  const node = getNodes().find(n => n.id === mapDragging.id);
  if (!node) return;
  const c = cvCenter();
  node.x = pt.x - mapDragging.offsetX - c.x;
  node.y = pt.y - mapDragging.offsetY - c.y;
  drawMap();
});

cvs.addEventListener('mouseup', () => { if (mapDragging) { saveMap(); mapDragging = null; } });
cvs.addEventListener('mouseleave', () => { mapDragging = null; });

function syncDelBtn() {
  const btn = $('map-delete-node');
  const canDel = !!mapSelectedId && mapSelectedId !== 'root';
  btn.disabled = !canDel;
}

// ── Toolbar actions ──
$('map-add-child').addEventListener('click', () => {
  const nodes = getNodes();
  const parent = mapSelectedId ? nodes.find(n => n.id === mapSelectedId) : nodes[0];
  if (!parent) return;
  const angle = Math.random() * Math.PI * 2;
  const dist = 120 + Math.random() * 50;
  const newNode = {
    id: Date.now().toString(36),
    text: 'New idea',
    x: parent.x + Math.cos(angle) * dist,
    y: parent.y + Math.sin(angle) * dist,
    parentId: parent.id,
    ci: nodes.length % NODE_COLORS.length,
  };
  nodes.push(newNode);
  mapSelectedId = newNode.id;
  saveMap(); drawMap(); syncDelBtn();
  setTimeout(() => startNodeEdit(newNode), 60);
});

$('map-delete-node').addEventListener('click', () => {
  if (!mapSelectedId || mapSelectedId === 'root') return;
  const nodes = getNodes();
  function removeWithKids(id) {
    nodes.filter(n => n.parentId === id).map(n => n.id).forEach(removeWithKids);
    const i = nodes.findIndex(n => n.id === id);
    if (i !== -1) nodes.splice(i, 1);
  }
  removeWithKids(mapSelectedId);
  mapSelectedId = null; syncDelBtn(); saveMap(); drawMap();
});

$('map-reset-layout').addEventListener('click', () => {
  const nodes = getNodes();
  const root = nodes.find(n => !n.parentId);
  if (root) { root.x = 0; root.y = 0; }
  function layout(parentId, centerAngle, spread, dist) {
    const kids = nodes.filter(n => n.parentId === parentId);
    if (!kids.length) return;
    const p = nodes.find(n => n.id === parentId);
    kids.forEach((kid, i) => {
      const a = centerAngle - spread / 2 + (spread / kids.length) * (i + 0.5);
      kid.x = p.x + Math.cos(a) * dist;
      kid.y = p.y + Math.sin(a) * dist;
      layout(kid.id, a, spread / 2.2, dist * 0.75);
    });
  }
  layout('root', 0, Math.PI * 2, 140);
  saveMap(); drawMap();
});

$('map-clear-all').addEventListener('click', () => {
  if (!confirm('Clear this mind map?')) return;
  mapData[mapKey()] = { nodes: [
    { id: 'root', text: $('map-central-input').value.trim() || "Today's Focus", x: 0, y: 0, parentId: null, ci: 0 }
  ]};
  mapSelectedId = null; syncDelBtn(); saveMap(); drawMap();
});

$('map-central-input').addEventListener('input', () => {
  const nodes = getNodes();
  const root = nodes.find(n => !n.parentId);
  if (root) { root.text = $('map-central-input').value || "Today's Focus"; saveMap(); drawMap(); }
});

function syncCentralInput() {
  const root = getNodes().find(n => !n.parentId);
  $('map-central-input').value = root ? root.text : '';
}

// ── Idea Capture ──
function ideaDayKey() { return ideaViewDate; }
function getDayIdeas() { return ideas[ideaDayKey()] || []; }

function renderIdeaDayLabel() {
  const today = new Date().toISOString().slice(0, 10);
  if (ideaViewDate === today) { $('idea-day-label').textContent = 'TODAY'; return; }
  const d = new Date(ideaViewDate + 'T12:00:00');
  $('idea-day-label').textContent = `${SHORT_MONTHS[d.getMonth()]} ${d.getDate()}`;
}

function renderIdeaTags() {
  const row = $('idea-tags-row');
  row.innerHTML = '';
  IDEA_TAGS.forEach(tag => {
    const btn = document.createElement('button');
    btn.className = 'idea-tag-btn' + (selectedTag === tag ? ' active' : '');
    btn.textContent = tag;
    btn.addEventListener('click', () => { selectedTag = selectedTag === tag ? '' : tag; renderIdeaTags(); });
    row.appendChild(btn);
  });
}

function renderIdeas() {
  const list = $('idea-list');
  list.innerHTML = '';
  const dayIdeas = getDayIdeas();
  if (!dayIdeas.length) {
    const li = document.createElement('li');
    li.className = 'ideas-empty';
    li.textContent = 'No ideas captured yet.';
    list.appendChild(li); return;
  }
  dayIdeas.forEach((idea, i) => {
    const li = document.createElement('li');
    li.className = 'idea-item' + (idea.addedToMap ? ' mapped' : '');

    const tagEl = document.createElement('span');
    tagEl.className = 'idea-tag'; tagEl.textContent = idea.tag || '💡';

    const textEl = document.createElement('span');
    textEl.className = 'idea-text'; textEl.textContent = idea.text;

    const actions = document.createElement('div');
    actions.className = 'idea-actions';

    if (!idea.addedToMap) {
      const mapBtn = document.createElement('button');
      mapBtn.className = 'idea-map-btn'; mapBtn.textContent = '→ MAP';
      mapBtn.addEventListener('click', () => {
        const nodes = getNodes();
        const root = nodes[0];
        const angle = ((nodes.length) / 8) * Math.PI * 2;
        nodes.push({
          id: 'idea-' + idea.id,
          text: idea.text.slice(0, 30),
          x: root.x + Math.cos(angle) * 130,
          y: root.y + Math.sin(angle) * 130,
          parentId: root.id,
          ci: nodes.length % NODE_COLORS.length,
        });
        idea.addedToMap = true;
        save('ideas', ideas); saveMap(); drawMap(); renderIdeas();
      });
      actions.appendChild(mapBtn);
    } else {
      const badge = document.createElement('span');
      badge.className = 'idea-mapped-badge'; badge.textContent = '✓ MAPPED';
      actions.appendChild(badge);
    }

    const del = document.createElement('button');
    del.className = 'idea-del-btn'; del.textContent = '✕';
    del.addEventListener('click', () => {
      ideas[ideaDayKey()].splice(i, 1);
      save('ideas', ideas); renderIdeas();
    });
    actions.appendChild(del);

    li.append(tagEl, textEl, actions);
    list.appendChild(li);
  });
}

$('idea-add').addEventListener('click', captureIdea);
$('idea-input').addEventListener('keydown', e => { if (e.key === 'Enter') captureIdea(); });
function captureIdea() {
  const text = $('idea-input').value.trim();
  if (!text) return;
  if (!ideas[ideaDayKey()]) ideas[ideaDayKey()] = [];
  ideas[ideaDayKey()].push({ id: Date.now().toString(36), text, tag: selectedTag || '💡', addedToMap: false });
  save('ideas', ideas); renderIdeas();
  $('idea-input').value = '';
}

$('idea-prev-day').addEventListener('click', () => {
  const d = new Date(ideaViewDate + 'T12:00:00');
  d.setDate(d.getDate() - 1);
  ideaViewDate = d.toISOString().slice(0, 10);
  syncCentralInput(); renderIdeaDayLabel(); renderIdeas(); drawMap();
});
$('idea-next-day').addEventListener('click', () => {
  const d = new Date(ideaViewDate + 'T12:00:00');
  d.setDate(d.getDate() + 1);
  ideaViewDate = d.toISOString().slice(0, 10);
  syncCentralInput(); renderIdeaDayLabel(); renderIdeas(); drawMap();
});

// ── Init ──
window.addEventListener('resize', () => { resizeCanvas(); renderChart(); });
setTimeout(() => {
  resizeCanvas();
  syncCentralInput();
  renderIdeaDayLabel();
  renderIdeaTags();
  renderIdeas();
  syncDelBtn();
}, 0);

// ── Innovation Idea Vault ─────────────────
const VAULT_STATUS_META = {
  Raw:        { color: '#5a5a8a', icon: '💡' },
  Exploring:  { color: '#4895ef', icon: '🔍' },
  Developing: { color: '#7209b7', icon: '🔨' },
  Launched:   { color: '#00f5d4', icon: '🚀' },
  Archived:   { color: '#3a3a5a', icon: '📦' },
};

let vault = load('vault', []);
let vaultPendingTags = [];
let vaultScore = 0;
let vaultActiveTag = '';
let vaultActiveStatus = '';

function renderVaultStars(val) {
  const row = $('vault-score-stars');
  row.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    const btn = document.createElement('button');
    btn.className = 'star-btn' + (i <= val ? ' active' : '');
    btn.textContent = '★';
    btn.addEventListener('click', () => { vaultScore = i; renderVaultStars(i); });
    row.appendChild(btn);
  }
}

function renderVaultPendingTags() {
  const el = $('vault-pending-tags');
  el.innerHTML = '';
  vaultPendingTags.forEach((tag, i) => {
    const chip = document.createElement('span');
    chip.className = 'tag-chip';
    chip.innerHTML = `${tag} <span class="tag-chip-del">✕</span>`;
    chip.querySelector('.tag-chip-del').addEventListener('click', () => { vaultPendingTags.splice(i, 1); renderVaultPendingTags(); });
    el.appendChild(chip);
  });
}

$('vault-tag-input').addEventListener('keydown', e => {
  if (e.key !== 'Enter' && e.key !== ',') return;
  e.preventDefault();
  const v = $('vault-tag-input').value.trim();
  if (v && !vaultPendingTags.includes(v)) vaultPendingTags.push(v);
  $('vault-tag-input').value = '';
  renderVaultPendingTags();
});

function vaultAllTags() {
  const all = new Set();
  vault.forEach(v => (v.tags || []).forEach(t => all.add(t)));
  return [...all];
}

function renderVaultFilters() {
  const statusEl = $('vault-status-filter-btns');
  statusEl.innerHTML = '';
  ['All', ...Object.keys(VAULT_STATUS_META)].forEach(s => {
    const btn = document.createElement('button');
    btn.className = 'vault-filter-btn' + ((s === 'All' ? '' : s) === vaultActiveStatus ? ' active' : '');
    btn.textContent = s === 'All' ? 'All' : VAULT_STATUS_META[s].icon + ' ' + s;
    btn.addEventListener('click', () => { vaultActiveStatus = s === 'All' ? '' : s; renderVaultFilters(); renderVaultIdeas(); });
    statusEl.appendChild(btn);
  });
  const tagEl = $('vault-tag-filters');
  tagEl.innerHTML = '';
  vaultAllTags().forEach(tag => {
    const btn = document.createElement('button');
    btn.className = 'vault-filter-btn' + (vaultActiveTag === tag ? ' active' : '');
    btn.textContent = '#' + tag;
    btn.addEventListener('click', () => { vaultActiveTag = vaultActiveTag === tag ? '' : tag; renderVaultFilters(); renderVaultIdeas(); });
    tagEl.appendChild(btn);
  });
}

function renderVaultIdeas() {
  const col = $('vault-ideas-col');
  col.innerHTML = '';
  const search = $('vault-search').value.toLowerCase();
  let items = [...vault].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  if (vaultActiveStatus) items = items.filter(v => v.status === vaultActiveStatus);
  if (vaultActiveTag)    items = items.filter(v => (v.tags || []).includes(vaultActiveTag));
  if (search)            items = items.filter(v => (v.title + ' ' + v.description).toLowerCase().includes(search));
  if (!items.length) { col.innerHTML = '<p style="font-size:0.72rem;color:var(--text-dim)">No ideas match.</p>'; return; }
  items.forEach(idea => {
    const sm = VAULT_STATUS_META[idea.status] || VAULT_STATUS_META.Raw;
    const card = document.createElement('div');
    card.className = 'vault-idea-card';
    card.innerHTML = `
      <div class="vault-card-top">
        <span class="vault-card-title">${idea.title}</span>
        <span class="vault-status-badge" style="color:${sm.color};border-color:${sm.color}">${sm.icon} ${idea.status}</span>
      </div>
      <div class="vault-card-tags">${(idea.tags||[]).map(t=>`<span class="vault-card-tag">#${t}</span>`).join('')}</div>
      <div class="vault-card-desc">${idea.description || ''}</div>
      <div class="vault-card-meta"><span style="color:#f7b731">${'★'.repeat(idea.score||0)}</span><span>${idea.date||''}</span></div>`;
    card.addEventListener('click', () => card.classList.toggle('expanded'));
    const del = document.createElement('button');
    del.className = 'pipe-del-btn vault-card-del'; del.textContent = '✕';
    del.addEventListener('click', e => { e.stopPropagation(); vault = vault.filter(x => x.id !== idea.id); save('vault', vault); renderVaultFilters(); renderVaultIdeas(); });
    card.appendChild(del);
    col.appendChild(card);
  });
}

$('vault-add').addEventListener('click', () => {
  const title = $('vault-title').value.trim();
  if (!title) return;
  const tagInput = $('vault-tag-input').value.trim();
  if (tagInput && !vaultPendingTags.includes(tagInput)) vaultPendingTags.push(tagInput);
  vault.push({ id: Date.now().toString(36), title, description: $('vault-desc').value.trim(), tags: [...vaultPendingTags], status: $('vault-status-select').value, score: vaultScore, date: new Date().toISOString().slice(0,10) });
  save('vault', vault);
  $('vault-title').value = ''; $('vault-desc').value = ''; $('vault-tag-input').value = '';
  vaultPendingTags = []; vaultScore = 0;
  renderVaultPendingTags(); renderVaultStars(0); renderVaultFilters(); renderVaultIdeas();
});
$('vault-search').addEventListener('input', () => renderVaultIdeas());

renderVaultStars(0);
renderVaultFilters();
renderVaultIdeas();

// ── Future Self Visualiser ────────────────
const FUTURE_AREAS = [
  { key: 'Health',        icon: '💪', color: '#00f5d4' },
  { key: 'Wealth',        icon: '💰', color: '#f7b731' },
  { key: 'Relationships', icon: '💗', color: '#f72585' },
  { key: 'Career',        icon: '🚀', color: '#4895ef' },
  { key: 'Personal',      icon: '🧠', color: '#7209b7' },
  { key: 'Lifestyle',     icon: '🌴', color: '#4cc9f0' },
];

let futureVisions = load('futureVisions', {});
let futureHorizon = '1yr';

function getFutureData() {
  if (!futureVisions[futureHorizon]) futureVisions[futureHorizon] = { areas: {}, affirmations: [] };
  return futureVisions[futureHorizon];
}

function futureTargetYear() {
  return new Date().getFullYear() + { '1yr':1, '5yr':5, '10yr':10 }[futureHorizon];
}

function renderFutureBody() {
  const body = $('future-body');
  body.innerHTML = '';
  const data = getFutureData();
  const yr = futureTargetYear();

  FUTURE_AREAS.forEach(area => {
    const card = document.createElement('div');
    card.className = 'future-area-card';
    card.style.borderColor = area.color + '40';
    card.innerHTML = `
      <div class="future-area-title" style="color:${area.color}"><span>${area.icon}</span><span>${area.key.toUpperCase()}</span></div>
      <textarea class="os-textarea" data-area="${area.key}" placeholder="In ${yr}, my ${area.key.toLowerCase()} looks like…" rows="4" maxlength="500">${data.areas[area.key] || ''}</textarea>`;
    body.appendChild(card);
  });

  const affCard = document.createElement('div');
  affCard.className = 'future-area-card';
  affCard.style.cssText = 'grid-column:1/-1';
  affCard.innerHTML = `
    <div class="future-area-title" style="color:#f7b731">✨ AFFIRMATIONS & DECLARATIONS</div>
    <div class="future-affirmation-add">
      <input type="text" id="future-aff-input" placeholder="I am… I have… I create…" maxlength="120" />
      <button id="future-aff-add">ADD</button>
    </div>
    <ul id="future-affirmation-list"></ul>`;
  body.appendChild(affCard);
  renderAffirmations();
  $('future-aff-add').addEventListener('click', addAffirmation);
  $('future-aff-input').addEventListener('keydown', e => { if (e.key === 'Enter') addAffirmation(); });

  const daysLeft = Math.ceil((new Date(yr + '-01-01') - new Date()) / 86400000);
  $('future-countdown').textContent = `${daysLeft} days to ${yr}`;
}

function renderAffirmations() {
  const list = $('future-affirmation-list');
  if (!list) return;
  const data = getFutureData();
  list.innerHTML = '';
  (data.affirmations || []).forEach((aff, i) => {
    const li = document.createElement('li');
    li.className = 'affirmation-item';
    li.innerHTML = `<span>✨ ${aff}</span>`;
    const del = document.createElement('button');
    del.className = 'pipe-del-btn'; del.textContent = '✕'; del.style.color = '#f7b731';
    del.addEventListener('click', () => { data.affirmations.splice(i, 1); save('futureVisions', futureVisions); renderAffirmations(); });
    li.appendChild(del);
    list.appendChild(li);
  });
}

function addAffirmation() {
  const inp = $('future-aff-input');
  const v = inp.value.trim(); if (!v) return;
  const data = getFutureData();
  if (!data.affirmations) data.affirmations = [];
  data.affirmations.push(v);
  save('futureVisions', futureVisions); inp.value = ''; renderAffirmations();
}

document.querySelectorAll('.future-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.future-tab').forEach(t => t.classList.remove('future-tab-active'));
    tab.classList.add('future-tab-active');
    futureHorizon = tab.dataset.h;
    renderFutureBody();
  });
});

$('future-save').addEventListener('click', () => {
  const data = getFutureData();
  document.querySelectorAll('[data-area]').forEach(ta => { data.areas[ta.dataset.area] = ta.value; });
  save('futureVisions', futureVisions);
  $('future-save').textContent = 'SAVED ✓';
  setTimeout(() => { $('future-save').textContent = 'SAVE VISION'; }, 1500);
});

renderFutureBody();

// ── Daily Journal ─────────────────────────
let journalData = load('journalData', {});
let journalDate = new Date().toISOString().slice(0, 10);
let jMorningEnergy = 0, jEveningRating = 0;

function jrnlKey() { return journalDate; }
function jrnlDayLabel() {
  const today = new Date().toISOString().slice(0, 10);
  if (journalDate === today) return 'TODAY';
  const d = new Date(journalDate + 'T12:00:00');
  return SHORT_MONTHS[d.getMonth()] + ' ' + d.getDate();
}

document.querySelectorAll('.jrnl-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.jrnl-tab').forEach(t => t.classList.remove('jrnl-tab-active'));
    document.querySelectorAll('.jrnl-panel').forEach(p => p.classList.add('jrnl-panel-hidden'));
    tab.classList.add('jrnl-tab-active');
    $('jrnl-' + tab.dataset.j).classList.remove('jrnl-panel-hidden');
  });
});

function renderJEnergy(val) {
  const scale = $('j-energy-scale');
  scale.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    const btn = document.createElement('button');
    btn.className = 'energy-btn' + (i === val ? ' active' : '');
    btn.textContent = i;
    btn.addEventListener('click', () => { jMorningEnergy = i; renderJEnergy(i); });
    scale.appendChild(btn);
  }
}

function renderJEveningStars(val) {
  const row = $('j-evening-stars');
  row.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    const btn = document.createElement('button');
    btn.className = 'star-btn' + (i <= val ? ' active' : '');
    btn.textContent = '★';
    btn.addEventListener('click', () => { jEveningRating = i; renderJEveningStars(i); });
    row.appendChild(btn);
  }
}

function loadJournalDay() {
  const e = (journalData[jrnlKey()] || {});
  const m = e.morning || {}, ev = e.evening || {};
  $('j-int-1').value  = m.int1  || ''; $('j-int-2').value  = m.int2  || ''; $('j-int-3').value  = m.int3  || '';
  $('j-grat-1').value = m.grat1 || ''; $('j-grat-2').value = m.grat2 || ''; $('j-grat-3').value = m.grat3 || '';
  $('j-word').value   = m.word  || '';
  $('j-morning-free').value = m.free || '';
  jMorningEnergy = m.energy || 0;
  renderJEnergy(jMorningEnergy);
  $('j-wins').value       = ev.wins       || '';
  $('j-challenges').value = ev.challenges || '';
  $('j-lessons').value    = ev.lessons    || '';
  $('j-reflection').value = ev.reflection || '';
  jEveningRating = ev.rating || 0;
  renderJEveningStars(jEveningRating);
  $('jrnl-day-label').textContent = jrnlDayLabel();
  renderJStreak();
}

function renderJStreak() {
  const now = new Date();
  let streak = 0;
  for (let i = 0; i < 365; i++) {
    const d = new Date(now); d.setDate(d.getDate() - i);
    const k = d.toISOString().slice(0, 10);
    const e = journalData[k];
    if (e && (e.morning || e.evening)) streak++;
    else break;
  }
  $('jrnl-streak-bar').textContent = `🔥 ${streak}-day streak · ${Object.keys(journalData).length} total entries`;
}

$('jrnl-morning-save').addEventListener('click', () => {
  if (!journalData[jrnlKey()]) journalData[jrnlKey()] = {};
  journalData[jrnlKey()].morning = {
    int1: $('j-int-1').value, int2: $('j-int-2').value, int3: $('j-int-3').value,
    grat1: $('j-grat-1').value, grat2: $('j-grat-2').value, grat3: $('j-grat-3').value,
    word: $('j-word').value, energy: jMorningEnergy, free: $('j-morning-free').value,
  };
  save('journalData', journalData); renderJStreak();
  $('jrnl-morning-save').textContent = 'SAVED ✓';
  setTimeout(() => { $('jrnl-morning-save').textContent = 'SAVE MORNING'; }, 1500);
});

$('jrnl-evening-save').addEventListener('click', () => {
  if (!journalData[jrnlKey()]) journalData[jrnlKey()] = {};
  journalData[jrnlKey()].evening = {
    wins: $('j-wins').value, challenges: $('j-challenges').value,
    lessons: $('j-lessons').value, reflection: $('j-reflection').value, rating: jEveningRating,
  };
  save('journalData', journalData); renderJStreak();
  $('jrnl-evening-save').textContent = 'SAVED ✓';
  setTimeout(() => { $('jrnl-evening-save').textContent = 'SAVE EVENING'; }, 1500);
});

$('jrnl-prev').addEventListener('click', () => {
  const d = new Date(journalDate + 'T12:00:00'); d.setDate(d.getDate() - 1);
  journalDate = d.toISOString().slice(0, 10); loadJournalDay();
});
$('jrnl-next').addEventListener('click', () => {
  const d = new Date(journalDate + 'T12:00:00'); d.setDate(d.getDate() + 1);
  journalDate = d.toISOString().slice(0, 10); loadJournalDay();
});

renderJEnergy(0); renderJEveningStars(0); loadJournalDay();

// ── Relationship Check-in Tracker ─────────
const REL_TYPE_COLORS = { Partner:'#f72585', Family:'#f7b731', Friend:'#00f5d4', Colleague:'#4895ef', Mentor:'#7209b7', Client:'#4cc9f0' };

let rels = load('rels', []);
let relCheckIns = load('relCheckIns', []);

function relPersonSelect() {
  const sel = $('rel-checkin-person');
  sel.innerHTML = rels.length
    ? rels.map(r => `<option value="${r.id}">${r.emoji||'👤'} ${r.name}</option>`).join('')
    : '<option value="">— add people first —</option>';
}

function daysSinceLast(relId) {
  const cis = relCheckIns.filter(c => c.relId === relId);
  if (!cis.length) return 9999;
  const last = cis.sort((a,b) => (b.date||'').localeCompare(a.date||''))[0];
  return last.date ? Math.max(0, Math.floor((new Date() - new Date(last.date + 'T12:00:00')) / 86400000)) : 9999;
}

function relHealthColor(rel) {
  const days = daysSinceLast(rel.id), freq = parseInt(rel.frequency) || 7;
  return days <= freq ? '#00f5d4' : days <= freq * 1.5 ? '#f7b731' : '#f72585';
}

function renderRelPeople() {
  const col = $('rel-people-list');
  col.innerHTML = '';
  if (!rels.length) { col.innerHTML = '<p style="font-size:0.72rem;color:var(--text-dim)">No people added yet.</p>'; return; }
  [...rels].sort((a,b) => daysSinceLast(b.id) - daysSinceLast(a.id)).forEach(r => {
    const hColor = relHealthColor(r);
    const days = daysSinceLast(r.id);
    const freq = parseInt(r.frequency) || 7;
    const overdue = days - freq;
    const dueText = days === 9999 ? 'Never contacted'
      : days === 0 ? '✓ Checked in today'
      : overdue > 0 ? `${overdue}d overdue`
      : `Due in ${freq - days}d`;
    const card = document.createElement('div');
    card.className = 'rel-person-card';
    card.style.borderColor = hColor;
    card.innerHTML = `
      <div class="rel-card-top">
        <span class="rel-avatar">${r.emoji||'👤'}</span>
        <span class="rel-name">${r.name}</span>
        <span class="rel-type-badge" style="color:${REL_TYPE_COLORS[r.type]||'#5a5a8a'};border-color:${REL_TYPE_COLORS[r.type]||'#5a5a8a'}">${r.type}</span>
      </div>
      <div class="rel-due-line" style="color:${hColor}">${dueText}</div>`;
    const del = document.createElement('button');
    del.className = 'pipe-del-btn rel-card-del'; del.textContent = '✕';
    del.addEventListener('click', () => { rels = rels.filter(x => x.id !== r.id); save('rels', rels); relPersonSelect(); renderRelPeople(); });
    card.appendChild(del);
    col.appendChild(card);
  });
}

function renderRelCheckIns() {
  const list = $('rel-checkin-list');
  list.innerHTML = '';
  if (!relCheckIns.length) { list.innerHTML = '<li style="font-size:0.72rem;color:var(--text-dim);padding:8px 0">No check-ins yet.</li>'; return; }
  [...relCheckIns].sort((a,b) => (b.date||'').localeCompare(a.date||'')).slice(0,30).forEach(ci => {
    const rel = rels.find(r => r.id === ci.relId);
    const li = document.createElement('li');
    li.className = 'rel-ci-item';
    li.innerHTML = `
      <span class="rel-ci-name">${rel ? (rel.emoji||'') + ' ' + rel.name : '?'}</span>
      <span class="rel-ci-medium">${ci.medium}</span>
      <span class="rel-ci-notes">${ci.notes||''}</span>
      <span class="rel-ci-date">${ci.date||''}</span>`;
    const del = document.createElement('button');
    del.className = 'pipe-del-btn'; del.textContent = '✕';
    del.addEventListener('click', () => { relCheckIns = relCheckIns.filter(x => x.id !== ci.id); save('relCheckIns', relCheckIns); renderRelCheckIns(); renderRelPeople(); });
    li.appendChild(del);
    list.appendChild(li);
  });
}

$('rel-add-person').addEventListener('click', () => {
  const name = $('rel-name').value.trim();
  if (!name) return;
  rels.push({ id: Date.now().toString(36), name, type: $('rel-type').value, frequency: $('rel-frequency').value, emoji: $('rel-emoji-in').value.trim() || '👤' });
  save('rels', rels); relPersonSelect(); renderRelPeople();
  $('rel-name').value = ''; $('rel-emoji-in').value = '';
});

$('rel-add-checkin').addEventListener('click', () => {
  const relId = $('rel-checkin-person').value;
  if (!relId) return;
  relCheckIns.push({ id: Date.now().toString(36), relId, date: $('rel-checkin-date').value, medium: $('rel-checkin-medium').value, notes: $('rel-checkin-notes').value.trim() });
  save('relCheckIns', relCheckIns); renderRelCheckIns(); renderRelPeople();
  $('rel-checkin-notes').value = '';
});

$('rel-checkin-date').value = new Date().toISOString().slice(0, 10);
relPersonSelect(); renderRelPeople(); renderRelCheckIns();

// ── Course & Product Delivery Tracker ─────
const COURSE_STATUS_META = {
  Planning:  { color: '#5a5a8a' },
  Building:  { color: '#4895ef' },
  Beta:      { color: '#f7b731' },
  Live:      { color: '#00f5d4' },
  Complete:  { color: '#7209b7' },
};

let courses = load('courses', []);
let courseMilestones = load('courseMilestones', {});
let courseStats = load('courseStats', {});
let selectedCourseId = null;

function renderCourseCards() {
  const col = $('courses-cards-col');
  col.innerHTML = '';
  if (!courses.length) { col.innerHTML = '<p style="font-size:0.72rem;color:var(--text-dim)">No courses or products yet.</p>'; return; }
  courses.forEach(c => {
    const sm = COURSE_STATUS_META[c.status] || COURSE_STATUS_META.Planning;
    const ms = courseMilestones[c.id] || [];
    const done = ms.filter(m => m.done).length;
    const pct = ms.length ? Math.round(done / ms.length * 100) : 0;
    const stats = courseStats[c.id] || {};
    const card = document.createElement('div');
    card.className = 'course-card' + (c.id === selectedCourseId ? ' selected' : '');
    card.innerHTML = `
      <div class="course-card-name">${c.name}</div>
      <div class="course-card-type">${c.type}${c.platform ? ' · ' + c.platform : ''}</div>
      <div class="course-card-meta">
        <span class="course-status-badge" style="color:${sm.color};border-color:${sm.color}">${c.status}</span>
        <span style="font-size:0.7rem;color:var(--accent)">${fmt(parseFloat(c.price)||0)}</span>
      </div>
      ${ms.length ? `<div class="course-card-progress"><div class="course-card-progress-fill" style="width:${pct}%"></div></div><div style="font-size:0.62rem;color:var(--text-dim);margin-top:3px">${done}/${ms.length} milestones · ${pct}%</div>` : ''}
      ${stats.students ? `<div style="font-size:0.65rem;color:var(--text-dim);margin-top:4px">${stats.students} students · ${fmt(parseFloat(stats.revenue)||0)}</div>` : ''}`;
    card.addEventListener('click', () => { selectedCourseId = c.id; renderCourseCards(); renderCourseDetail(); });
    const del = document.createElement('button');
    del.className = 'pipe-del-btn course-card-del'; del.textContent = '✕';
    del.addEventListener('click', e => {
      e.stopPropagation();
      courses = courses.filter(x => x.id !== c.id);
      save('courses', courses);
      if (selectedCourseId === c.id) { selectedCourseId = null; $('course-detail-panel').style.display = 'none'; }
      renderCourseCards();
    });
    card.appendChild(del);
    col.appendChild(card);
  });
}

function renderCourseDetail() {
  const panel = $('course-detail-panel');
  if (!selectedCourseId) { panel.style.display = 'none'; return; }
  const course = courses.find(c => c.id === selectedCourseId);
  if (!course) { panel.style.display = 'none'; return; }
  panel.style.display = 'block';
  $('course-detail-name').textContent = course.name.toUpperCase();
  const stats = courseStats[selectedCourseId] || {};
  $('course-students').value      = stats.students || '';
  $('course-revenue-input').value = stats.revenue  || '';
  renderMilestones();
}

function renderMilestones() {
  if (!selectedCourseId) return;
  const ms   = courseMilestones[selectedCourseId] || [];
  const done = ms.filter(m => m.done).length;
  const pct  = ms.length ? done / ms.length * 100 : 0;
  $('milestone-progress-bar').style.width = pct + '%';
  const list = $('milestone-list');
  list.innerHTML = '';
  ms.forEach((m, i) => {
    const li = document.createElement('li');
    li.className = 'milestone-item' + (m.done ? ' done' : '');
    const cb = document.createElement('input');
    cb.type = 'checkbox'; cb.checked = m.done; cb.style.accentColor = 'var(--accent)';
    cb.addEventListener('change', () => { ms[i].done = cb.checked; courseMilestones[selectedCourseId] = ms; save('courseMilestones', courseMilestones); renderMilestones(); renderCourseCards(); });
    const text = document.createElement('span'); text.className = 'milestone-text'; text.textContent = m.title;
    const due  = document.createElement('span'); due.className  = 'milestone-due-date'; due.textContent  = m.due || '';
    const del  = document.createElement('button'); del.className = 'pipe-del-btn'; del.textContent = '✕';
    del.addEventListener('click', () => { ms.splice(i, 1); courseMilestones[selectedCourseId] = ms; save('courseMilestones', courseMilestones); renderMilestones(); renderCourseCards(); });
    li.append(cb, text, due, del);
    list.appendChild(li);
  });
}

$('course-add').addEventListener('click', () => {
  const name = $('course-name').value.trim();
  if (!name) return;
  const id = Date.now().toString(36);
  courses.push({ id, name, type: $('course-type').value, price: parseFloat($('course-price').value)||0, platform: $('course-platform').value.trim(), launchDate: $('course-launch').value, status: $('course-status-select').value });
  courseMilestones[id] = [];
  save('courses', courses); save('courseMilestones', courseMilestones);
  renderCourseCards();
  ['course-name','course-price','course-platform'].forEach(x => $(x).value = '');
});

$('course-stats-save').addEventListener('click', () => {
  if (!selectedCourseId) return;
  courseStats[selectedCourseId] = { students: parseInt($('course-students').value)||0, revenue: parseFloat($('course-revenue-input').value)||0 };
  save('courseStats', courseStats); renderCourseCards();
  $('course-stats-save').textContent = 'SAVED ✓';
  setTimeout(() => { $('course-stats-save').textContent = 'SAVE STATS'; }, 1200);
});

$('milestone-add').addEventListener('click', addMilestone);
$('milestone-input').addEventListener('keydown', e => { if (e.key === 'Enter') addMilestone(); });
function addMilestone() {
  if (!selectedCourseId) return;
  const text = $('milestone-input').value.trim(); if (!text) return;
  if (!courseMilestones[selectedCourseId]) courseMilestones[selectedCourseId] = [];
  courseMilestones[selectedCourseId].push({ id: Date.now().toString(36), title: text, done: false, due: $('milestone-due').value });
  save('courseMilestones', courseMilestones);
  $('milestone-input').value = ''; $('milestone-due').value = '';
  renderMilestones(); renderCourseCards();
}

$('course-launch').value = new Date().toISOString().slice(0, 10);
renderCourseCards();
