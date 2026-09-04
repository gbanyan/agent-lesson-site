import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const keyPages = ['/', '/prepare/', '/prepare/privacy-and-data/', '/start/', '/concepts/', '/paths/first-agent-change/', '/paths/first-coding-agent/agent-vs-chat/', '/lessons/agent-vs-chat/', '/lessons/agent-work-loop/'];

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
  await expect(page.locator('.path-context')).toBeVisible();
  await expect(page.locator('.path-context')).toContainText('第 1 / 6 步');
  await expect(page).toHaveURL(/\/paths\/first-agent-change\/working-scope\/$/);
});

test('path context is built into HTML and keeps the canonical lesson URL', async ({page, request}) => {
  const route = '/paths/first-coding-agent/agent-vs-chat/';
  const response = await request.get(route);
  const html = await response.text();
  expect(html).toContain('第一次使用 Agent');
  expect(html).toContain('第 1 / 6 步');
  expect(html).toContain('下一步：什麼是檔案和資料夾？');
  expect(html).not.toContain('data-path-option');
  expect(html).not.toContain('data-pagefind-body');

  await page.goto(route);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'http://localhost:4321/lessons/agent-vs-chat/');
  await expect(page.locator('.lesson-next a').last()).toHaveAttribute('href', '/paths/first-coding-agent/files-and-folders/');
  await expect(page.locator('.path-context')).toContainText('返回「第一次使用 Agent」');

  await page.goto('/lessons/agent-vs-chat/');
  await expect(page.locator('.path-context')).toHaveCount(0);
  await expect(page.locator('.lesson-next a').last()).toHaveAttribute('href', '/lessons/control-whole-computer/');
});

test('first-time path introduces files before scope and keeps A2 optional', async ({page}) => {
  await page.goto('/paths/first-coding-agent/');
  await expect(page.locator('.path-steps li')).toHaveCount(6);
  const text = await page.locator('.path-steps').innerText();
  expect(text.indexOf('什麼是檔案和資料夾？')).toBeLessThan(text.indexOf('Agent 現在在哪個範圍工作？'));
  await expect(page.locator('.optional-step')).toContainText('Agent 可以直接控制整台電腦嗎？');
});

test('command path introduces the cross-concept relationship map', async ({page}) => {
  await page.goto('/paths/agent-runs-command/');
  await expect(page.locator('.relation-map')).toContainText('AI 模型根據目前資訊決定下一步');
  await expect(page.locator('.relation-map')).toContainText('Program 實際工作');
  await expect(page.locator('.terminal-note')).toContainText('不是 Agent 本身');
});

test('homepage prioritizes first use and concepts before buyer reference', async ({page}) => {
  await page.goto('/');
  const mainText = await page.locator('main').innerText();
  expect(mainText.indexOf('Agent 怎麼工作')).toBeLessThan(mainText.indexOf('購買前需要確認什麼？'));
  expect(mainText).not.toContain('先看懂它怎麼工作');
  await expect(page.locator('header .nav-links')).toContainText('選工具前');
});

test('concept index uses six human-question groups without lesson IDs', async ({page}) => {
  await page.goto('/concepts/');
  await expect(page.locator('.concept-group')).toHaveCount(6);
  await expect(page.locator('.concept-groups a')).toHaveCount(35);
  await expect(page.locator('.concept-groups')).toContainText('Agent 在做什麼？');
  await expect(page.locator('.concept-groups')).toContainText('怎麼確認結果？');
  expect(await page.locator('.concept-groups').innerText()).not.toMatch(/\b[ABCDEF]\d\b/);
});

test('Pagefind finds Git', async ({page}) => {
  await page.goto('/concepts/');
  await page.getByLabel('搜尋概念').fill('Git');
  await expect(page.locator('#search-status')).toContainText('找到', {timeout: 15_000});
  await expect(page.locator('#search-results')).toContainText('Git 是什麼？');
  await expect(page.locator('#search-results')).not.toContainText('Version history 是什麼？');
});

test('keyboard focus and 200% zoom preserve access', async ({page}) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.locator('.skip-link')).toBeFocused();
  await page.evaluate(() => { document.documentElement.style.zoom = '2'; });
  await expect(page.locator('h1')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1)).toBeTruthy();
});

test('320px lesson, path progress, prompt and search reflow without horizontal overflow', async ({page}) => {
  await page.setViewportSize({width: 320, height: 720});
  for (const route of ['/paths/agent-runs-command/command/', '/lessons/backup/', '/concepts/']) {
    await page.goto(route);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1), route).toBeTruthy();
  }
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

