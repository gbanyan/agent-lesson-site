/**
 * Content graph: ordering, lookup and cross-references for all collections.
 *
 * Pure module (no Astro imports) so the build, the lint script and unit tests
 * share one implementation. Pages get data through `src/lib/content.ts`;
 * lint calls `problems()` to report every broken reference at once.
 */
import type { ConceptGroup, Guide, Lesson, Path, ProductBridge, Task } from './schemas';

export interface ContentSource {
  lessons: Lesson[];
  paths: Path[];
  guides: Guide[];
  tasks: Task[];
  productBridges: ProductBridge[];
  conceptGroups: ConceptGroup[];
}

/** Site-relative routes (no base path). `src/lib/content.ts` adds the base. */
export const routes = {
  lesson: (lesson: Pick<Lesson, 'slug'>) => `/lessons/${lesson.slug}/`,
  path: (path: Pick<Path, 'slug'>) => `/paths/${path.slug}/`,
  pathStep: (path: Pick<Path, 'slug'>, lesson: Pick<Lesson, 'slug'>) => `/paths/${path.slug}/${lesson.slug}/`,
  guide: (guide: Pick<Guide, 'slug'>) => `/prepare/${guide.slug}/`,
  task: (task: Pick<Task, 'slug'>) => `/tasks/${task.slug}/`,
};

export interface PathStepLink { lesson: Lesson; title: string; }
export interface PathStep extends PathStepLink {
  path: Path;
  step: number;
  total: number;
  intro: string;
  previous: PathStepLink | undefined;
  next: PathStepLink | undefined;
}

export interface ContentGraph {
  /** Lessons in canonical reading order (section, then order). */
  lessons: Lesson[];
  paths: Path[];
  guides: Guide[];
  tasks: Task[];
  productBridges: ProductBridge[];
  coreLessons: Lesson[];
  featuredPath: Path | undefined;
  conceptGroups: { group: ConceptGroup; lessons: Lesson[] }[];
  /** Throws when the ID does not exist. */
  lesson(id: string): Lesson;
  guide(id: string): Guide;
  lessonNeighbors(id: string): { previous: Lesson | undefined; next: Lesson | undefined };
  guideNeighbors(id: string): { previous: Guide | undefined; next: Guide | undefined };
  pathSteps(path: Path): PathStep[];
  /** Every broken cross-reference or ordering conflict, as readable messages. */
  problems(): string[];
}

const byOrder = <T extends { order: number }>(a: T, b: T) => a.order - b.order;
const lessonOrder = (a: Lesson, b: Lesson) => a.section.localeCompare(b.section) || a.order - b.order;

function lookup<T extends { id: string }>(items: T[], kind: string) {
  const map = new Map(items.map((item) => [item.id, item]));
  return (id: string): T => {
    const item = map.get(id);
    if (!item) throw new Error(`Unknown ${kind} ID: ${id}`);
    return item;
  };
}

function neighbors<T extends { id: string }>(items: T[], id: string) {
  const index = items.findIndex((item) => item.id === id);
  if (index < 0) throw new Error(`Unknown ID: ${id}`);
  return { previous: items[index - 1], next: items[index + 1] };
}

export function createContentGraph(source: ContentSource): ContentGraph {
  const lessons = [...source.lessons].sort(lessonOrder);
  const paths = [...source.paths].sort(byOrder);
  const guides = [...source.guides].sort(byOrder);
  const tasks = [...source.tasks].sort((a, b) => a.id.localeCompare(b.id));
  const productBridges = [...source.productBridges].sort((a, b) => a.id.localeCompare(b.id));
  const lesson = lookup(lessons, 'lesson');
  const guide = lookup(guides, 'guide');
  const isCore = (item: Lesson) => item.role === 'core';

  const stepLink = (path: Path, id: string): PathStepLink => {
    const target = lesson(id);
    return { lesson: target, title: path.stepTitles?.[id] ?? target.question };
  };

  return {
    lessons,
    paths,
    guides,
    tasks,
    productBridges,
    coreLessons: lessons.filter(isCore),
    featuredPath: paths.find((path) => path.featured),
    get conceptGroups() {
      return [...source.conceptGroups].sort(byOrder).map((group) => ({
        group,
        // Stable sort: core lessons first, otherwise the group's authored order.
        lessons: group.lessons.map(lesson).sort((a, b) => Number(isCore(b)) - Number(isCore(a))),
      }));
    },
    lesson,
    guide,
    lessonNeighbors: (id) => neighbors(lessons, id),
    guideNeighbors: (id) => neighbors(guides, id),
    pathSteps(path) {
      return path.lessons.map((id, index) => ({
        ...stepLink(path, id),
        path,
        step: index + 1,
        total: path.lessons.length,
        intro: path.stepIntros[id] ?? '',
        previous: index > 0 ? stepLink(path, path.lessons[index - 1]!) : undefined,
        next: index < path.lessons.length - 1 ? stepLink(path, path.lessons[index + 1]!) : undefined,
      }));
    },
    problems: () => findProblems(source, lessons),
  };
}

