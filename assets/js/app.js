/* ============================================================
 *  「大圩古镇」文旅主题网站 —— 交互逻辑
 *  功能：分类筛选 / 搜索排序 / 收藏 / 详情 / 行程单 / 主题线路
 *        视频播放（MP4 优先，缺失时图文轮播兜底）/ 数据图表 / 留言
 * ============================================================ */

const $ = (id) => document.getElementById(id);
const KEY = { fav: 'daxu_favs', plan: 'daxu_plan', rate: 'daxu_rates', msg: 'daxu_msgs' };
const readLS = (k, def) => {
  try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? def : v; }
  catch (e) { return def; }
};
const writeLS = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };

let filterCat = 'all';
let keyword = '';
let sortBy = 'rating';
let favOnly = false;

let favs = new Set(readLS(KEY.fav, []));
let rates = readLS(KEY.rate, {});
let messages = readLS(KEY.msg, []);
let plan = readLS(KEY.plan, []).filter((p) => p && findSpot(p.id));

let currentVideo = 0;
let slideTimer = null;

/* ---------------- 基础工具 ---------------- */
function findSpot(id) { return SPOTS.find((s) => s.id === id); }
function catOf(key) { return CATEGORIES.find((c) => c.key === key) || CATEGORIES[0]; }
function starsOf(n) {
  const full = Math.round(n);
  return '★★★★★'.slice(0, full) + '☆☆☆☆☆'.slice(0, 5 - full);
}
function priceShort(s) { return s.price === 0 ? '免费' : '¥' + s.price; }
function monthsText(arr) {
  const a = [...arr].sort((x, y) => x - y);
  return a.join(' / ') + ' 月';
}
function suggestHours(s) {
  const map = { history: 2, nature: 3, culture: 2, food: 1, red: 1.5, leisure: 3 };
  return map[s.cat] || 2;
}

