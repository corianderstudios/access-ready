# Access Ready

A study app for web developers preparing for the IAAP **CPACC**, **WAS** and **ADS**
accessibility certifications. Built with React (JSX) and Vite, tested with Vitest,
React Testing Library and jest-dom.

## Getting started

```bash
npm install
npm run dev        # start the dev server
npm test           # run tests in watch mode
npm run test:run   # run tests once (for CI)
npm run build      # production build in dist/
npm run preview    # serve the production build
```

Requires Node 20.19+ or 22.12+ (Vite 7).

## What's inside

- 33 lesson sections across six topics: Foundations, Web Development, Documents & PDF,
  Mobile Apps, Testing & QA, and Program & Service.
- Every section has a lesson, an exam tip, a wrong-way and right-way example, and a
  3-question quiz. Wrong answers are marked and the correct answer is highlighted.
- 48 practice questions organized by exam (16 each for CPACC, WAS and ADS).
- A "Vision theme" dropdown with nine themes (light by default).
- Progress, best scores and theme are saved in `localStorage`.

## Project structure

```
src/
  App.jsx                 routing by URL hash, focus management, announcements
  main.jsx                entry point
  index.css               all styles and vision theme tokens
  data/content.js         lessons, examples, quizzes, practice exams
  hooks/
    useHashRoute.js       current route from location.hash
    useProgress.js        completed sections, scores, theme (persisted)
  lib/
    menu.js               MENU_MS: topic menu slide duration
    quiz.js               stable option shuffling
    storage.js            safe localStorage load/save
    themes.js             vision theme list
  components/
    TopBar.jsx            top bar: Topics button, theme picker, progress
    TopicMenu.jsx         the sliding topic menu
    Breadcrumbs.jsx       APG breadcrumb pattern
    HomePage.jsx          overview, exam cards, reset progress
    ModulePage.jsx        list of sections in a topic
    SectionPage.jsx       lesson, examples, quiz, links, prev/next
    Example.jsx           wrong-way / right-way code cards
    Quiz.jsx              immediate-feedback multiple choice
  test/setup.js           jest-dom matchers, storage reset, jsdom shims
```

Tests live next to the code they cover (`*.test.js`, `*.test.jsx`).

## Topic menu timing

The menu slides open and closed (no fade) over `MENU_MS` in `src/lib/menu.js`,
currently 1200 ms. Change that one number to adjust it; the CSS reads it through the
`--menu-ms` custom property. The tests check it stays under 2 seconds and that the
menu rules never animate opacity. People who turn on "reduce motion" in their
operating system get the menu instantly with no animation.

## Accessibility notes

- Hash routing moves focus to the new page's `<h1>` and updates `document.title`.
- The Topics button uses the disclosure pattern (`aria-expanded`, `aria-controls`).
  Escape closes the menu and returns focus to the button.
- Correct and incorrect states use icons, text and border style (solid vs dashed),
  never color alone.
- Lesson bodies are static HTML strings authored in `content.js` and rendered with
  `dangerouslySetInnerHTML`. Only put trusted content there.

## Adding content

Add a section object to a module in `src/data/content.js`. Quiz items use
`Q(prompt, options, correctIndex, explanation)`. The content tests fail if a lesson
section is missing its example or doesn't have exactly three questions.
