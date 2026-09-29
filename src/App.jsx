import { useCallback, useEffect, useRef, useState } from 'react';
import { FLAT, findModule, findSection } from './data/content.js';
import { useHashRoute } from './hooks/useHashRoute.js';
import { useProgress } from './hooks/useProgress.js';
import HomePage from './components/HomePage.jsx';
import ModulePage from './components/ModulePage.jsx';
import SectionPage from './components/SectionPage.jsx';
import TopBar from './components/TopBar.jsx';

export default function App() {
  const route = useHashRoute();
  const { state, setDone, recordScore, setTheme, reset } = useProgress();
  const headingRef = useRef(null);
  const mainRef = useRef(null);
  const prevRoute = useRef(route);
  const [message, setMessage] = useState('');

  const announce = useCallback((text) => {
    setMessage('');
    setTimeout(() => setMessage(text), 50);
  }, []);

  const section = findSection(route);
  const module = section ? null : findModule(route);

  // Vision theme lives on <html> so every token in index.css can switch.
  useEffect(() => {
    document.documentElement.setAttribute('data-vision', state.theme);
  }, [state.theme]);

  useEffect(() => {
    document.title = section
      ? `${section.title} · ${section.mod.title} · Access Ready`
      : module
        ? `${module.title} · Access Ready`
        : 'Access Ready';
  }, [section, module]);

  // After a route change, start at the top and move focus to the new heading
  // so screen reader users hear where they are.
  useEffect(() => {
    if (prevRoute.current === route) return;
    prevRoute.current = route;
    window.scrollTo?.(0, 0);
    headingRef.current?.focus({ preventScroll: true });
  }, [route]);

  const skipToMain = (e) => {
    e.preventDefault();
    (headingRef.current || mainRef.current)?.focus();
  };

  let view;
  if (section) {
    const idx = FLAT.findIndex((s) => s.id === section.id);
    view = (
      <SectionPage
        key={section.id}
        section={section}
        prev={FLAT[idx - 1]}
        next={FLAT[idx + 1]}
        done={!!state.done[section.id]}
        best={state.scores[section.id]}
        headingRef={headingRef}
        onFinish={(correct, total) => {
          recordScore(section.id, correct, total);
          setDone(section.id, true);
        }}
        onToggleDone={(value) => {
          setDone(section.id, value);
          announce(value ? 'Section marked complete.' : 'Section marked not complete.');
        }}
      />
    );
  } else if (module) {
    view = <ModulePage module={module} done={state.done} headingRef={headingRef} />;
  } else {
    view = (
      <HomePage
        done={state.done}
        headingRef={headingRef}
        onReset={() => {
          reset();
          announce('Progress erased.');
        }}
      />
    );
  }

  return (
    <>
      <a className="skip" href="#main" onClick={skipToMain}>Skip to main content</a>
      <TopBar
        route={route}
        done={state.done}
        theme={state.theme}
        onThemeChange={(value) => {
          setTheme(value);
          announce('Theme changed.');
        }}
      />
      <main id="main" tabIndex={-1} ref={mainRef}>
        <div className="wrap">{view}</div>
      </main>
      <footer className="site">
        <p>
          Access Ready is a study aid. Standards change, so confirm exam outlines with IAAP and legal
          details with the official sources linked in each section. Progress is saved in this
          browser only.
        </p>
      </footer>
      <div className="vh" role="status" aria-live="polite" data-testid="announcer">{message}</div>
    </>
  );
}
