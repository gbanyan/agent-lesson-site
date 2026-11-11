/**
 * Content lint. Structure comes from the shared schemas (src/lib/schemas.ts)
 * and cross-references from the content graph; this script adds only the
 * editorial heuristics that are not structure.
 */
import { createContentGraph } from '../src/lib/content-graph';
import { loadContent, strings, type Loaded } from './content-source';

const { source, files, errors } = await loadContent();
const warnings: string[] = [];
const cjk = (value: string) => (value.match(/[㐀-鿿]/g) ?? []).length;
const plain = (value: string) => value.replace(/[*`_]/g, '');

errors.push(...createContentGraph(source).problems());

/** Frontmatter fields that never reach the rendered page. */
const unrendered = new Set(['guard', 'notTeach', 'searchTerms', 'prerequisites', 'id', 'slug', 'order', 'section', 'archetype', 'role', 'audience', 'mode', 'capability', 'tone', 'type', 'lesson', 'guide', 'featured']);
function renderedStrings(value: unknown): string[] {
  if (Array.isArray(value)) return value.flatMap(renderedStrings);
  if (value && typeof value === 'object') return Object.entries(value).flatMap(([key, item]) => unrendered.has(key) ? [] : renderedStrings(item));
  return typeof value === 'string' ? [value] : [];
}

/**
 * `guard.keep` phrases must stay on the page; `guard.avoid` phrases must not come back.
 * This is the fast source-level check; tests/site.spec.ts repeats it on the rendered page.
 */
function checkGuard(entry: Loaded<{ guard?: { keep: string[]; avoid: string[] } | undefined }>) {
  const { guard } = entry.data;
  if (!guard) return;
  const page = plain([...renderedStrings(entry.data), entry.body].join('\n'));
  for (const phrase of guard.keep) if (!page.includes(phrase)) errors.push(`${entry.file}: guard.keep 「${phrase}」已不在頁面上`);
  for (const phrase of guard.avoid) if (page.includes(phrase)) errors.push(`${entry.file}: guard.avoid 「${phrase}」又出現在頁面上`);
}

for (const entry of files.lessons) {
  const { file, data, body } = entry;
  const fail = (message: string) => errors.push(`${file}: ${message}`);
  const sentences = (data.context.match(/[。！？!?]/g) ?? []).length;
  if (sentences < 1 || sentences > 2) fail('context 必須是 1–2 句短情境');
  if (cjk(data.context) > 90) fail('context 超過 90 個中文字');
  if (/^#{2,3}\s/m.test(body)) fail('核心 Markdown 禁止 H2/H3');
  if (/^\s*\|.+\|\s*$/m.test(body) || /<table[\s>]/i.test(body)) fail('核心 Markdown 禁止 table');
  for (const match of body.matchAll(/```[^\n]*\n([\s\S]*?)```/g)) {
    if (match[1]!.split('\n').filter((line) => /^\s*(\$|>|#)\s+\S/.test(line)).length > 1) fail('核心 Markdown 禁止大型 multi-command code block');
  }
  const { scenario, prompt } = data;
  const reading = [data.question, data.context, data.answer, data.takeaway, prompt?.text ?? '', scenario.warning ?? '', scenario.request, ...scenario.actions, scenario.result, scenario.boundary, body].join(' ');
  // A narrow vocabulary guard complements, but cannot replace, the editorial prerequisite audit.
  if (/\b(?:workspace|project|issue|log)\b/i.test([reading, ...strings(data.visual)].join(' '))) fail('讀者文案或圖解出現未解釋的工程工作用語，請改用具體中文說明');
  const count = cjk(reading);
  if (count > 900) fail(`中文字數 ${count} 超過 hard limit 900`);
  else if (count > 700) warnings.push(`${file}: 中文字數 ${count} 超過 soft target 700`);
  checkGuard(entry);
}
const coreCount = source.lessons.filter((lesson) => lesson.role === 'core').length;
if (coreCount < 4 || coreCount > 8) errors.push(`核心觀念標記必須在 4–8 張之間，目前 ${coreCount}`);

for (const entry of files.guides) {
  if (!entry.body.trim()) errors.push(`${entry.file}: 正文不得為空`);
  if (/\$\s*\d|每\s*(月|年)\s*\d+\s*(元|美元)|gemini-\d|gpt-\d|claude-\d/i.test(entry.body)) errors.push(`${entry.file}: 原則正文不得寫死價格或版本化模型名稱`);
  checkGuard(entry);
}

files.paths.forEach(checkGuard);

for (const { file, data } of files.tasks) {
  if (/\b(claude|codex|copilot|gemini|chatgpt|cursor)\b/i.test(strings(data).join(' '))) errors.push(`${file}: 任務示例必須產品中立，不得提特定產品名稱`);
}
if (source.tasks.length < 1 || source.tasks.length > 6) errors.push(`任務示例必須 1–6 支，目前 ${source.tasks.length}`);

for (const warning of warnings) console.warn(`WARN ${warning}`);
if (errors.length) { for (const error of errors) console.error(`ERROR ${error}`); process.exit(1); }
console.log(`Content lint passed: ${source.lessons.length} lessons, ${source.guides.length} guides, ${source.paths.length} paths, ${source.tasks.length} tasks; ${warnings.length} warnings.`);
