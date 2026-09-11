import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { legacyLessons, publishedPathSteps } from '../src/lib/legacy-lessons';

const keyPages = ['/', '/introduction/', '/prepare/', '/prepare/what-can-it-do/', '/prepare/what-still-works/', '/prepare/privacy-and-data/', '/start/', '/concepts/', '/paths/first-agent-change/', '/paths/first-coding-agent/input-process-output/', '/lessons/agent-vs-chat/', '/lessons/agent-work-loop/', '/lessons/command/', '/lessons/are-changes-reversible/', '/lessons/version-history/'];

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
  await expect(page.locator('h1')).toHaveText('這個文字畫面裡，哪一行是在叫電腦做事？');
  await expect(page.locator('script')).toHaveCount(2);
  await expect(page.locator('script[src]')).toHaveCount(0);
});

test('diagram meaning remains in the accessibility tree', async ({page}) => {
  await page.goto('/lessons/where-model-runs/');
  const equivalent = page.locator('.visually-equivalent');
  await expect(equivalent).toContainText('資料存放、Agent 執行工具與 AI 模型運算可能發生在不同位置');
  await expect(equivalent).toContainText('縮圖程式在本機，模型可能在遠端');
  const snapshot = await page.locator('main').ariaSnapshot();
  expect(snapshot).toContain('AI 模型在哪裡運算？');
  expect(snapshot).toContain('資料存放、Agent 執行工具與 AI 模型運算可能發生在不同位置');
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
    await expect(page.locator('.system-map').first(), route).toBeVisible();
    await expect(page.locator('.system-map .visually-equivalent').first(), route).not.toBeEmpty();
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
  const route = '/paths/first-coding-agent/input-process-output/';
  const response = await request.get(route);
  const html = await response.text();
  expect(html).toContain('第一次使用 Agent');
  expect(html).toContain('第 1 / 6 步');
  expect(html).toContain('下一步：這些資料原本放在哪裡？');
  expect(html).not.toContain('data-path-option');
  expect(html).not.toContain('data-pagefind-body');

  await page.goto(route);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'http://localhost:4321/lessons/input-process-output/');
  await expect(page.locator('.lesson-next a').last()).toHaveAttribute('href', '/paths/first-coding-agent/files-and-folders/');
  await expect(page.locator('.path-context')).toContainText('返回「第一次使用 Agent」');

  await page.goto('/lessons/agent-vs-chat/');
  await expect(page.locator('.path-context')).toHaveCount(0);
  await expect(page.locator('.lesson-next a').last()).toHaveAttribute('href', '/lessons/control-whole-computer/');
});

test('first-time path prepares recovery before tool execution and keeps A2 optional', async ({page}) => {
  await page.goto('/paths/first-coding-agent/');
  await expect(page.locator('.path-steps li')).toHaveCount(6);
  expect(await page.locator('.path-steps a').allTextContents()).toEqual([
    '它怎麼把你給的資訊變成結果？', '這些資料原本放在哪裡？', 'AI 這次有拿到哪些資訊？',
    '動手前，原圖保留在哪裡？', '它怎麼讓電腦真的動手？', '做完之後，哪些地方改變了？',
  ]);
  await expect(page.locator('.path-steps')).toContainText('這是動手前就要做的事');
  await expect(page.locator('.optional-step')).toContainText('Agent 可以直接控制整台電腦嗎？');
});

test('command path introduces the cross-concept relationship map', async ({page}) => {
  await page.goto('/paths/agent-runs-command/');
  await expect(page.locator('.relation-map')).toContainText('AI 模型根據目前資訊決定下一步');
  await expect(page.locator('.relation-map')).toContainText('程式實際工作');
  await expect(page.locator('.terminal-note')).toContainText('不是 Agent 本身');
});

