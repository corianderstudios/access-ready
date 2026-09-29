import Breadcrumbs from './Breadcrumbs.jsx';
import Example from './Example.jsx';
import Quiz from './Quiz.jsx';
import { ExamChips, ExternalLink, StatusChip } from './Chips.jsx';

export default function SectionPage({ section, prev, next, done, best, onFinish, onToggleDone, headingRef }) {
  const m = section.mod;
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '#home' },
          { label: m.title, href: `#${m.id}` },
          { label: section.title, href: `#${section.id}` },
        ]}
      />
      <header className="page-head">
        <p className="eyebrow">{m.title}</p>
        <h1 id="page-h1" tabIndex={-1} ref={headingRef}>{section.title}</h1>
        <p className="lede">{section.lede}</p>
        <div className="chips">
          <ExamChips exams={section.exams} />
          {(section.sc || []).map((c) => (
            <span key={c} className="chip sc" title="WCAG success criterion">{c}</span>
          ))}
          <StatusChip done={done} />
        </div>
        {best && <p className="ex-note">Best score: {best.c} of {best.t}</p>}
      </header>

      {!section.practice && (
        <>
          <section className="block block-first" aria-labelledby="lesson-h">
            <h2 id="lesson-h">Lesson</h2>
            {/* Trusted, static lesson HTML authored in src/data/content.js */}
            <div className="article" dangerouslySetInnerHTML={{ __html: section.lesson }} />
            {section.tip && (
              <div className="callout"><strong>Exam tip</strong>{section.tip}</div>
            )}
          </section>
          <section className="block" aria-labelledby="ex-h">
            <h2 id="ex-h">Wrong way and right way</h2>
            <p className="ex-note">
              Wrong examples have a dashed border and an X. Right examples have a solid border and a
              check mark.
            </p>
            {section.examples.map((ex) => <Example key={ex.title} example={ex} />)}
          </section>
        </>
      )}

      <Quiz key={section.id} questions={section.quiz} practice={!!section.practice} onFinish={onFinish} />

      <div className="quiz-foot done-row">
        <button className="btn" type="button" aria-pressed={done} onClick={() => onToggleDone(!done)}>
          {done ? 'Completed (select to undo)' : 'Mark section as complete'}
        </button>
      </div>

      {section.refs && (
        <section className="block" aria-labelledby="refs-h">
          <h2 id="refs-h">Go deeper</h2>
          <ul className="refs">
            {section.refs.map(([label, url]) => (
              <li key={url}><ExternalLink href={url}>{label}</ExternalLink></li>
            ))}
          </ul>
        </section>
      )}

      <nav className="pager" aria-label="Previous and next section">
        {prev && <a className="prev" href={`#${prev.id}`}><span>Previous</span><b>{prev.title}</b></a>}
        {next && <a className="next" href={`#${next.id}`}><span>Next</span><b>{next.title}</b></a>}
      </nav>
    </>
  );
}
