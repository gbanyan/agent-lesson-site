import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { conceptGroupSchema, guideSchema, lessonSchema, pathSchema, productBridgeSchema, taskSchema } from './lib/schemas';

// Structural rules live in src/lib/schemas.ts, shared with scripts/lint.ts.
const lessons = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/lessons' }), schema: lessonSchema });
const paths = defineCollection({ loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/paths' }), schema: pathSchema });
const productBridges = defineCollection({ loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/product-bridges' }), schema: productBridgeSchema });
const preflightGuides = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/preflight-guides' }), schema: guideSchema });
const tasks = defineCollection({ loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/task-examples' }), schema: taskSchema });
const conceptGroups = defineCollection({ loader: file('src/content/concept-groups.yaml'), schema: conceptGroupSchema });

export const collections = { lessons, paths, productBridges, preflightGuides, tasks, conceptGroups };
