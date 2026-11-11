import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:4321',
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run build && npm run preview:test',
    url: 'http://127.0.0.1:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    env: { ...process.env, GITHUB_ACTIONS: 'false' },
  },
  projects: [
    // Content graph unit tests: no browser. (Playwright still starts webServer for every run.)
    { name: 'content', testMatch: 'content.spec.ts' },
    { name: 'desktop', testIgnore: 'content.spec.ts', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', testIgnore: 'content.spec.ts', use: { ...devices['Pixel 7'] } },
  ],
});
