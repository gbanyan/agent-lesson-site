# Implementation Status

This file is updated at each phase gate. Evidence commands are listed under each phase; final outcomes are recorded after execution.

## Current content revision — 2026-09-11

Structure continues the previous revision and is now 30 lessons, with the legacy/backward-compatibility layer removed:

- Lesson 33 → 30. C3 (program execution) and C4 (model location) merged into one lesson on using more than one computer, folding C6's local-resource note in; C6 (computer resources) and D6 (sandbox) dropped. Terminal/Command, recovery, version/Git merges remain single pages.
- The `選工具前` zone was repositioned to `前置觀念` and expanded: added P5 (what stays vs what changes, formerly lesson A3) and P6 (how to research an unfamiliar domain), so the zone holds seven orientation/product guides.
- Added D7 on cross-service authorization boundaries (each external service needs its own grant; scattered grants are a real friction point).
- Backward compatibility removed entirely: no meta-refresh redirects, no noindex old pages, no legacy lesson/path aliases. `legacy-lessons.ts`, `MovedLesson.astro` and the `/introduction/` redirect page were deleted; lessons and path steps generate only current content.

Local `npm run verify` and the deployment workflow pass with 30 lessons, 7 preflight guides, zero Astro diagnostics, 100 desktop/mobile tests and a clean build.

### About preface rewritten as promises

At the author's direction the About page moved from reader exhortations to site promises: four authored preface paragraphs remain in `src/content/introduction.md`; the merged site-details block was removed, taking with it the public statements about no-account/no-progress, the screen-reader testing disclosure, and the negative scope declaration. That removal is the author's decision, recorded in `docs/SCENARIO_MAP.md`. The preface is now authored directly and must not be rewritten by tooling. Test anchors were repinned in the same commits (paragraph count, closing sentence).

### Preflight layer: new P0, reframed P4, terminology alignment

A fifth guide, P0 `what-can-it-do`, adds the ideation entry point (inventory your existing programs, your repeated tasks, and vague notions worth chatting through); the layer contract moved from exactly four guides to five, with a P0 system diagram and an adaptive prompt-shelf header for brainstorm prompts that need no web access. P4 `privacy-and-data` was reframed from a local/remote classification exercise into a single safe default: whatever you cannot see the process of has left your device. Consistent with that, the only positive presentation of a locally running model in the lessons (C4) was removed; local-versus-remote place words stay in C1. Provider, billing-type, and date-stamp terminology were aligned across all five guides, and unexplained jargon (本機, API, 模型改善 word order) was replaced with plain language or defined inline.

### B4 rewritten as the dataflow lens; A3 added

B4 is now the site's dataflow lens: three concrete request flows (meeting recording → summary, regulation lookup with source quality, photo resize) all read as input → process → output, plus a new copyable confirm-before-start prompt and an authored bridge back to P0. The photo anchor sentence is unchanged, so the other five path lessons and stepIntros needed no text edits. A3 `what-still-works` (contrast archetype, section A) grounds the changing/unchanging split in the site's own structure: the preflight zone is the pile you query, the lesson zone is the pile you practice. The B4 diagram was generalized from the photo-only ladder to the three-stage flow with the photo example kept in its summary. Lesson counts moved 32 → 33 across the concepts index, content linter, living docs, tests, and the production smoke script.

### Editorial gate changes

Length thresholds raised to soft 700 / hard 900 by author decision, because example-driven lessons legitimately run longer. Copyable-prompt density pin moved from 8 to 9 with B4's new prompt.

### Verification and deployment

