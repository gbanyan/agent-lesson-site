/**
 * Loads every content file from disk and parses it with the shared schemas,
 * outside Astro. Used by the lint script and the content unit tests.
 */
import fg from 'fast-glob';
import matter from 'gray-matter';
import YAML from 'yaml';
import { readFile } from 'node:fs/promises';
import type { z } from 'astro/zod';
import { conceptGroupSchema, guideSchema, lessonSchema, pathSchema, productBridgeSchema, taskSchema } from '../src/lib/schemas';
import type { ContentSource } from '../src/lib/content-graph';

export interface Loaded<T> { file: string; data: T; body: string; }
export interface LoadedContent {
  source: ContentSource;
  files: {
    lessons: Loaded<ContentSource['lessons'][number]>[];
    guides: Loaded<ContentSource['guides'][number]>[];
    paths: Loaded<ContentSource['paths'][number]>[];
    tasks: Loaded<ContentSource['tasks'][number]>[];
  };
  /** Schema violations, one message per issue, prefixed with the file. */
  errors: string[];
}

async function load<S extends z.ZodType>(pattern: string, schema: S, errors: string[]): Promise<Loaded<z.output<S>>[]> {
  const loaded: Loaded<z.output<S>>[] = [];
  for (const file of (await fg(pattern)).sort()) {
    const raw = await readFile(file, 'utf8');
    const { data, body } = file.endsWith('.md')
      ? (({ data, content }) => ({ data, body: content }))(matter(raw))
      : { data: YAML.parse(raw), body: '' };
    const result = schema.safeParse(data);
    if (result.success) loaded.push({ file, data: result.data, body });
    else for (const issue of result.error.issues) errors.push(`${file}: ${issue.path.join('.') || '(root)'} ${issue.message}`);
  }
  return loaded;
}

export async function loadContent(): Promise<LoadedContent> {
  const errors: string[] = [];
  const [lessons, paths, guides, tasks, productBridges] = await Promise.all([
    load('src/content/lessons/*.md', lessonSchema, errors),
    load('src/content/paths/*.{yaml,yml}', pathSchema, errors),
    load('src/content/preflight-guides/*.md', guideSchema, errors),
    load('src/content/task-examples/*.{yaml,yml}', taskSchema, errors),
    load('src/content/product-bridges/*.{yaml,yml}', productBridgeSchema, errors),
  ]);
  const conceptGroups: ContentSource['conceptGroups'] = [];
  const groupsFile = 'src/content/concept-groups.yaml';
  for (const [index, entry] of (YAML.parse(await readFile(groupsFile, 'utf8')) as unknown[]).entries()) {
    const result = conceptGroupSchema.safeParse(entry);
    if (result.success) conceptGroups.push(result.data);
    else for (const issue of result.error.issues) errors.push(`${groupsFile}[${index}]: ${issue.path.join('.')} ${issue.message}`);
  }
  const data = <T>(items: Loaded<T>[]) => items.map((item) => item.data);
  return {
    source: { lessons: data(lessons), paths: data(paths), guides: data(guides), tasks: data(tasks), productBridges: data(productBridges), conceptGroups },
    files: { lessons, guides, paths, tasks },
    errors,
  };
}

/** Every string value inside a parsed entry, in document order. */
export function strings(value: unknown): string[] {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(strings);
  if (value && typeof value === 'object') return Object.values(value).flatMap(strings);
  return [];
}
