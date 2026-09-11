// Published URLs remain usable after editorial merges. Only targets are indexed.
export const legacyLessons = [
  { id: 'B7', slug: 'terminal', targetId: 'B8', targetSlug: 'command' },
  { id: 'E5', slug: 'git', targetId: 'E4', targetSlug: 'version-history' },
  { id: 'E6', slug: 'recovery-before-change', targetId: 'E1', targetSlug: 'are-changes-reversible' },
  { id: 'C4', slug: 'where-model-runs', targetId: 'C3', targetSlug: 'where-program-runs' },
  { id: 'C6', slug: 'computer-resources', targetId: 'C3', targetSlug: 'where-program-runs' },
  { id: 'D6', slug: 'sandbox', targetId: 'B9', targetSlug: 'working-scope' },
] as const;

// Keep old path-step links, including steps removed from the beginner route.
export const publishedPathSteps: Record<string, string[]> = {
  'first-coding-agent': ['agent-vs-chat', 'files-and-folders', 'working-scope', 'context', 'tool', 'agent-work-loop'],
  'first-agent-change': ['working-scope', 'read-vs-write', 'permission', 'are-changes-reversible', 'recovery-before-change', 'inspect-changes'],
  'fear-of-breaking-things': ['read-vs-write', 'are-changes-reversible', 'backup', 'sync-vs-backup', 'recovery-before-change', 'claim-vs-verification'],
  'agent-runs-command': ['program', 'terminal', 'command', 'read-vs-write', 'permission'],
  'local-cloud-confusion': ['local-and-remote', 'where-is-my-data', 'where-program-runs', 'where-model-runs', 'computer-resources', 'data-leaves-device'],
};

// A3 moved to a 前置觀念 guide; keep its old lesson URL usable.
export const movedGuideLessons = [
  { id: 'A3', slug: 'what-still-works', targetPath: '/prepare/what-still-works/', title: '學 Agent，哪些會過期、哪些不會？' },
] as const;