function findProblems(source: ContentSource, lessons: Lesson[]): string[] {
  const problems: string[] = [];
  const lessonIds = new Set(lessons.map((item) => item.id));
  const guideIds = new Set(source.guides.map((item) => item.id));
  const needLesson = (where: string, id: string) => { if (!lessonIds.has(id)) problems.push(`${where}: lesson ${id} 不存在`); };

  const unique = (kind: string, items: Record<string, unknown>[], key: string) => {
    const seen = new Set<unknown>();
    for (const item of items) {
      if (seen.has(item[key])) problems.push(`${kind}: ${key} ${String(item[key])} 重複`);
      seen.add(item[key]);
    }
  };
  for (const [kind, items] of Object.entries({ lessons: source.lessons, paths: source.paths, guides: source.guides, tasks: source.tasks, productBridges: source.productBridges })) {
    unique(kind, items, 'id');
    unique(kind, items, 'slug');
  }
  unique('lessons', source.lessons.map((item) => ({ position: `${item.section}${item.order}` })), 'position');
  unique('guides', source.guides, 'order');
  unique('paths', source.paths, 'order');
  unique('conceptGroups', source.conceptGroups, 'id');

  for (const item of source.lessons) {
    for (const id of item.prerequisites) {
      if (id === item.id) problems.push(`${item.id}: 不得 prerequisite 自己`);
      needLesson(`${item.id} prerequisites`, id);
    }
  }

  if (source.paths.filter((path) => path.featured).length > 1) problems.push('paths: 最多一條 featured 路徑');
  for (const path of source.paths) {
    const where = `path ${path.slug}`;
    if (new Set(path.lessons).size !== path.lessons.length) problems.push(`${where}: 路徑內有重複 lesson`);
    path.lessons.forEach((id) => needLesson(where, id));
    for (const id of path.optionalLessons ?? []) {
      needLesson(`${where} optionalLessons`, id);
      if (path.lessons.includes(id)) problems.push(`${where}: ${id} 不能同時是必讀與選讀`);
    }
    for (const key of ['stepTitles', 'stepIntros'] as const) {
      for (const id of Object.keys(path[key] ?? {})) {
        if (!path.lessons.includes(id)) problems.push(`${where}: ${key} 的 ${id} 不在路徑內`);
      }
    }
    for (const id of path.lessons) {
      if (!path.stepIntros[id]) problems.push(`${where}: ${id} 缺少路徑銜接說明 stepIntros`);
    }
    path.safetyGate?.forEach((item) => needLesson(`${where} safetyGate`, item.lesson));
    if (path.exit && !guideIds.has(path.exit.guide)) problems.push(`${where}: exit guide ${path.exit.guide} 不存在`);
  }

  for (const bridge of source.productBridges) bridge.concepts.forEach((id) => needLesson(`product ${bridge.slug}`, id));
  for (const task of source.tasks) {
    task.steps.forEach((step, index) => step.lessons.forEach((id) => needLesson(`task ${task.slug} 步驟 ${index + 1}`, id)));
  }

  const grouped = new Map<string, string[]>();
  for (const group of source.conceptGroups) {
    for (const id of group.lessons) {
      needLesson(`concept group ${group.id}`, id);
      grouped.set(id, [...(grouped.get(id) ?? []), group.id]);
    }
  }
  for (const item of lessons) {
    const groups = grouped.get(item.id) ?? [];
    if (groups.length !== 1) problems.push(`${item.id}: 必須剛好屬於一個概念分組，目前 ${groups.length ? groups.join('、') : '沒有'}`);
  }
  return problems;
}
