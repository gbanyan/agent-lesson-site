import fg from 'fast-glob';
import matter from 'gray-matter';
import YAML from 'yaml';
import { readFile } from 'node:fs/promises';

const lessonFiles = await fg('src/content/lessons/*.md');
const lessons = await Promise.all(lessonFiles.map(async file => matter(await readFile(file,'utf8')).data));
const ids = new Set(lessons.map(item => item.id));
const errors:string[] = [];
for (const lesson of lessons) for (const id of lesson.prerequisites ?? []) if (!ids.has(id)) errors.push(`${lesson.id}: prerequisite ${id} 不存在`);
for (const folder of ['paths','product-bridges']) {
  for (const file of await fg(`src/content/${folder}/*.{yaml,yml}`)) {
    const data = YAML.parse(await readFile(file,'utf8'));
    const refs = data.lessons ?? data.concepts ?? [];
    for (const id of refs) if (!ids.has(id)) errors.push(`${file}: lesson ${id} 不存在`);
    if (folder === 'paths' && new Set(refs).size !== refs.length) errors.push(`${file}: path 內有重複 lesson`);
  }
}
if (errors.length) { errors.forEach(error=>console.error(`ERROR ${error}`)); process.exit(1); }
console.log('Content references are valid.');
