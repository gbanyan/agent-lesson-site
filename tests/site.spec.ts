import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readFile } from 'node:fs/promises';
import { content, reachableRoutes, routes } from './content';

// Browser tests cover behaviour: routing, rendering, accessibility, theme, copy and search.
// Counts and orders come from the content graph; protected wording is checked by `guard` in lint.

const wcag = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];
const lessonBySlug = (slug: string) => content.lessons.find((lesson) => lesson.slug === slug)!;
const pathBySlug = (slug: string) => content.paths.find((path) => path.slug === slug)!;
const noOverflow = () => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1;

const keyPages = ['/', '/prepare/', '/prepare/what-can-it-do/', '/prepare/what-still-works/', '/prepare/privacy-and-data/', '/start/', '/concepts/', '/paths/first-agent-change/', '/paths/first-coding-agent/input-process-output/', '/lessons/agent-vs-chat/', '/lessons/agent-work-loop/', '/lessons/command/', '/lessons/are-changes-reversible/', '/lessons/version-history/', '/lessons/where-is-my-data/', '/tasks/expense-summary/'];

for (const route of keyPages) {
  test(`${route} has no detectable WCAG A/AA violations`, async ({page}) => {
    await page.goto(route);
    await expect(page.locator('main')).toBeVisible();
    const results = await new AxeBuilder({page}).withTags(wcag).analyze();
    expect(results.violations).toEqual([]);
  });
}

test('lesson page only ships the small shared inline scripts', async ({page}) => {
  const lesson = lessonBySlug('command');
  await page.goto(routes.lesson(lesson));
  await expect(page.locator('h1')).toHaveText(lesson.question);
  await expect(page.locator('script')).toHaveCount(2);
  await expect(page.locator('script[src]')).toHaveCount(0);
});

test('diagram meaning remains in the accessibility tree', async ({page}) => {
  const lesson = lessonBySlug('where-program-runs');
  const visual = lesson.visual;
  if (visual?.type !== 'system-map') throw new Error(`${lesson.slug} is expected to use a system map`);
  await page.goto(routes.lesson(lesson));
  await expect(page.locator('.visually-equivalent')).toContainText(visual.summary);
  const snapshot = await page.locator('main').ariaSnapshot();
  expect(snapshot).toContain(lesson.question);
  expect(snapshot).toContain(visual.summary);
});

