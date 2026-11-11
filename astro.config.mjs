import { defineConfig } from 'astro/config';

// Served at the root of a custom domain by Cloudflare Workers Static Assets.
export default defineConfig({
  site: 'https://agent-lesson.gbanyan.net',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
