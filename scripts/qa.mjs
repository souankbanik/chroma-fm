// CHROMA FM — scroll QA: node scripts/qa.mjs [baseUrl] [frames]
// Captures evenly spaced frames across the whole scroll, reports console
// errors, and composes contact sheets in .shots/.
import { chromium } from 'playwright-core';
import fs from 'node:fs';
import path from 'node:path';

const BASE = process.argv[2] ?? 'http://127.0.0.1:4173';
const FRAMES = parseInt(process.argv[3] ?? '48', 10);
const ONLY = process.argv[4]; // optional "a-b" fraction range, e.g. 0.3-0.5
const OUT = path.resolve('.shots');
fs.mkdirSync(OUT, { recursive: true });
const CHROME = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find((p) => fs.existsSync(p));

const browser = await chromium.launch({ executablePath: CHROME, headless: true, args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 0.5 });
const problems = [];
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') problems.push(`[console.${m.type()}] ${m.text()}`); });
page.on('pageerror', (e) => problems.push(`[pageerror] ${e.message}`));
page.on('response', (r) => { if (r.status() >= 400) problems.push(`[http ${r.status()}] ${r.url()}`); });

await page.goto(`${BASE}/?qa`, { waitUntil: 'load' });
await page.waitForTimeout(900);
await page.screenshot({ path: path.join(OUT, 'f-loader.jpg'), type: 'jpeg', quality: 70 });
try {
  await page.waitForFunction(() => window.__CHROMA__?.ready === true, null, { timeout: 30000 });
} catch (e) {
  console.log('NOT READY\n' + problems.join('\n'));
  await page.screenshot({ path: path.join(OUT, 'f-stuck.jpg'), type: 'jpeg', quality: 70 });
  await browser.close();
  process.exit(1);
}
await page.waitForTimeout(1200);
const info = await page.evaluate(() => ({
  max: window.__CHROMA__.ScrollTrigger.maxScroll(window),
  chapters: window.__CHROMA__.chapters.map((c) => [c.no, c.name, Math.round(c.s), Math.round(c.e)]),
}));
console.log('maxScroll', info.max);
console.table(info.chapters);

let [a, b] = [0, 1];
if (ONLY) [a, b] = ONLY.split('-').map(Number);
const shots = [];
for (let i = 0; i < FRAMES; i++) {
  const f = a + ((b - a) * i) / Math.max(1, FRAMES - 1);
  const y = Math.round(info.max * f);
  await page.evaluate((y) => window.__CHROMA__.lenis.scrollTo(y, { immediate: true, force: true }), y);
  await page.waitForTimeout(260);
  const label = await page.evaluate(() => document.getElementById('hud-ch').textContent + ' · ' + document.getElementById('odo').innerText.replace(/\s/g, ''));
  const file = path.join(OUT, `f-${String(i).padStart(3, '0')}.jpg`);
  await page.screenshot({ path: file, type: 'jpeg', quality: 62 });
  shots.push({ file, label: `${(f * 100).toFixed(1)}% · ${label}` });
}

// contact sheets, 4 x 3 per sheet
const per = 12;
for (let s = 0; s * per < shots.length; s++) {
  const set = shots.slice(s * per, s * per + per);
  const html = `<body style="margin:0;background:#111;display:grid;grid-template-columns:repeat(4,1fr);gap:4px;font:11px monospace;color:#ddd">${set
    .map((x) => `<div><img src="file:///${x.file.replace(/\\/g, '/')}" style="width:100%;display:block"><div style="padding:2px 4px">${x.label}</div></div>`)
    .join('')}</body>`;
  const hp = path.join(OUT, `sheet-${s}.html`);
  fs.writeFileSync(hp, html);
  const p2 = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await p2.goto('file:///' + hp.replace(/\\/g, '/'));
  await p2.waitForTimeout(300);
  await p2.screenshot({ path: path.join(OUT, `sheet-${s}.jpg`), type: 'jpeg', quality: 72, fullPage: true });
  await p2.close();
}
console.log(problems.length ? problems.join('\n') : 'NO CONSOLE PROBLEMS');
await browser.close();