test('guarded phrases are present (or absent) on the rendered page', async ({page}) => {
  const guarded = [
    ...content.lessons.map((item) => ({ route: routes.lesson(item), guard: item.guard })),
    ...content.guides.map((item) => ({ route: routes.guide(item), guard: item.guard })),
    ...content.paths.map((item) => ({ route: routes.path(item), guard: item.guard })),
  ].filter((item) => item.guard);
  expect(guarded.length).toBeGreaterThan(0);
  for (const { route, guard } of guarded) {
    await page.goto(route);
    const text = await page.locator('main').innerText();
    for (const phrase of guard!.keep) expect(text, `${route} keeps「${phrase}」`).toContain(phrase);
    for (const phrase of guard!.avoid) expect(text, `${route} avoids「${phrase}」`).not.toContain(phrase);
  }
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

test('every lesson renders the visual its frontmatter declares, with a text equivalent', async ({page}) => {
  const selectors = { 'system-map': '.system-map', concept: '.concept-row', terminal: '.terminal', 'file-explorer': '.tree', permission: '.permission-box' };
  for (const lesson of content.lessons) {
    if (!lesson.visual) continue;
    await page.goto(routes.lesson(lesson));
    await expect(page.locator(selectors[lesson.visual.type]).first(), lesson.slug).toBeVisible();
    const visual = lesson.visual;
    const figure = page.locator('.lesson-visual > figure');
    if (visual.type === 'system-map') await expect(figure.locator('.system-lane'), lesson.slug).toHaveCount(visual.lanes.length);
    if (visual.type === 'concept') await expect(figure.locator('.concept-node'), lesson.slug).toHaveCount(visual.items.length);
    if (visual.type === 'terminal') {
      await expect(figure.locator('.terminal code')).toContainText(visual.command);
      await expect(figure.locator('.terminal samp')).toHaveText(visual.output);
    }
    if (visual.type === 'file-explorer') await expect(figure.locator('.tree-entry:not(.tree-root)'), lesson.slug).toHaveCount(visual.entries.length);
    if (visual.type === 'permission') await expect(figure.locator('.permission-files')).toHaveText(visual.files.join('、'));
    const summary = visual.type === 'permission' ? visual.consequence : visual.summary;
    await expect(figure.locator('.visually-equivalent'), lesson.slug).toContainText(summary);
  }
});

test('situation path links to its lessons and opens them in path context', async ({page}) => {
  const path = pathBySlug('first-agent-change');
  const first = content.pathSteps(path)[0]!;
  await page.goto(routes.path(path));
  await expect(page.locator('.path-steps li')).toHaveCount(path.lessons.length);
  await page.locator('.path-steps a').first().click();
  await expect(page.locator('article.lesson')).toBeVisible();
  await expect(page.locator('.path-context')).toContainText(`第 1 / ${path.lessons.length} 步`);
  await expect(page).toHaveURL(new RegExp(`${routes.pathStep(path, first.lesson)}$`));
});

test('path context is built into HTML and keeps the canonical lesson URL', async ({page, request}) => {
  const path = content.featuredPath!;
  const [first, second] = content.pathSteps(path);
  const route = routes.pathStep(path, first!.lesson);
  const html = await (await request.get(route)).text();
  expect(html).toContain(path.title);
  expect(html).toContain(`第 1 / ${path.lessons.length} 步`);
  expect(html).toContain(`下一步：${second!.title}`);
  expect(html).not.toContain('data-pagefind-body');

  await page.goto(route);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `http://localhost:4321${routes.lesson(first!.lesson)}`);
  await expect(page.locator('.lesson-next a').last()).toHaveAttribute('href', routes.pathStep(path, second!.lesson));
  await expect(page.locator('.path-context')).toContainText(`返回「${path.title}」`);
  await expect(page.locator('.lesson-prerequisites')).toHaveCount(0);
});

test('canonical lesson pages link to the next lesson in reading order and to prerequisites', async ({page}) => {
  for (const lesson of content.lessons) {
    const { next } = content.lessonNeighbors(lesson.id);
    await page.goto(routes.lesson(lesson));
    await expect(page.locator('.path-context'), lesson.slug).toHaveCount(0);
    await expect(page.locator('.lesson-next a').last(), lesson.slug).toHaveAttribute('href', next ? routes.lesson(next) : '/start/');
    const prerequisites = page.locator('.lesson-prerequisites a');
    await expect(prerequisites, lesson.slug).toHaveCount(lesson.prerequisites.length);
    for (const [index, id] of lesson.prerequisites.entries()) {
      await expect(prerequisites.nth(index)).toHaveAttribute('href', routes.lesson(content.lesson(id)));
    }
  }
});

test('situation paths list their steps in authored order with optional lessons apart', async ({page}) => {
  for (const path of content.paths) {
    await page.goto(routes.path(path));
    const steps = content.pathSteps(path);
    expect(await page.locator('.path-steps a').evaluateAll((nodes) => nodes.map((node) => node.getAttribute('href')))).toEqual(steps.map((step) => routes.pathStep(path, step.lesson)));
    expect(await page.locator('.path-steps a').allTextContents()).toEqual(steps.map((step) => step.title));
    for (const id of path.optionalLessons ?? []) await expect(page.locator('.optional-step')).toContainText(content.lesson(id).question);
    await expect(page.locator('.safety-gate li')).toHaveCount(path.safetyGate?.length ?? 0);
    await expect(page.locator('.flow-diagram')).toHaveCount(path.diagram ? 1 : 0);
    await expect(page.locator('.path-exit')).toHaveCount(path.exit ? 1 : 0);
  }
});

test('command path shows its relationship diagram with the interface note', async ({page}) => {
  const path = content.paths.find((item) => item.diagram)!;
  await page.goto(routes.path(path));
  for (const step of path.diagram!.steps) await expect(page.locator('.flow-diagram .flow')).toContainText(step);
  await expect(page.locator('.flow-note')).toHaveText(path.diagram!.note!);
});

test('homepage opens with the authored preface then preparation concepts before first use', async ({page}) => {
  await page.goto('/');
  const mainText = await page.locator('main').innerText();
  expect(mainText.indexOf('本站的緣起')).toBeGreaterThanOrEqual(0);
  expect(mainText.indexOf('本站的緣起')).toBeLessThan(mainText.indexOf('開始前先想清楚的事'));
  expect(mainText.indexOf('開始前先想清楚的事')).toBeLessThan(mainText.indexOf('Agent 怎麼工作'));
  await expect(page.locator('.introduction-copy')).toContainText('本站的緣起，是為了周邊朋友');
  await expect(page.locator('.introduction-copy')).not.toContainText('知識平權的創舉');
  await expect(page.getByRole('link', {name: '關於本站 →'})).toHaveAttribute('href', '/about/');
  await expect(page.locator('.prepare-card')).toHaveCount(content.guides.length);
  await expect(page.locator('.featured-card')).toHaveAttribute('href', routes.path(content.featuredPath!));
  expect(mainText).not.toContain('先看懂它怎麼工作');
  expect(await page.locator('header .nav-links a').allTextContents()).toEqual(['開始', '找概念', '關於本站']);
});

test('about page shows the authored preface and matches the homepage excerpt', async ({page}) => {
  const preface = (await readFile('src/content/introduction.md', 'utf8')).replace(/<!--[\s\S]*?-->/g, '').trim().split(/\n\s*\n/).filter((block) => !block.startsWith('#'));
  await page.goto('/about/');
  await expect(page.locator('h1')).toHaveText('關於本站');
  await expect(page.locator('.introduction-body > p')).toHaveCount(preface.length);
  await expect(page.locator('.introduction-body')).toContainText('AI 的興起，本該是知識平權的創舉');
  await expect(page.locator('.introduction-body')).toContainText('沒有一份教材能替這個決定簽名');
  await expect(page.locator('header a[aria-current="page"]')).toHaveText('關於本站');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'http://localhost:4321/about/');
  await page.goto('/');
  const excerpt = await page.locator('.introduction-copy > p').textContent();
  await page.goto('/about/');
  expect(await page.locator('.introduction-body > p').first().textContent()).toBe(excerpt);
});

