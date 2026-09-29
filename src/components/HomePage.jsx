import { useRef, useState } from "react";
import { ALL_MODULES, EXAMS, FLAT, R } from "../data/content.js";
import Breadcrumbs from "./Breadcrumbs.jsx";
import { ExamChips, ExternalLink } from "./Chips.jsx";
import { CheckIcon, DoneMark } from "./Icons.jsx";
import ProgressBar from "./ProgressBar.jsx";

const LIBRARY = [
  R.mdn,
  R.edx,
  R.apg,
  R.deque,
  R.tt,
  R.ae,
  R.eaaCourse,
  R.eaaCheck,
  R.eaaGuide,
  R.wcag,
  R.iaap,
];

export default function HomePage({ done, onReset, headingRef }) {
  const [confirming, setConfirming] = useState(false);
  const resetRef = useRef(null);
  const keepRef = useRef(null);

  const total = FLAT.length;
  const doneCount = FLAT.filter((s) => done[s.id]).length;
  const pct = Math.round((doneCount / total) * 100);
  const next = FLAT.find((s) => !done[s.id]);

  const startConfirm = () => {
    setConfirming(true);
    requestAnimationFrame(() => keepRef.current?.focus());
  };
  const cancelConfirm = () => {
    setConfirming(false);
    requestAnimationFrame(() => resetRef.current?.focus());
  };
  const confirmReset = () => {
    onReset();
    setConfirming(false);
    requestAnimationFrame(() => resetRef.current?.focus());
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "#home" }]} />
      <section className="hero" aria-labelledby="page-h1">
        <p className="eyebrow">CPACC · WAS · ADS study path</p>
        <h1 id="page-h1" tabIndex={-1} ref={headingRef}>
          Access Ready
        </h1>
        <p className="lede">
          Learn web, document and mobile accessibility as a developer, with a
          right-way and wrong-way example in every section, a three-question
          quiz at the end, and practice questions for each IAAP exam.
        </p>
        <div className="big-prog">
          <ProgressBar
            done={doneCount}
            total={total}
            className="big-prog-bar"
          />
          <p>{pct}% done. Finishing a section's quiz marks it complete.</p>
        </div>
        <div className="hero-actions">
          {next ? (
            <a className="btn primary" href={`#${next.id}`}>
              {doneCount ? "Continue" : "Start"}: {next.title}
            </a>
          ) : (
            <span className="chip status done">
              <CheckIcon /> Every section complete
            </span>
          )}
          <a className="btn" href="#practice">
            Practice exams
          </a>
        </div>
      </section>

      <section className="block" aria-labelledby="exams-h">
        <h2 id="exams-h">The three exams</h2>
        <p className="ex-note">
          Domain weights come from IAAP's published outlines. Confirm the
          current outline on the IAAP site before you book.
        </p>
        <div className="exam-grid">
          {EXAMS.map((e) => (
            <div className="exam-card" key={e.code}>
              <h3>
                {e.code} <span className="full">{e.name}</span>
              </h3>
              <ul className="weights">
                {e.weights.map(([w, label]) => (
                  <li key={label}>
                    <b>{w}</b>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
              <p>
                <b>Study:</b> {e.study}
              </p>
              <a href={e.path}>Go to {e.code} practice questions</a>
            </div>
          ))}
        </div>
      </section>

      <section className="block" aria-labelledby="mods-h">
        <h2 id="mods-h">Topics</h2>
        <ul className="mod-list">
          {ALL_MODULES.map((m) => {
            const modDone = m.sections.filter((s) => done[s.id]).length;
            return (
              <li className="mod-card" key={m.id}>
                <h3>
                  <a href={`#${m.id}`}>{m.title}</a>
                </h3>
                <div className="chips">
                  <ExamChips exams={m.exams} />
                  <span className="chip">
                    {modDone} of {m.sections.length} complete
                  </span>
                </div>
                <p>{m.blurb}</p>
                <ol>
                  {m.sections.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`}>{s.title}</a>{" "}
                      {done[s.id] && <DoneMark />}
                    </li>
                  ))}
                </ol>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="block" aria-labelledby="refs-h">
        <h2 id="refs-h">Reference library</h2>
        <ul className="refs">
          {LIBRARY.map(([label, url]) => (
            <li key={url}>
              <ExternalLink href={url}>{label}</ExternalLink>
            </li>
          ))}
        </ul>
      </section>

      <section className="block" aria-labelledby="reset-h">
        <h2 id="reset-h">Reset progress</h2>
        <p className="ex-note">
          Clears completed sections and quiz scores saved in this browser.
        </p>
        {confirming ? (
          <div className="confirm" role="group" aria-labelledby="confirm-t">
            <p id="confirm-t">
              <b>Erase all progress and scores?</b> This cannot be undone.
            </p>
            <button
              className="btn primary"
              type="button"
              onClick={confirmReset}
            >
              Erase progress
            </button>
            <button
              className="btn"
              type="button"
              ref={keepRef}
              onClick={cancelConfirm}
            >
              Keep progress
            </button>
          </div>
        ) : (
          <button
            className="btn"
            type="button"
            ref={resetRef}
            onClick={startConfirm}
          >
            Reset progress
          </button>
        )}
      </section>
    </>
  );
}
