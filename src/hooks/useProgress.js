import { useCallback, useEffect, useState } from 'react';
import { loadState, saveState } from '../lib/storage.js';

/** Completed sections, best quiz scores and the chosen theme, saved locally. */
export function useProgress() {
  const [state, setState] = useState(loadState);

  useEffect(() => {
    saveState(state);
  }, [state]);

  const setDone = useCallback((id, value) => {
    setState((s) => {
      const done = { ...s.done };
      if (value) done[id] = true;
      else delete done[id];
      return { ...s, done };
    });
  }, []);

  const recordScore = useCallback((id, correct, total) => {
    setState((s) => {
      const prev = s.scores[id];
      if (prev && prev.c >= correct) return s;
      return { ...s, scores: { ...s.scores, [id]: { c: correct, t: total } } };
    });
  }, []);

  const setTheme = useCallback((theme) => setState((s) => ({ ...s, theme })), []);

  const reset = useCallback(() => setState((s) => ({ ...s, done: {}, scores: {} })), []);

  return { state, setDone, recordScore, setTheme, reset };
}
