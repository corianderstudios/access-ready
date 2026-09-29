import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ALL_MODULES } from '../data/content.js';
import { MENU_MS } from '../lib/menu.js';
import { THEMES } from '../lib/themes.js';
import TopBar from './TopBar.jsx';

function setup(props = {}) {
  const onThemeChange = vi.fn();
  const user = userEvent.setup();
  render(<TopBar route="forms" done={{ forms: true }} theme="light" onThemeChange={onThemeChange} {...props} />);
  const toggle = screen.getByRole('button', { name: 'Topics' });
  const menu = document.getElementById('topic-menu');
  return { user, onThemeChange, toggle, menu };
}

async function openMenu(user, toggle, menu) {
  await user.click(toggle);
  await waitFor(() => expect(menu).toBeVisible());
}

describe('Topic menu timing', () => {
  it('slides in less than 2 seconds', () => {
    expect(MENU_MS).toBeGreaterThan(0);
    expect(MENU_MS).toBeLessThan(2000);
  });

  it('slides without fading', () => {
    const css = readFileSync(resolve(process.cwd(), 'src/index.css'), 'utf8');
    const rules = css.match(/#topic-menu(\.open)?\{[^}]*\}/g);
    expect(rules.length).toBeGreaterThan(0);
    rules.forEach((rule) => expect(rule).not.toMatch(/opacity/));
    expect(css).toMatch(/transition:transform var\(--menu-ms/);
  });
});

describe('TopBar menu', () => {
  it('starts closed', () => {
    const { toggle, menu } = setup();
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(toggle).toHaveAttribute('aria-controls', 'topic-menu');
    expect(menu).not.toBeVisible();
  });

  it('opens to show each main topic with its subtopics underneath', async () => {
    const { user, toggle, menu } = setup();
    await openMenu(user, toggle, menu);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');

    const nav = screen.getByRole('navigation', { name: 'Topics' });
    for (const m of ALL_MODULES) {
      const topic = within(nav).getByRole('link', { name: new RegExp(`^${m.title}`) });
      const list = topic.nextElementSibling;
      expect(list.tagName).toBe('UL');
      expect(within(list).getAllByRole('link')).toHaveLength(m.sections.length);
    }
  });

  it('marks the current page and completed sections, and focuses the current page', async () => {
    const { user, toggle, menu } = setup();
    await openMenu(user, toggle, menu);
    const current = within(menu).getByRole('link', { name: /Forms, Labels & Errors/ });
    expect(current).toHaveAttribute('aria-current', 'page');
    expect(current).toHaveAccessibleName(/\(completed\)/);
    await waitFor(() => expect(current).toHaveFocus());
  });

  it('closes on Escape, returns focus to the button, then hides after the slide', async () => {
    const { user, toggle, menu } = setup();
    await openMenu(user, toggle, menu);
    await user.keyboard('{Escape}');

    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(toggle).toHaveFocus();
    expect(menu).toHaveAttribute('inert');
    await waitFor(() => expect(menu).not.toBeVisible(), { timeout: MENU_MS + 1000 });
  });

  it('closes when a topic is chosen', async () => {
    const { user, toggle, menu } = setup();
    await openMenu(user, toggle, menu);
    await user.click(within(menu).getByRole('link', { name: 'Assistive Technologies' }));
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });
});

describe('Vision theme picker', () => {
  it('has a visible label and offers every theme, starting on light', () => {
    setup();
    const select = screen.getByLabelText('Vision theme');
    expect(select).toHaveValue('light');
    expect(within(select).getAllByRole('option')).toHaveLength(THEMES.length);
  });

  it('reports the chosen theme', async () => {
    const { user, onThemeChange } = setup();
    await user.selectOptions(screen.getByLabelText('Vision theme'), 'hc-dark');
    expect(onThemeChange).toHaveBeenCalledWith('hc-dark');
  });
});
