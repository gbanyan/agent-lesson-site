import { test, expect } from '@playwright/test';

test('task examples render a checkpointed timeline with lesson links', async ({ page }) => {
  await page.goto('/tasks/expense-summary/');
  await expect(page.locator('.task-step.task-checkpoint')).not.toHaveCount(0);
  await expect(page.locator('.task-step.task-kind-modify')).toHaveCount(1);
  const chip = page.locator('.task-refs a').first();
  await expect(chip).toHaveAttribute('href', /^\/lessons\/[a-z0-9-]+\//);
  // internal lesson IDs must never render
  await expect(page.locator('main')).not.toContainText(/\b[A-F][1-9]\b/);
});

test('homepage surfaces task examples and the core row', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: /把三個月的支出記錄/ })).toHaveAttribute('href', /\/tasks\/expense-summary\//);
  const coreRow = page.locator('.core-row');
  await expect(coreRow).toBeVisible();
  await expect(coreRow.locator('a')).toHaveCount(6);
});

test('core badge appears only on marked lessons', async ({ page }) => {
  await page.goto('/lessons/files-and-folders/');
  await expect(page.locator('.lesson-role')).toHaveText('核心觀念');
  await expect(page.locator('.lesson-meta')).toHaveText('概念短讀');
  await page.goto('/lessons/permission/');
  await expect(page.locator('.lesson-role')).toHaveCount(0);
});
