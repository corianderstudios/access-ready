import { describe, expect, it } from 'vitest';
import { FLAT, Q } from '../data/content.js';
import { LETTERS, correctLetter, orderFor } from './quiz.js';

const allQuestions = FLAT.flatMap((s) => s.quiz);

describe('orderFor', () => {
  it('returns a permutation of the option indexes', () => {
    for (const q of allQuestions) {
      expect([...orderFor(q)].sort((a, b) => a - b)).toEqual(q.o.map((_, i) => i));
    }
  });

  it('gives the same order every time for the same question', () => {
    const q = Q('Stable?', ['a', 'b', 'c', 'd'], 0, 'why');
    const copy = Q('Stable?', ['a', 'b', 'c', 'd'], 0, 'why');
    expect(orderFor(q)).toBe(orderFor(q));
    expect(orderFor(copy)).toEqual(orderFor(q));
  });

  it('spreads correct answers across letters instead of one slot', () => {
    const counts = {};
    for (const q of allQuestions) {
      const letter = correctLetter(q);
      counts[letter] = (counts[letter] || 0) + 1;
    }
    expect(Object.keys(counts).length).toBeGreaterThanOrEqual(3);
    expect(Math.max(...Object.values(counts)) / allQuestions.length).toBeLessThan(0.5);
  });
});

describe('correctLetter', () => {
  it('points at the correct option after shuffling', () => {
    for (const q of allQuestions) {
      const displayIndex = LETTERS.indexOf(correctLetter(q));
      expect(orderFor(q)[displayIndex]).toBe(q.a);
    }
  });
});
