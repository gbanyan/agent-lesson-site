import fg from 'fast-glob';
import matter from 'gray-matter';
import YAML from 'yaml';
import { access, readFile } from 'node:fs/promises';

const allowed = new Set(['concept','terminal','agent-action','file-explorer','permission','illustration']);
const errors:string[]=[];
for (const file of await fg('src/content/lessons/*.md')) {
  const {data}=matter(await readFile(file,'utf8'));
  if (data.visual && !allowed.has(data.visual.type)) errors.push(`${file}: visual type ${data.visual.type} 不允許`);
  if (data.visual?.type === 'illustration' && !data.visual.preset) errors.push(`${file}: illustration 缺少 manifest key`);
}
const manifest = YAML.parse(await readFile('visuals/manifest.yaml','utf8'));
for (const item of manifest.illustrations ?? []) {
  for (const key of ['lesson','purpose','alt','intent','filename']) if (!item[key]) errors.push(`manifest: ${item.lesson ?? 'unknown'} 缺少 ${key}`);
  if (item.filename) try { await access(`src/assets/illustrations/${item.filename}`); } catch { errors.push(`manifest: 找不到 ${item.filename}`); }
}
if(errors.length){errors.forEach(error=>console.error(`ERROR ${error}`));process.exit(1)}
console.log(`Visual metadata valid: ${(manifest.illustrations ?? []).length} generated illustrations.`);
