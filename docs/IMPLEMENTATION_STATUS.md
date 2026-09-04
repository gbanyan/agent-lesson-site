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

Status: complete. Production Chromium screenshots inspected at 1440px, 1200px, 768px, and 390px in light mode, plus desktop/mobile dark mode. Mobile edge spacing, three-node diagram flow, and dark-theme button contrast were corrected. Automated coverage exercises desktop and Pixel 7 viewports.

The diagram system now includes multi-lane system maps. Twelve lessons covering actor differences, work scope, local and remote state, execution and model location, tool flow, publishing, external effects, and network data movement are required by validation to use these maps. All four preflight guides also include a map for billing paths, interface locations, provider/model/product distinctions, or privacy data flow. Desktop light and mobile dark renders were inspected after the change.

## Phase 6 — Illustration pilot

Status: complete. No generated raster selected: operational and relational visuals communicate the chosen concepts more precisely. This is an intentional no-image outcome, not a missing asset.

## Phase 7 — All lessons

Status: complete. Exactly 35 lessons across A–F; every lesson includes a concrete request, 2–5 possible Agent actions, an observable result, and a boundary. Content lint enforces this contract and reports zero warnings. Cross-reference and visual metadata validation pass.

Each lesson also includes one context-specific, copyable follow-up question with a replaceable `＿＿` field. The prompts ask readers to apply the current concept to their own files, permissions, tools, data path, recovery plan, or verification evidence. The content linter requires the field and placeholder on all 35 lessons.

Examples that centered on website and source-code work were rewritten around Excel reports, PDF merging, document-version comparison, receipt extraction, travel notes, shared announcements, photos, and ordinary folders. User-facing copy now uses “Agent” consistently; “Coding” remains only when it is part of an official name or literal source.

## Phase 8 — Situation paths

Status: implemented. Five paths, each 4–6 references, no duplicated lesson body.

## Phase 9 — Product bridges

Status: implemented. Codex and Claude Code bridges use official documentation links and stable concepts only.

## Phase 10 — Final audit

Status: complete locally. `npm run verify` passes: 35-lesson content lint, link/visual validation, Astro check with zero diagnostics, and 40/40 Playwright tests across desktop/mobile. Coverage includes light/dark axe, a persistent three-state theme control, live system-theme changes, all 35 rendered scenarios and follow-up prompts, Pagefind search, system-map accessibility equivalents, keyboard/zoom/reflow, copy controls, and all-route crawling. Production build emits 51 static pages and indexes all 35 lessons. GitHub/public verification is tracked in Phase 11.

All user-facing copy was reviewed after the scenario expansion with `agy` using `gemini-3.8-flash-high` at high effort. The first pass identified formulaic contrast sentences, developer-facing jargon, terminology drift, and an over-idealized secret-handling example. Those issues were revised; a second full-tree review found no release-blocking editorial issues, and its remaining terminology suggestions were also applied.

A second full-copy audit used the Traditional Chinese `humanizer-zh-tw` rules. It covered lessons, preflight guides, situation paths, product bridges, page chrome, and repository-facing descriptions. Twenty-three files were revised to remove repeated contrast formulas, slogan-like conclusions, redundant restatement, stiff enumeration, and unnecessary dashes. Technical identifiers, numbers, safety disclosures, and uncertainty markers were kept intact. The follow-up heuristic scan left only deliberate teaching relationships and semantically necessary wording.

After the follow-up prompts, diagrams, examples, and terminology were revised, `humanizer-zh-tw` was run again. The final pass kept necessary distinctions such as data / execution / model location, but removed avoidable formulaic setup and developer-oriented wording. Humanization score: directness 9/10, rhythm 9/10, reader trust 10/10, authenticity 9/10, concision 9/10; total 46/50.

Four principle-led preflight guides live under `/prepare/`: plans and billing structures, installation/CLI/desktop differences, provider competition and task-based model evaluation, and remote-model privacy. The body copy intentionally avoids live prices, product-specific installation commands, and current model rankings. Each page ends with three locally copyable prompts for asking about the reader's current product and situation.

## Phase 11 — GitHub & production deployment

Status: complete.

- Repository: https://github.com/gbanyan/agent-lesson-site (`main`, public, clean history initialized once)
- Workflow: [`Quality Gate and Pages`](https://github.com/gbanyan/agent-lesson-site/actions/workflows/pages.yml), latest `main` run successful
- Pages: https://gbanyan.github.io/agent-lesson-site/ (HTTPS enforced)
- Production smoke: desktop and 390px mobile passed; homepage, CSS/assets, lessons, paths, product bridge, Pagefind, canonical/base-path links, horizontal overflow, request failures, and console errors checked.
- Generated illustration loading: not applicable; the reviewed pilot intentionally selected zero raster illustrations and the manifest is empty.

Known limitation: automated checks and semantic-tree inspection cannot replace evaluation by assistive-technology users. Formal user testing is outside this repository run and should remain part of future release review.

## Deviations

None. Generated illustrations are optional and were rejected after pilot review because they did not add instructional precision.
