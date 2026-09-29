// CHROMA FM — main orchestration.
// One transition philosophy: every scene ends on a flat graphic state that is
// exactly the next scene's first frame (circle → field, rect → poster,
// line → waveform → bands → disc → zero → circle).
import './style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { C, BAND_COLORS, BAND_LIGHT, SECTOR_NAMES, buildDisc, buildBloom, buildLoaderDial, buildRings, el as svgEl } from './graphics.js';
import { initHeat } from './heat.js';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load' });
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const vw = () => innerWidth;
const vh = () => innerHeight;
const margin = () => Math.max(20, Math.min(44, vw() * 0.028));
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const coverR = (x, y) => Math.max(Math.hypot(x, y), Math.hypot(vw() - x, y), Math.hypot(x, vh() - y), Math.hypot(vw() - x, vh() - y));
const QA = new URLSearchParams(location.search).has('qa');

const WIPE_HIDE = 'inset(-20% 100% -20% 0%)';
const WIPE_SHOW = 'inset(-20% -2% -20% 0%)';
const WIPE_OUT = 'inset(-20% -2% -20% 100%)';

/* ------------------------------------------------------------------ utils */
function split(node) {
  const text = node.textContent;
  node.innerHTML = [...text]
    .map((c) => (c === ' ' ? '<span class="char sp">&nbsp;</span>' : `<span class="char">${c.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</span>`))
    .join('');
  return $$('.char', node);
}
const chars = (sel) => $$(`${sel} .char`);

// Fit display words to a fraction of viewport width; optionally stretch
// vertically so cap height hits a fraction of viewport height.
function fitAll() {
  $$('[data-fit]').forEach((n) => {
    n.style.fontSize = '100px';
    const w = n.getBoundingClientRect().width / (n._sx || 1);
    const size = (100 * parseFloat(n.dataset.fit) * vw()) / Math.max(1, n.offsetWidth || w);
    n.style.fontSize = `${size.toFixed(2)}px`;
    if (n.dataset.cap) {
      const sy = clamp((parseFloat(n.dataset.cap) * vh()) / (size * 0.72), 0.7, 2.8);
      n.style.setProperty('--sy', sy.toFixed(3));
    }
  });
}
// charCenterOffset: distance of a char's centre from its word's centre (px, untransformed)
const dx = (c) => c.offsetLeft + c.offsetWidth / 2 - c.offsetParent.offsetWidth / 2;

/* ------------------------------------------------------------------ lenis */
const lenis = new Lenis({ lerp: 0.105, wheelMultiplier: 0.95, smoothWheel: true });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((t) => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);
lenis.stop();
let vSmooth = 0; // smoothed scroll velocity (px / frame)

/* ------------------------------------------------------------------ chapters registry */
const CHAPTERS = []; // { no, name, f0, f1, range: () => [s,e] }
function chapter(no, name, f0, f1, range) {
  CHAPTERS.push({ no, name, f0, f1, range, s: 0, e: 0 });
}
const stRange = (st, p0 = 0, p1 = 1) => () => [st.start + (st.end - st.start) * p0, st.start + (st.end - st.start) * p1];

/* ------------------------------------------------------------------ pinned timeline helper */
let zIndex = 40;
function pinTL(sec, { k = 1, hide = true, st = {} } = {}) {
  const stage = $(':scope > .stage', sec);
  sec.style.zIndex = String(zIndex--);
  let tl;
  const cfg = {
    trigger: sec,
    start: 'top top',
    end: () => `+=${Math.round(tl.duration() * vh() * k)}`,
    pin: stage,
    scrub: true,
    invalidateOnRefresh: true,
    ...st,
  };
  if (hide) {
    cfg.onLeave = () => { stage.style.opacity = '0'; stage.style.pointerEvents = 'none'; };
    cfg.onEnterBack = () => { stage.style.opacity = ''; stage.style.pointerEvents = ''; };
  }
  tl = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: cfg });
  return tl;
}
const wipeIn = (tl, els, t, d = 0.28, stagger = 0.05) =>
  tl.fromTo(els, { clipPath: WIPE_HIDE }, { clipPath: WIPE_SHOW, duration: d, ease: 'power2.out', stagger }, t);
const wipeOut = (tl, els, t, d = 0.24, stagger = 0.04) => tl.to(els, { clipPath: WIPE_OUT, duration: d, ease: 'power2.in', stagger }, t);

/* ==================================================================== HUD */
const odo = $('#odo');
const ODO_SLOTS = [];
'000.0'.split('').forEach((ch) => {
  if (ch === '.') {
    const p = document.createElement('span');
    p.className = 'pt';
    p.textContent = '.';
    odo.appendChild(p);
    return;
  }
  const d = document.createElement('span');
  d.className = 'd';
  const col = document.createElement('i');
  col.innerHTML = Array.from({ length: 10 }, (_, n) => `<b>${n}</b>`).join('');
  d.appendChild(col);
  odo.appendChild(d);
  ODO_SLOTS.push({ col, pos: 0 });
});
let freq = 0;
let freqPrev = 0;
let tuning = 0;
function odoTarget(v) {
  const s = Math.round(clamp(v, 0, 100) * 10);
  const str = String(Math.floor(s / 10)).padStart(3, '0') + String(s % 10);
  return str.split('').map(Number);
}
function tickOdo() {
  const tg = odoTarget(freq);
  ODO_SLOTS.forEach((sl, i) => {
    sl.pos += (tg[i] - sl.pos) * 0.2;
    if (Math.abs(tg[i] - sl.pos) < 0.002) sl.pos = tg[i];
    sl.col.style.transform = `translateY(${(-sl.pos * 1.45).toFixed(3)}em)`;
  });
}

const hud = $('#hud');
const dial = $('#dial');
const needle = $('#needle');
const hudCh = $('#hud-ch');
let curChapter = -1;
function setChapterLabel(i) {
  if (i === curChapter) return;
  curChapter = i;
  const c = CHAPTERS[i];
  const txt = c ? `CH-${String(c.no).padStart(2, '0')} — ${c.name}` : 'CH-00 — SEARCHING';
  gsap.to(hudCh, {
    yPercent: -100, duration: 0.18, ease: 'power2.in', overwrite: true,
    onComplete: () => { hudCh.textContent = txt; gsap.fromTo(hudCh, { yPercent: 100 }, { yPercent: 0, duration: 0.3, ease: 'power2.out' }); },
  });
  $$('.ix-row').forEach((r, j) => r.classList.toggle('on', j === i));
}
function toneAt(x, y) {
  const n = document.elementFromPoint(x, y);
  const t = n && n.closest('[data-tone]');
  return t ? t.dataset.tone : 'light';
}
function buildDialTicks() {
  $$('.dial-tick', dial).forEach((n) => n.remove());
  const total = ScrollTrigger.maxScroll(window) || 1;
  const w = dial.clientWidth;
  for (let i = 0; i <= 100; i++) {
    const t = document.createElement('div');
    t.className = 'dial-tick';
    t.style.left = `${(i / 100) * w}px`;
    t.style.opacity = i % 10 === 0 ? '0.55' : '0.25';
    dial.appendChild(t);
  }
  CHAPTERS.forEach((c) => {
    const t = document.createElement('div');
    t.className = 'dial-tick major';
    t.style.left = `${(c.s / total) * w}px`;
    t.innerHTML = `<span>${c.f0.toFixed(1)}</span>`;
    dial.appendChild(t);
  });
}
function updateFreq() {
  const y = lenis.scroll;
  let idx = 0;
  for (let i = 0; i < CHAPTERS.length; i++) if (y >= CHAPTERS[i].s - 1) idx = i;
  const c = CHAPTERS[idx];
  const n = CHAPTERS[idx + 1];
  const p = clamp((y - c.s) / Math.max(1, c.e - c.s), 0, 1);
  let v;
  if (c.f1 !== c.f0) v = lerp(c.f0, c.f1, p);
  else {
    const q = clamp((p - 0.82) / 0.18, 0, 1);
    const e = q * q * (3 - 2 * q);
    v = n ? lerp(c.f0, n.f0, e) : c.f0;
    if (n && n.f0 === c.f0) v = c.f0;
  }
  freq = v;
  tuning = lerp(tuning, clamp(Math.abs(freq - freqPrev) * 6, 0, 1), 0.15);
  freqPrev = freq;
  setChapterLabel(idx);
  const total = ScrollTrigger.maxScroll(window) || 1;
  needle.style.transform = `translateX(${((y / total) * dial.clientWidth).toFixed(1)}px)`;
}

/* ==================================================================== cursor */
const cursor = $('#cursor');
const cLbl = $('.lbl', cursor);
const fine = matchMedia('(pointer: fine)').matches;
let mx = -100, my = -100;
if (fine) {
  document.body.classList.add('has-cursor');
  const qx = gsap.quickTo(cursor, 'x', { duration: 0.32, ease: 'power2.out' });
  const qy = gsap.quickTo(cursor, 'y', { duration: 0.32, ease: 'power2.out' });
  addEventListener('pointermove', (e) => { mx = e.clientX; my = e.clientY; qx(mx); qy(my); }, { passive: true });
  document.addEventListener('pointerover', (e) => {
    const t = e.target.closest('[data-cursor]');
    cursor.classList.toggle('is-active', !!t);
    if (t) cLbl.textContent = t.dataset.cursor;
  });
}

