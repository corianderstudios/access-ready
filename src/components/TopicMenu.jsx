import { useEffect, useRef, useState } from 'react';
import { ALL_MODULES, FLAT } from '../data/content.js';
import { MENU_MS } from '../lib/menu.js';
import { DoneMark } from './Icons.jsx';

/**
 * The topic list that drops down from the top bar. It slides open and closed
 * over MENU_MS (no fade). While closing it is inert, and once the slide ends it
 * is hidden so it leaves the tab order.
 */
export default function TopicMenu({ id = 'topic-menu', open, route, done, onClose, toggleRef }) {
  const navRef = useRef(null);
  const [mounted, setMounted] = useState(open);
  const [shown, setShown] = useState(open);

  // Closing: slide up, then hide once the transition has finished.
  useEffect(() => {
    if (open) {
      setMounted(true);
      return undefined;
    }
    setShown(false);
    const timer = setTimeout(() => setMounted(false), MENU_MS);
    return () => clearTimeout(timer);
  }, [open]);

  // Opening: once visible, start the slide and move focus into the menu.
  useEffect(() => {
    if (!open || !mounted) return undefined;
    const nav = navRef.current;
    void nav.offsetHeight; // start from the closed position so the slide runs
    const frame = requestAnimationFrame(() => setShown(true));
    const target = nav.querySelector('a[aria-current="page"]') || nav.querySelector('a');
    target?.focus({ preventScroll: true });
    return () => cancelAnimationFrame(frame);
  }, [open, mounted]);

  const handleBlur = (e) => {
    const next = e.relatedTarget;
    if (open && next && !navRef.current.contains(next) && next !== toggleRef?.current) {
      onClose(false);
    }
  };

  const handleClick = (e) => {
    if (e.target.closest('a')) onClose(false);
  };

  const total = FLAT.length;
  const doneCount = FLAT.filter((s) => done[s.id]).length;
  const current = (key) => (route === key ? 'page' : undefined);

  return (
    <nav
      id={id}
      ref={navRef}
      aria-label="Topics"
      hidden={!mounted}
      inert={!open}
      className={shown ? 'open' : undefined}
      style={{ '--menu-ms': `${MENU_MS}ms` }}
      onBlur={handleBlur}
      onClick={handleClick}
    >
      <div className="menu-inner">
        <div className="menu-home">
          <a href="#home" aria-current={current('home')}><b>Home and progress</b></a>
          <span className="mc">{doneCount} of {total} sections complete</span>
        </div>
        {ALL_MODULES.map((m) => {
          const modDone = m.sections.filter((s) => done[s.id]).length;
          return (
            <div className="menu-mod" key={m.id}>
              <a href={`#${m.id}`} aria-current={current(m.id)}>
                {m.title}
                <span className="mc">
                  <span aria-hidden="true">{modDone}/{m.sections.length}</span>
                  <span className="vh">, {modDone} of {m.sections.length} complete</span>
                </span>
              </a>
              <ul>
                {m.sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} aria-current={current(s.id)}>
                      <span>{s.title}</span>
                      {done[s.id] && <DoneMark />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
