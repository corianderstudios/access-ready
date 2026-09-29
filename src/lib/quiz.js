export const LETTERS = 'ABCDEFG';

function seedFrom(str) {
  let h = 2166136261;
  for (const ch of str) {
    h ^= ch.charCodeAt(0);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const cache = new WeakMap();

/**
 * Stable shuffle of a question's options, seeded by its prompt, so the correct
 * answer is not always in the same slot but the order never changes between
 * renders. Returns an array of original option indexes in display order.
 */
export function orderFor(q) {
  if (cache.has(q)) return cache.get(q);
  let x = seedFrom(q.p) || 1;
  const idx = q.o.map((_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) {
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    x >>>= 0;
    const j = x % (i + 1);
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  cache.set(q, idx);
  return idx;
}

/** Display letter (A, B, C...) of the correct answer after shuffling. */
export const correctLetter = (q) => LETTERS[orderFor(q).indexOf(q.a)];