/* ==================================================================== sound */
const sound = { ctx: null, on: false };
function initSound() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination);
  const len = ctx.sampleRate * 2;
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  const noise = ctx.createBufferSource(); noise.buffer = buf; noise.loop = true;
  const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1800; bp.Q.value = 0.6;
  const nGain = ctx.createGain(); nGain.gain.value = 0.02;
  noise.connect(bp).connect(nGain).connect(master);
  const o1 = ctx.createOscillator(); o1.type = 'sine';
  const o2 = ctx.createOscillator(); o2.type = 'triangle';
  const tGain = ctx.createGain(); tGain.gain.value = 0.05;
  o1.connect(tGain); o2.connect(tGain); tGain.connect(master);
  noise.start(); o1.start(); o2.start();
  Object.assign(sound, { ctx, master, nGain, tGain, o1, o2, bp });
}
function toggleSound() {
  if (!sound.ctx) initSound();
  sound.on = !sound.on;
  if (sound.ctx.state === 'suspended') sound.ctx.resume();
  sound.master.gain.setTargetAtTime(sound.on ? 0.22 : 0, sound.ctx.currentTime, 0.12);
  $('#sound-btn').textContent = sound.on ? 'SOUND ON' : 'SOUND OFF';
}
function tickSound() {
  if (!sound.on) return;
  const t = sound.ctx.currentTime;
  const base = 70 + freq * 3.3;
  sound.o1.frequency.setTargetAtTime(base, t, 0.08);
  sound.o2.frequency.setTargetAtTime(base * 1.5, t, 0.08);
  sound.nGain.gain.setTargetAtTime(0.015 + tuning * 0.35, t, 0.05);
  sound.tGain.gain.setTargetAtTime(0.06 * (1 - tuning), t, 0.05);
  sound.bp.frequency.setTargetAtTime(900 + freq * 22, t, 0.1);
}

/* ==================================================================== index / actions */
const ix = $('#index');
let ixOpen = false;
function buildIndex() {
  $('#ix-list').innerHTML = CHAPTERS.map(
    (c) => `<div class="ix-row" data-cursor="TUNE" data-ch="${c.no}"><span class="mono">CH-${String(c.no).padStart(2, '0')}</span><span class="disp">${c.name}</span><span class="mono f">${c.f0.toFixed(1).padStart(5, '0')} MHZ</span></div>`
  ).join('');
  $$('.ix-row').forEach((r, i) => r.addEventListener('click', () => {
    toggleIndex(false);
    lenis.scrollTo(CHAPTERS[i].s + 2, { immediate: true, force: true });
  }));
}
function toggleIndex(force) {
  ixOpen = typeof force === 'boolean' ? force : !ixOpen;
  const at = 'at 92% 2%';
  if (ixOpen) {
    ix.classList.add('open');
    lenis.stop();
    gsap.fromTo(ix, { clipPath: `circle(0% ${at})` }, { clipPath: `circle(150% ${at})`, duration: 0.9, ease: 'power3.inOut' });
    gsap.fromTo($$('.ix-row .disp'), { yPercent: 100 }, { yPercent: 0, duration: 0.6, ease: 'power4.out', stagger: 0.025, delay: 0.25 });
  } else {
    gsap.to(ix, { clipPath: `circle(0% ${at})`, duration: 0.6, ease: 'power3.inOut', onComplete: () => ix.classList.remove('open') });
    lenis.start();
  }
}
document.addEventListener('click', (e) => {
  const a = e.target.closest('[data-action]');
  if (!a) return;
  e.preventDefault();
  const act = a.dataset.action;
  if (act === 'index') toggleIndex();
  else if (act === 'sound') toggleSound();
  else if (act === 'credits') $('#credits').classList.toggle('open');
  else if (act === 'top' || act === 'replay') {
    if (ixOpen) toggleIndex(false);
    lenis.scrollTo(0, { immediate: true, force: true });
    if (act === 'replay') introOpening();
  }
});
addEventListener('keydown', (e) => { if (e.key === 'Escape' && ixOpen) toggleIndex(false); });

/* ==================================================================== 00 LOADER */
function runLoader(ready) {
  const svg = buildLoaderDial($('#ld-svg'));
  const rot = gsap.to($('.dial-rot', svg), { rotation: 360, svgOrigin: '0 0', duration: 16, ease: 'none', repeat: -1 });
  const needleSweep = gsap.to($('.dial-needle', svg), { rotation: 300, svgOrigin: '0 0', duration: 2.6, ease: 'power3.inOut', yoyo: true, repeat: -1 });
  const lines = $$('#ld-list span');
  gsap.set(lines, { yPercent: 100 });
  const ldChars = split($('#ld-word'));
  gsap.from(ldChars, { yPercent: 100, scaleY: 0, transformOrigin: '50% 100%', duration: 0.9, ease: 'power4.out', stagger: 0.05 });
  gsap.fromTo('#ld-fm', { clipPath: WIPE_HIDE }, { clipPath: WIPE_SHOW, duration: 0.8, ease: 'power3.out', delay: 0.4 });
  const pct = { v: 0 };
  const tl = gsap.timeline();
  lines.forEach((l, i) => tl.to(l, { yPercent: 0, duration: 0.35, ease: 'power3.out' }, 0.25 + i * (QA ? 0.05 : 0.38)));
  tl.to(pct, { v: 100, duration: QA ? 0.4 : 2.4, ease: 'power2.inOut', onUpdate: () => { $('#ld-pct').textContent = String(Math.round(pct.v)).padStart(3, '0'); } }, 0);
  return Promise.all([ready, new Promise((r) => tl.eventCallback('onComplete', r))]).then(
    () =>
      new Promise((resolve) => {
        const last = $('#ld-last');
        const out = gsap.timeline({ onComplete: resolve });
        out.to(last, { yPercent: -100, duration: 0.2, ease: 'power2.in' })
          .add(() => { last.textContent = 'SIGNAL FOUND.'; last.style.color = C.red; })
          .fromTo(last, { yPercent: 100 }, { yPercent: 0, duration: 0.3, ease: 'power3.out' })
          .add(() => needleSweep.pause(), '+=0.1')
          .to($('.dial-needle', svg), { rotation: 0, svgOrigin: '0 0', duration: 0.5, ease: 'power3.inOut' }, '<')
          .to([...ldChars, '#ld-fm'], { scaleY: 0, transformOrigin: '50% 0%', duration: 0.45, ease: 'power3.in', stagger: 0.025 }, '+=0.25')
          .to($$('#loader .mono'), { clipPath: WIPE_OUT, duration: 0.3, ease: 'power2.in' }, '<')
          .to('.ld-fill', { scale: 1, duration: 0.55, ease: 'power3.inOut' }, '-=0.1')
          .add('grow')
          .to(['.ld-fill', '.ld-dial'], {
            scale: () => (coverR(vw() / 2, vh() / 2) * 2) / $('.ld-fill').offsetWidth + 0.05,
            duration: 1.25, ease: 'power3.inOut',
          }, 'grow')
          .add(() => introOpening(), 'grow+=0.7')
          .add(() => { rot.kill(); $('#loader').style.display = 'none'; });
      })
  );
}

/* ==================================================================== 01 OPENING */
function introOpening() {
  gsap.fromTo(chars('#o-listen'), { scaleY: 0, transformOrigin: '50% 0%' }, { scaleY: 1, duration: 1.1, ease: 'power4.out', stagger: 0.05, overwrite: true });
  gsap.fromTo(chars('#o-eyes'), { scaleY: 0, transformOrigin: '50% 100%' }, { scaleY: 1, duration: 1.1, ease: 'power4.out', stagger: 0.05, delay: 0.25, overwrite: true });
  gsap.fromTo('#o-circle', { clipPath: 'circle(0% at 50% 50%)' }, { clipPath: 'circle(50% at 50% 50%)', duration: 1.2, ease: 'power4.out', delay: 0.1 });
  gsap.fromTo(['#o-with', '#o-m1', '#o-m2'], { clipPath: WIPE_HIDE }, { clipPath: WIPE_SHOW, duration: 0.6, ease: 'power2.out', stagger: 0.08, delay: 0.5 });
}
function ch01() {
  const sec = $('#c01');
  $$('[data-split]', sec).forEach(split);
  const circ = $('#o-circle');
  const circCover = () => {
    const r = circ.offsetWidth / 2;
    const cx = circ.offsetLeft + r;
    const cy = circ.offsetTop + r;
    return (coverR(cx, cy) / r) * 1.03;
  };
  const tl = pinTL(sec, { k: 1.1 });
  tl.to('#o-listen', { x: () => -vw() * 0.06, duration: 0.5, ease: 'power2.out' }, 0)
    .to('#o-eyes', { x: () => vw() * 0.06, duration: 0.5, ease: 'power2.out' }, 0)
    .to(circ, { scale: 1.35, duration: 0.5, ease: 'power2.inOut' }, 0)
    .to('#o-listen', { x: () => -vw() * 1.1, duration: 0.8, ease: 'power3.in' }, 0.5)
    .to('#o-eyes', { x: () => vw() * 0.9, duration: 0.8, ease: 'power3.in' }, 0.5)
    .to(['#o-with', '#o-m1', '#o-m2'], { x: () => -vw() * 0.7, duration: 0.7, ease: 'power3.in', stagger: 0.04 }, 0.5)
    .to(circ, { scale: circCover, duration: 0.85, ease: 'power3.inOut' }, 0.5)
    .to({}, { duration: 0.15 });
  chapter(1, 'OPENING', 0, 0, stRange(tl.scrollTrigger));
}