let toastTimer = null;
function toast(msg) {
  const el = $('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2000);
}

/* ---------------- 分类 ---------------- */
function renderCats() {
  const total = SPOTS.length;
  const html = [
    `<button class="cat-card ${filterCat === 'all' ? 'on' : ''}" data-cat="all" style="--c:#f2c14e">
       <span class="cat-icon">${'🧭'}</span>
       <b>全部项目</b>
       <small>${total} 个项目</small>
     </button>`
  ].concat(CATEGORIES.map((c) => {
    const n = SPOTS.filter((s) => s.cat === c.key).length;
    return `<button class="cat-card ${filterCat === c.key ? 'on' : ''}" data-cat="${c.key}" style="--c:${c.color}">
      <span class="cat-icon">${c.icon}</span>
      <b>${c.name}</b>
      <small>${n} 个项目</small>
      <em>${c.desc}</em>
    </button>`;
  })).join('');

  const grid = $('catGrid');
  grid.innerHTML = html;
  grid.querySelectorAll('.cat-card').forEach((btn) => {
    btn.addEventListener('click', () => {
      filterCat = btn.dataset.cat;
      renderCats();
      renderSpots();
      renderStats();
      document.getElementById('spots').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ---------------- 项目列表 ---------------- */
function filtered() {
  const kw = keyword.trim().toLowerCase();
  let list = SPOTS.filter((s) => {
    if (filterCat !== 'all' && s.cat !== filterCat) return false;
    if (favOnly && !favs.has(s.id)) return false;
    if (!kw) return true;
    const hay = [s.name, s.district, s.intro, s.level, ...s.tags].join(' ').toLowerCase();
    return hay.includes(kw);
  });
  if (sortBy === 'price') list.sort((a, b) => a.price - b.price);
  else if (sortBy === 'hot') list.sort((a, b) => b.rating - a.rating || b.months.length - a.months.length);
  else list.sort((a, b) => b.rating - a.rating);
  return list;
}

function renderSpots() {
  const list = filtered();
  const grid = $('spotGrid');
  $('emptyTip').hidden = list.length > 0;
  $('spotTotal').textContent = SPOTS.length;

  grid.innerHTML = list.map((s) => {
    const c = catOf(s.cat);
    const on = favs.has(s.id);
    return `<article class="spot-card">
      <div class="spot-img">
        <img src="${s.img}" alt="${s.name}" loading="lazy">
        <span class="spot-level" style="--c:${c.color}">${c.icon} ${s.level}</span>
        <button class="fav-btn ${on ? 'on' : ''}" onclick="toggleFav('${s.id}')" title="收藏">${on ? '★' : '☆'}</button>
      </div>
      <div class="spot-body">
        <div class="spot-top">
          <h3>${s.name}</h3>
          <span class="price ${s.price === 0 ? 'free' : ''}">${priceShort(s)}</span>
        </div>
        <div class="spot-meta">
          <span class="stars">${starsOf(s.rating)}</span>
          <b>${s.rating.toFixed(1)}</b>
          <span class="dot">·</span><span>${s.district}</span>
        </div>
        <div class="spot-tags">${s.tags.map((t) => `<span>${t}</span>`).join('')}</div>
        <div class="spot-foot">
          <button class="mini-btn" onclick="openDetail('${s.id}')">查看详情</button>
          <button class="mini-btn primary" onclick="addToPlan('${s.id}')">+ 加入行程</button>
        </div>
      </div>
    </article>`;
  }).join('');
}

/* ---------------- 收藏 / 评分 ---------------- */
function toggleFav(id) {
  if (favs.has(id)) { favs.delete(id); toast('已取消收藏'); }
  else { favs.add(id); toast('已收藏 ' + findSpot(id).name); }
  writeLS(KEY.fav, [...favs]);
  renderSpots();
  if ($('detailModal').classList.contains('show')) openDetail(id);
}

function setRate(id, n) {
  rates[id] = n;
  writeLS(KEY.rate, rates);
  openDetail(id);
  toast(`已给「${findSpot(id).name}」打 ${n} 星`);
}

/* ---------------- 详情 ---------------- */
function openDetail(id) {
  const s = findSpot(id);
  if (!s) return;
  const c = catOf(s.cat);
  const on = favs.has(id);
  const my = rates[id] || 0;

  $('detailBody').innerHTML = `
    <img class="detail-img" src="${s.img}" alt="${s.name}">
    <div class="detail-body">
      <span class="detail-cat" style="color:${c.color}">${c.icon} ${c.name}</span>
      <h2>${s.name}</h2>
      <div class="detail-rating">
        <span class="stars">${starsOf(s.rating)}</span><b>${s.rating.toFixed(1)}</b>
        <span class="dot">·</span><span>${s.level}</span>
      </div>
      <p class="detail-intro">${s.intro}</p>
      <h4>必看亮点</h4>
      <ul class="detail-list">${s.highlights.map((h) => `<li>${h}</li>`).join('')}</ul>
      <h4>实用信息</h4>
      <div class="info-grid">
        <div><span>门票</span><b>${s.priceText}</b></div>
        <div><span>开放时间</span><b>${s.hours}</b></div>
        <div><span>所在片区</span><b>${s.district}</b></div>
        <div><span>建议时长</span><b>${suggestHours(s)} 小时</b></div>
        <div><span>适宜月份</span><b>${monthsText(s.months)}</b></div>
      </div>
      <h4>出行贴士</h4>
      <p class="detail-tip">${s.tips}</p>
      <div class="rate-row">
        <span>我的评分</span>
        <div class="rate-stars">${[1, 2, 3, 4, 5].map((n) =>
          `<button class="${n <= my ? 'on' : ''}" onclick="setRate('${s.id}',${n})">★</button>`).join('')}</div>
        <small>${my ? `你打了 ${my} 星` : '点亮星星给它打分'}</small>
      </div>
      <div class="detail-actions">
        <button class="btn btn-primary" onclick="addToPlan('${s.id}')">+ 加入行程单</button>
        <button class="btn btn-ghost" onclick="toggleFav('${s.id}')">${on ? '★ 已收藏' : '☆ 收藏'}</button>
      </div>
    </div>`;
  $('detailModal').classList.add('show');
  $('detailOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeDetail() {
  $('detailModal').classList.remove('show');
  $('detailOverlay').classList.remove('show');
  document.body.style.overflow = '';
}

/* ---------------- 行程单 ---------------- */
function addToPlan(id) {
  if (!findSpot(id)) return;
  if (plan.some((p) => p.id === id)) { toast('行程单里已经有这项了'); openPlan(); return; }
  plan.push({ id });
  writeLS(KEY.plan, plan);
  renderPlan();
  toast('已加入：' + findSpot(id).name);
  openPlan();
}

function removeFromPlan(id) {
  plan = plan.filter((p) => p.id !== id);
  writeLS(KEY.plan, plan);
  renderPlan();
}

function movePlan(i, dir) {
  const j = i + dir;
  if (j < 0 || j >= plan.length) return;
  [plan[i], plan[j]] = [plan[j], plan[i]];
  writeLS(KEY.plan, plan);
  renderPlan();
}

function planSummary() {
  const items = plan.map((p) => findSpot(p.id)).filter(Boolean);
  const hours = items.reduce((a, s) => a + suggestHours(s), 0);
  const fee = items.reduce((a, s) => a + (s.price || 0), 0);
  const days = Math.max(1, Math.ceil(hours / 6));
  return { count: items.length, hours, fee, days };
}

function renderPlan() {
  const box = $('planList');
  $('planCount').textContent = plan.length;

  if (!plan.length) {
    box.innerHTML = '<p class="empty">行程单还是空的，去项目列表点「+ 加入行程」吧～</p>';
    $('planSummary').textContent = '还没有添加项目';
    return;
  }

  box.innerHTML = plan.map((p, i) => {
    const s = findSpot(p.id);
    if (!s) return '';
    return `<div class="plan-item">
      <span class="plan-idx">${i + 1}</span>
      <img src="${s.img}" alt="">
      <div class="plan-txt">
        <b>${s.name}</b>
        <small>${s.district} · ${priceShort(s)} · 约 ${suggestHours(s)} 小时</small>
      </div>
      <div class="plan-ops">
        <button onclick="movePlan(${i},-1)" title="上移">↑</button>
        <button onclick="movePlan(${i},1)" title="下移">↓</button>
        <button onclick="removeFromPlan('${s.id}')" title="删除">✕</button>
      </div>
    </div>`;
  }).join('');

  const sum = planSummary();
  $('planSummary').textContent =
    `共 ${sum.count} 站 · 建议 ${sum.days} 天 · 游览约 ${sum.hours} 小时 · 门票合计 ¥${sum.fee}`;
}

function openPlan() {
  $('planDrawer').classList.add('show');
  $('planOverlay').classList.add('show');
}
function closePlan() {
  $('planDrawer').classList.remove('show');
  $('planOverlay').classList.remove('show');
}

function clearPlan() {
  if (!plan.length) return;
  plan = [];
  writeLS(KEY.plan, plan);
  renderPlan();
  toast('行程单已清空');
}

function exportPlan() {
  if (!plan.length) { toast('行程单还是空的'); return; }
  const lines = ['大圩古镇 · 我的行程单', '生成时间：' + new Date().toLocaleString(), ''];
  plan.forEach((p, i) => {
    const s = findSpot(p.id);
    if (!s) return;
    lines.push(`${i + 1}. ${s.name}（${s.district}）`);
    lines.push(`   门票：${s.priceText} | 开放：${s.hours} | 建议 ${suggestHours(s)} 小时`);
    lines.push(`   贴士：${s.tips}`);
    lines.push('');
  });
  const sum = planSummary();
  lines.push(`共 ${sum.count} 站，建议 ${sum.days} 天，游览约 ${sum.hours} 小时，门票合计 ¥${sum.fee}`);
  lines.push('—— 数据与建议仅供参考，出行前请核对官方公告 ——');

  const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `大圩行程单_${Date.now()}.txt`;
  a.click();
  URL.revokeObjectURL(a.href);
  toast('行程单已导出');
}

/* ---------------- 主题线路 ---------------- */
function renderRoutes() {
  $('routeList').innerHTML = ROUTES.map((r) => {
    const steps = r.plan.map((p) => `
      <li>
        <b>${p.title}</b>
        <span>${p.spots.map((id) => (findSpot(id) || {}).name || id).join(' → ')}</span>
        <small>${p.note}</small>
      </li>`).join('');
    return `<div class="route-card" style="--c:${r.color}">
      <div class="route-head">
        <h3>${r.name}</h3>
        <span class="route-tag">${r.days} 天 · ${r.tag}</span>
      </div>
      <p class="route-desc">${r.desc}</p>
      <ol class="route-steps">${steps}</ol>
      <button class="btn btn-ghost" onclick="loadRoute('${r.id}')">一键载入行程单</button>
    </div>`;
  }).join('');
}

function loadRoute(id) {
  const r = ROUTES.find((x) => x.id === id);
  if (!r) return;
  plan = [];
  r.plan.forEach((step) => step.spots.forEach((sid) => {
    if (findSpot(sid) && !plan.some((p) => p.id === sid)) plan.push({ id: sid });
  }));
  writeLS(KEY.plan, plan);
  renderPlan();
  openPlan();
  toast(`已载入「${r.name}」，共 ${plan.length} 站`);
}

/* ---------------- 影音中心 ---------------- */
function renderVideos() {
  $('videoList').innerHTML = VIDEOS.map((v, i) => `
    <button class="video-item ${i === currentVideo ? 'on' : ''}" onclick="playVideo(${i})">
      <span class="vi-idx">${String(i + 1).padStart(2, '0')}</span>
      <span class="vi-txt"><b>${v.title}</b><small>${v.duration} · ${v.scenes.length} 个镜头</small></span>
      <span class="vi-play">▶</span>
    </button>`).join('');
}

function stopSlideshow() {
  clearInterval(slideTimer);
  slideTimer = null;
  const box = $('slideshow');
  box.hidden = true;
  box.style.backgroundImage = '';
}

function showSlideshow(v) {
  stopSlideshow();
  const video = $('playerVideo');
  video.pause();
  video.hidden = true;
  video.removeAttribute('src');

  const box = $('slideshow');
  box.hidden = false;
  $('playerMode').textContent = '图文轮播（视频文件缺失）';
  let idx = 0;
  const paint = () => {
    const s = v.scenes[idx % v.scenes.length];
    box.style.backgroundImage = `url('${s.img}')`;
    $('slideCaption').textContent = s.cap;
    $('slideBar').style.width = ((idx % v.scenes.length) + 1) / v.scenes.length * 100 + '%';
    idx++;
  };
  paint();
  slideTimer = setInterval(paint, 4000);
}

function playVideo(i, autoplay = true) {
  currentVideo = i;
  const v = VIDEOS[i];
  const video = $('playerVideo');

  $('playerTitle').textContent = v.title;
  $('playerDesc').textContent = v.desc;
  renderVideos();

  stopSlideshow();
  video.hidden = false;
  $('playerMode').textContent = '视频播放';

  video.onerror = () => showSlideshow(v);
  video.src = v.src;
  video.poster = v.poster;
  video.muted = true;

  if (autoplay) {
    const p = video.play();
    if (p && p.catch) p.catch(() => {});
  }
}

/* ---------------- 数据洞察 ---------------- */
function renderStats() {
  const free = SPOTS.filter((s) => s.price === 0).length;
  const paid = SPOTS.filter((s) => s.price > 0);
  const avgRating = SPOTS.reduce((a, s) => a + s.rating, 0) / SPOTS.length;
  const avgPrice = paid.length ? Math.round(paid.reduce((a, s) => a + s.price, 0) / paid.length) : 0;

  $('statCards').innerHTML = [
    { k: SPOTS.length, u: '个', t: '文旅项目' },
    { k: free, u: '个', t: '免费开放' },
    { k: avgRating.toFixed(2), u: '分', t: '平均评分' },
    { k: '¥' + avgPrice, u: '', t: '收费项目均价' }
  ].map((x) => `<div class="stat-card"><b>${x.k}<i>${x.u}</i></b><span>${x.t}</span></div>`).join('');

  Chart.columns($('chartCat'),
    CATEGORIES.map((c) => ({ label: c.name, value: SPOTS.filter((s) => s.cat === c.key).length, color: c.color })));

  const byDistrict = {};
  SPOTS.forEach((s) => { byDistrict[s.district] = (byDistrict[s.district] || 0) + 1; });
  const dTop = Object.entries(byDistrict).sort((a, b) => b[1] - a[1]).slice(0, 8)
    .map(([k, v]) => ({ label: k, value: v, color: '#5b8def' }));
  Chart.bars($('chartDistrict'), dTop, { max: Math.max(...dTop.map((d) => d.value), 1) });

  const rTop = [...SPOTS].sort((a, b) => b.rating - a.rating).slice(0, 8)
    .map((s) => ({ label: s.name.length > 7 ? s.name.slice(0, 7) + '…' : s.name, value: Math.round(s.rating * 20), color: '#f2a03d' }));
  Chart.bars($('chartRating'), rTop, { max: 100 });

  const months = [];
  for (let m = 1; m <= 12; m++) months.push({ label: m + '月', value: SPOTS.filter((s) => s.months.includes(m)).length, color: '#3fae86' });
  Chart.columns($('chartMonth'), months);
}

/* ---------------- 贴士 / 留言 ---------------- */
function renderTips() {
  $('tipList').innerHTML = TIPS.map((t) => `
    <div class="tip-card">
      <span class="tip-icon">${t.icon}</span>
      <h4>${t.title}</h4>
      <p>${t.text}</p>
    </div>`).join('');
}

function renderMessages() {
  const list = [...messages].reverse();
  $('msgList').innerHTML = list.length
    ? list.map((m) => `<div class="msg-item">
        <div class="msg-head"><b>${m.name || '匿名游客'}</b><small>${m.time || ''}</small></div>
        <p>${m.text}</p>
      </div>`).join('')
    : '<p class="empty">还没有留言，来说说你最想去大圩的哪个地方吧～</p>';
}

/* ---------------- 初始化 ---------------- */
function init() {
  document.title = `${SITE.name} · 我的家乡文旅网站`;
  $('siteName').textContent = SITE.name;
  $('siteSubtitle').textContent = SITE.subtitle;
  $('siteSlogan').textContent = SITE.slogan;
  $('siteIntro').textContent = SITE.intro;
  $('footName').textContent = SITE.name;

  $('stSpots').textContent = SPOTS.length;
  $('stFree').textContent = SPOTS.filter((s) => s.price === 0).length;
  $('stCats').textContent = CATEGORIES.length;
  $('stRoutes').textContent = ROUTES.length;

  renderCats();
  renderSpots();
  renderRoutes();
  renderVideos();
  renderStats();
  renderTips();
  renderMessages();
  renderPlan();

  // 首屏视频：先显示海报，用户点击列表再播放
  playVideo(0, false);

  $('searchInput').addEventListener('input', (e) => { keyword = e.target.value; renderSpots(); });
  $('sortSel').addEventListener('change', (e) => { sortBy = e.target.value; renderSpots(); });
  $('btnFavFilter').addEventListener('click', (e) => {
    favOnly = !favOnly;
    e.currentTarget.classList.toggle('on', favOnly);
    e.currentTarget.textContent = favOnly ? '★ 只看收藏' : '☆ 只看收藏';
    renderSpots();
  });

  $('btnPlan').addEventListener('click', openPlan);
  $('btnClosePlan').addEventListener('click', closePlan);
  $('planOverlay').addEventListener('click', closePlan);
  $('btnClear').addEventListener('click', clearPlan);
  $('btnExport').addEventListener('click', exportPlan);

  $('btnCloseDetail').addEventListener('click', closeDetail);
  $('detailOverlay').addEventListener('click', closeDetail);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeDetail(); closePlan(); }
  });

  $('msgForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const text = $('msgText').value.trim();
    if (!text) { toast('先写点什么吧～'); return; }
    messages.push({
      name: $('msgName').value.trim() || '匿名游客',
      text,
      time: new Date().toLocaleString('zh-CN', { hour12: false })
    });
    writeLS(KEY.msg, messages);
    $('msgText').value = '';
    renderMessages();
    toast('留言已发布');
  });

  window.addEventListener('scroll', () => {
    $('nav').classList.toggle('solid', window.scrollY > 40);
  });

  let rt = null;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(renderStats, 200);
  });
}

document.addEventListener('DOMContentLoaded', init);
