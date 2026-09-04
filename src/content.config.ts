import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const visualSchema = z.object({
  type: z.enum(['concept', 'terminal', 'agent-action', 'file-explorer', 'permission', 'illustration']),
  preset: z.string().min(1),
}).nullable();

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lessons' }),
  schema: z.object({
    id: z.string().regex(/^[A-F][1-9]$/),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    section: z.enum(['A', 'B', 'C', 'D', 'E', 'F']),
    order: z.number().int().positive(),
    question: z.string().min(1),
    answer: z.string().min(1),
    takeaway: z.string().min(1),
    newTerms: z.array(z.string()).max(3),
    searchTerms: z.array(z.string()).max(4).optional(),
    prerequisites: z.array(z.string().regex(/^[A-F][1-9]$/)),
    visual: visualSchema,
    example: z.string().min(1).optional(),
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

export const collections = { lessons, paths, productBridges };