test('concept index shows every lesson under human-question groups without lesson IDs', async ({page}) => {
  await page.goto('/concepts/');
  await expect(page.locator('.concept-group')).toHaveCount(content.conceptGroups.length);
  for (const [index, { group, lessons }] of content.conceptGroups.entries()) {
    const section = page.locator('.concept-group').nth(index);
    await expect(section.locator('h2')).toHaveText(group.title);
    expect(await section.locator('a').evaluateAll((nodes) => nodes.map((node) => node.getAttribute('href')))).toEqual(lessons.map(routes.lesson));
  }
  expect(await page.locator('.concept-groups').innerText()).not.toMatch(/\b[ABCDEF]\d\b/);
});

test('Pagefind finds Git', async ({page}) => {
  await page.goto('/concepts/');
  await page.getByLabel('搜尋概念').fill('Git');
  await expect(page.locator('#search-status')).toContainText('找到', {timeout: 15_000});
  await expect(page.locator('#search-results')).toContainText(lessonBySlug('version-history').question);
  await expect(page.locator('#search-results a[href$="/git/"]')).toHaveCount(0);
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

test('beginner path can be followed step by step without changing the task', async ({page}) => {
  const path = content.featuredPath!;
  const steps = content.pathSteps(path);
  await page.goto(routes.path(path));
  await page.locator('.path-steps a').first().click();
  for (const step of steps) {
    await expect(page.locator('.path-progress')).toContainText(`第 ${step.step} / ${step.total} 步`);
    await expect(page.locator('.path-step-introduction')).toHaveText(step.intro);
    await expect(page.locator('.scenario')).toContainText(/照片|原圖/);
    await expect(page.locator('main')).not.toContainText('練習網頁');
    await expect(page.locator('main')).not.toContainText('9 月 27 日');
    if (step.next) await page.locator('.lesson-next a').last().click();
  }
  await expect(page).toHaveURL(new RegExp(`${routes.pathStep(path, steps.at(-1)!.lesson)}$`));
});

test('every situation step supplies its path introduction', async ({page}) => {
  for (const path of content.paths) {
    for (const step of content.pathSteps(path)) {
      await page.goto(routes.pathStep(path, step.lesson));
      await expect(page.locator('.path-step-introduction'), routes.pathStep(path, step.lesson)).toHaveText(step.intro);
    }
  }
});

test('cautionary requests are labelled before the request and ordinary examples are not', async ({page}) => {
  for (const lesson of content.lessons) {
    await page.goto(routes.lesson(lesson));
    if (!lesson.scenario.warning) {
      await expect(page.locator('.scenario-warning'), lesson.slug).toHaveCount(0);
      continue;
    }
    await expect(page.locator('.scenario-warning')).toContainText('以下要求不應直接照做');
    expect(await page.locator('.scenario').evaluate(section => {
      const warning = section.querySelector('.scenario-warning')!;
      const request = section.querySelector('blockquote')!;
      return Boolean(warning.compareDocumentPosition(request) & Node.DOCUMENT_POSITION_FOLLOWING)
        && request.getAttribute('aria-describedby') === warning.id;
    }), lesson.slug).toBe(true);
    await expect(page.locator('.scenario .copy-prompt')).toHaveCount(0);
    const results = await new AxeBuilder({page}).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
    expect(results.violations).toEqual([]);
  }
});

test('direct lesson entry introduces the photo task in the context line', async ({page}) => {
  for (const slug of ['files-and-folders', 'where-program-runs', 'tool', 'agent-work-loop', 'claim-vs-verification', 'working-scope']) {
    await page.goto(`/lessons/${slug}/`);
    await expect(page.locator('.lesson-context')).toContainText('照片');
    await expect(page.locator('.lesson-context')).not.toContainText('同樣三張');
  }
});

test('keyboard focus and 200% zoom preserve access', async ({page}) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.locator('.skip-link')).toBeFocused();
  await page.evaluate(() => { document.documentElement.style.zoom = '2'; });
  await expect(page.locator('h1')).toBeVisible();
  expect(await page.evaluate(noOverflow)).toBeTruthy();
});

