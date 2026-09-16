# Audit — after the 2026 redesign (2026-09-16)

Target: local production build (`next start`, no CDN/Brotli) of branch `redesign/2026`. Same tooling as `audit-before.md`. Numbers on Vercel will differ (compression, HTTP/2, edge caching) — re-run against the preview deployment before merging.

## Lighthouse — `/`

| Profile | Perf | A11y | Best practices | SEO | LCP | FCP | TBT | CLS |
|---|---|---|---|---|---|---|---|---|
| Mobile | 87 | **100** | 96* | 100 | 4.0 s** | 1.7 s | 10 ms | 0 |
| Desktop | 99 | **100** | 96* | 100 | 0.9 s | 0.3 s | 0 ms | 0 |
| Case study, mobile | 88 | **100** | 96* | 100 | 3.9 s | 0.9 s | 10 ms | 0 |

\* The only best-practices hit is a console 404 for `/_vercel/insights/script.js`, which exists only on Vercel deployments.
\*\* Under Lighthouse's slow-4G emulation the LCP element is web-font text; Chrome records the paint after the font swap, so LCP ≈ font download time. Before the redesign fonts never applied at all (see below), which is why the old LCP looked better. Mitigations already in place: three families self-hosted via `next/font`, mono not preloaded, hero uses CSS-only entrance (no JS-gated content), portrait `priority` + `fetchpriority="high"`.

## axe-core (1440 px)

| Page | Before | After |
|---|---|---|
| `/` | `color-contrast` — 23 nodes | **0 violations** |
| `/projects/ai-performance-reporting` | `color-contrast` — 4 nodes | **0 violations** |

## Page length (full-page height)

| Width | `/` before → after | case study before → after |
|---|---|---|
| 390 px | 15 632 → **13 689** | 3 874 → 4 802 |
| 768 px | 11 700 → **10 257** | 3 396 → 3 742 |
| 1440 px | 10 236 → **8 233** | 3 404 → 3 367 |

Case studies grew slightly because they now carry a cover, an "at a glance" panel and related projects.

## Fixed runtime defects

1. **Fonts.** `--font-sans` referenced itself, so every browser rendered Times New Roman. Geist, Geist Mono and Bricolage Grotesque now load and apply (`document.fonts` reports them `loaded`).
2. **Hidden content.** Scroll reveals are CSS transitions toggled by a 40-line IntersectionObserver wrapper; `prefers-reduced-motion` disables them, `<noscript>` shows everything. `framer-motion` removed (client JS: 197 KB gzipped for `/`).
3. **Contrast.** Text uses `fg`/`fg-2`/`fg-3` (≥ 4.5:1 on every surface in both themes); `fg-4` is decorative only. Palette verified by `tools/contrast-check.mjs`.
4. **Dependencies.** Next 16.2.3 → 16.3.5 (critical advisory).

## Test suite

`npm run test:e2e` — 16 Playwright tests × desktop/mobile = 32 passing: locale rendering, `/en` redirect, theme toggle persistence, language switch path preservation, all 16 case-study URLs, 404s, CV/PDF, OG images.
