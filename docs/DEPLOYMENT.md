# Deployment

The site is served by Cloudflare Workers Static Assets at **https://agent-lesson.gbanyan.net/**. It moved there from GitHub Pages on 2026-11-12 at the owner's request; the old GitHub Pages address now only redirects.

## Architecture

- Astro emits static HTML, CSS and the Pagefind index into `dist/`. No adapter, Worker script, binding or server rendering is used.
- `cloudflare.config.ts` defines the assets-only Worker `agent-lesson`, its compatibility date, trailing-slash HTML handling (`force-trailing-slash`, matching Astro's `trailingSlash: 'always'`), the custom `404.html` page, and the custom domain `agent-lesson.gbanyan.net`.
- `scripts/package-cloudflare.mjs` parses that config with the pinned `@cloudflare/config` / `@cloudflare/build-output-utils` and packages only `dist/` as assets-only Build Output under `.cloudflare/output/v0/` (git-ignored). The same pattern is used by the owner's research portfolio.
- The `cf` CLI, `@cloudflare/config` and `@cloudflare/build-output-utils` are beta and pinned exactly; run `npm run deploy:check` after any upgrade.

## Deploy (local, on the Mac)

```sh
npm ci
npm run deploy:check   # verify + package + `cf deploy --prebuilt --dry-run` (no upload, no credentials)
npm run deploy         # verify + package + `cf deploy --prebuilt`
```

Deployment is a deliberate local step; pushing to `main` does not deploy the site. Authentication uses the existing `cf` OAuth login (`npx cf auth whoami`); never put tokens in Git, shell history or documents.

After deploying, check the live site. The smoke script uses the current `dist/` route inventory:

```sh
npm run smoke -- https://agent-lesson.gbanyan.net/
```

If the Mac's transparent proxy cannot reach a newly created hostname (TLS `internal error` from a `198.18.x.x` address), verify with `curl --resolve agent-lesson.gbanyan.net:443:<edge IP>` against each route, or run the smoke check from another network.

Rollback: Cloudflare keeps previous Worker versions; roll back to the prior version ID from the record below with the `cf` versions/deployments commands (`cf cli search "roll back worker deployment"`). Never delete unrelated Workers or DNS records in the account.

## GitHub Actions

`.github/workflows/pages.yml` runs the quality gate (lint, check, Playwright, build) on pushes and pull requests, and separately publishes `redirect/` to GitHub Pages on pushes to `main`. The redirect pages map `https://gbanyan.github.io/agent-lesson-site/<path>` to `https://agent-lesson.gbanyan.net/<path>`; the redirect job does not wait for the quality gate, so a runner network failure while installing browsers cannot block it.

## Deployment record

| Date | Version ID | Source commit | Notes |
| --- | --- | --- | --- |
| 2026-11-12 | `f0ae8cd3-01c0-47b8-9225-5377556459bc` | `cf564a8` + Cloudflare config | First Cloudflare deployment with custom domain. Live check: all 79 routes 200 via the edge, trailing-slash redirect, 404 page, Pagefind assets, canonical on the new domain. |

Static frontend content must be treated as public; no runtime secrets are required.
