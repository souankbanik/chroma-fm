// node scripts/probe.mjs <scrollY> [js-expression]
import { chromium } from 'playwright-core';
import fs from 'node:fs';
const CHROME = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find((p) => fs.existsSync(p));
const b = await chromium.launch({ executablePath: CHROME, headless: true, args: ['--use-angle=d3d11', '--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 0.5 });
await p.goto('http://127.0.0.1:4173/?qa');
await p.waitForFunction(() => window.__CHROMA__?.ready === true, null, { timeout: 30000 });
const ys = process.argv[2].split(',').map(Number);
for (const y of ys) {
  await p.evaluate((y) => window.__CHROMA__.lenis.scrollTo(y, { immediate: true, force: true }), y);
  await p.waitForTimeout(300);
  const r = await p.evaluate(new Function(`return (${process.argv[3] || '0'})`));
  console.log(y, JSON.stringify(r));
  await p.screenshot({ path: `.shots/probe-${y}.jpg`, type: 'jpeg', quality: 65 });
}
await b.close();