test('320px lesson, path progress, prompt and search reflow without horizontal overflow', async ({page}) => {
  await page.setViewportSize({width: 320, height: 720});
  for (const route of ['/paths/agent-runs-command/command/', '/lessons/backup/', '/concepts/', '/prepare/plans-and-costs/', '/tasks/expense-summary/']) {
    await page.goto(route);
    expect(await page.evaluate(noOverflow), route).toBeTruthy();
  }
});

test('expandable details and in-text navigation keep practical touch targets', async ({page}) => {
  await page.goto('/lessons/where-is-my-data/');
  expect((await page.locator('.lesson summary').boundingBox())!.height).toBeGreaterThanOrEqual(44);
  for (const link of await page.locator('.lesson-next a').all()) expect((await link.boundingBox())!.height).toBeGreaterThanOrEqual(44);
});

test('dark mode follows the system preference and keeps AA contrast', async ({page}) => {
  await page.emulateMedia({colorScheme: 'dark'});
  await page.goto('/lessons/permission/');
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).colorScheme)).toContain('dark');
  expect(await page.evaluate(() => getComputedStyle(document.body).backgroundColor)).toBe('rgb(17, 24, 21)');
  await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute('content', '#111815');
  const results = await new AxeBuilder({page}).withTags(wcag).analyze();
  expect(results.violations).toEqual([]);
});

