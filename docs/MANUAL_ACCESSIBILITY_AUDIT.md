# Manual Accessibility Audit

Date: 2026-09-04

## Keyboard review

- Traversed the header, homepage calls to action, situation paths, path-aware lesson navigation, prompt copy controls, search results and footer without a pointer.
- Focus order followed the visual reading order and focus indicators remained visible.

## Screen-reader review

- Inspected landmarks, headings, labels and diagram equivalents through the Chromium accessibility tree.
- Diagram artwork is hidden from the accessibility tree where a natural-language equivalent is present.
- Visual node fragments are excluded from Pagefind; each diagram exposes one complete natural-language equivalent to assistive technology.
- Path wrappers include their name, progress and navigation in build-time HTML rather than inserting it with client-side JavaScript.
- A hands-on review with VoiceOver, NVDA or another screen reader was not performed. The public About page states this limitation and does not claim otherwise.

## Zoom and reflow

- Reviewed at 200% zoom and at 375px and 320px CSS widths.
- Checked long Traditional Chinese text, terminal output, path progress, prompt blocks, buttons and search for horizontal overflow or hidden content.

## Known issues

- Automated axe checks and semantic-tree inspection do not replace testing by assistive-technology users.
- Pagefind does not stem Traditional Chinese terms; exact concept searches remain available.
