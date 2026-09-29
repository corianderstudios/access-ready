import { CheckIcon } from './Icons.jsx';

export function ExamChips({ exams }) {
  return exams.map((e) => (
    <span key={e} className="chip exam" title={`Relevant to the ${e} exam`}>{e}</span>
  ));
}

export function StatusChip({ done }) {
  return done ? (
    <span className="chip status done"><CheckIcon /> Completed</span>
  ) : (
    <span className="chip status">Not completed</span>
  );
}

/** External link that tells screen reader users it opens a new tab. */
export function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="vh"> (opens in a new tab)</span>
    </a>
  );
}
