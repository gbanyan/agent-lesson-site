import fg from 'fast-glob';
import matter from 'gray-matter';
import YAML from 'yaml';
import { readFile } from 'node:fs/promises';

const files = await fg('src/content/task-examples/*.y*ml');
const errors: string[] = [];
const ids = new Set<string>();
const slugs = new Set<string>();

const lessonFiles = await fg('src/content/lessons/*.md');
const lessonIds = new Set<string>();
for (const lessonFile of lessonFiles) {
  const parsed = matter(await readFile(lessonFile, 'utf8'));
  lessonIds.add(String(parsed.data.id));
}

const actors: Record<string, true> = { you: true, agent: true, checkpoint: true };
const kinds: Record<string, true> = { read: true, modify: true, external: true };
interface TaskStep { actor?: string; kind?: string; text?: string; lessons?: string[] }
interface TaskFile { id?: string; slug?: string; title?: string; situation?: string; steps?: TaskStep[]; outcome?: string; boundary?: string }
for (const file of files) {
  const fail = (message: string) => errors.push(`${file}: ${message}`);
  const data = YAML.parse(await readFile(file, 'utf8')) as Partial<TaskFile> & Record<string, unknown>;
  for (const key of ['id', 'slug', 'title', 'situation', 'steps', 'outcome', 'boundary']) {
    if (!(key in data)) fail(`缺少 ${key}`);
  }
  if (!/^T[1-9]$/.test(String(data.id))) fail('id 必須為 T1–T9');
  if (!/^[a-z0-9-]+$/.test(String(data.slug))) fail('slug 必須為小寫連字號');
  if (ids.has(String(data.id))) fail(`id ${data.id} 重複`); else ids.add(String(data.id));
  if (slugs.has(String(data.slug))) fail(`slug ${data.slug} 重複`); else slugs.add(String(data.slug));
  for (const key of ['title', 'situation', 'outcome', 'boundary']) {
    if (typeof data[key] !== 'string' || !String(data[key]).trim()) fail(`${key} 必須是單一非空字串`);
  }
  const steps = Array.isArray(data.steps) ? data.steps : [];
  if (steps.length < 2 || steps.length > 7) fail(`steps 必須為 2–7 步，目前 ${steps.length}`);
  if (steps.length && steps[0]?.actor !== 'you') fail('第一步必須是讀者提出的要求（actor: you）');
  let checkpoints = 0;
  for (const [index, step] of steps.entries()) {
    const at = `步驟 ${index + 1}`;
    if (!(String(step?.actor) in actors)) fail(`${at} actor 不合法`);
    if (String(step?.actor) === 'checkpoint') checkpoints += 1;
    if (step?.kind !== undefined && !(String(step.kind) in kinds)) fail(`${at} kind 不合法`);
    if (typeof step?.text !== 'string' || !step.text.trim()) fail(`${at} text 不得為空`);
    const refs = Array.isArray(step?.lessons) ? step.lessons : [];
    if (refs.length < 1 || refs.length > 3) fail(`${at} 必須引用 1–3 個 lesson ID`);
    for (const ref of refs) {
      if (!/^[A-F][1-9]$/.test(String(ref))) fail(`${at} lesson ID 不合法：${ref}`);
      else if (!lessonIds.has(String(ref))) fail(`${at} 引用不存在的 lesson ID：${ref}`);
    }
  }
  if (steps.length && checkpoints < 1) fail('每支任務至少一個檢查點（actor: checkpoint）');
  const text = JSON.stringify(data);
  if (/\b(claude|codex|copilot|gemini|chatgpt|cursor)\b/i.test(text)) fail('任務示例必須產品中立，不得提特定產品名稱');
}

if (files.length < 1 || files.length > 6) errors.push(`任務示例必須 1–6 支，目前 ${files.length}`);

if (errors.length) {
  for (const error of errors) console.error(`ERROR ${error}`);
  process.exit(1);
}
console.log(`Task example lint passed: ${files.length} tasks, all referencing existing lessons with checkpoints.`);
