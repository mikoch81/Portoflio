# Baseline audit — before redesign (2026-09-16)

Target: https://michalkochaniak.dev (commit `7d18669`, Next 16.2.3). Tooling: Lighthouse 12.8 (system Chrome, headless), axe-core via `@axe-core/playwright` (WCAG 2.0/2.1 A+AA), Playwright screenshots via `tools/audit-shots.mjs`.

## Lighthouse — `/`

| Profile | Perf | A11y | Best practices | SEO | LCP | FCP | TBT | CLS |
|---|---|---|---|---|---|---|---|---|
| Mobile | 98 | 96 | 100 | 100 | 2.5 s | 1.0 s | 0 ms | 0 |
| Desktop | 100 | 96 | 100 | 100 | 0.5 s | 0.3 s | 0 ms | 0 |

Failing/partial audits: `color-contrast` (0 — 9 items mobile, 11 desktop), `uses-long-cache-ttl`, `unused-javascript`, `legacy-javascript`, `render-blocking-resources` (mobile).

## axe-core (1440 px)

| Page | Violations |
|---|---|
| `/` | `color-contrast` — serious — **23 nodes** (nav links, muted body copy in cards, footer links) |
| `/projects/ai-performance-reporting` | `color-contrast` — serious — 4 nodes (footer links) |

## Page length (full-page height)

| Width | `/` | case study |
|---|---|---|
| 390 px | **15 632 px** (~19 screens) | 3 874 px |
| 768 px | 11 700 px | 3 396 px |
| 1440 px | 10 236 px | 3 404 px |

## Findings visible only at runtime

1. **Fonts do not load.** `globals.css` declares `--font-sans: var(--font-sans)` (self-reference) so `font-family` is invalid and every browser falls back to its default serif (Times New Roman on Windows). Geist is downloaded but never applied (`document.fonts` → `Geist: unloaded`).
2. **Content hidden without scroll.** Every section is a `framer-motion` `whileInView` (`once: true`) block starting at `opacity: 0`. A full-page capture shows everything below "About" as empty; `prefers-reduced-motion` is not honoured.
3. Dependency audit: `next@16.2.3` had 1 critical + 9 high advisories with fixes available (upgraded to 16.3.5 in phase 0).

Screenshots (not committed): `<scratchpad>/shots/before/{home,case}-{390,768,1440}.png`.
