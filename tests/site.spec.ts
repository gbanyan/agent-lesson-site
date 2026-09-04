import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const keyPages = ['/', '/prepare/', '/prepare/privacy-and-data/', '/start/', '/concepts/', '/paths/first-agent-change/', '/lessons/agent-vs-chat/', '/lessons/agent-work-loop/'];

for (const route of keyPages) {
  test(`${route} has no detectable WCAG A/AA violations`, async ({page}) => {
    await page.goto(route);
    await expect(page.locator('main')).toBeVisible();
    const results = await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']).analyze();
    expect(results.violations).toEqual([]);
  });
}

test('lesson page only ships the small shared theme scripts', async ({page}) => {
  await page.goto('/lessons/command/');
  await expect(page.locator('h1')).toHaveText('Command 是什麼？');
  await expect(page.locator('script')).toHaveCount(2);
  await expect(page.locator('script[src]')).toHaveCount(0);
});

test('diagram meaning remains in the accessibility tree', async ({page}) => {
  await page.goto('/lessons/where-model-runs/');
  const equivalent = page.locator('.visually-equivalent');
  await expect(equivalent).toContainText('資料存放、Agent 執行工具與 AI 模型運算可能發生在三個不同位置');
  await expect(page.locator('.system-lane')).toHaveCount(3);
  const snapshot = await page.locator('main').ariaSnapshot();
  expect(snapshot).toContain('AI 模型在哪裡運算？');
  expect(snapshot).toContain('資料存放、Agent 執行工具與 AI 模型運算可能發生在三個不同位置');
});

test('system maps use the wider article canvas on desktop', async ({page}) => {
  await page.setViewportSize({width: 1440, height: 900});
  await page.goto('/lessons/agent-work-loop/');
  const visualWidth = await page.locator('.system-map').evaluate((node) => node.getBoundingClientRect().width);
  const proseWidth = await page.locator('.lesson-body').evaluate((node) => node.getBoundingClientRect().width);
  const nodeWidths = await page.locator('.system-node').evaluateAll((nodes) => nodes.map((node) => node.getBoundingClientRect().width));
  expect(visualWidth).toBeGreaterThan(proseWidth + 150);
  expect(Math.min(...nodeWidths)).toBeGreaterThan(150);
});

test('role, location, and data-flow lessons use concrete system maps', async ({page}) => {
  const routes = [
    '/lessons/agent-vs-chat/', '/lessons/working-scope/', '/lessons/local-and-remote/',
    '/lessons/where-is-my-data/', '/lessons/where-program-runs/', '/lessons/where-model-runs/',
    '/lessons/data-leaves-device/', '/lessons/local-vs-published/', '/lessons/tool/',
    '/lessons/agent-work-loop/', '/lessons/beyond-files/', '/lessons/internet-access/',
  ];
  for (const route of routes) {
    await page.goto(route);
    await expect(page.locator('.system-map'), route).toBeVisible();
    await expect(page.locator('.system-map .visually-equivalent'), route).not.toBeEmpty();
  }
});

test('situation path links to the expected minimum lessons', async ({page}) => {
  await page.goto('/paths/first-agent-change/');
  await expect(page.locator('.path-steps li')).toHaveCount(6);
  await page.locator('.path-steps a').first().click();
  await expect(page.locator('article.lesson')).toBeVisible();
});

test('Pagefind finds Git', async ({page}) => {
  await page.goto('/concepts/');
  await page.getByLabel('搜尋概念').fill('Git');
  await expect(page.locator('#search-status')).toContainText('找到', {timeout: 15_000});
  await expect(page.locator('#search-results')).toContainText('Git 是什麼？');
  await expect(page.locator('#search-results')).toContainText('Version history 是什麼？');
});

test('keyboard focus and 200% zoom preserve access', async ({page}) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.locator('.skip-link')).toBeFocused();
  await page.evaluate(() => { document.documentElement.style.zoom = '2'; });
  await expect(page.locator('h1')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1)).toBeTruthy();
});

test('dark mode follows the system preference and keeps AA contrast', async ({page}) => {
  await page.emulateMedia({colorScheme: 'dark'});
  await page.goto('/lessons/permission/');
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).colorScheme)).toContain('dark');
  expect(await page.evaluate(() => getComputedStyle(document.body).backgroundColor)).toBe('rgb(17, 24, 21)');
  const results = await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']).analyze();
  expect(results.violations).toEqual([]);
});

