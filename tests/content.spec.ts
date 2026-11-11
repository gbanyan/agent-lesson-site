import { test, expect } from '@playwright/test';
import { createContentGraph, type ContentSource } from '../src/lib/content-graph';
import type { Lesson, Path } from '../src/lib/schemas';
import { content, loaded } from './content';

// Fast tests through the content graph's interface: no build, no browser.

test('every content file satisfies the shared schemas', () => {
  expect(loaded.errors).toEqual([]);
});

test('the real content graph has no broken references', () => {
  expect(content.problems()).toEqual([]);
});

test('lessons read in section-then-order sequence, independent of numeric IDs', () => {
  const keys = content.lessons.map((lesson) => [lesson.section, lesson.order] as const);
  const sorted = [...keys].sort((a, b) => a[0].localeCompare(b[0]) || a[1] - b[1]);
  expect(keys).toEqual(sorted);
  const first = content.lessons[0]!;
  expect(content.lessonNeighbors(first.id).previous).toBeUndefined();
  expect(content.lessonNeighbors(first.id).next).toBe(content.lessons[1]);
});

test('path steps carry step titles, intros and in-path neighbours', () => {
  for (const path of content.paths) {
    const steps = content.pathSteps(path);
    expect(steps.map((step) => step.lesson.id)).toEqual(path.lessons);
    steps.forEach((step, index) => {
      expect(step.step).toBe(index + 1);
      expect(step.total).toBe(path.lessons.length);
      expect(step.intro).toBe(path.stepIntros[step.lesson.id]);
      expect(step.title).toBe(path.stepTitles?.[step.lesson.id] ?? step.lesson.question);
      expect(step.previous?.lesson).toBe(steps[index - 1]?.lesson);
      expect(step.next?.lesson).toBe(steps[index + 1]?.lesson);
    });
  }
});

test('the featured first-use path prepares recovery before the tool acts', () => {
  const featured = content.featuredPath!;
  expect(featured).toBeDefined();
  expect(featured.lessons.indexOf('E1')).toBeLessThan(featured.lessons.indexOf('D2'));
});

test('concept groups cover every lesson once and list core lessons first', () => {
  const grouped = content.conceptGroups.flatMap(({ lessons }) => lessons.map((lesson) => lesson.id));
  expect([...grouped].sort()).toEqual(content.lessons.map((lesson) => lesson.id).sort());
  for (const { lessons } of content.conceptGroups) {
    const firstPlain = lessons.findIndex((lesson) => lesson.role !== 'core');
    if (firstPlain >= 0) expect(lessons.slice(firstPlain).some((lesson) => lesson.role === 'core')).toBe(false);
  }
});

test('lookups throw on unknown IDs instead of silently dropping them', () => {
  expect(() => content.lesson('Z9')).toThrow(/Unknown lesson ID: Z9/);
  expect(() => content.guide('P99')).toThrow(/Unknown guide ID/);
});

test('problems() reports each kind of broken reference', () => {
  const lesson = content.lesson('B1');
  const path = content.paths[0]!;
  const broken: ContentSource = {
    ...loaded.source,
    lessons: [...loaded.source.lessons, { ...lesson, id: 'F9', slug: lesson.slug, prerequisites: ['F9', 'Z1'] } as Lesson],
    paths: [...loaded.source.paths, {
      ...path, id: 'path-z', slug: 'broken-path', order: 99, featured: true,
      lessons: ['B1', 'B1', 'Z2', 'B2'], optionalLessons: ['B2'],
      stepIntros: { B1: 'x', Q9: 'y' }, exit: { title: 't', text: 't', guide: 'P42' },
    } as Path],
  };
  const problems = createContentGraph(broken).problems().join('\n');
  expect(problems).toContain(`slug ${lesson.slug} 重複`);
  expect(problems).toContain('F9: 不得 prerequisite 自己');
  expect(problems).toContain('F9 prerequisites: lesson Z1 不存在');
  expect(problems).toContain('最多一條 featured 路徑');
  expect(problems).toContain('path broken-path: 路徑內有重複 lesson');
  expect(problems).toContain('path broken-path: lesson Z2 不存在');
  expect(problems).toContain('B2 不能同時是必讀與選讀');
  expect(problems).toContain('stepIntros 的 Q9 不在路徑內');
  expect(problems).toContain('B2 缺少路徑銜接說明 stepIntros');
  expect(problems).toContain('exit guide P42 不存在');
  expect(problems).toContain('F9: 必須剛好屬於一個概念分組');
});
