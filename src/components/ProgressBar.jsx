/** A visual bar (hidden from AT) with the same information as text. */
export default function ProgressBar({ done, total, className = 'top-prog' }) {
  const pct = total ? Math.round((done / total) * 100) : 0;
  return (
    <div className={className}>
      <div className="pbar" aria-hidden="true">
        <span style={{ width: `${pct}%` }} />
      </div>
      <span>{done} of {total} sections complete</span>
    </div>
  );
}
