// Saves the share image (src/pages/lab/og.astro) to public/og.png.
// Needs a running site: `npm run dev` or `npm run preview` in another terminal.
// Usage: npm run og [-- http://localhost:4321]
// Uses the Chromium at $CHROMIUM_PATH, /usr/bin/chromium, or installed Chrome.
import { existsSync } from 'node:fs';
import { chromium } from 'playwright-core';

const base = process.argv[2] ?? 'http://localhost:4321';
const executablePath = process.env.CHROMIUM_PATH ?? (existsSync('/usr/bin/chromium') ? '/usr/bin/chromium' : undefined);

const browser = await chromium.launch(executablePath ? { executablePath } : { channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(`${base}/lab/og/`, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.locator('#og').screenshot({ path: 'public/og.png' });
await browser.close();
console.log('Saved public/og.png');
