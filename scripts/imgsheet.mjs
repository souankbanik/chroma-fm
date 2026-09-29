// Contact sheet of candidate images: node scripts/imgsheet.mjs
import { chromium } from 'playwright-core';
import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve('public/img');
const files = fs.readdirSync(dir).filter((f) => /^c\d+\.jpg$/.test(f)).sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));
const html = `<body style="margin:0;background:#222;display:grid;grid-template-columns:repeat(5,1fr);gap:6px;font:14px monospace;color:#fff">
${files.map((f) => `<div><img src="file:///${dir.replace(/\\/g, '/')}/${f}" style="width:100%;height:320px;object-fit:cover;display:block"><div>${f}</div></div>`).join('')}</body>`;
const tmp = path.resolve('.shots/sheet.html');
fs.mkdirSync(path.dirname(tmp), { recursive: true });
fs.writeFileSync(tmp, html);
const CHROME = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find((p) => fs.existsSync(p));
const b = await chromium.launch({ executablePath: CHROME, headless: true, args: ['--allow-file-access-from-files'] });
const p = await b.newPage({ viewport: { width: 1400, height: 1100 } });
await p.goto('file:///' + tmp.replace(/\\/g, '/'));
await p.waitForTimeout(800);
await p.screenshot({ path: '.shots/imgsheet.jpg', quality: 70, type: 'jpeg', fullPage: true });
await b.close();
console.log('ok');