test('homepage opens with the authored preface then preparation concepts before first use', async ({page}) => {
  await page.goto('/');
  const mainText = await page.locator('main').innerText();
  expect(mainText.indexOf('本站的緣起')).toBeGreaterThanOrEqual(0);
  expect(mainText.indexOf('本站的緣起')).toBeLessThan(mainText.indexOf('前置準備'));
  expect(mainText.indexOf('前置準備')).toBeLessThan(mainText.indexOf('Agent 怎麼工作'));
  await expect(page.locator('.introduction-copy')).toContainText('本站的緣起，是為了周邊朋友');
  await expect(page.locator('.introduction-copy')).not.toContainText('知識平權的創舉');
  await expect(page.getByRole('link', {name: '關於本站 →'})).toHaveAttribute('href', '/about/');
  expect(await page.locator('.prepare-card').count()).toBeGreaterThanOrEqual(5);
  expect(mainText).not.toContain('先看懂它怎麼工作');
  expect(await page.locator('header .nav-links a').allTextContents()).toEqual(['開始', '找概念', '關於本站']);
});

test('introduction redirects to the merged About page with the authored preface', async ({page}) => {
  await page.goto('/introduction/');
  await expect(page).toHaveURL(/\/about\/$/);
  await expect(page.locator('h1')).toHaveText('關於本站');
  await expect(page.locator('.introduction-body > p')).toHaveCount(5);
  await expect(page.locator('.introduction-body')).toContainText('AI 的興起，本該是知識平權的創舉');
  await expect(page.locator('.introduction-body')).toContainText('沒有一份教材能替這個決定簽名');
  await expect(page.locator('header a[aria-current="page"]')).toHaveText('關於本站');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'http://localhost:4321/about/');
  const oldPage = await page.request.get('/introduction/');
  expect(await oldPage.text()).toContain('name="robots" content="noindex"');
  await page.goto('/');
  const excerpt = await page.locator('.introduction-copy > p').textContent();
  await page.goto('/about/');
  expect(await page.locator('.introduction-body > p').first().textContent()).toBe(excerpt);
});

test('concept index uses six human-question groups without lesson IDs', async ({page}) => {
  await page.goto('/concepts/');
  await expect(page.locator('.concept-group')).toHaveCount(6);
  await expect(page.locator('.concept-groups a')).toHaveCount(33);
  await expect(page.locator('.concept-groups')).toContainText('Agent 在做什麼？');
  await expect(page.locator('.concept-groups')).toContainText('怎麼確認結果？');
  expect(await page.locator('.concept-groups').innerText()).not.toMatch(/\b[ABCDEF]\d\b/);
});

test('Pagefind finds Git', async ({page}) => {
  await page.goto('/concepts/');
  await page.getByLabel('搜尋概念').fill('Git');
  await expect(page.locator('#search-status')).toContainText('找到', {timeout: 15_000});
  await expect(page.locator('#search-results')).toContainText('能找到修改以前的版本嗎？');
  await expect(page.locator('#search-results a[href$="/git/"]')).toHaveCount(0);
});

test('published lesson and path URLs still resolve after the merges', async ({page, request}) => {
  for (const legacy of legacyLessons) {
    const response = await request.get(`/lessons/${legacy.slug}/`);
    const html = await response.text();
    expect(html).toContain('noindex');
    expect(html).not.toContain('data-pagefind-body');
    await page.goto(`/lessons/${legacy.slug}/`);
    await expect(page).toHaveURL(new RegExp(`/lessons/${legacy.targetSlug}/$`));
    await expect(page.locator('article.lesson')).toBeVisible();
  }
  for (const [path, slugs] of Object.entries(publishedPathSteps)) {
    for (const slug of slugs) {
      await page.goto(`/paths/${path}/${slug}/`);
      await expect(page.locator('article.lesson'), `${path}/${slug}`).toBeVisible();
    }
  }
});

test('English search aliases lead to the question-led canonical lessons', async ({page}) => {
  const pairs = [
    ['Terminal', 'command'], ['Command', 'command'], ['Version history', 'version-history'],
    ['Context', 'context'], ['Tool', 'tool'], ['Permission', 'permission'], ['Backup', 'backup'], ['Input', 'input-process-output'],
  ];
  for (const [term, slug] of pairs) {
    await page.goto('/concepts/');
    await page.getByLabel('搜尋概念').fill(term!);
    await expect(page.locator(`#search-results a[href$="/lessons/${slug}/"]`)).toBeVisible({timeout:15000});
  }
});

