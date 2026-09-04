# Prompt Taxonomy

Copyable text is optional. A lesson may omit it when the concept itself is the useful outcome.

## Metadata

Every retained prompt declares:

- `audience`: `research_chat`, `active_agent`, or `human`
- `mode`: `ask_only`, `explain_before_action`, or `execute_after_confirmation`
- `capability`: `requires_web`, `requires_workspace_access`, or `no_special_access`

The content linter rejects missing or incompatible values. A `research_chat` prompt must be `ask_only`; an executable requirement must target `active_agent`.

## Reader-facing types

### Ask an AI that can check official sources

Used by the four buyer guides. These prompts check current plans, installation support, product documentation or data rules. They do not claim access to the reader's computer.

### Ask the Agent working in this project

Used by A2, B8 and D4. They ask the current Agent to report workspace access, explain a Command or explain a permission request without acting.

### Add a task requirement

Used by B9, E2, E6, F1 and F2. Sending this text may cause the Agent to inspect or modify the workspace, so the UI labels it as a task requirement rather than a general question.

## Removed lesson prompts

Prompts were removed from A1, B1, B2, B3, B4, B5, B6, B7, C1, C2, C3, C4, C5, C6, C7, D1, D2, D3, D5, D6, E1, E3, E4, E5, E7, F3 and F4. These pages now end with the concept or case instead of turning the site into a prompt library.
