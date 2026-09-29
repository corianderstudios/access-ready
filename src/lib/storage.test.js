import { describe, expect, it, vi } from 'vitest';
import { STORAGE_KEY, defaultState, loadState, saveState } from './storage.js';

describe('progress storage', () => {
  it('starts with no progress and the light theme', () => {
    expect(loadState()).toEqual({ done: {}, scores: {}, theme: 'light' });
  });

  it('round-trips saved progress', () => {
    const state = { done: { forms: true }, scores: { forms: { c: 2, t: 3 } }, theme: 'dark' };
    saveState(state);
    expect(JSON.parse(window.localStorage.getItem(STORAGE_KEY))).toEqual(state);
    expect(loadState()).toEqual(state);
  });

  it('falls back to defaults when saved data is corrupt', () => {
    window.localStorage.setItem(STORAGE_KEY, '{not json');
    expect(loadState()).toEqual(defaultState());
  });

  it('keeps working when storage is blocked', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    expect(loadState()).toEqual(defaultState());
    expect(() => saveState(defaultState())).not.toThrow();
  });
});