/* ==================================================================== 02 RED + 03 CITRUS */
function ch02() {
  const sec = $('#c02');
  $$('[data-split]', sec).forEach(split);
  $$('[data-col]', sec).forEach((n) => { n.innerHTML = n.textContent.trim().split(/\s+/).map((t) => `<span>${t}</span>`).join(''); });
  gsap.set(['#r-num', '[data-cit]'], { xPercent: -50, yPercent: -50 });
  const yl = $('#cit-yellow');
  gsap.set(yl, { '--r': '0px', '--x': '64%', '--y': '140%' });
  const numC = chars('#r-num');
  const citA = $$('.char', $('#cit-base [data-cit]'));
  const citB = $$('.char', $('#cit-yellow [data-cit]'));
  const rules = ['#cit-rule1', '#cit-rule2', '#cit-rule3'];
  const cols = $$('[data-col]', sec);
  const m02 = ['#r-m1', '#r-m2'];
  const m03 = ['#cit-m1', '#cit-m2', '#cit-m3'];
  gsap.set(rules, { scaleX: 0 });
  gsap.set(cols, { clipPath: 'inset(0% 0% 100% 0%)' });

  const tl = pinTL(sec);
  // 17.4 rises out of the red
  tl.fromTo(numC, { yPercent: 130 }, { yPercent: 0, duration: 0.55, ease: 'power4.out', stagger: 0.07 }, 0);
  wipeIn(tl, m02, 0.2);
  // 17.4 compresses into a cream line, the line retracts to the right edge
  tl.to('#r-num', { scaleY: 0.012, duration: 0.45, ease: 'power3.inOut' }, 1.0)
    .to('#r-num', { scaleX: 0, transformOrigin: '100% 50%', duration: 0.35, ease: 'power3.in' }, 1.42);
  // CITRUS travels in horizontally, edge to edge
  [citA, citB].forEach((set) =>
    tl.fromTo(set, { x: (i) => vw() * (1.05 + i * 0.09) }, { x: 0, duration: 0.7, ease: 'power4.out', stagger: 0.025 }, 1.5)
  );
  // yellow circle rises behind it
  tl.to(yl, { '--y': '46%', '--r': () => `${Math.min(vw() * 0.3, vh() * 0.52)}px`, duration: 0.7, ease: 'power3.out' }, 1.75);
  wipeOut(tl, m02, 1.95);
  // ——— 03 CITRUS POSTER ———
  tl.to(rules, { scaleX: 1, duration: 0.45, ease: 'power3.inOut', stagger: 0.08 }, 2.35);
  wipeIn(tl, m03, 2.55);
  tl.to(cols, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.5, ease: 'power3.inOut' }, 2.4);
  // slow drift: circle moves opposite to the scroll, letters shift independently
  tl.to(yl, { '--y': '60%', '--x': '58%', duration: 1.9, ease: 'none' }, 2.4);
  tl.to(cols, { yPercent: -38, duration: 2.4, ease: 'none' }, 2.3);
  const jit = citA.map((_, i) => ({ y: [-3.2, 2.4, -1.4, 3.4, -2.6, 1.8][i % 6], x: [0.4, -0.3, 0.5, -0.5, 0.2, -0.4][i % 6] }));
  [citA, citB].forEach((set) =>
    tl.to(set, { yPercent: (i) => jit[i].y * 4.5, x: (i) => (jit[i].x * vw()) / 100 - vw() * 0.055, duration: 1.9, ease: 'power1.inOut' }, 2.4)
  );
  // exit: circle floods the frame yellow → poster wall begins on yellow
  wipeOut(tl, m03, 4.2);
  tl.to(rules, { scaleX: 0, transformOrigin: '100% 50%', duration: 0.35, ease: 'power3.in', stagger: 0.05 }, 4.2)
    .to(cols, { clipPath: 'inset(100% 0% 0% 0%)', duration: 0.35, ease: 'power3.in' }, 4.2)
    .to(yl, {
      '--r': () => `${coverR(vw() * 0.58, vh() * 0.6) * 1.02}px`, duration: 0.7, ease: 'power3.inOut',
    }, 4.3);
  [citA, citB].forEach((set) => tl.to(set, { yPercent: 160, duration: 0.45, ease: 'power3.in', stagger: 0.03 }, 4.55));
  tl.to({}, { duration: 0.15 });
  chapter(2, 'RED TAKEOVER', 17.4, 17.4, stRange(tl.scrollTrigger, 0, 0.47));
  chapter(3, 'CITRUS POSTER', 17.4, 17.4, stRange(tl.scrollTrigger, 0.47, 1));
}

/* ==================================================================== 04 POSTER WALL */
function ch04() {
  const sec = $('#c04');
  const track = $('#wall-track');
  const flood = $('#wall-flood');
  const posters = $$('.poster', track);
  const p1 = posters[0];
  const x0 = () => vw() / 2 - p1.offsetWidth / 2;
  const xEnd = () => -track.scrollWidth - 40;
  const travel = () => x0() - xEnd();
  const metas = ['#wall-m1', '#wall-m2', '#wall-m3', '#wall-m4'];
  gsap.set(track, { x: x0 });
  gsap.set(flood, { left: 0, top: 0, width: '100%', height: '100%' });

  let tl;
  const TRACK_UNITS = 3;
  tl = pinTL(sec, { st: { end: () => `+=${Math.round(vh() * 1.25 + travel())}` } });
  tl.to(flood, {
    left: () => x0(), top: () => track.offsetTop, width: () => p1.offsetWidth, height: () => track.offsetHeight,
    duration: 0.6, ease: 'power3.inOut',
  }, 0)
    .set(flood, { autoAlpha: 0 }, 0.6)
    .fromTo($$('.pm', p1), { y: () => vh() * 0.8 }, { y: 0, duration: 0.3, ease: 'power4.out', stagger: 0.025, immediateRender: true }, 0.6);
  wipeIn(tl, metas, 0.55);
  tl.fromTo(track, { x: x0 }, { x: xEnd, duration: TRACK_UNITS, ease: 'none' }, 0.95);
  wipeOut(tl, metas, 0.95 + TRACK_UNITS - 0.1);
  tl.to({}, { duration: 0.2 });

  // perspective drift + a hair of stretch at speed; settles immediately
  const setters = posters.map((p) => ({ p, rot: 0 }));
  gsap.set(posters, { transformPerspective: 1400 });
  gsap.ticker.add(() => {
    if (!tl.scrollTrigger.isActive) return;
    const v = clamp(vSmooth, -60, 60);
    const rotY = clamp(-v * 0.09, -3, 3);
    const sx = 1 + Math.min(Math.abs(v) * 0.0006, 0.03);
    const cx = vw() / 2;
    const tx = gsap.getProperty(track, 'x');
    setters.forEach(({ p }) => {
      const c = tx + p.offsetLeft + p.offsetWidth / 2;
      const near = 1 - clamp(Math.abs(c - cx) / vw(), 0, 1);
      gsap.set(p, { rotationY: rotY, scaleX: (0.95 + 0.05 * near) * sx, scaleY: 0.95 + 0.05 * near });
    });
  });
  chapter(4, 'POSTER WALL', 32.8, 47.9, stRange(tl.scrollTrigger));
}

