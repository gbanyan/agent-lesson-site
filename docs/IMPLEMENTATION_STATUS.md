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

Status: complete. Exactly 35 lessons across A–F. Each lesson declares one of three archetypes: Definition, Contrast, or Safety Action. The shared renderer gives each archetype a different structure instead of forcing all lessons through the same sequence of headings. Content lint enforces the contract and reports zero warnings.

Copyable text is optional. Eight lessons retain prompts: three ask the active Agent to explain current state, and five are explicitly labeled task requirements that may lead to action. The other 27 lessons have no prompt. All retained prompts declare `audience`, `mode`, and `capability`; buyer-guide prompts are separately marked for research chat.

The primary examples now use a small website, image processing, or a large project change. Other-Agent examples are explicitly labeled in the rendered lesson. Protected DOCX content remains unchanged and is documented as a deliberate scenario transition.

## Phase 8 — Situation paths

Status: implemented. Five paths, each 4–6 core references, no duplicated lesson body. Path entry links add context metadata to the canonical lesson URL; lesson pages then show path name, step count, previous/next step and return navigation. The first-use path starts with Files before Working Scope and keeps A2 as an optional branch. The Command path has a cross-concept relationship diagram in its introduction.

## Phase 9 — Product bridges

Status: implemented. Codex and Claude Code bridges use official documentation links and stable concepts only. The official destinations were checked again on 2026-09-04; no price, model version or installation command is copied into the site.

## Phase 10 — Final audit

Status: complete. Content lint, link/visual validation and Astro check pass with zero diagnostics. All 64 Playwright checks pass across desktop and mobile. Coverage includes all three lesson archetypes, the reduced eight-prompt set, prompt responsibility labels, path-aware navigation, 320px reflow, 200% zoom, the six-group concept index, dark/light/system appearance, axe, Pagefind, diagram equivalents and all-route crawling. GitHub/public verification is tracked in Phase 11.

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
- Production smoke: desktop and 390px mobile passed; homepage, CSS/assets, lessons, paths, product bridge, Pagefind, canonical/base-path links, horizontal overflow, request failures, and console errors checked.
- Generated illustration loading: not applicable; the reviewed pilot intentionally selected zero raster illustrations and the manifest is empty.

Known limitation: automated checks and semantic-tree inspection cannot replace evaluation by assistive-technology users. Formal user testing is outside this repository run and should remain part of future release review.

## Deviations

None. Generated illustrations are optional and were rejected after pilot review because they did not add instructional precision.
