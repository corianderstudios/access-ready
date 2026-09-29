import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Q } from '../data/content.js';
import Quiz from './Quiz.jsx';

const questions = [
  Q('What is the capital of France?', ['Berlin', 'Paris', 'Rome', 'Madrid'], 1, 'Paris is the capital.'),
  Q('Which is a primary color?', ['Green', 'Orange', 'Blue', 'Purple'], 2, 'Blue is a primary color.'),
  Q('How many WCAG principles are there?', ['Three', 'Four', 'Five', 'Six'], 1, 'POUR has four.'),
];

// Option buttons are named "A. Paris", "B. Berlin"... (the letter depends on the shuffle).
const option = (text) => screen.getByRole('button', { name: new RegExp(`^[A-D]\\. ${text}`) });

function setup(props = {}) {
  const onFinish = vi.fn();
  const user = userEvent.setup();
  render(<Quiz questions={questions} onFinish={onFinish} {...props} />);
  return { user, onFinish };
}

describe('Quiz', () => {
  it('renders each question as a group named by its legend', () => {
    setup();
    expect(screen.getByRole('heading', { name: 'Section quiz' })).toBeInTheDocument();
    const groups = screen.getAllByRole('group');
    expect(groups).toHaveLength(3);
    expect(groups[0]).toHaveAccessibleName(/Question 1 of 3/);
    expect(within(groups[0]).getAllByRole('button')).toHaveLength(4);
  });

  it('confirms a correct answer', async () => {
    const { user } = setup();
    await user.click(option('Paris'));
    expect(option('Paris')).toHaveClass('is-correct');
    expect(option('Paris')).toHaveAccessibleName(/Your answer: correct/);
    expect(screen.getByTestId('feedback-0')).toHaveTextContent('Correct. Paris is the capital.');
  });

  it('highlights the correct answer when the user picks a wrong one', async () => {
    const { user } = setup();
    await user.click(option('Berlin'));

    expect(option('Berlin')).toHaveClass('is-wrong');
    expect(option('Berlin')).toHaveAccessibleName(/Your answer/);
    expect(option('Paris')).toHaveClass('is-correct');
    expect(option('Paris')).toHaveAccessibleName(/Correct answer/);
    expect(screen.getByTestId('feedback-0')).toHaveTextContent(/Not quite\. The correct answer is [A-D]: Paris/);
  });

  it('locks a question once it is answered', async () => {
    const { user } = setup();
    await user.click(option('Berlin'));
    const buttons = within(screen.getAllByRole('group')[0]).getAllByRole('button');
    buttons.forEach((b) => expect(b).toHaveAttribute('aria-disabled', 'true'));

    await user.click(option('Rome'));
    expect(option('Rome')).not.toHaveClass('is-wrong');
    expect(option('Berlin')).toHaveClass('is-wrong');
  });

  it('reports the score once every question is answered', async () => {
    const { user, onFinish } = setup();
    await user.click(option('Paris'));
    await user.click(option('Green'));
    expect(onFinish).not.toHaveBeenCalled();
    await user.click(option('Four'));

    expect(onFinish).toHaveBeenCalledTimes(1);
    expect(onFinish).toHaveBeenCalledWith(2, 3);
    expect(screen.getByText(/You answered 2 of 3 correctly/)).toBeInTheDocument();
  });

  it('clears answers and moves focus to the first option on retake', async () => {
    const { user } = setup();
    await user.click(option('Berlin'));
    await user.click(screen.getByRole('button', { name: 'Retake quiz' }));

    expect(option('Berlin')).not.toHaveClass('is-wrong');
    expect(option('Paris')).not.toHaveClass('is-correct');
    expect(option('Paris')).not.toHaveAttribute('aria-disabled');
    expect(screen.getByTestId('feedback-0')).toBeEmptyDOMElement();
    expect(within(screen.getAllByRole('group')[0]).getAllByRole('button')[0]).toHaveFocus();
  });

  it('labels practice sets differently', () => {
    setup({ practice: true });
    expect(screen.getByRole('heading', { name: 'Practice questions' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Retake questions' })).toBeInTheDocument();
  });
});
