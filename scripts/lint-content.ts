import fg from 'fast-glob';
import matter from 'gray-matter';
import { readFile } from 'node:fs/promises';

const files = await fg('src/content/lessons/*.md');
const errors: string[] = [];
const warnings: string[] = [];
const entries: {file:string; data:Record<string,unknown>; body:string}[] = [];

for (const file of files) {
  const parsed = matter(await readFile(file, 'utf8'));
  entries.push({ file, data: parsed.data, body: parsed.content });
}

const ids = new Set(entries.map(({data}) => String(data.id)));
const slugs = new Set<string>();
for (const { file, data, body } of entries) {
  const fail = (message:string) => errors.push(`${file}: ${message}`);
  for (const key of ['id','slug','section','order','question','answer','takeaway','newTerms','prerequisites','visual','scenario','notTeach']) {
    if (!(key in data)) fail(`缺少 ${key}`);
  }
  for (const key of ['question','answer','takeaway']) {
    if (typeof data[key] !== 'string' || !String(data[key]).trim()) fail(`${key} 必須是單一非空字串`);
  }
  const marks = (String(data.question).match(/[？?]/g) ?? []).length;
  if (marks !== 1 || !/[？?]$/.test(String(data.question))) fail('question 必須恰好是一個問句');
  if (!Array.isArray(data.newTerms) || data.newTerms.length > 3) fail('newTerms 必須是最多三項的陣列');
  if (!Array.isArray(data.notTeach) || data.notTeach.length < 1) fail('notTeach 必填且至少一項');
  if (!Array.isArray(data.prerequisites)) fail('prerequisites 必須是陣列');
  else for (const prereq of data.prerequisites) {
    if (!ids.has(String(prereq))) fail(`prerequisite ${prereq} 不存在`);
    if (prereq === data.id) fail('不得 prerequisite 自己');
  }
  if (Array.isArray(data.visual)) fail('visual 最多一個，不得使用陣列');
  const scenario = data.scenario as Record<string, unknown> | undefined;
  if (!scenario || typeof scenario !== 'object') fail('scenario 必須是情境物件');
  else {
    for (const key of ['request', 'result', 'boundary']) {
      if (typeof scenario[key] !== 'string' || !String(scenario[key]).trim()) fail(`scenario.${key} 必須是非空字串`);
    }
    if (!Array.isArray(scenario.actions) || scenario.actions.length < 2 || scenario.actions.length > 5 || scenario.actions.some((action) => typeof action !== 'string' || !action.trim())) {
      fail('scenario.actions 必須包含 2–5 個具體動作');
    }
  }
  if (slugs.has(String(data.slug))) fail(`slug ${data.slug} 重複`); else slugs.add(String(data.slug));
  if (/^#{2,3}\s/m.test(body)) fail('核心 Markdown 禁止 H2/H3');
  if (/^\s*\|.+\|\s*$/m.test(body) || /<table[\s>]/i.test(body)) fail('核心 Markdown 禁止 table');
  for (const match of body.matchAll(/```[^\n]*\n([\s\S]*?)```/g)) {
    const commands = match[1]!.split('\n').filter((line) => /^\s*(\$|>|#)\s+\S/.test(line));
    if (commands.length > 1) fail('核心 Markdown 禁止大型 multi-command code block');
  }
  const text = [data.question, data.answer, data.takeaway, scenario?.request ?? '', ...(Array.isArray(scenario?.actions) ? scenario.actions : []), scenario?.result ?? '', scenario?.boundary ?? '', body].join(' ');
  const cjkCount = (text.match(/[\u3400-\u9fff]/g) ?? []).length;
  if (cjkCount > 700) fail(`中文字數 ${cjkCount} 超過 hard limit 700`);
  else if (cjkCount > 500) warnings.push(`${file}: 中文字數 ${cjkCount} 超過 soft target 500`);
}

const expected = {A:2,B:9,C:7,D:6,E:7,F:4};
if (entries.length !== 35) errors.push(`V1 必須恰好 35 張 lesson，目前 ${entries.length}`);
for (const [section, count] of Object.entries(expected)) {
  const actual = entries.filter(({data}) => data.section === section).length;
  if (actual !== count) errors.push(`Section ${section} 應有 ${count} 張，目前 ${actual}`);
}

for (const warning of warnings) console.warn(`WARN ${warning}`);
if (errors.length) { for (const error of errors) console.error(`ERROR ${error}`); process.exit(1); }
console.log(`Content lint passed: ${entries.length} lessons, ${warnings.length} warnings.`);
