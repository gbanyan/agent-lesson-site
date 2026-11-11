import { test, expect } from '@playwright/test';
import { content, routes } from './content';

test('task examples render a checkpointed timeline with lesson links', async ({ page }) => {
  for (const task of content.tasks) {
    await page.goto(routes.task(task));
    await expect(page.locator('.task-step')).toHaveCount(task.steps.length);
    await expect(page.locator('.task-step.task-checkpoint')).toHaveCount(task.steps.filter((step) => step.actor === 'checkpoint').length);
    await expect(page.locator('.task-step.task-kind-modify')).toHaveCount(task.steps.filter((step) => step.kind === 'modify').length);
    const refs = task.steps.flatMap((step) => step.lessons.map((id) => routes.lesson(content.lesson(id))));
    expect(await page.locator('.task-refs a').evaluateAll((nodes) => nodes.map((node) => node.getAttribute('href')))).toEqual(refs);
    // internal lesson IDs must never render
    await expect(page.locator('main')).not.toContainText(/\b[A-F][1-9]\b/);
  }
});

test('homepage surfaces task examples and the core row', async ({ page }) => {
  await page.goto('/');
  for (const task of content.tasks) {
    await expect(page.getByRole('link', { name: task.title })).toHaveAttribute('href', routes.task(task));
  }
  const coreRow = page.locator('.core-row');
  await expect(coreRow).toBeVisible();
  expect(await coreRow.locator('a').evaluateAll((nodes) => nodes.map((node) => node.getAttribute('href')))).toEqual(content.coreLessons.map(routes.lesson));
});
