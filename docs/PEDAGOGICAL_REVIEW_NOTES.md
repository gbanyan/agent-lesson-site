# Pedagogical Review Notes

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

No new lesson was required. The existing 35 concepts cover the revised beginner journey.

## Protected DOCX content

Existing DOCX-specific text is intentionally unchanged. It remains in:

- `src/content/lessons/b6-read-write.md`: the request, three action/boundary passages, and body explanation of DOCX parsing and writing.
- `src/components/education/LessonVisual.astro`: the `企劃書.docx` data-location node and the `摘要.docx` Terminal output.

This creates one deliberate scenario break between the website-oriented Command sequence and the Read / Write lesson. The break is recorded rather than hidden by rewriting or relocating protected content.
