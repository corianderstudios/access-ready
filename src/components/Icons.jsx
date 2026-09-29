/* Decorative icons. Each is hidden from assistive technology; the text next to
   it carries the meaning. */

export function CheckIcon() {
  return (
    <svg className="i" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 12.5l5 5L20 6.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function XIcon() {
  return (
    <svg className="i" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon({ open }) {
  return (
    <svg className="i" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d={open ? 'M6 6l12 12M18 6L6 18' : 'M3 6h18M3 12h18M3 18h18'}
        stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" fill="none"
      />
    </svg>
  );
}

export function BrandMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M16 3a13 13 0 0 1 0 26z" fill="currentColor" />
    </svg>
  );
}

/** A check mark plus "(completed)" for screen readers. */
export function DoneMark() {
  return (
    <span className="done-mark">
      <CheckIcon />
      <span className="vh">(completed)</span>
    </span>
  );
}
