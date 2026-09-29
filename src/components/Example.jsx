import { CheckIcon, XIcon } from './Icons.jsx';

/** Side-by-side wrong way / right way code, stacked on narrow screens. */
export default function Example({ example }) {
  const { title, lang, wrong, wrongWhy, right, rightWhy } = example;
  const langTag = lang ? <span className="lang">{lang}</span> : null;
  return (
    <div className="ex">
      <h3 className="ex-title">{title}</h3>
      <div className="ex-grid">
        <figure className="ex-card wrong">
          <figcaption className="ex-head"><XIcon /><span>Wrong way</span>{langTag}</figcaption>
          <pre tabIndex={0} role="region" aria-label={`Wrong way: ${title}`}><code>{wrong}</code></pre>
          <p className="ex-why"><b>Why it fails:</b> {wrongWhy}</p>
        </figure>
        <figure className="ex-card right">
          <figcaption className="ex-head"><CheckIcon /><span>Right way</span>{langTag}</figcaption>
          <pre tabIndex={0} role="region" aria-label={`Right way: ${title}`}><code>{right}</code></pre>
          <p className="ex-why"><b>Why it works:</b> {rightWhy}</p>
        </figure>
      </div>
    </div>
  );
}
