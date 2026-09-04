# Implementation Status

This file is updated at each phase gate. Evidence commands are listed under each phase; final outcomes are recorded after execution.

## Phase 0 — Research & spec

Status: complete. Official Astro, Pagefind, Playwright, axe, Codex, and Claude Code sources reviewed. Architecture, constitution, content guide, visual style, schemas, directory structure, and checklist established. No stack deviation.

## Phase 1 — Foundation

Status: complete. Static Astro, strict TypeScript, content collections, Pagefind, Playwright/axe, and three validators added. Local gates pass.

## Phase 2 — Component system

Status: implemented. Frozen vocabulary only; search and site chrome are infrastructure, not educational vocabulary extensions.

## Phase 3 — Vertical slice

Status: implemented for A1, B8, C4, D3, E3, E5, F2.

## Phase 4 — Review gate

Status: passed editorial self-review. Each representative lesson has one question/model, at most three new terms, one useful visual, no product UI, and no advanced prerequisites.

## Phase 5 — Browser visual inspection

Status: complete. Production Chromium screenshots inspected at 1440px, 1200px, 768px-equivalent responsive rules, and 390px. Mobile edge spacing and three-node diagram flow were corrected. Automated coverage also exercises desktop and Pixel 7 viewports.

## Phase 6 — Illustration pilot

Status: complete. No generated raster selected: operational and relational visuals communicate the chosen concepts more precisely. This is an intentional no-image outcome, not a missing asset.

## Phase 7 — All lessons

Status: complete. Exactly 35 lessons across A–F; content lint reports zero warnings. Cross-reference and visual metadata validation pass.

## Phase 8 — Situation paths

Status: implemented. Five paths, each 4–6 references, no duplicated lesson body.

## Phase 9 — Product bridges

Status: implemented. Codex and Claude Code bridges use official documentation links and stable concepts only.

## Phase 10 — Final audit

Status: complete locally. `npm run verify` passes: 35-lesson content lint, link/visual validation, Astro check with zero diagnostics, 22/22 Playwright tests across desktop/mobile including axe, Pagefind search, keyboard/zoom/reflow, zero-JS lesson assertion, and all-route crawl. Production build emits 46 static pages and indexes all 35 lessons. GitHub/public verification is tracked in Phase 11.

## Phase 11 — GitHub & production deployment

Status: in progress. Workflow and deployment documentation are implemented; repository creation, push, Actions monitoring, and public smoke verification remain.

## Deviations

None. Generated illustrations are optional and were rejected after pilot review because they did not add instructional precision.
