import fg from 'fast-glob';
import matter from 'gray-matter';
import { readFile } from 'node:fs/promises';

const files = await fg('src/content/preflight-guides/*.md');
const errors: string[] = [];
const ids = new Set<string>();
const slugs = new Set<string>();

for (const file of files) {
  const { data, content } = matter(await readFile(file, 'utf8'));
  const fail = (message: string) => errors.push(`${file}: ${message}`);
  for (const key of ['id', 'slug', 'order', 'title', 'summary', 'principle', 'prompts']) {
    if (!(key in data)) fail(`缺少 ${key}`);
  }
  if (!/^P[1-4]$/.test(String(data.id))) fail('id 必須為 P1–P4');
  if (ids.has(String(data.id))) fail(`id ${data.id} 重複`); else ids.add(String(data.id));
  if (slugs.has(String(data.slug))) fail(`slug ${data.slug} 重複`); else slugs.add(String(data.slug));
  if (!Array.isArray(data.prompts) || data.prompts.length < 2 || data.prompts.length > 3) {
    fail('每頁必須提供 2–3 個延伸問題');
  } else {
    for (const [index, prompt] of data.prompts.entries()) {
      if (!prompt || typeof prompt.label !== 'string' || typeof prompt.text !== 'string') fail(`prompt ${index + 1} 必須包含 label 與 text`);
      else {
        if (!prompt.text.includes('＿＿')) fail(`prompt ${index + 1} 必須保留可替換欄位 ＿＿`);
        if (prompt.audience !== 'research_chat') fail(`prompt ${index + 1} audience 必須是 research_chat`);
        if (prompt.mode !== 'ask_only') fail(`prompt ${index + 1} mode 必須是 ask_only`);
        if (!['requires_web', 'no_special_access'].includes(prompt.capability)) fail(`prompt ${index + 1} capability 不適合 buyer guide`);
      }
    }
  }
  if (!content.trim()) fail('正文不得為空');
  if (/\$\s*\d|每\s*(月|年)\s*\d+\s*(元|美元)|gemini-\d|gpt-\d|claude-\d/i.test(content)) {
    fail('原則正文不得寫死價格或版本化模型名稱');
  }
}

if (files.length !== 4) errors.push(`前置說明必須恰好 4 篇，目前 ${files.length}`);
if (errors.length) {
  for (const error of errors) console.error(`ERROR ${error}`);
  process.exit(1);
}
console.log(`Preflight guide lint passed: ${files.length} guides, each with 2–3 reusable prompts.`);
