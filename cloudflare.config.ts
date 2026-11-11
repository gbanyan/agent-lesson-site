import { defineConfig } from 'cf/config';

// Static assets only: scripts/package-cloudflare.mjs packages dist/ as Build Output.
// The custom domain was authorized by the owner on 2026-11-12 after checking that the
// gbanyan.net zone had no agent-lesson.* record and the account no Worker with this name.
export default defineConfig({
  worker: {
    name: 'agent-lesson',
    compatibilityDate: '2026-11-01',
    domains: ['agent-lesson.gbanyan.net'],
    // Astro builds directory-style pages with trailingSlash: 'always'.
    assets: { htmlHandling: 'force-trailing-slash', notFoundHandling: '404-page' },
    observability: { enabled: true },
  },
});
