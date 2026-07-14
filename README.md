# Job Visualizer

Paste a job posting, get back a decoded visual card: the role, seniority, location,
experience, and salary pulled out of the text, the tech stack detected, and the
corporate jargon translated into what it actually means ("fast-paced environment" →
"high workload & tight deadlines"). Built with [SolidStart](https://start.solidjs.com).

## What actually works today

The one fully wired flow is:

1. **`/`** — landing page.
2. **`/create-ads`** — an HR workspace. Paste a job description into the textarea and
   click **Visualize & Analyze**.
3. **`/result`** — a generated card: title, seniority badge, location, experience,
   salary, detected tech stack, a "what this job really means" jargon table, and
   good-fit / not-a-fit lists.

The parsing is a **client-side heuristic**, not a model call: [`src/common/parseJob.ts`](src/common/parseJob.ts)
runs a handful of regexes and a fixed keyword list against the pasted text, and
[`src/common/jobStore.ts`](src/common/jobStore.ts) is the small in-memory store that carries
the parsed result from the workspace to the result page. There is no backend, no
database, and no AI API call anywhere in this repo.

A few other routes (`/ai-analysis`, `/linkedin-analysis`, `/job-card-editor`) are
earlier visual explorations of the same idea. They render with their own
self-contained demo data and are **not** wired to the workspace/result flow above —
treat them as design references, not alternate entry points.

## Tech stack

- [SolidStart](https://start.solidjs.com) (Solid.js meta-framework) on [Vinxi](https://vinxi.vercel.app/)
- [Solid.js](https://www.solidjs.com/) + [@solidjs/router](https://github.com/solidjs/solid-router) for routing and signals
- TypeScript
- Tailwind CSS is configured but not the primary styling mechanism — each route
  ships its own hand-written CSS module under [`src/styles/`](src/styles)

## Getting started

Requires Node.js ≥ 22.

```bash
npm install
npm run dev      # starts the dev server on http://localhost:3000
```

Other scripts:

```bash
npm run build     # production build
npm run start     # run the production build
```

## Project structure

```
src/
  routes/                    # file-based routes (@solidjs/start/router)
    index.tsx                # renders LandingPage
    landing.tsx               # marketing landing page
    create-ads.tsx            # the workspace — paste text, click Visualize
    result.tsx                 # renders the parsed job as a visual card
    ai-analysis.tsx            # static mockup, not wired to the flow above
    linkedin-analysis.tsx      # static mockup, not wired to the flow above
    job-card-editor.tsx        # static mockup, not wired to the flow above
    about.tsx
    [...404].tsx
    WorkspacePage/             # components used by create-ads.tsx
  common/
    parseJob.ts                 # the heuristic text → ParsedJob parser
    jobStore.ts                  # shared signal carrying the current parsed job
    translate.tsx                 # i18n strings for the workspace UI
    types.tsx
  styles/                        # one CSS file per route/surface
```

## Known limitations

This is a prototype, not a production tool. Worth knowing before you build on it:

- **The parser is a fixed keyword whitelist**, not free-form extraction — a
  technology or jargon phrase it doesn't recognize is silently omitted from the
  card rather than flagged as unrecognized.
- **State does not survive a page reload.** `jobStore.ts` is a plain in-memory
  signal; visiting `/result` directly (a shared link, a refresh) shows placeholder
  demo data instead of your last input.
- **Some sidebar links are placeholders.** The Settings link points to a route
  that doesn't exist yet; a few nav items are `href="#"`.

A deeper, file-and-line-level audit of these and other implicit behaviors lives in
[`docs/gorunmezlik-haritasi.html`](docs/gorunmezlik-haritasi.html) (Turkish).
