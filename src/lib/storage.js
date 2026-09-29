export const STORAGE_KEY = 'access-ready.v1';

export const defaultState = () => ({ done: {}, scores: {}, theme: 'light' });

/**
 * Reads saved progress. Storage can be missing or throw (private windows,
 * blocked site data), so every failure falls back to the defaults.
 */
export function loadState() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const saved = raw ? JSON.parse(raw) : null;
    if (!saved || typeof saved !== 'object') return defaultState();
    return {
      ...defaultState(),
      ...saved,
      done: { ...(saved.done || {}) },
      scores: { ...(saved.scores || {}) },
    };
  } catch {
    return defaultState();
  }
}

export function saveState(state) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* Progress simply isn't saved; the app keeps working. */
  }
}
