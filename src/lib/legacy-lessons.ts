// Published URLs remain usable after editorial merges. Only targets are indexed.
export const legacyLessons = [
  { id: 'B7', slug: 'terminal', targetId: 'B8', targetSlug: 'command' },
  { id: 'E5', slug: 'git', targetId: 'E4', targetSlug: 'version-history' },
  { id: 'E6', slug: 'recovery-before-change', targetId: 'E1', targetSlug: 'are-changes-reversible' },
] as const;

// Keep old path-step links, including steps removed from the beginner route.
export const publishedPathSteps: Record<string, string[]> = {
  'first-coding-agent': ['agent-vs-chat', 'files-and-folders', 'working-scope', 'context', 'tool', 'agent-work-loop'],
  'first-agent-change': ['working-scope', 'read-vs-write', 'permission', 'are-changes-reversible', 'recovery-before-change', 'inspect-changes'],
  'fear-of-breaking-things': ['read-vs-write', 'are-changes-reversible', 'backup', 'sync-vs-backup', 'recovery-before-change', 'claim-vs-verification'],
  'agent-runs-command': ['program', 'terminal', 'command', 'read-vs-write', 'permission'],
  'local-cloud-confusion': ['local-and-remote', 'where-is-my-data', 'where-program-runs', 'where-model-runs', 'computer-resources', 'data-leaves-device'],
};