Local `npm run verify` passed at each phase gate: 33 lessons, lint ×5, zero Astro diagnostics, 100 desktop/mobile tests, build and Pagefind. GitHub Actions runs 23–26 (through `ab96a1e`, [34492767930](https://github.com/gbanyan/agent-lesson-site/actions/runs/34492767930)) passed quality-build and Pages deployment. Production `npm run smoke -- https://gbanyan.github.io/agent-lesson-site/` passed: 91 static routes, desktop/light and 320px/dark, redirects, canonical/base paths, assets, search aliases, the 33-lesson concept index and the rewritten preface text. One hard-coded lesson count inside the smoke script was caught by this production run and fixed in `cebbd82`.

### Still open

Actual reader-trial responses remain unavailable. The A1/B4 framing overlap, the per-lesson pass over the remaining lessons, and the path exit-card decision (recommendation: a guided block, not a seventh step) are open follow-ups.

## Previous content revision — 2026-09-05

### Prepared locally: merge introduction and About

At the user's request, the full introduction and existing site details are consolidated in `src/content/introduction.md`, rendered at `/about/`. The original six introduction paragraphs remain verbatim; site details follow them for the user to edit. Homepage excerpt, header and footer lead to the same page; `/introduction/` retains a static noindex redirect and fallback link. The homepage excerpt comes from the first rendered Markdown paragraph.

This merge is intentionally not committed or deployed yet: the user will revise the combined text first. Earlier deployment records below describe the published version.

Local `npm run verify` passed (90 tests); local smoke passed 86 URLs including the redirect and preserved author paragraphs. The merged page was visually reviewed, including a 320px dark-mode overflow check.

### Follow-up: remaining narrative gaps

Five situation paths now supply context for every step, including explicit document/photo/article transitions without touching protected DOCX text. Direct-entry photo lessons introduce their task. F3 starts with password sharing, D6 consistently uses an image program and photo copies, and F3/E7 show an explicit caution before the unsafe request. The beginner route is now B4 → B1 → D1 → E1 → D2 → F1, preparing recovery before tool execution.

Local `npm run verify` passed: 32 lessons, zero content/Astro warnings, 90 desktop/mobile tests, 86 static pages. Local smoke passed all URLs and the new recovery-before-tool sequence plus warning markers. The reordered path and desktop/320px dark warning examples were visually reviewed. Introduction, B6 prose and the protected C2 DOCX diagram are unchanged against `0058b6d`.

Revision `371517e` passed [GitHub Actions 33949198607](https://github.com/gbanyan/agent-lesson-site/actions/runs/33949198607), including quality-build and Pages deployment. Production `npm run smoke -- https://gbanyan.github.io/agent-lesson-site/` passed all 86 URLs, desktop/light and 320px/dark, canonical/base paths, resources, search, unchanged author text, reordered beginner sequence and warning markers. A separate live browser traversal confirmed contextual introductions on all 28 steps across five paths. Actual novice comprehension trials remain pending; automated checks do not replace them. Earlier entries below retain their original test counts and deployment evidence.

### Follow-up: photo-sharing scenario

The user's follow-up replaces the practice webpage with a familiar purpose: make smaller photo copies to send to a friend, preserve originals, inspect results, then separately decide whether to send. The homepage, path introduction and first lesson establish the purpose before folder names appear. No practice download or hands-on prerequisite is implied. E4 explicitly switches to article revisions for version history; protected introduction and DOCX prose/diagram remain unchanged against `d4c1319`.

Final local `npm run verify` passed: 32 lessons, zero lint/Astro diagnostics, 84 desktop/mobile tests and 86 static pages. The six-step test checks the photo narrative and absence of the former practice webpage. Path, first-lesson and 320px dark command-page screenshots were visually reviewed.

Photo revision `8727e4e` passed [GitHub Actions 33946090907](https://github.com/gbanyan/agent-lesson-site/actions/runs/33946090907), including quality-build and Pages deployment. `npm run smoke -- https://gbanyan.github.io/agent-lesson-site/` passed all 86 public URLs, desktop/light and 320px/dark, redirects, canonical/base paths, assets, search and exact introduction text. A separate browser traversal confirmed the live photo introduction and all six steps without the former date-change story. Local smoke also passed using the configured `http://localhost:4321/`; an initial invocation using `127.0.0.1` correctly failed canonical-origin validation and was rerun with the configured hostname, without changing the check.

Actual novice reader responses are still unavailable; the updated trial questions are ready, not completed results. Evidence below belongs to the previous revision.

### Previous revision evidence

The user-requested continuity revision supersedes the earlier lesson counts and sequences below. There are 32 canonical lessons after three merges, while old lesson and published path URLs remain usable. The six-step beginner route follows a local practice webpage date change; the location route follows three images. English terms remain searchable behind question-led entry points. Recovery, permissions, actual changes and verification remain distinct checks.

Scope and completion tracking: `CONTENT_REVISION_PLAN.md`. Editorial evidence: `CONTENT_CONTINUITY_AUDIT.md`. Reader trial: `READER_TRIAL.md` (materials ready; actual reader results pending). Protected DOCX prose and the author introduction remain unchanged; the original DOCX location diagram stays on C2 as an optional example.

Implementation and deployment verified for `7abfd44`. `npm run verify` passed with 32 lessons, zero content warnings, zero Astro diagnostics and 84 desktop/mobile tests. GitHub Actions [33945002273](https://github.com/gbanyan/agent-lesson-site/actions/runs/33945002273) passed quality-build and deployment. `npm run smoke -- https://gbanyan.github.io/agent-lesson-site/` passed on the public site: all 86 static URLs, desktop/light and 320px/dark, old redirects, canonical/base paths, assets, English search and exact author introduction text. The original phase entries below are historical records.

The overall pedagogical validation remains open: the five-question reader trial has no actual participant responses yet. This limitation is distinct from the successful build and deployment.

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

Status: complete. Exactly 35 lessons across A–F. Each lesson declares one of three archetypes: Definition, Contrast, or Safety Action. The shared renderer gives each archetype a different structure instead of forcing all lessons through the same sequence of headings. Content lint enforces the contract and reports zero warnings.

Copyable text is optional. Eight lessons retain prompts: three ask the active Agent to explain current state, and five are explicitly labeled task requirements that may lead to action. The other 27 lessons have no prompt. All retained prompts declare `audience`, `mode`, and `capability`; buyer-guide prompts are separately marked for research chat.

The primary examples now use a small website, image processing, or a large project change. Other-Agent examples are explicitly labeled in the rendered lesson. Protected DOCX content remains unchanged and is documented as a deliberate scenario transition.

## Phase 8 — Situation paths

Status: implemented. Five paths, each with 4–6 core references, use build-time Astro wrapper routes around the same lesson source. Every wrapper contains the path name, step count, previous/next step and return navigation in its static HTML; its canonical link points to the single lesson URL, and only that canonical page enters the Pagefind index. The first-use path starts with Files before Working Scope and keeps A2 as an optional branch. The Command path has a cross-concept relationship diagram in its introduction.

## Phase 9 — Product bridges

Status: implemented. Codex and Claude Code bridges use official documentation links and stable concepts only. The official destinations were checked again on 2026-09-04; no price, model version or installation command is copied into the site.

## Phase 10 — Final audit

Status: complete. Content lint, link/visual validation and Astro check pass with zero diagnostics. All 68 Playwright checks pass across desktop and mobile. Coverage includes all three lesson archetypes, the reduced eight-prompt set, prompt responsibility labels, build-time path wrappers and canonical links, 320px reflow, 200% zoom, the six-group concept index, dark/light/system appearance, axe, Pagefind, diagram equivalents and all 80 generated routes. GitHub/public verification is tracked in Phase 11.

All user-facing copy was reviewed after the scenario expansion with `agy` using `gemini-3.8-flash-high` at high effort. The first pass identified formulaic contrast sentences, developer-facing jargon, terminology drift, and an over-idealized secret-handling example. Those issues were revised; a second full-tree review found no release-blocking editorial issues, and its remaining terminology suggestions were also applied.

A second full-copy audit used the Traditional Chinese `humanizer-zh-tw` rules. It covered lessons, preflight guides, situation paths, product bridges, page chrome, and repository-facing descriptions. Twenty-three files were revised to remove repeated contrast formulas, slogan-like conclusions, redundant restatement, stiff enumeration, and unnecessary dashes. Technical identifiers, numbers, safety disclosures, and uncertainty markers were kept intact. The follow-up heuristic scan left only deliberate teaching relationships and semantically necessary wording.

After the follow-up prompts, diagrams, examples, and terminology were revised, `humanizer-zh-tw` was run again. The final pass kept necessary distinctions such as data / execution / model location, but removed avoidable formulaic setup and developer-oriented wording. Humanization score: directness 9/10, rhythm 9/10, reader trust 10/10, authenticity 9/10, concision 9/10; total 46/50.

The final copy pass followed the site-wide editorial audit brief. All 35 lessons plus preflight guides, paths, product bridges, shared components, and page chrome were reviewed. Reassurance-led openings, meta-teaching, ornamental metaphors, repeated second-person framing, and slogan-like takeaways were removed where they carried no information. The word 「先」 fell from 114 to 30 occurrences; the remaining uses express real ordering or safety boundaries in prompts, examples, and data-flow explanations. The high-risk templates named in the brief now have zero occurrences. Humanization score: directness 10/10, rhythm 9/10, reader trust 10/10, authenticity 9/10, concision 10/10; total 48/50.

Lesson and preflight article shells now separate prose measure from diagram measure. Body text remains capped at 48rem, while diagrams can use a 66rem canvas on desktop; system maps switch to a vertical flow at narrower widths. Desktop and 390px mobile renders were inspected, and an automated test guards against compressed desktop nodes.

A pedagogical restructure now places context before each lesson definition and uses metadata-driven ordering instead of numeric ID order. The B sequence is Files → Path → Working Scope → Program → Install / Run → Input / Process / Output → Terminal → Command → Read / Write. The C sequence places Computer Resources after model location and before data leaves the device. IDs and all public slugs remain stable, while lesson IDs no longer appear in the lesson header or concept index.

Program now explains the three possible sources of an executed program; Input / Process / Output is limited to inspecting one image-processing job; Terminal describes the interface and Command the textual operation. Website, image-processing, and large-change scenarios recur across adjacent lessons. Existing DOCX-specific copy was preserved verbatim and its resulting scenario exception is documented in `PEDAGOGICAL_REVIEW_NOTES.md`. Browser review covered the full first 11-lesson sequence and all 19 required representative pages.

Four principle-led preflight guides live under `/prepare/`: plans and billing structures, installation/CLI/desktop differences, provider competition and task-based model evaluation, and remote-model privacy. The body copy intentionally avoids live prices, product-specific installation commands, and current model rankings. Each page ends with three locally copyable prompts for asking about the reader's current product and situation.

## Phase 11 — GitHub & production deployment

Status: complete.

- Repository: https://github.com/gbanyan/agent-lesson-site (`main`, public, clean history initialized once)
- Workflow: [`Quality Gate and Pages`](https://github.com/gbanyan/agent-lesson-site/actions/workflows/pages.yml), latest `main` run successful
- Pages: https://gbanyan.github.io/agent-lesson-site/ (HTTPS enforced)
- Production smoke: desktop and 320px mobile passed; all 80 routes plus homepage, CSS/assets, lessons, path wrappers, product bridges, Pagefind, canonical/base-path links, horizontal overflow, request failures, and console errors checked.
- Generated illustration loading: not applicable; the reviewed pilot intentionally selected zero raster illustrations and the manifest is empty.

Known limitation: automated checks and semantic-tree inspection cannot replace evaluation by assistive-technology users. Formal user testing is outside this repository run and should remain part of future release review.

## Deviations

None. Generated illustrations are optional and were rejected after pilot review because they did not add instructional precision.
