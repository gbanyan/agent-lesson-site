# Glossary

Domain terms used in code, content and reviews. Prefer these names when naming modules.

- **Lesson (課文)** — one concept page answering one reader question. Stable internal ID (`A1`…`F4`) never shown to readers; reading order is `section` then `order`, not the ID.
- **Archetype** — a lesson's teaching shape: `definition`, `contrast` or `safety_action`. Decides how the scenario renders and whether a takeaway appears.
- **Core lesson (核心觀念)** — a lesson marked `role: core`; surfaced on the homepage and first in its concept group. A status, not a separate content tier.
- **Scenario** — the concrete example inside a lesson: request → actions → result → boundary. A **cautionary scenario** carries `warning` and must not be copied.
- **Lesson visual** — the one diagram a lesson may have, declared as data in its `visual` frontmatter (`system-map`, `concept`, `terminal`, `file-explorer`, `permission`).
- **System map** — a lane diagram of where work, data and roles sit; the default for location, role and data-flow lessons and for every preflight guide.
- **Prompt** — a copyable question or task constraint with audience, mode and capability. Rendered by the copyable prompt module.
- **Situation path (情境路徑)** — an ordered walk through 4–6 lessons for one situation, with per-step titles and intros. Path steps are static pages that keep the lesson's canonical URL. The **featured path** is the homepage's first-use walkthrough.
- **Preflight guide (前置觀念 / 使用前說明)** — orientation page before using an agent; principle, system map and research-only prompts. Never states prices or model versions.
- **Task example (任務示例)** — an illustrative end-to-end task timeline referencing lessons by ID; product-neutral.
- **Product bridge** — a page linking one product to the relevant lessons and its official docs.
- **Concept group** — one of the human-question groups on `/concepts/`; every lesson belongs to exactly one.
- **Content graph** — the pure module that orders all content, resolves IDs and reports broken references (`src/lib/content-graph.ts`).
- **Guard** — editor-protected phrases on a page: `keep` must stay, `avoid` must not return. Checked by lint.
- **Tone** — the semantic accent of a box: `leaf` (key point, done, local), `amber` (caution, modification, external), `blue` (agent, research). Set with `data-tone` on `.panel`, `.callout` and task steps.
- **Step role** — a system-map node's place in the flow: `local`, `agent`, `remote`, `result`. Diagram vocabulary, drawn with the same three colours (local and result → leaf, agent → blue, remote → amber) but not through `data-tone`.