/* ==================================================================== 05 TYPE ATTACK */
function ch05() {
  const sec = $('#c05');
  $$('[data-split]', sec).forEach(split);
  const words = ['#ta-loud', '#ta-quiet', '#ta-fast', '#ta-slow', '#ta-close', '#ta-far'];
  gsap.set(words, { xPercent: -50, yPercent: -50, autoAlpha: 0 });
  gsap.set('#ta-quiet', { left: '63%', top: '50%', xPercent: 0 });
  gsap.set(['#ta-speed1', '#ta-speed2', '#ta-speed3'], { scaleX: 0 });
  const loud = chars('#ta-loud');
  const fast = chars('#ta-fast');
  const slow = chars('#ta-slow');
  const close = chars('#ta-close');
  const labels = ['05.1 — LOUD', '05.2 — QUIET', '05.3 — FAST', '05.4 — SLOW', '05.5 — CLOSE', '05.6 — FAR'];
  const bounds = [0, 1.3, 2.3, 3.3, 4.85, 5.85];
  const tl = pinTL(sec, {
    st: {
      onUpdate: (self) => {
        const t = self.progress * tl.duration();
        let i = 0;
        bounds.forEach((b, j) => { if (t >= b) i = j; });
        if ($('#ta-label').textContent !== labels[i]) {
          $('#ta-label').textContent = labels[i];
          $('#ta-count').textContent = `${String(i + 1).padStart(2, '0')} / 06`;
        }
      },
    },
  });
  wipeIn(tl, ['#ta-m1', '#ta-m2'], 0);
  // LOUD — collapsed at centre, expands to fill, then letters blow outward
  tl.set('#ta-loud', { autoAlpha: 1 }, 0)
    .fromTo(loud, { x: (i, c) => -dx(c) * 0.92, scale: 0.12 }, { x: 0, scale: 1, duration: 0.5, ease: 'power4.out', stagger: 0.02 }, 0.02)
    .to(loud, { x: (i, c) => dx(c) * 2.4, scale: 1.25, duration: 0.55, ease: 'power3.in' }, 0.75)
    .set('#ta-loud', { autoAlpha: 0 }, 1.3);
  // QUIET — tiny serif in an ocean of cream; its underline becomes the speed line
  tl.set('#ta-quiet', { autoAlpha: 1 }, 1.3)
    .fromTo('#ta-quiet', { clipPath: WIPE_HIDE }, { clipPath: WIPE_SHOW, duration: 0.3, ease: 'power2.out' }, 1.32)
    .fromTo('#ta-speed2', { scaleX: 0, transformOrigin: '63% 50%' }, { scaleX: 1, duration: 0.35, ease: 'power3.inOut' }, 1.95)
    .to('#ta-quiet', { clipPath: WIPE_OUT, duration: 0.2, ease: 'power2.in' }, 2.0)
    .set('#ta-quiet', { autoAlpha: 0 }, 2.25);
  // FAST — horizontally stretched, rides the speed lines through the frame
  tl.fromTo(['#ta-speed1', '#ta-speed3'], { scaleX: 0, transformOrigin: '100% 50%' }, { scaleX: 1, duration: 0.3, ease: 'power3.out', stagger: 0.05 }, 2.2)
    .set('#ta-fast', { autoAlpha: 1 }, 2.3)
    .fromTo('#ta-fast', { x: () => vw() * 1.3, scaleX: 4, scaleY: 0.85 }, { x: 0, scaleX: 1.9, scaleY: 0.85, duration: 0.45, ease: 'power4.out' }, 2.3)
    .fromTo(fast, { x: (i) => i * vw() * 0.05 }, { x: 0, duration: 0.45, ease: 'power4.out' }, 2.3)
    .to('#ta-fast', { x: () => -vw() * 1.4, scaleX: 4.2, duration: 0.4, ease: 'power3.in' }, 2.9)
    .to(['#ta-speed1', '#ta-speed2', '#ta-speed3'], { scaleX: 0, transformOrigin: '0% 50%', duration: 0.35, ease: 'power3.in', stagger: 0.04 }, 2.95)
    .set('#ta-fast', { autoAlpha: 0 }, 3.3);
  // SLOW — enters from below and crawls through the frame
  tl.set('#ta-slow', { autoAlpha: 1 }, 3.3)
    .fromTo('#ta-slow', { y: () => vh() * 0.62 }, { y: () => -vh() * 0.62, duration: 1.55, ease: 'none' }, 3.3)
    .fromTo(slow, { y: (i) => vh() * 0.05 * i }, { y: (i) => -vh() * 0.05 * (3 - i), duration: 1.55, ease: 'none' }, 3.3)
    .set('#ta-slow', { autoAlpha: 0 }, 4.85);
  // CLOSE — letters rush the lens; we fall into the O's counter
  tl.set('#ta-close', { autoAlpha: 1 }, 4.85)
    .fromTo('#ta-close', { scale: 0.35 }, { scale: 9, duration: 0.95, ease: 'power3.in' }, 4.85)
    .fromTo(close, { x: 0 }, { x: (i, c) => dx(c) * 0.35, duration: 0.95, ease: 'power2.in' }, 4.85)
    .set('#ta-close', { autoAlpha: 0 }, 5.82);
  // FAR — huge, then shrinks to a single point; the point becomes an orange sun
  tl.set('#ta-far', { autoAlpha: 1 }, 5.85)
    .fromTo('#ta-far', { scale: 1.8 }, { scale: 0.02, duration: 0.8, ease: 'power3.inOut' }, 5.85)
    .set('#ta-far', { autoAlpha: 0 }, 6.62)
    .fromTo('#ta-dot', { scale: 0.3 }, { scale: 1, duration: 0.08 }, 6.6)
    .to('#ta-dot', { scale: () => (coverR(vw() / 2, vh() / 2) * 2) / (vh() * 0.02) + 2, duration: 0.6, ease: 'power3.inOut' }, 6.75);
  wipeOut(tl, ['#ta-m1', '#ta-m2'], 6.9);
  tl.to({}, { duration: 0.15 });
  chapter(5, 'TYPE ATTACK', 55.5, 55.5, stRange(tl.scrollTrigger));
}

/* ==================================================================== 06 HEAT */
let heat;
function ch06() {
  const sec = $('#c06');
  heat = initHeat($('#heat-bg'), $('#heat-gl'));
  const S = heat.state;
  const pink = $('#heat-pink');
  const placePink = () => {
    const s = heat.sphereScreen();
    gsap.set(pink, { left: s.x - pink.offsetWidth / 2, top: s.y - pink.offsetHeight / 2 });
  };
  const tl = pinTL(sec, {
    st: {
      onToggle: (self) => heat.setActive(self.isActive),
      onRefresh: () => { heat.resize(); placePink(); },
    },
  });
  tl.to(S, { circle: 1, duration: 0.55, ease: 'power4.out' }, 0)
    .to(S, { t1: 0.08, duration: 0.6, ease: 'power4.out' }, 0.05)
    .to(S, { t2: 0.05, duration: 0.6, ease: 'power4.out' }, 0.12)
    .to(S, { t3: 0.24, duration: 0.6, ease: 'power4.out' }, 0.19)
    .to(S, { sphere: 1, duration: 0.55, ease: 'power4.out' }, 0.3)
    .to(S, { t1: -0.06, t2: 0.4, t3: -0.28, sy: 0.46, duration: 1.8, ease: 'none' }, 0.8);
  wipeIn(tl, ['#heat-m1', '#heat-m2'], 0.4);
  wipeOut(tl, ['#heat-m1', '#heat-m2'], 2.45);
  tl.add(placePink, 2.5)
    .to(pink, { scale: () => (coverR(vw() * 0.665, vh() * 0.46) * 2) / pink.offsetWidth + 0.5, duration: 0.6, ease: 'power3.inOut' }, 2.55)
    .to({}, { duration: 0.12 });
  gsap.ticker.add((t) => heat.render(t));
  chapter(6, 'HEAT', 61.0, 61.0, stRange(tl.scrollTrigger));
}

/* ==================================================================== 07 BLOOM */
function ch07() {
  const sec = $('#c07');
  $$('[data-split]', sec).forEach(split);
  const svg = buildBloom($('#bloom-svg'));
  const petals = $$('.petal', svg);
  const g = $('.bl-g', svg);
  const center = $('.bl-center', svg);
  const ring = $('.bl-ring', svg);
  gsap.set('#bloom-word', { xPercent: -50, yPercent: -50 });
  gsap.set(petals, { rotation: 0, scale: 0, svgOrigin: '0 0' });
  gsap.set(center, { scale: 0, svgOrigin: '0 0' });
  const circ = 2 * Math.PI * 488;
  gsap.set(ring, { strokeDasharray: circ, strokeDashoffset: circ });
  const deg = { v: 0 };
  const tl = pinTL(sec);
  tl.to(petals, { scale: 0.35, duration: 0.3, ease: 'power3.out', stagger: 0.02 }, 0)
    .to(petals, { rotation: (i) => i * 22.5, scale: 1, duration: 1.0, ease: 'power3.inOut' }, 0.2)
    .fromTo(g, { rotation: -135, svgOrigin: '0 0' }, { rotation: 0, svgOrigin: '0 0', duration: 1.2, ease: 'power3.inOut' }, 0.1)
    .to(center, { scale: 1, duration: 0.5, ease: 'power4.out' }, 0.55)
    .to(ring, { strokeDashoffset: 0, duration: 1.1, ease: 'power3.inOut' }, 0.2)
    .to(deg, { v: 360, duration: 1.2, ease: 'power3.inOut', onUpdate: () => { $('#bl-deg').textContent = String(Math.round(deg.v)).padStart(3, '0'); } }, 0.1)
    .fromTo(chars('#bloom-word'), { scaleY: 0, transformOrigin: '50% 100%' }, { scaleY: 1, duration: 0.45, ease: 'power4.out', stagger: 0.05 }, 0.75)
    .to(g, { rotation: 22.5, svgOrigin: '0 0', duration: 0.8, ease: 'none' }, 1.3);
  wipeIn(tl, ['#bl-m1', '#bl-m2', '#bl-m3', '#bl-m4'], 0.35);
  wipeOut(tl, ['#bl-m1', '#bl-m2', '#bl-m3', '#bl-m4'], 1.95);
  tl.to(chars('#bloom-word'), { scaleY: 0, transformOrigin: '50% 0%', duration: 0.3, ease: 'power3.in', stagger: 0.03 }, 2.0)
    .to(center, { scale: 0, duration: 0.4, ease: 'power3.in' }, 2.05)
    .to(ring, { scale: 3, svgOrigin: '0 0', duration: 0.6, ease: 'power3.in' }, 2.05)
    .to(petals, { scale: 6, duration: 0.65, ease: 'power3.in' }, 2.1)
    .to($$('ellipse', svg), { attr: { 'stroke-width': 0 }, duration: 0.3, ease: 'power2.in' }, 2.1)
    .to('#bloom-violet', { scale: () => (coverR(vw() / 2, vh() / 2) * 2) / (vh() * 0.2) + 0.5, duration: 0.55, ease: 'power3.inOut' }, 2.2)
    .to({}, { duration: 0.12 });
  chapter(7, 'BLOOM', 66.6, 66.6, stRange(tl.scrollTrigger));
}

