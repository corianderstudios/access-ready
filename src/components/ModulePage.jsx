import Breadcrumbs from './Breadcrumbs.jsx';
import { ExamChips, StatusChip } from './Chips.jsx';

export default function ModulePage({ module: m, done, headingRef }) {
  const modDone = m.sections.filter((s) => done[s.id]).length;
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '#home' }, { label: m.title, href: `#${m.id}` }]} />
      <header className="page-head">
        <p className="eyebrow">Topic</p>
        <h1 id="page-h1" tabIndex={-1} ref={headingRef}>{m.title}</h1>
        <p className="lede">{m.blurb}</p>
        <div className="chips">
          <ExamChips exams={m.exams} />
          <span className="chip">{modDone} of {m.sections.length} complete</span>
        </div>
      </header>
      <ul className="sec-list">
        {m.sections.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`}>{s.title}</a>
            <span className="chips">
              <ExamChips exams={s.exams} />
              <StatusChip done={!!done[s.id]} />
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
