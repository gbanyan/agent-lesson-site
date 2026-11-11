/**
 * Astro adapter for the content graph: loads every collection once per build
 * and exposes base-prefixed hrefs. Pages read content only through here.
 */
import { getCollection } from 'astro:content';
import { createContentGraph, routes, type ContentGraph } from './content-graph';
import type { Guide, Lesson, Path, Task } from './schemas';
import { url } from './urls';

let graph: Promise<ContentGraph> | undefined;

export function getContent(): Promise<ContentGraph> {
  graph ??= (async () => {
    const [lessons, paths, guides, tasks, productBridges, conceptGroups] = await Promise.all([
      getCollection('lessons'), getCollection('paths'), getCollection('preflightGuides'),
      getCollection('tasks'), getCollection('productBridges'), getCollection('conceptGroups'),
    ]);
    const data = <T>(entries: { data: T }[]) => entries.map((entry) => entry.data);
    return createContentGraph({
      lessons: data(lessons), paths: data(paths), guides: data(guides),
      tasks: data(tasks), productBridges: data(productBridges), conceptGroups: data(conceptGroups),
    });
  })();
  return graph;
}

export const href = {
  lesson: (lesson: Pick<Lesson, 'slug'>) => url(routes.lesson(lesson)),
  path: (path: Pick<Path, 'slug'>) => url(routes.path(path)),
  pathStep: (path: Pick<Path, 'slug'>, lesson: Pick<Lesson, 'slug'>) => url(routes.pathStep(path, lesson)),
  guide: (guide: Pick<Guide, 'slug'>) => url(routes.guide(guide)),
  task: (task: Pick<Task, 'slug'>) => url(routes.task(task)),
};
