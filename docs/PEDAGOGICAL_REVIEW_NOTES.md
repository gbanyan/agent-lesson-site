# Pedagogical Review Notes

## Current revision — 2026-09-05

The current decisions and prerequisite review are in `CONTENT_CONTINUITY_AUDIT.md` and `SCENARIO_MAP.md`. There are now 30 canonical lessons, with Terminal/Command, recovery/pre-change preparation, version history/Git, and program/model/resource location merged. The first-use path follows the photo-resize example, needing no files or hands-on steps. The protected C2 DOCX diagram remains available on the same page under an optional example. The earlier notes below describe the prior release, not the current sequence or lesson count.

Reader testing material is in `READER_TRIAL.md`. No new reader results have been collected; automated checks cannot establish comprehension.

## Canonical sequence

The public sequence is controlled by lesson metadata, not by the numeric part of an ID. IDs and stable URLs remain unchanged.

The B sequence changed from `B1 → B2 → B3 → B4 → B5 → B6 → B7 → B8 → B9` to `B1 → B2 → B9 → B3 → B5 → B4 → B7 → B8 → B6`.

The C sequence changed from `C1 → C2 → C3 → C4 → C5 → C6 → C7` to `C1 → C2 → C3 → C4 → C6 → C5 → C7`.

## Page roles

- Program explains what actually performs work and distinguishes existing, installed, and Agent-produced programs.
- Install / Run separates preparing a program from starting it.
- Input / Process / Output is an inspection frame for one concrete job.
- Terminal explains the interface through which textual operations reach the computer.
- Command explains the textual operation itself, without shell syntax instruction.
- Computer Resources explains why local tools can consume local CPU, memory, and storage even when the model is remote.

## Density decisions

Compound-command syntax was removed from the Command lesson. Program does not introduce executables, interpreters, compilers, package managers, PATH, or language categories. Resources does not introduce cores, clock speed, VRAM, swap, cache, or purchasing guidance. Local versus Published still avoids CI/CD and hosting comparisons.

No new lesson was required. The existing 30 lessons cover the revised beginner journey.

## DOCX example content

The DOCX example is now intentionally kept only where it belongs:

- `src/components/education/LessonVisual.astro`: the `企劃書.docx` data-location node, kept as an optional expandable example on the C2 page.
- `src/content/lessons/b6-read-write.md`: rewritten to avoid DOCX/OCR jargon; it now uses a generic wording (some files need another program to read) while keeping the read-vs-write distinction.

## Full-site correction pass

The lesson schema now has three explicit archetypes:

- Definition: context, one definition, a diagram or example, and a short point.
- Contrast: one confusing pair followed by a shared case; no repeated takeaway panel.
- Safety action: consequence, confirmation point and an optional task requirement; no repeated takeaway panel.

Copyable text is no longer mandatory. Eight lessons retain it, with machine-checked audience, mode and capability metadata. The other 27 lessons end when the concept is complete.

A1 now treats chat as an interface and Agent as a tool-using work pattern. It names only the Coding Agent covered by the site; research and action modes remain in the prompt taxonomy instead of becoming first-lesson classifications. Terminal is defined as one human-facing command interface and is not described as the tool that executes a Command. Tool is a provided capability, not necessarily a standalone program. Context refers only to information available in the current task and is not described as human-like long-term memory.

C1 now defines only the Local and Remote locations. Upload, retention and visibility remain in C2 and C5. E5 no longer shows Git commands, tracked-state details, remote-copy behavior or repository operations; it retains the conceptual boundary that Git manages included project content and is not a Backup.

The first-use path begins with A1 and Files before Working Scope; A2 is an optional branch. Astro generates a static wrapper for every core path step, so path name, progress, previous/next step and return navigation exist without client-side JavaScript. Each wrapper points its canonical link to the single lesson route and stays out of the Pagefind lesson index. The Command path includes a low-density relationship diagram for Agent, model, Tool, Command, Program and Terminal.

The first-use recurring scenario now remains in `website/` through Context and Agent Loop. Command also lists `website` contents, while the B6 Read / Write lesson remains the sole deliberate scenario transition in that sequence.
