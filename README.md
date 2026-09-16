# michalkochaniak.dev

Personal portfolio of Michał Kochaniak — Senior Test Automation Engineer. Built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and shadcn/ui.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint
npx tsc --noEmit
```

## Structure

- `src/app/[locale]/` — all pages. English is served at the root (`/`), Polish under `/pl`. `src/proxy.ts` rewrites unprefixed paths to `/en/*` and redirects explicit `/en/*` back to the canonical root URL.
- `src/content/{en,pl}.ts` — every user-facing string, project card and case study, typed by `src/content/types.ts`. Adding a project means adding it to both files; TypeScript enforces parity.
- `src/app/[locale]/projects/[slug]/` — one dynamic route renders all case studies (`generateStaticParams` from the content).
- `src/app/globals.css` — design tokens. Light (“warm paper”) and dark (“engineering instrument”) palettes are WCAG-checked with `node tools/contrast-check.mjs`. Text uses `fg`, `fg-2`, `fg-3`; `fg-4` is decorative only.
- `src/app/api/og/` — Open Graph image with the portrait; accepts `?title=&subtitle=` for case studies.

## Quality checks

```bash
npm run test:e2e                                # Playwright smoke suite (desktop + mobile) against a production build
npm run audit:shots <baseUrl> <label> [outDir]  # full-page screenshots at 390/768/1440 + axe report
```

Baseline metrics from before the 2026 redesign live in `docs/audit-before.md`.

## Assets

- `public/portrait/portrait.jpg` — hero/OG portrait (1200×1500). Generated from `public/foto.jpeg` with an identity-preserving image model; the original is kept in `public/portrait-backups/`.
- `public/reports/sample-report-p1.webp` — first page of the sample performance report, rendered with `npm run report:preview`.
- `src/app/icon.svg`, `src/app/apple-icon.png` — favicon mark.

## CV PDF

The print-first CV lives at `/cv` (`/cv/print` is the two-page A4 layout used for PDF generation).

```bash
npm run cv:pdf           # builds, serves and prints /cv/print to public/Michal_Kochaniak_CV.pdf (requires Chrome/Chromium)
npm run cv:portrait:ai   # legacy portrait retouch via OpenAI/Azure/Replicate, see .env.*.example
```
