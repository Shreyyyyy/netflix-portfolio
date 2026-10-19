// Renders scripts/post/post.html to social-post.jpg (1080x1350) with headless Chromium,
// so the poster uses the same Bebas Neue / Inter fonts as the site.
// Needs a Chromium: set CHROME to its binary, or install one with `npx playwright install chromium`.
import { spawn } from 'node:child_process';
import { existsSync, mkdtempSync, readdirSync, rmSync } from 'node:fs';
import { homedir, tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import sharp from 'sharp';

function findChrome() {
  if (process.env.CHROME) return process.env.CHROME;
  const cache = join(homedir(), 'Library/Caches/ms-playwright');
  for (const dir of existsSync(cache) ? readdirSync(cache).filter((d) => d.startsWith('chromium-')) : []) {
    const bin = join(cache, dir, 'chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing');
    if (existsSync(bin)) return bin;
  }
  throw new Error('No Chromium found — set CHROME=/path/to/chrome');
}

const profile = mkdtempSync(join(tmpdir(), 'post-'));
const PORT = 9555;
const chrome = spawn(findChrome(), ['--headless=new', '--hide-scrollbars', '--allow-file-access-from-files', `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`, 'about:blank']);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

try {
  let target;
  for (let i = 0; i < 40 && !target; i++) {
    await sleep(250);
    try {
      target = await (await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`, { method: 'PUT' })).json();
    } catch {
      /* not listening yet */
    }
  }
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((r) => (ws.onopen = r));
  let id = 0;
  const pending = new Map();
  ws.onmessage = (m) => {
    const d = JSON.parse(m.data);
    if (d.id && pending.has(d.id)) pending.get(d.id)(d.result);
  };
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });

  await send('Emulation.setDeviceMetricsOverride', { width: 1080, height: 1350, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: `file://${resolve('scripts/post/post.html')}` });
  await sleep(1500);
  await send('Runtime.evaluate', { expression: 'document.fonts.ready.then(() => true)', awaitPromise: true });
  await sleep(500);
  const shot = await send('Page.captureScreenshot', { format: 'png' });
  await sharp(Buffer.from(shot.data, 'base64')).jpeg({ quality: 92 }).toFile('social-post.jpg');
  ws.close();
  console.log('social-post.jpg built');
} finally {
  chrome.kill();
  await sleep(300);
  rmSync(profile, { recursive: true, force: true });
}