/* ==================================================================== 08 ULTRAVIOLET (→ image 01) */
function ch08() {
  const sec = $('#c08');
  $$('[data-split]', sec).forEach(split);
  const rings = buildRings($('#uv-rings'));
  const rg = $$('.rg', rings);
  rg.forEach((c) => {
    const len = c.getTotalLength ? c.getTotalLength() : 700;
    c.style.strokeDasharray = c.classList.contains('rg-dash') ? '0.8 3.2' : `${len}`;
    if (!c.classList.contains('rg-dash')) c.style.strokeDashoffset = `${len}`;
    c._len = len;
  });
  gsap.set(['#uv-num'], { xPercent: -50, yPercent: -50 });
  gsap.set('#uv-never', { yPercent: -50 });
  gsap.set('#uv-this', { clipPath: WIPE_HIDE });
  gsap.set('#ed1-word', { transformOrigin: '0 100%' });
  const rc = () => {
    const r = rings.getBoundingClientRect();
    const s = sec.querySelector('.stage').getBoundingClientRect();
    return { x: r.left - s.left + r.width / 2, y: r.top - s.top + r.height / 2 };
  };
  const reveal = $('#uv-reveal');
  const tl = pinTL(sec, { hide: false });
  tl.fromTo('#uv-num', { clipPath: WIPE_HIDE }, { clipPath: WIPE_SHOW, duration: 0.7, ease: 'power3.inOut' }, 0)
    .fromTo('#uv-num', { x: () => vw() * 0.06 }, { x: () => -vw() * 0.06, duration: 2.4, ease: 'none' }, 0)
    .to(rg.filter((c) => !c.classList.contains('rg-dash')), { strokeDashoffset: 0, duration: 0.8, ease: 'power3.inOut', stagger: 0.06 }, 0.1)
    .fromTo('.rg-dash', { rotation: 0, svgOrigin: '0 0' }, { rotation: 180, svgOrigin: '0 0', duration: 2.4, ease: 'none' }, 0)
    .fromTo($('.orbit', rings), { rotation: -40, svgOrigin: '0 0' }, { rotation: 320, svgOrigin: '0 0', duration: 2.4, ease: 'none' }, 0)
    .fromTo(chars('#uv-you'), { yPercent: 110, clipPath: 'inset(0% 0% 100% 0%)' }, { yPercent: 0, clipPath: 'inset(-20% 0% -20% 0%)', duration: 0.4, ease: 'power4.out', stagger: 0.03 }, 0.2)
    .fromTo('#uv-never', { x: () => vw() * 0.35 }, { x: () => vw() * 0.02, duration: 0.55, ease: 'power4.out' }, 0.3)
    .to('#uv-never', { x: () => -vw() * 0.32, duration: 1.6, ease: 'none' }, 0.85)
    .to('#uv-this', { clipPath: WIPE_SHOW, duration: 0.5, ease: 'power3.out' }, 0.7);
  wipeIn(tl, ['#uv-m1', '#uv-m2'], 0.3);
  // the innermost ring opens into the first photograph
  tl.set(reveal, { clipPath: () => `circle(0px at ${rc().x}px ${rc().y}px)` }, 2.0)
    .to(reveal, { clipPath: () => `circle(${coverR(rc().x, rc().y) * 1.02}px at ${rc().x}px ${rc().y}px)`, duration: 0.7, ease: 'power3.inOut' }, 2.05)
    .fromTo('#ed1-img', { scale: 1.35 }, { scale: 1.08, duration: 1.2, ease: 'power2.out' }, 2.05)
    .fromTo(chars('#ed1-word'), { scaleY: 0, transformOrigin: '50% 100%' }, { scaleY: 1, duration: 0.45, ease: 'power4.out', stagger: 0.05 }, 2.55);
  wipeIn(tl, ['#ed1-m1', '#ed1-m2'], 2.6);
  tl.to({}, { duration: 0.35 });
  chapter(8, 'ULTRAVIOLET', 73.6, 73.6, stRange(tl.scrollTrigger, 0, 0.66));
  return tl.scrollTrigger;
}