test('beginner path can be followed as six connected steps without changing the task', async ({page}) => {
  await page.goto('/paths/first-coding-agent/');
  await expect(page.locator('main')).toContainText('想寄照片給朋友');
  await expect(page.locator('main')).toContainText('不需要準備檔案或跟著操作');
  await page.locator('.path-steps a').first().click();
  for (let step = 1; step <= 6; step++) {
    await expect(page.locator('.path-progress')).toContainText(`第 ${step} / 6 步`);
    await expect(page.locator('.path-step-introduction')).not.toBeEmpty();
    await expect(page.locator('.scenario')).toContainText(/照片|原圖/);
    await expect(page.locator('main')).not.toContainText('練習網頁');
    await expect(page.locator('main')).not.toContainText('9 月 27 日');
    if (step < 6) await page.locator('.lesson-next a').last().click();
  }
  await expect(page).toHaveURL(/\/inspect-changes\/$/);
  await page.goto('/paths/first-coding-agent/are-changes-reversible/');
  await expect(page.locator('.path-progress')).toContainText('第 4 / 6 步');
  await expect(page.locator('.lesson-next a').last()).toHaveAttribute('href', '/paths/first-coding-agent/tool/');
});

test('every situation step supplies context and explains changes of example', async ({page}) => {
  for (const path of ['first-coding-agent', 'first-agent-change', 'agent-runs-command', 'fear-of-breaking-things', 'local-cloud-confusion']) {
    await page.goto(`/paths/${path}/`);
    const links = await page.locator('.path-steps a').evaluateAll(nodes => nodes.map(node => (node as HTMLAnchorElement).pathname));
    for (const href of links) {
      await page.goto(href);
      await expect(page.locator('.path-step-introduction')).not.toBeEmpty();
    }
  }
  await page.goto('/paths/first-agent-change/read-vs-write/');
  await expect(page.locator('.path-step-introduction')).toContainText('換成文件');
  await page.goto('/paths/first-agent-change/permission/');
  await expect(page.locator('.path-step-introduction')).toContainText('回到照片');
  await page.goto('/paths/fear-of-breaking-things/version-history/');
  await expect(page.locator('.path-step-introduction')).toContainText('換成反覆修改文章');
  await page.goto('/paths/fear-of-breaking-things/claim-vs-verification/');
  await expect(page.locator('.path-step-introduction')).toContainText('回到照片');
});

test('cautionary requests are labelled before the request and ordinary examples are not', async ({page}) => {
  for (const slug of ['secrets', 'beyond-files']) {
    await page.goto(`/lessons/${slug}/`);
    await expect(page.locator('.scenario-warning')).toContainText('以下要求不應直接照做');
    expect(await page.locator('.scenario').evaluate(section => {
      const warning = section.querySelector('.scenario-warning')!;
      const request = section.querySelector('blockquote')!;
      return Boolean(warning.compareDocumentPosition(request) & Node.DOCUMENT_POSITION_FOLLOWING)
        && request.getAttribute('aria-describedby') === warning.id;
    })).toBe(true);
    await expect(page.locator('.scenario .copy-prompt')).toHaveCount(0);
    const results = await new AxeBuilder({page}).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
    expect(results.violations).toEqual([]);
  }
  await page.goto('/lessons/backup/');
  await expect(page.locator('.scenario-warning')).toHaveCount(0);
});

