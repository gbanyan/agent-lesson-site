/** Shared fixture: the real content graph, loaded from disk without a build. */
import { loadContent } from '../scripts/content-source';
import { createContentGraph, routes } from '../src/lib/content-graph';

export const loaded = await loadContent();
export const content = createContentGraph(loaded.source);
export { routes };

/** Static pages the crawler can reach from the homepage (product bridges are not linked). */
export const reachableRoutes = [
  '/', '/prepare/', '/start/', '/concepts/', '/about/',
  ...content.lessons.map(routes.lesson),
  ...content.paths.map(routes.path),
  ...content.paths.flatMap((path) => path.lessons.map((id) => routes.pathStep(path, content.lesson(id)))),
  ...content.guides.map(routes.guide),
  ...content.tasks.map(routes.task),
];
