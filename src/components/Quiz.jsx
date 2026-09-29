import { useRef, useState } from 'react';
import { LETTERS, correctLetter, orderFor } from '../lib/quiz.js';
import { CheckIcon, XIcon } from './Icons.jsx';

/**
 * Multiple-choice quiz. Choosing an option grades it immediately. A wrong
 * choice is marked "Your answer" (dashed border, X) and the correct option is
 * highlighted (solid border, check), so meaning never relies on color alone.
 */
export default function Quiz({ questions, practice = false, onFinish }) {
  const [answers, setAnswers] = useState(() => questions.map(() => null));
  const [result, setResult] = useState(null);
  const firstOptionRef = useRef(null);
  const total = questions.length;

  const choose = (qi, oi) => {
    if (answers[qi] !== null) return;
    const next = answers.slice();
    next[qi] = oi;
    setAnswers(next);
    if (next.every((a) => a !== null)) {
      const correct = next.filter((a, i) => a === questions[i].a).length;
      setResult({ correct, total });
      onFinish?.(correct, total);
    }
  };

  const retake = () => {
    setAnswers(questions.map(() => null));
    setResult(null);
    firstOptionRef.current?.focus();
  };

  return (
    <section className="block" aria-labelledby="quiz-h" id="quiz-area">
      <h2 id="quiz-h">{practice ? 'Practice questions' : 'Section quiz'}</h2>
      <p className="ex-note">
        {total} questions. Choose an answer to check it right away. If you miss one, the correct
        answer is highlighted with a solid border and a check mark.
      </p>
      <ol className="qlist">
        {questions.map((q, qi) => {
          const picked = answers[qi];
          const answered = picked !== null;
          const isRight = picked === q.a;
          return (
            <li className="q" key={q.p}>
              <fieldset>
                <legend>
                  <span className="qn">Question {qi + 1} of {total}</span>
                  <span className="qp">{q.p}</span>
                </legend>
                <ul className="opts">
                  {orderFor(q).map((oi, di) => {
                    const letter = LETTERS[di];
                    const showCorrect = answered && oi === q.a;
                    const showWrong = answered && oi === picked && !isRight;
                    const className = ['opt', showCorrect && 'is-correct', showWrong && 'is-wrong']
                      .filter(Boolean)
                      .join(' ');
                    return (
                      <li key={oi}>
                        <button
                          type="button"
                          className={className}
                          aria-disabled={answered ? 'true' : undefined}
                          onClick={() => choose(qi, oi)}
                          ref={qi === 0 && di === 0 ? firstOptionRef : undefined}
                        >
                          <span className="ol" aria-hidden="true">{letter}</span>
                          <span className="ot"><span className="vh">{letter}. </span>{q.o[oi]}</span>
                          {showCorrect && (
                            <span className="tag"><CheckIcon /><span>{isRight ? 'Your answer: correct' : 'Correct answer'}</span></span>
                          )}
                          {showWrong && (
                            <span className="tag"><XIcon /><span>Your answer</span></span>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <div
                  className={`feedback${answered ? (isRight ? ' good' : ' bad') : ''}`}
                  role="status"
                  data-testid={`feedback-${qi}`}
                >
                  {answered && (isRight ? (
                    <><b>Correct.</b> {q.w}</>
                  ) : (
                    <><b>Not quite.</b> The correct answer is {correctLetter(q)}: {q.o[q.a]}. {q.w}</>
                  ))}
                </div>
              </fieldset>
            </li>
          );
        })}
      </ol>
      <div className="quiz-foot">
        <p className="result" role="status">
          {result && (
            <>
              You answered {result.correct} of {result.total} correctly. This section is marked complete.
              {result.correct < result.total && ' Review the highlighted answers, then retake when ready.'}
            </>
          )}
        </p>
        <button className="btn" type="button" onClick={retake}>
          Retake {practice ? 'questions' : 'quiz'}
        </button>
      </div>
    </section>
  );
}
