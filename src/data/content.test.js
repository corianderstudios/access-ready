import { describe, expect, it } from 'vitest';
import { ALL_MODULES, EXAMS, FLAT, MODULES, PRACTICE } from './content.js';

const lessonSections = FLAT.filter((s) => !s.practice);

describe('course content', () => {
  it('covers every topic area', () => {
    expect(MODULES.map((m) => m.id)).toEqual(
      expect.arrayContaining(['foundations', 'web', 'documents', 'mobile', 'testing', 'organization']),
    );
  });

  it('uses unique ids so every route is unambiguous', () => {
    const ids = [...ALL_MODULES.map((m) => m.id), ...FLAT.map((s) => s.id)];
    expect(new Set(ids).size).toBe(ids.length);
  });

  it.each(lessonSections.map((s) => [s.id, s]))(
    '%s has a lesson, a wrong/right example and a 3-question quiz',
    (_id, s) => {
      expect(s.title).toBeTruthy();
      expect(s.lede).toBeTruthy();
      expect(s.lesson.length).toBeGreaterThan(200);
      expect(s.examples.length).toBeGreaterThan(0);
      for (const ex of s.examples) {
        expect(ex.title).toBeTruthy();
        expect(ex.wrong).toBeTruthy();
        expect(ex.wrongWhy).toBeTruthy();
        expect(ex.right).toBeTruthy();
        expect(ex.rightWhy).toBeTruthy();
      }
      expect(s.quiz).toHaveLength(3);
    },
  );

  it('gives every question a valid answer, distinct options and an explanation', () => {
    for (const s of FLAT) {
      for (const q of s.quiz) {
        expect(q.p).toBeTruthy();
        expect(q.o.length).toBeGreaterThanOrEqual(2);
        expect(new Set(q.o).size).toBe(q.o.length);
        expect(Number.isInteger(q.a)).toBe(true);
        expect(q.a).toBeGreaterThanOrEqual(0);
        expect(q.a).toBeLessThan(q.o.length);
        expect(q.w).toBeTruthy();
      }
    }
  });

  it('has practice questions organized by exam: CPACC, WAS and ADS', () => {
    const byExam = Object.fromEntries(PRACTICE.sections.map((s) => [s.exams[0], s]));
    for (const code of ['CPACC', 'WAS', 'ADS']) {
      expect(byExam[code]).toBeDefined();
      expect(byExam[code].practice).toBe(true);
      expect(byExam[code].quiz.length).toBeGreaterThanOrEqual(15);
    }
  });

  it('links each exam card to its practice section', () => {
    for (const exam of EXAMS) {
      expect(FLAT.some((s) => `#${s.id}` === exam.path)).toBe(true);
    }
  });
});
