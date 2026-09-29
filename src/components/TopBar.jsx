import { useCallback, useEffect, useRef, useState } from "react";
import { FLAT } from "../data/content.js";
import { BrandMark, MenuIcon } from "./Icons.jsx";
import ProgressBar from "./ProgressBar.jsx";
import ThemePicker from "./ThemePicker.jsx";
import TopicMenu from "./TopicMenu.jsx";

export default function TopBar({ route, done, theme, onThemeChange }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  const close = useCallback((returnFocus) => {
    setOpen(false);
    if (returnFocus) buttonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close(true);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  const doneCount = FLAT.filter((s) => done[s.id]).length;

  return (
    <>
      <header className="topbar">
        <div className="bar-inner">
          <a className="brand" href="#home" aria-label="Access Ready, home">
            <BrandMark />
            <span>Access Ready</span>
          </a>
          <button
            ref={buttonRef}
            className="btn"
            id="menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="topic-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <MenuIcon open={open} />
            <span>Topics</span>
          </button>
          <ThemePicker value={theme} onChange={onThemeChange} />
        </div>
        <TopicMenu
          open={open}
          route={route}
          done={done}
          onClose={close}
          toggleRef={buttonRef}
        />
      </header>
      {open && (
        <div id="menu-scrim" aria-hidden="true" onClick={() => close(true)} />
      )}
    </>
  );
}
