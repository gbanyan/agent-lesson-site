/**
 * Content schemas: the single source of structural rules.
 *
 * Imported by `src/content.config.ts` (Astro build) and by `scripts/lint.ts`
 * (content lint), so a rule lives in exactly one place. Editorial heuristics
 * that are not structure (length bands, jargon, product neutrality) stay in
 * the lint script; cross-entity references live in `content-graph.ts`.
 */
import { z } from 'astro/zod';

const text = z.string().trim().min(1);
export const lessonId = z.string().regex(/^[A-F][1-9]$/);
export const guideId = z.string().regex(/^P[0-9]+$/);
const slug = z.string().regex(/^[a-z0-9-]+$/);
const BLANK = '＿＿';

/** Phrases an editor wants kept on (or kept off) a page; checked by lint against the page's own text. */
export const guardSchema = z.object({
  keep: z.array(text).default([]),
  avoid: z.array(text).default([]),
}).optional();

// ---------------------------------------------------------------- visuals

export const toneSchema = z.enum(['local', 'agent', 'remote', 'result']);

export const systemMapSchema = z.object({
  label: text,
  lanes: z.array(z.object({
    title: text,
    steps: z.array(z.object({ place: text, title: text, detail: text, tone: toneSchema.optional() })).min(1),
  })).min(1),
  summary: text,
});

export const flowDiagramSchema = z.object({
  label: text,
  steps: z.array(text).min(2),
  summary: text,
  note: text.optional(),
});

const conceptVisual = z.object({
  type: z.literal('concept'),
  label: text,
  items: z.array(z.object({ title: text, detail: text })).min(2),
  relation: text.optional(),
  summary: text,
});
const systemMapVisual = systemMapSchema.extend({
  type: z.literal('system-map'),
  /** A second, reader-expandable map shown after the main one. */
  more: z.object({ label: text, map: systemMapSchema }).optional(),
});
const terminalVisual = z.object({
  type: z.literal('terminal'),
  purpose: text,
  command: text,
  output: text,
  impact: z.enum(['read', 'modify', 'external']),
  summary: text,
});
const fileExplorerVisual = z.object({
  type: z.literal('file-explorer'),
  root: text,
  entries: z.array(z.object({ kind: z.enum(['folder', 'file']), name: text, depth: z.number().int().min(0).max(1).optional() })).min(1),
  summary: text,
});
const permissionVisual = z.object({
  type: z.literal('permission'),
  files: z.array(text).min(1),
  consequence: text,
});

export const visualSchema = z.discriminatedUnion('type', [
  conceptVisual, systemMapVisual, terminalVisual, fileExplorerVisual, permissionVisual,
]);

// ---------------------------------------------------------------- prompts

export const promptSchema = z.object({
  audience: z.enum(['research_chat', 'active_agent', 'human']),
  mode: z.enum(['ask_only', 'explain_before_action', 'execute_after_confirmation']),
  capability: z.enum(['requires_web', 'requires_workspace_access', 'no_special_access']),
  text: text.refine((value) => value.includes(BLANK), `prompt.text 必須包含可替換欄位 ${BLANK}`),
})
  .refine((p) => p.audience !== 'research_chat' || p.mode === 'ask_only', 'research_chat prompt 只能使用 ask_only')
  .refine((p) => p.mode !== 'execute_after_confirmation' || p.audience === 'active_agent', '可執行任務要求必須交給 active_agent');

/** Preflight guides only ever send readers to a research chat, never to a working agent. */
export const guidePromptSchema = z.object({
  label: text,
  audience: z.literal('research_chat'),
  mode: z.literal('ask_only'),
  capability: z.enum(['requires_web', 'no_special_access']),
  text: text.refine((value) => value.includes(BLANK), `prompt.text 必須包含可替換欄位 ${BLANK}`),
});

// ---------------------------------------------------------------- collections