test('a forced dark theme on a light system keeps AA contrast on every diagram kind', async ({page}) => {
  await page.emulateMedia({colorScheme: 'light'});
  await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
  for (const route of ['/lessons/command/', '/lessons/where-is-my-data/', '/lessons/input-process-output/', '/lessons/permission/', '/paths/agent-runs-command/', '/prepare/privacy-and-data/', '/tasks/expense-summary/']) {
    await page.goto(route);
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    expect(await page.evaluate(() => getComputedStyle(document.body).backgroundColor), route).toBe('rgb(17, 24, 21)');
    const results = await new AxeBuilder({page}).withTags(wcag).analyze();
    expect(results.violations, route).toEqual([]);
  }
});

test('theme control overrides, remembers, and returns to live system preference', async ({page}) => {
  await page.emulateMedia({colorScheme: 'light'});
  await page.goto('/');
  const toggle = page.locator('[data-theme-toggle]');
  await expect(toggle).toContainText('外觀：跟隨系統');
  await toggle.click();
  await expect(toggle).toContainText('淺色');
  await toggle.click();
  await expect(toggle).toContainText('深色');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute('content', '#111815');
  await page.reload();
  await expect(toggle).toContainText('深色');
  await toggle.click();
  await expect(toggle).toContainText('跟隨系統');
  await expect(page.locator('html')).not.toHaveAttribute('data-theme');
  await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute('content', '#f7f5ee');
  await page.emulateMedia({colorScheme: 'dark'});
  await expect.poll(() => page.evaluate(() => getComputedStyle(document.body).backgroundColor)).toBe('rgb(17, 24, 21)');
});

test('theme control still works for the current page when storage is blocked', async ({page}) => {
  await page.emulateMedia({colorScheme: 'light'});
  await page.addInitScript(() => {
    const blocked = () => { throw new DOMException('blocked', 'SecurityError'); };
    Storage.prototype.getItem = blocked; Storage.prototype.setItem = blocked; Storage.prototype.removeItem = blocked;
  });
  await page.goto('/');
  const toggle = page.locator('[data-theme-toggle]');
  await toggle.click();
  await toggle.click();
  await expect(toggle).toContainText('深色');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  expect(await page.evaluate(() => getComputedStyle(document.body).backgroundColor)).toBe('rgb(17, 24, 21)');
});

test('every lesson renders its archetype, scenario and copyable prompt', async ({page}) => {
  for (const lesson of content.lessons) {
    await page.goto(routes.lesson(lesson));
    await expect(page.locator('h1')).toHaveText(lesson.question);
    await expect(page.locator('.lesson-meta')).toHaveText('概念短讀');
    await expect(page.locator('main')).not.toContainText(new RegExp(`\\b${lesson.id}\\b`));
    await expect(page.locator('.lesson-context')).toHaveText(lesson.context);
    await expect(page.locator('.scenario blockquote')).toHaveText(lesson.scenario.request);
    await expect(page.locator('article.lesson')).toHaveClass(new RegExp(`lesson-${lesson.archetype}`));
    await expect(page.locator('.lesson-role')).toHaveCount(lesson.role === 'core' ? 1 : 0);
    await expect(page.locator('.follow-up')).toHaveCount(lesson.prompt ? 1 : 0);
    if (lesson.prompt) await expect(page.locator('.follow-up code')).toHaveText(lesson.prompt.text);
  }
});

test('protected DOCX example stays behind the expandable details on its lesson', async ({page}) => {
  const lesson = lessonBySlug('where-is-my-data');
  const more = lesson.visual!.type === 'system-map' ? lesson.visual!.more! : undefined;
  await page.goto(routes.lesson(lesson));
  await page.getByText(more!.label, {exact:true}).click();
  await expect(page.locator('details .system-map')).toBeVisible();
  await expect(page.locator('details')).toContainText('企劃書.docx');
});

