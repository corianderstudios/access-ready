import { act, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App.jsx';
import { FLAT, findSection } from './data/content.js';
import { orderFor } from './lib/quiz.js';
import { STORAGE_KEY } from './lib/storage.js';

const saved = () => JSON.parse(window.localStorage.getItem(STORAGE_KEY));

function goTo(hash) {
  act(() => {
    window.location.hash = hash;
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  });
}

async function answerAllCorrectly(user, sectionId) {
  const section = findSection(sectionId);
  const groups = screen.getAllByRole('group');
  for (const [i, q] of section.quiz.entries()) {
    const displayIndex = orderFor(q).indexOf(q.a);
    await user.click(within(groups[i]).getAllByRole('button')[displayIndex]);
  }
}

describe('App', () => {
  it('opens on the home page in the light theme', () => {
    render(<App />);
    expect(document.documentElement).toHaveAttribute('data-vision', 'light');
    expect(screen.getByRole('heading', { level: 1, name: 'Access Ready' })).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('moves focus to the new heading and shows breadcrumbs after navigating', async () => {
    render(<App />);
    goTo('#forms');

    const heading = await screen.findByRole('heading', { level: 1, name: 'Forms, Labels & Errors' });
    expect(heading).toHaveFocus();
    expect(document.title).toMatch(/^Forms, Labels & Errors/);

    const crumbs = screen.getByRole('navigation', { name: 'Breadcrumb' });
    expect(within(crumbs).getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home');
    expect(within(crumbs).getByRole('link', { name: 'Web Development' })).toHaveAttribute('href', '#web');
    expect(within(crumbs).getByText('Forms, Labels & Errors')).toHaveAttribute('aria-current', 'page');
  });

  it('shows a wrong way and a right way example for a section', () => {
    window.location.hash = '#forms';
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Wrong way and right way' })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /^Wrong way:/ })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /^Right way:/ })).toBeInTheDocument();
  });

  it('marks a section complete when its quiz is finished and saves progress', async () => {
    const user = userEvent.setup();
    window.location.hash = '#forms';
    render(<App />);

    await answerAllCorrectly(user, 'forms');

    expect(screen.getByText(/You answered 3 of 3 correctly/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Completed (select to undo)' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getAllByText(`1 of ${FLAT.length} sections complete`).length).toBeGreaterThan(0);
    expect(saved().done).toEqual({ forms: true });
    expect(saved().scores.forms).toEqual({ c: 3, t: 3 });
  });

  it('lets the user mark a section complete by hand and undo it', async () => {
    const user = userEvent.setup();
    window.location.hash = '#aria';
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Mark section as complete' }));
    expect(saved().done).toEqual({ aria: true });

    await user.click(screen.getByRole('button', { name: 'Completed (select to undo)' }));
    expect(saved().done).toEqual({});
  });

  it('applies and remembers the chosen vision theme', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.selectOptions(screen.getByLabelText('Vision theme'), 'mono');
    expect(document.documentElement).toHaveAttribute('data-vision', 'mono');
    expect(saved().theme).toBe('mono');
  });

  it('restores saved progress and theme', () => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ done: { forms: true }, scores: {}, theme: 'dark' }),
    );
    window.location.hash = '#forms';
    render(<App />);
    expect(document.documentElement).toHaveAttribute('data-vision', 'dark');
    expect(screen.getByText('Completed', { selector: '.chip' })).toBeInTheDocument();
  });

  it('asks for confirmation before erasing progress', async () => {
    const user = userEvent.setup();
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ done: { forms: true }, scores: {}, theme: 'light' }));
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Reset progress' }));
    await waitFor(() => expect(screen.getByRole('button', { name: 'Keep progress' })).toHaveFocus());
    expect(saved().done).toEqual({ forms: true });

    await user.click(screen.getByRole('button', { name: 'Erase progress' }));
    expect(saved().done).toEqual({});
  });

  it('skip link moves focus to the page heading', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('link', { name: 'Skip to main content' }));
    expect(screen.getByRole('heading', { level: 1 })).toHaveFocus();
  });
});