test('direct lesson entry introduces the task and keeps the sandbox example consistent', async ({page}) => {
  for (const slug of ['files-and-folders', 'where-program-runs', 'tool', 'agent-work-loop', 'claim-vs-verification']) {
    await page.goto(`/lessons/${slug}/`);
    await expect(page.locator('.lesson-context')).toContainText('照片');
    await expect(page.locator('.lesson-context')).toContainText('縮小');
    await expect(page.locator('.lesson-context')).not.toContainText('同樣三張');
  }
  await page.goto('/lessons/secrets/');
  await expect(page.locator('.scenario blockquote')).toContainText('登入密碼');
  await expect(page.locator('.scenario')).not.toContainText('自動排程');
  await page.goto('/lessons/sandbox/');
  await expect(page.locator('.lesson-context')).toContainText('照片副本');
  await expect(page.locator('.scenario')).toContainText('圖片程式');
  await expect(page.locator('.lesson-body')).toContainText('不等於環境已經設好限制');
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

test('every lesson uses one of three archetypes and preserves actionable prompts', async ({page}) => {
  await page.goto('/concepts/');
  const links = await page.locator('.concept-groups a').evaluateAll((nodes) => nodes.map((node) => (node as HTMLAnchorElement).getAttribute('href')!));
  expect(links).toHaveLength(33);
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
  expect(promptCount).toBe(10);
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
  await expect(page.locator('h1')).toHaveText('它怎麼把你給的資訊變成結果？');
  await expect(page.locator('.concept-node')).toHaveCount(3);
  await expect(page.locator('.visual')).toContainText('照片的例子就是這張圖');

  await page.goto('/lessons/terminal/');
  await expect(page).toHaveURL(/\/lessons\/command\/$/);
  await expect(page.locator('.terminal')).toBeVisible();
  await expect(page.locator('.terminal code')).toContainText('ls 照片');
  await expect(page.locator('.terminal samp')).toContainText('photo-1.jpg');

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
  await expect(page.locator('.scenario')).toContainText('三張原圖沒有被修改');
  await page.goto('/lessons/tool/');
  await expect(page.locator('main')).toContainText('不一定是一個獨立程式');
  await page.goto('/lessons/context/');
  await expect(page.locator('main')).toContainText('不表示 Agent 具有和人一樣的持續長期記憶');
  await expect(page.locator('.scenario')).toContainText('原圖保留，新圖另存');
  await page.goto('/lessons/agent-work-loop/');
  await expect(page.locator('.scenario')).toContainText('新圖仍太大或看不清楚');
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
  await page.goto('/lessons/where-is-my-data/');
  await page.getByText('另外看文件的例子', {exact:true}).click();
  await expect(page.locator('details .system-map')).toBeVisible();
  await expect(page.locator('details')).toContainText('企劃書.docx');
});

test('theme control names the controlled setting', async ({page}) => {
  await page.goto('/');
  await expect(page.locator('[data-theme-toggle]')).toContainText('外觀：跟隨系統');
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

test('preflight guides provide reusable prompts and explicit privacy framing', async ({page, context}) => {
  await page.goto('/prepare/');
  const links = await page.locator('section[aria-label="前置觀念說明"] a').evaluateAll((nodes) => nodes.map((node) => (node as HTMLAnchorElement).getAttribute('href')!));
  expect(links.length).toBeGreaterThanOrEqual(5);
  for (const href of links) {
    await page.goto(href);
    await expect(page.locator('.guide-principle')).toBeVisible();
    await expect(page.locator('.system-map')).toBeVisible();
    await expect(page.locator('.prompt-shelf h2')).toContainText(/問能查官方資料的 AI|問你手邊的 AI 就好/);
    const cardCount = await page.locator('.prompt-card').count();
    expect(cardCount).toBeGreaterThanOrEqual(2);
    expect(cardCount).toBeLessThanOrEqual(3);
    await expect(page.locator('.prompt-card code').first()).toContainText('＿＿');
  }

  await expect(page.locator('.guide-body')).toContainText('凡是你看不到過程的，就當作已經離開你的裝置');
  await expect(page.locator('.guide-body')).toContainText('附加的檔案與工具結果都會經過網路');
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
    await page.goto(route); await expect(page, route).toHaveTitle(/.+/);
    const links=await page.locator('a[href]').evaluateAll((nodes)=>nodes.map(node=>(node as HTMLAnchorElement).getAttribute('href')!).filter(Boolean));
    for(const href of links){ if(href.startsWith('/') && !visited.has(href)) queue.push(href); }
  }
  for(const route of visited){ const response=await request.get(route); expect(response.status(), route).toBeLessThan(400); }
  expect(visited.size).toBeGreaterThanOrEqual(73);
});
