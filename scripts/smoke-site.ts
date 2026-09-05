import { chromium, expect } from '@playwright/test';
import fg from 'fast-glob';
import { readFile } from 'node:fs/promises';

const argument = process.argv[2];
if (!argument) throw new Error('Usage: npm run smoke -- https://host/site/ (run npm run build first)');
const base = new URL(argument.endsWith('/') ? argument : `${argument}/`);
const files = await fg('dist/**/index.html');
if (!files.length) throw new Error('Missing static build');
const routes = files.map((file) => file.slice('dist/'.length).replace(/index\.html$/, ''));
const browser = await chromium.launch();
const errors: string[] = [];
try {
  const page = await browser.newPage();
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('requestfailed', (request) => errors.push(`${request.url()}: ${request.failure()?.errorText}`));
  page.on('response', (response) => { if (response.status() >= 400) errors.push(`${response.status()}: ${response.url()}`); });
  for (const route of routes) {
    const response = await page.request.get(new URL(route, base).href);
    expect(response.status(), route).toBe(200);
  }

  const reviewRoutes = [
    '', 'paths/first-coding-agent/', 'paths/first-coding-agent/input-process-output/',
    'lessons/terminal/', 'lessons/git/', 'lessons/recovery-before-change/',
    'paths/agent-runs-command/terminal/', 'paths/first-agent-change/recovery-before-change/',
    'paths/first-coding-agent/agent-vs-chat/', 'lessons/where-is-my-data/',
    'lessons/where-model-runs/', 'lessons/agent-work-loop/', 'introduction/',
  ];
  for (const width of [1440, 320]) {
    await page.setViewportSize({width, height:900});
    await page.emulateMedia({colorScheme:width === 320 ? 'dark' : 'light'});
    for (const route of reviewRoutes) {
      await page.goto(new URL(route, base).href, {waitUntil:'networkidle'});
      await expect(page.locator('h1')).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1), route).toBeTruthy();
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical?.startsWith(base.href), `${route}: canonical`).toBeTruthy();
      const links = await page.locator('a[href]').evaluateAll((nodes) => nodes.map((node) => (node as HTMLAnchorElement).href));
      for (const link of links) {
        const target = new URL(link);
        if (target.origin === base.origin) expect(target.pathname.startsWith(base.pathname), link).toBeTruthy();
      }
      expect(await page.locator('img').evaluateAll((nodes) => nodes.every((node) => node instanceof HTMLImageElement && node.complete && node.naturalWidth > 0))).toBeTruthy();
    }
  }
  await page.goto(new URL('concepts/', base).href, {waitUntil:'networkidle'});
  await expect(page.locator('.concept-groups a')).toHaveCount(32);
  for (const [term, slug] of [['Git','version-history'], ['Terminal','command'], ['Context','context'], ['Tool','tool'], ['Backup','backup'], ['Input','input-process-output']]) {
    await page.getByLabel('搜尋概念').fill(term!);
    await expect(page.locator(`#search-results a[href$="/lessons/${slug}/"]`)).toBeVisible({timeout:15000});
  }
  await page.goto(new URL('introduction/', base).href, {waitUntil:'networkidle'});
  const source = (await readFile('src/content/introduction.md', 'utf8')).replace(/^<!--[\s\S]*?-->\s*/, '').trim().split(/\n\s*\n/);
  expect(await page.locator('.introduction-body > p').allTextContents()).toEqual(source);
  await page.emulateMedia({colorScheme:'light'});
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).colorScheme)).toContain('light');
  await page.emulateMedia({colorScheme:'dark'});
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).colorScheme)).toContain('dark');
  expect(errors).toEqual([]);
  console.log(`Smoke passed: ${routes.length} static routes; desktop/light and 320px/dark; redirects, canonical/base paths, assets, search and author text.`);
} finally {
  await browser.close();
}