test('theme control overrides, remembers, and returns to live system preference', async ({page}) => {
  await page.emulateMedia({colorScheme: 'light'});
  await page.goto('/');
  const toggle = page.locator('[data-theme-toggle]');
  await expect(toggle).toContainText('跟隨系統');
  await toggle.click();
  await expect(toggle).toContainText('淺色');
  await toggle.click();
  await expect(toggle).toContainText('深色');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.reload();
  await expect(toggle).toContainText('深色');
  await toggle.click();
  await expect(toggle).toContainText('跟隨系統');
  await expect(page.locator('html')).not.toHaveAttribute('data-theme');
  await page.emulateMedia({colorScheme: 'dark'});
  await expect.poll(() => page.evaluate(() => getComputedStyle(document.body).backgroundColor)).toBe('rgb(17, 24, 21)');
});

test('all 35 lessons render a concrete scenario and boundary', async ({page}) => {
  await page.goto('/concepts/');
  const links = await page.locator('.concept-list a').evaluateAll((nodes) => nodes.map((node) => (node as HTMLAnchorElement).getAttribute('href')!));
  expect(links).toHaveLength(35);
  for (const href of links) {
    await page.goto(href);
    await expect(page.locator('.lesson-context')).not.toBeEmpty();
    await expect(page.locator('.scenario blockquote')).not.toBeEmpty();
    expect(await page.locator('.scenario ol li').count(), href).toBeGreaterThanOrEqual(2);
    await expect(page.locator('.scenario-boundary')).toContainText('判斷邊界');
    await expect(page.locator('.follow-up')).toContainText('套用到自己的情況');
    await expect(page.locator('.follow-up code')).toContainText('＿＿');
  }
});

test('canonical beginner sequence ignores the numeric order of stable IDs', async ({page}) => {
  await page.goto('/concepts/');
  const hrefs = await page.locator('.concept-list a').evaluateAll((nodes) => nodes.map((node) => (node as HTMLAnchorElement).getAttribute('href')));
  expect(hrefs.slice(0, 11)).toEqual([
    '/lessons/agent-vs-chat/',
    '/lessons/control-whole-computer/',
    '/lessons/files-and-folders/',
    '/lessons/path/',
    '/lessons/working-scope/',
    '/lessons/program/',
    '/lessons/install-vs-run/',
    '/lessons/input-process-output/',
    '/lessons/terminal/',
    '/lessons/command/',
    '/lessons/read-vs-write/',
  ]);
  await page.goto('/lessons/path/');
  await expect(page.locator('.lesson-next a').last()).toHaveAttribute('href', '/lessons/working-scope/');
  await page.goto('/lessons/where-model-runs/');
  await expect(page.locator('.lesson-next a').last()).toHaveAttribute('href', '/lessons/computer-resources/');
});

test('situation paths follow task-driven concept order', async ({page}) => {
  await page.goto('/paths/agent-runs-command/');
  expect(await page.locator('.path-steps a').evaluateAll((nodes) => nodes.map((node) => (node as HTMLAnchorElement).getAttribute('href')))).toEqual([
    '/lessons/program/',
    '/lessons/terminal/',
    '/lessons/command/',
    '/lessons/read-vs-write/',
    '/lessons/permission/',
    '/lessons/claim-vs-verification/',
  ]);

  await page.goto('/paths/local-cloud-confusion/');
  expect(await page.locator('.path-steps a').evaluateAll((nodes) => nodes.map((node) => (node as HTMLAnchorElement).getAttribute('href')))).toEqual([
    '/lessons/local-and-remote/',
    '/lessons/where-is-my-data/',
    '/lessons/where-program-runs/',
    '/lessons/where-model-runs/',
    '/lessons/computer-resources/',
    '/lessons/data-leaves-device/',
  ]);
});