test('all 35 lessons use one of three archetypes and only useful prompts remain', async ({page}) => {
  await page.goto('/concepts/');
  const links = await page.locator('.concept-groups a').evaluateAll((nodes) => nodes.map((node) => (node as HTMLAnchorElement).getAttribute('href')!));
  expect(links).toHaveLength(35);
  let promptCount = 0;
  for (const href of links) {
    await page.goto(href);
    await expect(page.locator('.lesson-context')).not.toBeEmpty();
    await expect(page.locator('.scenario blockquote')).not.toBeEmpty();
    await expect(page.locator('article.lesson')).toHaveClass(/lesson-(definition|contrast|safety_action)/);
    if (await page.locator('.follow-up').count()) {
      promptCount += 1;
      await expect(page.locator('.follow-up code')).toContainText('＿＿');
    }
  }
  expect(promptCount).toBe(8);
});

test('canonical beginner sequence ignores the numeric order of stable IDs', async ({page}) => {
  await page.goto('/lessons/path/');
  await expect(page.locator('.lesson-next a').last()).toHaveAttribute('href', '/lessons/working-scope/');
  await page.goto('/lessons/where-model-runs/');
  await expect(page.locator('.lesson-next a').last()).toHaveAttribute('href', '/lessons/computer-resources/');
});

