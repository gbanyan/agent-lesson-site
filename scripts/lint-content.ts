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
if (ids.size !== entries.length) errors.push('lesson ID 不得重複');
const slugs = new Set<string>();
for (const { file, data, body } of entries) {
  const fail = (message:string) => errors.push(`${file}: ${message}`);
  for (const key of ['id','slug','section','order','archetype','question','context','answer','takeaway','newTerms','prerequisites','visual','scenario','notTeach']) {
    if (!(key in data)) fail(`缺少 ${key}`);
  }
  for (const key of ['question','context','answer','takeaway']) {
    if (typeof data[key] !== 'string' || !String(data[key]).trim()) fail(`${key} 必須是單一非空字串`);
  }
  if (!['definition','contrast','safety_action'].includes(String(data.archetype))) fail('archetype 必須是 definition、contrast 或 safety_action');
  const prompt = data.prompt as Record<string, unknown> | undefined;
  if (prompt) {
    if (!['research_chat','active_agent','human'].includes(String(prompt.audience))) fail('prompt.audience 不合法');
    if (!['ask_only','explain_before_action','execute_after_confirmation'].includes(String(prompt.mode))) fail('prompt.mode 不合法');
    if (!['requires_web','requires_workspace_access','no_special_access'].includes(String(prompt.capability))) fail('prompt.capability 不合法');
    if (typeof prompt.text !== 'string' || !prompt.text.includes('＿＿')) fail('prompt.text 必須包含可替換欄位 ＿＿');
    if (prompt.audience === 'research_chat' && prompt.mode !== 'ask_only') fail('research_chat prompt 只能使用 ask_only');
    if (prompt.mode === 'execute_after_confirmation' && prompt.audience !== 'active_agent') fail('可執行任務要求必須交給 active_agent');
  }
  if (typeof data.context === 'string') {
    const context = String(data.context).trim();
    const sentences = (context.match(/[。！？!?]/g) ?? []).length;
    if (sentences < 1 || sentences > 2) fail('context 必須是 1–2 句短情境');
    if ((context.match(/[\u3400-\u9fff]/g) ?? []).length > 90) fail('context 超過 90 個中文字');
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
    if (scenario.warning !== undefined && (typeof scenario.warning !== 'string' || !scenario.warning.trim())) fail('scenario.warning 必須是非空警示文字');
    if (['F3', 'E7'].includes(String(data.id)) && !scenario.warning) fail('危險要求案例必須在要求前提供 scenario.warning');
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
  const text = [data.question, data.context, data.answer, data.takeaway, prompt?.text ?? '', scenario?.warning ?? '', scenario?.request ?? '', ...(Array.isArray(scenario?.actions) ? scenario.actions : []), scenario?.result ?? '', scenario?.boundary ?? '', body].join(' ');
  // A narrow vocabulary guard complements, but cannot replace, the editorial prerequisite audit.
  if (/\b(?:workspace|project|issue|log)\b/i.test(text)) fail('讀者文案出現未解釋的工程工作用語，請改用具體中文說明');
  const cjkCount = (text.match(/[\u3400-\u9fff]/g) ?? []).length;
  if (cjkCount > 900) fail(`中文字數 ${cjkCount} 超過 hard limit 900`);
  else if (cjkCount > 700) warnings.push(`${file}: 中文字數 ${cjkCount} 超過 soft target 700`);
}

const expected = {A:2,B:8,C:5,D:6,E:5,F:4};
if (entries.length !== 30) errors.push(`內容合併後應有 30 張 lesson，目前 ${entries.length}`);
for (const [section, count] of Object.entries(expected)) {
  const actual = entries.filter(({data}) => data.section === section).length;
  if (actual !== count) errors.push(`Section ${section} 應有 ${count} 張，目前 ${actual}`);
}
for (const { file, data } of entries) {
  if ('role' in data && data.role !== 'core') errors.push(`${file}: role 只能省略或為 core`);
}
const coreCount = entries.filter(({ data }) => data.role === 'core').length;
if (coreCount < 4 || coreCount > 8) errors.push(`核心觀念標記必須在 4–8 張之間，目前 ${coreCount}`);

for (const warning of warnings) console.warn(`WARN ${warning}`);
if (errors.length) { for (const error of errors) console.error(`ERROR ${error}`); process.exit(1); }
console.log(`Content lint passed: ${entries.length} lessons, ${warnings.length} warnings.`);