/* ==================================================================== 09 IMAGE EDITORIAL */
function ch09(st08) {
  const sec = $('#c09');
  $$('img[data-par]', sec).forEach((img) => {
    const par = parseFloat(img.dataset.par);
    gsap.fromTo(img, { scale: 1 + par, yPercent: -par * 38 }, {
      yPercent: par * 38, ease: 'none',
      scrollTrigger: { trigger: img.closest('.ed'), start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });
  $$('[data-rise]', sec).forEach((n) => {
    gsap.fromTo(n, { yPercent: 70, clipPath: 'inset(0% 0% 100% 0%)' }, {
      yPercent: 0, clipPath: 'inset(-30% -5% -30% -5%)', ease: 'power3.out',
      scrollTrigger: { trigger: n, start: 'top 98%', end: 'top 55%', scrub: true },
    });
  });
  $$('[data-slide]', sec).forEach((n) => {
    const d = parseFloat(n.dataset.slide);
    gsap.fromTo(n, { x: () => d * vw() * 0.12 }, {
      x: () => -d * vw() * 0.12, ease: 'none',
      scrollTrigger: { trigger: n.closest('.ed'), start: 'top bottom', end: 'bottom top', scrub: true, invalidateOnRefresh: true },
    });
  });
  // IMAGE 06 — hold, then the photograph collapses into a single cream line
  const s6 = $('#c09b');
  $$('[data-split]', s6).forEach(split);
  const duo = $('#ed6-img');
  const tl = pinTL(s6, { k: 1 });
  tl.fromTo('#ed6-img img', { scale: 1.12 }, { scale: 1, duration: 1.0, ease: 'none' }, 0)
    .to(chars('#ed6-word'), { scaleY: 0, transformOrigin: '50% 100%', duration: 0.35, ease: 'power3.in', stagger: 0.03 }, 0.45);
  wipeOut(tl, ['#ed6-m1', '#ed6-m2'], 0.55);
  tl.to(duo, { clipPath: 'inset(calc(50% - 1px) 0% calc(50% - 1px) 0%)', duration: 0.6, ease: 'power3.inOut' }, 0.75)
    .to(duo, { '--lo': C.cream, duration: 0.3, ease: 'none' }, 1.05)
    .to({}, { duration: 0.12 });
  chapter(9, 'IMAGE EDITORIAL', 77.7, 77.7, () => [st08.start + (st08.end - st08.start) * 0.66, tl.scrollTrigger.end]);
}

/* ==================================================================== 10 SIGNAL · 11 BANDS · 12 DISC */
const disc = { user: 0, scroll: 0, vel: 0, dragging: false, total: 0 };
function ch10() {
  const sec = $('#c10');
  const stage = $('.stage', sec);
  $$('[data-split]', sec).forEach(split);
  const svg = $('#sig-svg');
  const clip = svgEl('clipPath', { id: 'dclip' });
  const clipC = svgEl('circle', { r: '6000', cx: '0', cy: '0' });
  clip.appendChild(clipC);
  const defs = svgEl('defs');
  defs.appendChild(clip);
  const outer = svgEl('g', { 'clip-path': 'url(#dclip)' });
  const g = svgEl('g');
  outer.appendChild(g);
  svg.append(defs, outer);
  const lineCols = [C.cream, C.cream, C.cyan, C.cream, C.red, C.cream];
  const paths = BAND_COLORS.map(() => {
    const p = svgEl('path', { fill: 'none', 'stroke-linecap': 'butt' });
    g.appendChild(p);
    return p;
  });
  const S = { rot: 0, clip: 6000, amp: 0, phase: 0 };
  const B = BAND_COLORS.map((_, i) => ({ c: 0, t: 2, L: vw() - 2 * margin(), col: lineCols[i], a: [0.9, 1.25, 0.7, 1.4, 1.05, 0.8][i], k: [0.35, 0.52, 0.27, 0.62, 0.42, 0.3][i] }));
  const layoutSvg = () => {
    const s = 2 * Math.max(vw(), vh()) + 40;
    svg.setAttribute('width', s);
    svg.setAttribute('height', s);
    svg.setAttribute('viewBox', `${-s / 2} ${-s / 2} ${s} ${s}`);
    gsap.set(svg, { xPercent: -50, yPercent: -50 });
  };
  const D = () => Math.min(vw() * 0.55, vh() * 0.88);
  const bandX = (i, widths) => {
    let acc = 0;
    for (let j = 0; j < i; j++) acc += widths[j];
    return acc + widths[i] / 2 - 0.5;
  };
  const eqW = [1, 1, 1, 1, 1, 1].map((x) => x / 6);
  function render() {
    const vel = Math.min(1.4, Math.abs(vSmooth) / 22);
    const A = S.amp * vh() * 0.085 * (0.55 + vel);
    B.forEach((b, i) => {
      const p = paths[i];
      p.setAttribute('stroke', b.col);
      p.setAttribute('stroke-width', Math.max(0.5, b.t).toFixed(2));
      if (A * b.a < 0.2) {
        p.setAttribute('d', `M${(-b.L / 2).toFixed(1)} ${b.c.toFixed(2)}H${(b.L / 2).toFixed(1)}`);
        return;
      }
      const N = 140;
      const k = (Math.PI * 2) / (vw() * b.k);
      let d = '';
      for (let j = 0; j <= N; j++) {
        const u = j / N;
        const x = -b.L / 2 + u * b.L;
        const env = Math.sin(Math.PI * u);
        const y = b.c + A * b.a * env * Math.sin(x * k + S.phase * (0.8 + i * 0.23) + i * 1.3);
        d += `${j ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`;
      }
      p.setAttribute('d', d);
    });
    g.setAttribute('transform', `rotate(${S.rot.toFixed(3)})`);
    clipC.setAttribute('r', S.clip.toFixed(1));
  }

  gsap.set(['#sig-num', '#disc-chroma', '#disc-fm'], { xPercent: -50, yPercent: -50 });
  gsap.set(['#more1', '#more2', '#more3'], { xPercent: -50 });
  gsap.set('#more2', { yPercent: -50, top: '50%' });
  gsap.set('#more1', { top: '7vh' });
  gsap.set('#more3', { bottom: '6vh' });
  gsap.set('#disc-fm', { x: () => vw() * 0.17, y: () => vh() * 0.2 });
  gsap.set(['#sig-num'], { clipPath: WIPE_HIDE });
  gsap.set($$('#sig-can .disp'), { yPercent: 105 });
  gsap.set(chars('.more'), { scaleY: 0 });
  gsap.set(chars('#disc-chroma'), { scaleY: 0, transformOrigin: '50% 100%' });
  gsap.set('#disc-fm', { clipPath: WIPE_HIDE });
  gsap.set('#disc-svg', { '--a': '0deg' });
  const discWrap = $('#disc-wrap');
  buildDisc($('#disc-svg'));
  gsap.set(discWrap, { autoAlpha: 0 });

  // colour each MORE letter by the band beneath it
  const colourMore = () => {
    $$('.more').forEach((m) => {
      const left = vw() / 2 - m.offsetWidth / 2;
      $$('.char', m).forEach((c) => {
        const x = left + c.offsetLeft + c.offsetWidth / 2;
        const bi = clamp(Math.floor((x / vw()) * 6), 0, 5);
        c.style.color = BAND_LIGHT[bi] ? C.ink : C.cream;
      });
    });
  };

  const tl = pinTL(sec, {
    st: {
      onRefresh: () => { layoutSvg(); colourMore(); render(); },
      onUpdate: (self) => {
        const t = self.progress * tl.duration();
        stage.dataset.tone = t < 3.85 ? 'dark' : 'light';
        disc.scroll = self.progress * 140;
      },
    },
  });
  // —— 10 SIGNAL: the line splits into live waveforms
  tl.to(B, { c: (i) => (i - 2.5) * vh() * 0.075, L: () => Math.max(vw(), vh()) * 1.8, t: 1.5, duration: 0.6, ease: 'power3.inOut' }, 0)
    .to(S, { amp: 1, duration: 0.7, ease: 'power3.inOut' }, 0.1)
    .to('#sig-num', { clipPath: WIPE_SHOW, duration: 0.7, ease: 'power3.inOut' }, 0.25)
    .fromTo('#sig-num', { x: () => vw() * 0.04 }, { x: () => -vw() * 0.04, duration: 2.2, ease: 'none' }, 0.25)
    .to($$('#sig-can .disp'), { yPercent: 0, duration: 0.45, ease: 'power4.out', stagger: 0.08 }, 0.35);
  wipeIn(tl, ['#sig-det', '#sig-m1'], 0.45);
  tl.to($$('#sig-can .disp'), { yPercent: -105, duration: 0.35, ease: 'power3.in', stagger: 0.06 }, 2.0)
    .to('#sig-num', { clipPath: WIPE_OUT, duration: 0.4, ease: 'power3.in' }, 2.1);
  wipeOut(tl, ['#sig-det', '#sig-m1'], 2.05);
  // flatten → six lines → rotate vertical → widen into bands
  tl.to(S, { amp: 0, duration: 0.45, ease: 'power3.inOut' }, 2.35)
    .to(B, { c: (i) => -bandX(i, eqW) * vw(), col: (i) => BAND_COLORS[i], t: 2, duration: 0.5, ease: 'power3.inOut' }, 2.4)
    .to(S, { rot: 90, duration: 0.5, ease: 'power3.inOut' }, 2.9)
    .to(B, { t: () => vw() / 6 + 2, duration: 0.5, ease: 'power3.inOut' }, 3.35)
    .set('#sig-cream', { visibility: 'visible' }, 3.86);
  // —— 11 COLOUR BANDS
  tl.to(chars('.more'), { scaleY: 1, transformOrigin: '50% 100%', duration: 0.4, ease: 'power4.out', stagger: 0.03 }, 3.9);
  wipeIn(tl, '#band-m1', 4.0);
  tl.to(chars('.more'), { scaleY: 0, transformOrigin: '50% 0%', duration: 0.3, ease: 'power3.in', stagger: 0.02 }, 4.75);
  const w2 = [0.38, 0.07, 0.17, 0.05, 0.22, 0.11];
  const w3 = [0.08, 0.3, 0.07, 0.24, 0.1, 0.21];
  tl.to(B, { c: (i) => -bandX(i, w2) * vw(), t: (i) => w2[i] * vw() + 2, duration: 0.45, ease: 'power3.inOut' }, 4.8)
    .to(B, { c: (i) => -bandX(i, w3) * vw(), t: (i) => w3[i] * vw() + 2, duration: 0.45, ease: 'power3.inOut' }, 5.3)
    .to(B, { c: (i) => -(i - 2.5) * vw() * 0.045, t: () => vw() * 0.045 + 1, duration: 0.45, ease: 'power3.inOut' }, 5.8);
  wipeOut(tl, '#band-m1', 5.8);
  tl.to(S, { rot: 180, duration: 0.5, ease: 'power3.inOut' }, 6.25)
    .to(B, { c: (i) => -(i - 2.5) * (vh() / 6), t: () => vh() / 6 + 2, duration: 0.5, ease: 'power3.inOut' }, 6.3);
  // —— 12 CHROMA DISC: bands compress into a circle, sectors sweep in
  tl.to(B, { L: D, c: (i) => -(i - 2.5) * (D() / 6), t: () => D() / 6 + 1, duration: 0.7, ease: 'power3.inOut' }, 6.9)
    .to(S, { clip: () => D() / 2, duration: 0.7, ease: 'power3.inOut' }, 6.9)
    .to(chars('#disc-chroma'), { scaleY: 1, transformOrigin: '50% 100%', duration: 0.45, ease: 'power4.out', stagger: 0.04 }, 7.35)
    .set(discWrap, { autoAlpha: 1 }, 7.55)
    .to('#disc-svg', { '--a': '360deg', duration: 0.6, ease: 'power3.inOut' }, 7.55)
    .to('#disc-fm', { clipPath: WIPE_SHOW, duration: 0.4, ease: 'power3.out' }, 7.9);
  wipeIn(tl, ['#disc-m1', '#disc-m2'], 7.9);
  // hold: drag to spin
  wipeOut(tl, ['#disc-m1', '#disc-m2'], 9.3);
  tl.to(chars('#disc-chroma'), { scaleY: 0, transformOrigin: '50% 0%', duration: 0.35, ease: 'power3.in', stagger: 0.03 }, 9.3)
    .to('#disc-fm', { clipPath: WIPE_OUT, duration: 0.3, ease: 'power3.in' }, 9.3)
    .to({}, { duration: 0.25 });

  gsap.ticker.add((t, dt) => {
    if (!tl.scrollTrigger.isActive) return;
    S.phase += (dt / 1000) * (1.6 + Math.min(3, Math.abs(vSmooth) / 8));
    render();
    $('#sig-snr').textContent = String(Math.round(38 + S.amp * 20 + Math.abs(vSmooth) * 0.3)).padStart(2, '0');
    const secs = Math.floor(t);
    $('#sig-tc').textContent = `00:${String(Math.floor(secs / 60) % 60).padStart(2, '0')}:${String(secs % 60).padStart(2, '0')}`;
  });

  // drag-to-spin disc
  const dsvg = $('#disc-svg');
  let lastA = 0;
  let lastT = 0;
  const ang = (e) => {
    const r = discWrap.getBoundingClientRect();
    return (Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2)) * 180) / Math.PI;
  };
  discWrap.addEventListener('pointerdown', (e) => {
    disc.dragging = true;
    lastA = ang(e);
    lastT = performance.now();
    discWrap.setPointerCapture(e.pointerId);
    cLbl.textContent = 'SPIN';
  });
  discWrap.addEventListener('pointermove', (e) => {
    if (!disc.dragging) return;
    const a = ang(e);
    let d = a - lastA;
    if (d > 180) d -= 360;
    if (d < -180) d += 360;
    const now = performance.now();
    disc.user += d;
    disc.vel = (d / Math.max(8, now - lastT)) * 16;
    lastA = a;
    lastT = now;
  });
  const up = () => { disc.dragging = false; };
  discWrap.addEventListener('pointerup', up);
  discWrap.addEventListener('pointercancel', up);
  let lastSec = -1;
  const chroma = $('#disc-chroma');
  gsap.ticker.add(() => {
    if (!disc.dragging) {
      disc.user += disc.vel;
      disc.vel *= 0.95;
      if (Math.abs(disc.vel) < 0.01) disc.vel = 0;
    }
    disc.total = disc.user + disc.scroll;
    gsap.set(dsvg, { rotation: disc.total });
    // sector under the top pointer sets the accent colour
    const a = (((-disc.total) % 360) + 360 + 15) % 360;
    const idx = Math.floor(a / 30) % 12;
    if (idx !== lastSec) {
      lastSec = idx;
      $('#disc-sec').textContent = String(idx + 1).padStart(2, '0');
      $('#disc-name').textContent = SECTOR_NAMES[idx % 6];
      chroma.style.color = BAND_COLORS[idx % 6];
      if (fine) cursor.querySelector('.dot').style.background = '';
    }
  });
  chroma.style.transition = 'color .35s';
  const st = tl.scrollTrigger;
  chapter(10, 'SIGNAL', 81.3, 81.3, stRange(st, 0, 3.6 / 9.85));
  chapter(11, 'COLOUR BANDS', 88.8, 88.8, stRange(st, 3.6 / 9.85, 6.85 / 9.85));
  chapter(12, 'CHROMA DISC', 94.2, 94.2, stRange(st, 6.85 / 9.85, 1));
}

/* ==================================================================== 13 OVERLOAD */
function ch13() {
  const sec = $('#c13');
  const stage = $('.stage', sec);
  $$('[data-split]', sec).forEach(split);
  const dsvg = buildDisc($('#ov-disc-svg'));
  const secs = $$('.sec', dsvg);
  const bloom = buildBloom($('#ov-bloom'), { ring: false });
  const petals = $$('.petal', bloom);
  const bc = $('.bl-center', bloom);
  gsap.set(petals, { scale: 0, rotation: 0, svgOrigin: '0 0' });
  gsap.set(bc, { scale: 0, svgOrigin: '0 0' });
  gsap.set('#ov-word', { xPercent: -50, yPercent: -50 });
  gsap.set('#ov-disc', { x: 0, y: 0, xPercent: -50, yPercent: -50 });
  gsap.set(chars('#ov-word'), { scaleY: 0 });
  gsap.set('#ov-circle', { autoAlpha: 0 });
  gsap.set($$('#ov-poster > *'), { yPercent: 0 });
  const wave = $('#ov-wave');
  const wp = [C.cream, C.cyan, C.red].map((c, i) => {
    const p = svgEl('path', { fill: 'none', stroke: c, 'stroke-width': i ? 1.5 : 2 });
    wave.appendChild(p);
    return p;
  });
  const W = { amp: 0, phase: 0, on: 0 };
  const D = () => Math.min(vw() * 0.55, vh() * 0.88);
  const drawWave = () => {
    const A = W.amp * vh() * 0.22;
    wp.forEach((p, i) => {
      if (!W.on) { p.setAttribute('d', ''); return; }
      let d = '';
      for (let j = 0; j <= 120; j++) {
        const u = j / 120;
        const x = u * vw();
        const y = vh() / 2 + A * Math.sin(Math.PI * u) * Math.sin(u * (7 + i * 3) + W.phase * (1 + i * 0.4) + i);
        d += `${j ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`;
      }
      p.setAttribute('d', d);
    });
  };
  const seq = [0, 0.9, 2.0, 2.9, 4.0, 4.9, 6.1];
  const darkRanges = [[2.9, 4.05], [5.2, 6.35]];
  const tl = pinTL(sec, {
    k: 0.85,
    st: {
      onUpdate: (self) => {
        const t = self.progress * tl.duration();
        let i = 0;
        seq.forEach((b, j) => { if (t >= b) i = j; });
        $('#ov-seq').textContent = String(i + 1).padStart(2, '0');
        stage.dataset.tone = darkRanges.some(([a, b]) => t >= a && t < b) ? 'dark' : 'light';
      },
    },
  });
  // 1 · disc → giant red circle on yellow
  tl.to(secs, { fill: C.red, duration: 0.35, ease: 'power2.inOut', stagger: 0.012 }, 0)
    .to('#ov-disc', { scale: () => (vh() * 0.76) / D(), duration: 0.55, ease: 'power3.inOut' }, 0.05)
    .to('#ov-wipe', { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.5, ease: 'power3.inOut' }, 0.2)
    .set('#ov-circle', { autoAlpha: 1 }, 0.62)
    .set('#ov-disc', { autoAlpha: 0 }, 0.62);
  wipeIn(tl, ['#ov-m1', '#ov-m2'], 0.3);
  // 2 · circle → bar → red field → giant word
  tl.to('#ov-circle', { scaleY: 0.06, scaleX: 3.2, duration: 0.4, ease: 'power3.inOut' }, 0.9)
    .fromTo('#ov-redfield', { clipPath: 'inset(47.7% 0% 47.7% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.35, ease: 'power3.inOut', immediateRender: false }, 1.28)
    .set('#ov-circle', { autoAlpha: 0 }, 1.65)
    .to(chars('#ov-word'), { scaleY: 1, transformOrigin: '50% 100%', duration: 0.35, ease: 'power4.out', stagger: 0.03 }, 1.45);
  // 3 · word → image aperture → full bleed
  tl.to('#ov-img', { clipPath: 'inset(20% 32% 20% 32%)', duration: 0.4, ease: 'power3.inOut' }, 2.0)
    .to('#ov-img', { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.4, ease: 'power3.inOut' }, 2.45)
    .to(chars('#ov-word'), { x: (i) => (i < 3 ? -1 : 1) * vw() * 0.8, duration: 0.45, ease: 'power3.in' }, 2.45)
    .set('#ov-ink', { visibility: 'visible' }, 2.9);
  // 4 · image → line → waveform
  tl.to('#ov-img', { clipPath: 'inset(calc(50% - 1px) 0% calc(50% - 1px) 0%)', duration: 0.45, ease: 'power3.inOut' }, 2.9)
    .to('#ov-duo', { '--lo': C.cream, '--hi': C.cream, duration: 0.2 }, 3.15)
    .set(W, { on: 1 }, 3.36)
    .set('#ov-img', { visibility: 'hidden' }, 3.36)
    .to(W, { amp: 1, duration: 0.5, ease: 'power3.out' }, 3.38)
    .to(W, { amp: 1.6, duration: 0.3, ease: 'power2.in' }, 3.8);
  // 5 · waveform → pink circle → bloom
  tl.to('#ov-pink', { clipPath: () => `circle(${coverR(vw() / 2, vh() / 2) * 1.02}px at 50% 50%)`, duration: 0.45, ease: 'power3.inOut' }, 4.0)
    .set(W, { on: 0 }, 4.46)
    .to(petals, { scale: 1, rotation: (i) => i * 22.5, duration: 0.5, ease: 'power3.inOut' }, 4.15)
    .to(bc, { scale: 1, duration: 0.35, ease: 'power4.out' }, 4.4);
  // 6 · bloom → poster rectangle
  tl.to(petals, { scale: 0, rotation: (i) => i * 22.5 + 90, duration: 0.4, ease: 'power3.in' }, 4.9)
    .to(bc, { scale: 0, duration: 0.3, ease: 'power3.in' }, 4.95)
    .to('#ov-poster', { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.45, ease: 'power3.inOut' }, 5.1)
    .fromTo('#ov-pnum', { yPercent: 60, clipPath: 'inset(0% 0% 100% 0%)' }, { yPercent: 0, clipPath: 'inset(-20% -5% -20% -5%)', duration: 0.4, ease: 'power4.out' }, 5.35);
  // 7 · poster → cream circle → a small disc
  tl.set(secs, { fill: (i, n) => BAND_COLORS[+n.dataset.i] }, 6.0)
    .set('#ov-disc', { scale: 0 }, 6.0)
    .to('#ov-cream', { clipPath: () => `circle(${coverR(vw() / 2, vh() / 2) * 1.02}px at 50% 50%)`, duration: 0.5, ease: 'power3.inOut' }, 6.1)
    .set('#ov-disc', { autoAlpha: 1 }, 6.3)
    .to('#ov-disc', { scale: () => (vh() * 0.09) / D(), duration: 0.45, ease: 'power3.out' }, 6.3);
  wipeOut(tl, ['#ov-m1', '#ov-m2'], 6.4);
  tl.to({}, { duration: 0.15 });

  gsap.ticker.add((t, dt) => {
    if (!tl.scrollTrigger.isActive) return;
    W.phase += (dt / 1000) * 3;
    drawWave();
    const p = tl.scrollTrigger.progress * tl.duration();
    if (p < 0.05) gsap.set('#ov-disc-svg', { rotation: disc.total });
    else gsap.set('#ov-disc-svg', { rotation: '+=0.4' });
  });
  gsap.set('#ov-disc-svg', { rotation: () => disc.total });
  chapter(13, 'OVERLOAD', 99.9, 99.9, stRange(tl.scrollTrigger));
}

/* ==================================================================== 14 PERFECT SIGNAL · 15 END */
function ch14() {
  const sec = $('#c14');
  $$('[data-split]', sec).forEach(split);
  buildDisc($('#ps-disc-svg'));
  gsap.set(['#ps-serif', '#end-title'], { xPercent: -50 });
  gsap.set('#ps-copy', { xPercent: -50 });
  gsap.set('#end-num', { xPercent: -50, yPercent: -50 });
  gsap.set('#ps-serif', { clipPath: WIPE_HIDE });
  gsap.set($$('#ps-copy .blk'), { yPercent: 105 });
  gsap.set('#ps-freq', { clipPath: WIPE_HIDE });
  gsap.set('#end-num', { autoAlpha: 0 });
  gsap.set(chars('#end-title'), { scaleY: 0 });
  gsap.set(['#end-tag', '#end-meta', '#end-links'], { clipPath: WIPE_HIDE });
  const num = $('#end-num');
  const nc = chars('#end-num');
  const zeros = [nc[1], nc[2], nc[4]];
  const others = [nc[0], nc[3]];
  const circs = ['#end-c1', '#end-c2', '#end-c3'].map((s) => $(s));

  const layoutCircles = () => {
    const fs = parseFloat(getComputedStyle($('.disp', num)).fontSize);
    const left = num.offsetLeft - num.offsetWidth / 2;
    const top = num.offsetTop - num.offsetHeight / 2;
    const d = fs * 0.72;
    zeros.forEach((z, i) => {
      const cx = left + z.offsetLeft + z.offsetWidth / 2 - fs * 0.02;
      const cy = top + z.offsetTop + z.offsetHeight / 2 - fs * 0.03;
      Object.assign(circs[i].style, { width: `${d}px`, height: `${d}px`, left: `${cx - d / 2}px`, top: `${cy - d / 2}px` });
      circs[i]._c = { x: cx, y: cy, d };
    });
  };
  const tri = (i) => {
    const R = Math.min(vh() * 0.2, vw() * 0.13);
    const cx = vw() / 2;
    const cy = vh() * 0.34;
    const ang = [-150, -30, 90][i] * (Math.PI / 180);
    const c = circs[i]._c;
    return { x: cx + Math.cos(ang) * R * 0.62 - c.x, y: cy + Math.sin(ang) * R * 0.62 - c.y, s: (R * 1.8) / c.d };
  };

  layoutCircles();
  const tl = pinTL(sec, { hide: false, st: { onRefreshInit: layoutCircles, onRefresh: layoutCircles } });
  // 14 · stillness
  tl.to('#ps-serif', { clipPath: WIPE_SHOW, duration: 0.9, ease: 'power2.out' }, 0.05)
    .to($$('#ps-copy .blk'), { yPercent: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12 }, 0.35)
    .to('#ps-freq', { clipPath: WIPE_SHOW, duration: 0.5, ease: 'power2.out' }, 0.6)
    .to('#ps-disc', { rotation: 90, duration: 2.2, ease: 'none' }, 0);
  tl.to('#ps-serif', { clipPath: WIPE_OUT, duration: 0.4, ease: 'power2.in' }, 1.8)
    .to($$('#ps-copy .blk'), { yPercent: -105, duration: 0.4, ease: 'power3.in', stagger: 0.06 }, 1.8)
    .to('#ps-disc', { scale: 0, duration: 0.35, ease: 'power3.in' }, 1.95)
    .to('#ps-freq', { clipPath: WIPE_OUT, duration: 0.3, ease: 'power2.in' }, 2.05);
  // 15 · 100.0 becomes gigantic
  tl.set(num, { autoAlpha: 1 }, 2.1)
    .fromTo(num, { scale: 0.035, y: () => vh() * 0.4 }, { scale: 1, y: 0, duration: 0.65, ease: 'power3.inOut' }, 2.1);
  // zeros become circles
  tl.to(zeros, { scale: 0, duration: 0.45, ease: 'power3.inOut' }, 2.9)
    .to(circs, { scale: 1, duration: 0.45, ease: 'power3.inOut' }, 2.9)
    .to(others, { yPercent: 140, scaleY: 0, transformOrigin: '50% 100%', duration: 0.4, ease: 'power3.in', stagger: 0.05 }, 2.85)
    .to(circs, { x: (i) => tri(i).x, y: (i) => tri(i).y, scale: (i) => tri(i).s, duration: 0.6, ease: 'power3.inOut', stagger: 0.04 }, 3.45)
    .to(chars('#end-title'), { scaleY: 1, transformOrigin: '50% 100%', duration: 0.45, ease: 'power4.out', stagger: 0.035 }, 3.85);
  wipeIn(tl, ['#end-tag', '#end-meta', '#end-links'], 4.1, 0.4, 0.08);
  tl.to({}, { duration: 0.5 });
  chapter(14, 'PERFECT SIGNAL', 100, 100, stRange(tl.scrollTrigger, 0, 0.43));
  chapter(15, 'END', 100, 100, stRange(tl.scrollTrigger, 0.43, 1));
}

/* ==================================================================== boot */
function computeRanges() {
  CHAPTERS.forEach((c) => { [c.s, c.e] = c.range(); });
}
function refreshAll() {
  fitAll();
  ScrollTrigger.refresh();
  computeRanges();
  buildDialTicks();
}

async function boot() {
  const fontsReady = Promise.all([
    document.fonts.load('400 100px "Archivo Black"'),
    document.fonts.load('600 20px "Inter Tight"'),
    document.fonts.load('italic 400 60px "Instrument Serif"'),
    document.fonts.load('500 11px "IBM Plex Mono"'),
  ]).then(() => document.fonts.ready);
  const imgs = Promise.all($$('img').map((i) => (i.complete ? Promise.resolve() : new Promise((r) => { i.onload = i.onerror = r; }))));
  const ready = Promise.all([fontsReady, imgs]);

  const loaderDone = runLoader(ready);
  await fontsReady;

  ['#c02', '#c04', '#c05', '#c06', '#c07', '#c08', '#c10', '#c13', '#c14'].forEach((s) => $(s).classList.add('overlap'));
  $('#c09').style.zIndex = '33';
  gsap.set(['#loader .mono', '#ld-fm', '#ed6-m1', '#ed6-m2'], { clipPath: WIPE_SHOW });
  fitAll();
  ch01();
  ch02();
  ch04();
  ch05();
  ch06();
  ch07();
  const st08 = ch08();
  ch09(st08);
  ch10();
  ch13();
  ch14();
  refreshAll();
  buildIndex();

  gsap.ticker.add(() => {
    vSmooth += ((lenis.velocity || 0) - vSmooth) * 0.3;
    if (Math.abs(vSmooth) < 0.01) vSmooth = 0;
    updateFreq();
    tickOdo();
    tickSound();
    const dark = toneAt(vw() / 2, 14) === 'dark';
    hud.classList.toggle('dark', dark);
    dial.classList.toggle('dark', toneAt(vw() / 2, vh() - 8) === 'dark');
    if (fine) cursor.classList.toggle('dark', toneAt(mx, my) === 'dark');
  });

  let rt;
  addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(refreshAll, 180);
  });

  await loaderDone;
  lenis.start();
  window.__CHROMA__ = { ready: true, lenis, chapters: CHAPTERS, ScrollTrigger };
}
boot();