test('situation paths follow task-driven concept order', async ({page}) => {
  await page.goto('/paths/agent-runs-command/');
  expect(await page.locator('.path-steps a').evaluateAll((nodes) => nodes.map((node) => (node as HTMLAnchorElement).getAttribute('href')))).toEqual([
    '/paths/agent-runs-command/program/',
    '/paths/agent-runs-command/terminal/',
    '/paths/agent-runs-command/command/',
    '/paths/agent-runs-command/read-vs-write/',
    '/paths/agent-runs-command/permission/',
  ]);

  await page.goto('/paths/local-cloud-confusion/');
  expect(await page.locator('.path-steps a').evaluateAll((nodes) => nodes.map((node) => (node as HTMLAnchorElement).getAttribute('href')))).toEqual([
    '/paths/local-cloud-confusion/local-and-remote/',
    '/paths/local-cloud-confusion/where-is-my-data/',
    '/paths/local-cloud-confusion/where-program-runs/',
    '/paths/local-cloud-confusion/where-model-runs/',
    '/paths/local-cloud-confusion/computer-resources/',
    '/paths/local-cloud-confusion/data-leaves-device/',
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
  await expect(page.locator('.flow')).not.toContainText('使用工具：');
  await expect(page.locator('.flow')).toContainText('執行文字指令');

  await page.goto('/lessons/command/');
  await expect(page.locator('.scenario-note')).not.toContainText('&&');
  await expect(page.locator('.scenario-note')).not.toContainText('|');
});

test('A1, Terminal, Tool, Context, Local Remote and Git keep corrected boundaries', async ({page}) => {
  await page.goto('/lessons/agent-vs-chat/');
  await expect(page.locator('main')).toContainText('聊天是一種互動介面');
  await expect(page.locator('main')).toContainText('差別在可用能力，不在畫面是不是聊天視窗');
  await expect(page.locator('.lesson-body')).not.toContainText('Research Agent');
  await expect(page.locator('.lesson-body')).not.toContainText('Actionable Agent');
  await page.goto('/lessons/terminal/');
  await expect(page.locator('main')).toContainText('畫面上不一定會真的出現 Terminal');
  await expect(page.locator('.scenario')).toContainText('若這項操作顯示在 Terminal');
  await page.goto('/lessons/tool/');
  await expect(page.locator('main')).toContainText('不一定是一個獨立程式');
  await page.goto('/lessons/context/');
  await expect(page.locator('main')).toContainText('不表示 Agent 具有和人一樣的持續長期記憶');
  await expect(page.locator('.scenario')).toContainText('website 的活動日期');
  await page.goto('/lessons/agent-work-loop/');
  await expect(page.locator('.scenario')).toContainText('手機版沒有跑版');
  await page.goto('/lessons/local-and-remote/');
  await expect(page.locator('main')).toContainText('資料是否被傳送、複製或保存，需要另外確認');
  await page.goto('/lessons/git/');
  await expect(page.locator('main')).not.toContainText('git status');
  await expect(page.locator('main')).not.toContainText('git diff');
});

test('lesson IDs stay internal and protected DOCX copy remains intact', async ({page}) => {
  await page.goto('/lessons/program/');
  await expect(page.locator('.lesson-meta')).toHaveText('概念短讀');
  await expect(page.locator('.lesson-meta')).not.toContainText('B3');
  await expect(page.locator('main')).not.toContainText('約 1 分鐘');

  await page.goto('/lessons/read-vs-write/');
  await expect(page.locator('main')).toContainText('讀一下 report.docx，告訴我第二章在說什麼；先不要修改。');
  await expect(page.locator('main')).toContainText('對 DOCX 則可能執行 unzip、pandoc 或文件解析程式');
  await expect(page.locator('main')).toContainText('DOCX 裡其實打包了文字結構、格式和圖片');
});

test('theme control names the controlled setting and About avoids screen-reader overclaim', async ({page}) => {
  await page.goto('/');
  await expect(page.locator('[data-theme-toggle]')).toContainText('外觀：跟隨系統');
  await page.goto('/about/');
  await expect(page.locator('main')).toContainText('尚未完成由螢幕報讀使用者進行的正式測試');
});

test('prompt types identify the audience and execution risk', async ({page, context}) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write'], {origin: 'http://127.0.0.1:4321'});
  await page.goto('/lessons/command/');
  await expect(page.locator('.follow-up')).toContainText('問目前正在工作的 Agent');
  const expectedPrompt = await page.locator('.follow-up code').textContent();
  await page.locator('.follow-up [data-copy-prompt]').click();
  await expect(page.locator('.follow-up .copy-status')).toHaveText('文字已複製到剪貼簿。');
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(expectedPrompt);
  await page.goto('/lessons/backup/');
  await expect(page.locator('.follow-up')).toContainText('加入任務要求');
  await expect(page.locator('.follow-up [data-copy-prompt]')).toHaveText('複製任務限制');
  await page.goto('/lessons/program/');
  await expect(page.locator('.follow-up')).toHaveCount(0);
});

test('four preflight guides provide reusable prompts and explicit privacy framing', async ({page, context}) => {
  await page.goto('/prepare/');
  const links = await page.locator('section[aria-label="四篇前置說明"] a').evaluateAll((nodes) => nodes.map((node) => (node as HTMLAnchorElement).getAttribute('href')!));
  expect(links).toHaveLength(4);
  for (const href of links) {
    await page.goto(href);
    await expect(page.locator('.guide-principle')).toBeVisible();
    await expect(page.locator('.system-map')).toBeVisible();
    await expect(page.locator('.prompt-shelf')).toContainText('問能查官方資料的 AI');
    await expect(page.locator('.prompt-card')).toHaveCount(3);
    await expect(page.locator('.prompt-card code').first()).toContainText('＿＿');
  }

  await page.goto('/prepare/privacy-and-data/');
  await expect(page.locator('.guide-body')).toContainText('工具結果會經過網路');
  await expect(page.locator('.guide-body')).toContainText('不表示模型也在本機');
  await context.grantPermissions(['clipboard-read', 'clipboard-write'], {origin: 'http://127.0.0.1:4321'});
  const expectedPrompt = await page.locator('.prompt-card code').first().textContent();
  await page.locator('[data-copy-prompt]').first().click();
  await expect(page.locator('.copy-status').first()).toHaveText('文字已複製到剪貼簿。');
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(expectedPrompt);

  await page.goto('/prepare/plans-and-costs/');
  const estimateCard = page.locator('.prompt-card').filter({hasText:'估算自己的使用情境'});
  await expect(estimateCard).toContainText('需要網路查詢');
  await expect(estimateCard.locator('code')).toContainText('目前官方費率');

  await page.goto('/products/codex/');
  await expect(page.getByRole('link', {name:/查看官方資訊/})).toHaveAttribute('href', 'https://learn.chatgpt.com/docs/quickstart');
});

test('all rendered internal links resolve', async ({page, request}) => {
  await page.goto('/');
  const visited = new Set<string>(); const queue = ['/'];
  while(queue.length && visited.size < 120){
    const route=queue.shift()!; if(visited.has(route)) continue; visited.add(route);
    await page.goto(route); expect((await page.title()).length).toBeGreaterThan(0);
    const links=await page.locator('a[href]').evaluateAll((nodes)=>nodes.map(node=>(node as HTMLAnchorElement).getAttribute('href')!).filter(Boolean));
    for(const href of links){ if(href.startsWith('/') && !visited.has(href)) queue.push(href); }
  }
  for(const route of visited){ const response=await request.get(route); expect(response.status(), route).toBeLessThan(400); }
  expect(visited.size).toBeGreaterThanOrEqual(80);
});
