import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const visualSchema = z.object({
  type: z.enum(['concept', 'system-map', 'terminal', 'agent-action', 'file-explorer', 'permission', 'illustration']),
  preset: z.string().min(1),
}).nullable();

const promptSchema = z.object({
  audience: z.enum(['research_chat', 'active_agent', 'human']),
  mode: z.enum(['ask_only', 'explain_before_action', 'execute_after_confirmation']),
  capability: z.enum(['requires_web', 'requires_workspace_access', 'no_special_access']),
  text: z.string().min(1),
});

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lessons' }),
  schema: z.object({
    id: z.string().regex(/^[A-F][1-9]$/),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    section: z.enum(['A', 'B', 'C', 'D', 'E', 'F']),
    order: z.number().int().positive(),
    archetype: z.enum(['definition', 'contrast', 'safety_action']),
    question: z.string().min(1),
    context: z.string().min(1),
    answer: z.string().min(1),
    takeaway: z.string().min(1),
    prompt: promptSchema.optional(),
    newTerms: z.array(z.string()).max(3),
    searchTerms: z.array(z.string()).max(8).optional(),
    prerequisites: z.array(z.string().regex(/^[A-F][1-9]$/)),
    visual: visualSchema,
    scenario: z.object({
      request: z.string().min(1),
      actions: z.array(z.string().min(1)).min(2).max(5),
      result: z.string().min(1),
      boundary: z.string().min(1),
      appliesBeyondCodingAgent: z.boolean().optional(),
      warning: z.string().min(1).optional(),
    }),
    notTeach: z.array(z.string()).min(1),
  }),
});

const paths = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/paths' }),
  schema: z.object({
    id: z.string(),
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    lessons: z.array(z.string().regex(/^[A-F][1-9]$/)).min(4).max(6),
    optionalLessons: z.array(z.string().regex(/^[A-F][1-9]$/)).max(2).optional(),
    stepTitles: z.record(z.string(), z.string()).optional(),
    stepIntros: z.record(z.string(), z.string()).optional(),
    safetyGate: z.boolean().default(false),
  }),
});

const productBridges = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/product-bridges' }),
  schema: z.object({
    id: z.string(),
    slug: z.string(),
    product: z.string(),
    intro: z.string(),
    concepts: z.array(z.string().regex(/^[A-F][1-9]$/)).min(1).max(6),
    officialUrl: z.url(),
    check: z.array(z.string()).min(1).max(4),
  }),
});

const preflightGuides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/preflight-guides' }),
  schema: z.object({
    id: z.string().regex(/^P[1-4]$/),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    order: z.number().int().min(1).max(4),
    title: z.string().min(1),
    summary: z.string().min(1),
    principle: z.string().min(1),
    prompts: z.array(z.object({
      label: z.string().min(1),
      ...promptSchema.shape,
    })).min(2).max(3),
  }),
});

export const collections = { lessons, paths, productBridges, preflightGuides };
