import fg from 'fast-glob';
import matter from 'gray-matter';
import YAML from 'yaml';
import { access, readFile } from 'node:fs/promises';

const allowed = new Set(['concept','system-map','terminal','agent-action','file-explorer','permission','illustration']);
const systemMapLessons = new Set(['A1','B3','B9','C1','C2','C3','C4','C5','C7','D2','D3','E7','F4']);
const errors:string[]=[];
for (const file of await fg('src/content/lessons/*.md')) {
  const {data}=matter(await readFile(file,'utf8'));
  if (data.visual && !allowed.has(data.visual.type)) errors.push(`${file}: visual type ${data.visual.type} 不允許`);
  if (systemMapLessons.has(data.id) && data.visual?.type !== 'system-map') errors.push(`${file}: ${data.id} 的位置、角色或資料流向必須使用 system-map`);
  if (data.visual?.type === 'illustration' && !data.visual.preset) errors.push(`${file}: illustration 缺少 manifest key`);
}
const manifest = YAML.parse(await readFile('visuals/manifest.yaml','utf8'));
for (const item of manifest.illustrations ?? []) {
  for (const key of ['lesson','purpose','alt','intent','filename']) if (!item[key]) errors.push(`manifest: ${item.lesson ?? 'unknown'} 缺少 ${key}`);
  if (item.filename) try { await access(`src/assets/illustrations/${item.filename}`); } catch { errors.push(`manifest: 找不到 ${item.filename}`); }
}
if(errors.length){errors.forEach(error=>console.error(`ERROR ${error}`));process.exit(1)}
console.log(`Visual metadata valid: ${systemMapLessons.size} required system maps, ${(manifest.illustrations ?? []).length} generated illustrations.`);