test('core role pages keep one distinct mental model each', async ({page}) => {
  await page.goto('/lessons/program/');
  await expect(page.locator('h1')).toHaveText('Agent 靠什麼實際完成工作？');
  await expect(page.locator('.system-lane')).toHaveCount(3);
  await expect(page.locator('main')).toContainText('程式碼或程式檔案只是保存下來的指示');

  await page.goto('/lessons/input-process-output/');
  await expect(page.locator('h1')).toHaveText('一個電腦工作，可以怎麼拆開看？');
  await expect(page.locator('.concept-node')).toHaveCount(3);
  await expect(page.locator('.visual')).toContainText('原始照片');

  await page.goto('/lessons/terminal/');
  await expect(page.locator('.flow')).toBeVisible();
  await expect(page.locator('.flow')).toContainText('Terminal：一行文字指令');

  await page.goto('/lessons/command/');
  await expect(page.locator('.scenario-boundary')).not.toContainText('&&');
  await expect(page.locator('.scenario-boundary')).not.toContainText('|');
});

test('lesson IDs stay internal and protected DOCX copy remains intact', async ({page}) => {
  await page.goto('/lessons/program/');
  await expect(page.locator('.lesson-meta')).toHaveText(/概念短讀\s*·\s*約 1 分鐘/);
  await expect(page.locator('.lesson-meta')).not.toContainText('B3');

  await page.goto('/lessons/read-vs-write/');
  await expect(page.locator('main')).toContainText('讀一下 report.docx，告訴我第二章在說什麼；先不要修改。');
  await expect(page.locator('main')).toContainText('對 DOCX 則可能執行 unzip、pandoc 或文件解析程式');
  await expect(page.locator('main')).toContainText('DOCX 裡其實打包了文字結構、格式和圖片');
});

test('lesson follow-up question can be copied', async ({page, context}) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write'], {origin: 'http://127.0.0.1:4321'});
  await page.goto('/lessons/where-is-my-data/');
  const expectedPrompt = await page.locator('.follow-up code').textContent();
  await page.locator('.follow-up [data-copy-prompt]').click();
  await expect(page.locator('.follow-up .copy-status')).toHaveText('問題已複製到剪貼簿。');
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(expectedPrompt);
});

test('four preflight guides provide reusable prompts and explicit privacy framing', async ({page, context}) => {
  await page.goto('/prepare/');
  const links = await page.locator('section[aria-label="四篇前置說明"] a').evaluateAll((nodes) => nodes.map((node) => (node as HTMLAnchorElement).getAttribute('href')!));
  expect(links).toHaveLength(4);
  for (const href of links) {
    await page.goto(href);
    await expect(page.locator('.guide-principle')).toBeVisible();
    await expect(page.locator('.system-map')).toBeVisible();
    await expect(page.locator('.prompt-shelf')).toContainText('方案、產品和規則改得很快');
    await expect(page.locator('.prompt-card')).toHaveCount(3);
    await expect(page.locator('.prompt-card code').first()).toContainText('＿＿');
  }

  await page.goto('/prepare/privacy-and-data/');
  await expect(page.locator('.guide-body')).toContainText('內容仍可能透過網路送到模型提供商');
  await expect(page.locator('.guide-body')).toContainText('不代表模型也在本機');
  await context.grantPermissions(['clipboard-read', 'clipboard-write'], {origin: 'http://127.0.0.1:4321'});
  const expectedPrompt = await page.locator('.prompt-card code').first().textContent();
  await page.locator('[data-copy-prompt]').first().click();
  await expect(page.locator('.copy-status').first()).toHaveText('問題已複製到剪貼簿。');
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(expectedPrompt);
});

test('all rendered internal links resolve', async ({page, request}) => {
  await page.goto('/');
  const visited = new Set<string>(); const queue = ['/'];
  while(queue.length && visited.size < 70){
    const route=queue.shift()!; if(visited.has(route)) continue; visited.add(route);
    await page.goto(route); expect((await page.title()).length).toBeGreaterThan(0);
    const links=await page.locator('a[href]').evaluateAll((nodes)=>nodes.map(node=>(node as HTMLAnchorElement).getAttribute('href')!).filter(Boolean));
    for(const href of links){ if(href.startsWith('/') && !visited.has(href)) queue.push(href); }
  }
  for(const route of visited){ const response=await request.get(route); expect(response.status(), route).toBeLessThan(400); }
  expect(visited.size).toBeGreaterThan(40);
});