export const lessonSchema = z.object({
  id: lessonId,
  slug,
  section: z.enum(['A', 'B', 'C', 'D', 'E', 'F']),
  order: z.number().int().positive(),
  archetype: z.enum(['definition', 'contrast', 'safety_action']),
  role: z.literal('core').optional(),
  question: text.refine((q) => (q.match(/[？?]/g) ?? []).length === 1 && /[？?]$/.test(q), 'question 必須恰好是一個問句'),
  context: text,
  answer: text,
  takeaway: text,
  prompt: promptSchema.optional(),
  newTerms: z.array(text).max(3),
  searchTerms: z.array(text).max(8).optional(),
  prerequisites: z.array(lessonId).default([]),
  visual: visualSchema.nullable(),
  scenario: z.object({
    request: text,
    actions: z.array(text).min(2).max(5),
    result: text,
    boundary: text,
    appliesBeyondCodingAgent: z.boolean().optional(),
    /** Present only when the request is a cautionary example readers must not copy. */
    warning: text.optional(),
  }),
  notTeach: z.array(text).min(1),
  guard: guardSchema,
});

export const pathSchema = z.object({
  id: z.string().regex(/^path-[a-z]$/),
  slug,
  order: z.number().int().min(0),
  /** The one path the homepage presents as the first-use walkthrough. */
  featured: z.boolean().default(false),
  title: text,
  description: text,
  lessons: z.array(lessonId).min(4).max(6),
  optionalLessons: z.array(lessonId).max(2).optional(),
  stepTitles: z.record(lessonId, text).optional(),
  stepIntros: z.record(lessonId, text),
  safetyGate: z.array(z.object({ lesson: lessonId, label: text })).min(1).optional(),
  diagram: flowDiagramSchema.optional(),
  exit: z.object({ title: text, text, guide: guideId }).optional(),
  guard: guardSchema,
});

export const productBridgeSchema = z.object({
  id: text,
  slug,
  product: text,
  intro: text,
  concepts: z.array(lessonId).min(1).max(6),
  officialUrl: z.url(),
  check: z.array(text).min(1).max(4),
});

export const guideSchema = z.object({
  id: guideId,
  slug,
  order: z.number().int().min(0),
  /** Short card label such as 先讀這篇 or 延伸參考. */
  badge: text.optional(),
  title: text,
  summary: text,
  principle: text,
  visual: systemMapSchema,
  prompts: z.array(guidePromptSchema).min(2).max(3),
  guard: guardSchema,
});

export const taskSchema = z.object({
  id: z.string().regex(/^T[1-9]$/),
  slug,
  title: text,
  situation: text,
  outcome: text,
  steps: z.array(z.object({
    actor: z.enum(['you', 'agent', 'checkpoint']),
    kind: z.enum(['read', 'modify', 'external']).optional(),
    text,
    lessons: z.array(lessonId).min(1).max(3),
  })).min(2).max(7)
    .refine((steps) => steps[0]?.actor === 'you', '第一步必須是讀者提出的要求（actor: you）')
    .refine((steps) => steps.some((step) => step.actor === 'checkpoint'), '每支任務至少一個檢查點（actor: checkpoint）'),
  boundary: text,
});

export const conceptGroupSchema = z.object({
  id: slug,
  order: z.number().int().min(0),
  title: text,
  lessons: z.array(lessonId).min(1),
});

export type Lesson = z.infer<typeof lessonSchema>;
export type Path = z.infer<typeof pathSchema>;
export type Guide = z.infer<typeof guideSchema>;
export type Task = z.infer<typeof taskSchema>;
export type ProductBridge = z.infer<typeof productBridgeSchema>;
export type ConceptGroup = z.infer<typeof conceptGroupSchema>;
export type Visual = z.infer<typeof visualSchema>;
export type SystemMapData = z.infer<typeof systemMapSchema>;
export type FlowDiagramData = z.infer<typeof flowDiagramSchema>;
export type Prompt = z.infer<typeof promptSchema>;
export type GuidePrompt = z.infer<typeof guidePromptSchema>;