test('prompt types identify the audience and execution risk, and copy their text', async ({page, context}) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write'], {origin: 'http://127.0.0.1:4321'});
  const agentPrompt = content.lessons.find((lesson) => lesson.prompt?.audience === 'active_agent' && lesson.prompt.mode !== 'execute_after_confirmation')!;
  await page.goto(routes.lesson(agentPrompt));
  await expect(page.locator('.follow-up')).toContainText('問目前正在工作的 Agent');
  await page.locator('.follow-up [data-copy-prompt]').click();
  await expect(page.locator('.follow-up .copy-status')).toHaveText('文字已複製到剪貼簿。');
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(agentPrompt.prompt!.text);

  const taskPrompt = content.lessons.find((lesson) => lesson.prompt?.mode === 'execute_after_confirmation')!;
  await page.goto(routes.lesson(taskPrompt));
  await expect(page.locator('.follow-up')).toContainText('加入任務要求');
  await expect(page.locator('.follow-up [data-copy-prompt]')).toHaveText('複製任務限制');

  const researchPrompt = content.lessons.find((lesson) => lesson.prompt?.audience === 'research_chat');
  if (researchPrompt) {
    await page.goto(routes.lesson(researchPrompt));
    await expect(page.locator('.follow-up')).toContainText('問能查官方資料的 AI');
  }
});

test('preflight guides provide principle, map and copyable research prompts', async ({page, context}) => {
  await page.goto('/prepare/');
  const links = await page.locator('section[aria-label="前置觀念說明"] a').evaluateAll((nodes) => nodes.map((node) => (node as HTMLAnchorElement).getAttribute('href')!));
  expect(links).toEqual(content.guides.map(routes.guide));
  for (const guide of content.guides) {
    await page.goto(routes.guide(guide));
    await expect(page.locator('.guide-principle')).toContainText(guide.principle);
    await expect(page.locator('.system-map .visually-equivalent')).toHaveText(guide.visual.summary);
    await expect(page.locator('.prompt-shelf h2')).toContainText(/問能查官方資料的 AI|問你手邊的 AI 就好/);
    expect(await page.locator('.prompt-card code').allTextContents()).toEqual(guide.prompts.map((prompt) => prompt.text));
    for (const [index, prompt] of guide.prompts.entries()) {
      await expect(page.locator('.prompt-capability').nth(index)).toHaveText(prompt.capability === 'requires_web' ? '需要網路查詢' : '不需特殊存取');
    }
  }

  await context.grantPermissions(['clipboard-read', 'clipboard-write'], {origin: 'http://127.0.0.1:4321'});
  const guide = content.guides[0]!;
  await page.goto(routes.guide(guide));
  await page.locator('[data-copy-prompt]').nth(1).click();
  await expect(page.locator('.copy-status').nth(1)).toHaveText('文字已複製到剪貼簿。');
  await expect(page.locator('.copy-status').first()).toHaveText('');
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(guide.prompts[1]!.text);

  const bridge = content.productBridges[0]!;
  await page.goto(`/products/${bridge.slug}/`);
  await expect(page.getByRole('link', {name:/查看官方資訊/})).toHaveAttribute('href', bridge.officialUrl);
});

test('all rendered internal links resolve and reach every content page', async ({page, request}) => {
  await page.goto('/');
  const visited = new Set<string>(); const queue = ['/'];
  while(queue.length && visited.size < 200){
    const route=queue.shift()!; if(visited.has(route)) continue; visited.add(route);
    await page.goto(route); await expect(page, route).toHaveTitle(/.+/);
    const links=await page.locator('a[href]').evaluateAll((nodes)=>nodes.map(node=>(node as HTMLAnchorElement).getAttribute('href')!).filter(Boolean));
    for(const href of links){ if(href.startsWith('/') && !visited.has(href)) queue.push(href); }
  }
  for(const route of visited){ const response=await request.get(route); expect(response.status(), route).toBeLessThan(400); }
  expect([...visited].sort()).toEqual([...new Set(reachableRoutes)].sort());
});
