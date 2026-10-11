---
target: portfolio home
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
target_identity: "file:C:\\Dev\\portfolio\\src\\app\\[locale]\\page.tsx"
target_fingerprint: "sha256:f98051dfb7ba79144ce787d8dda7d0f2107353104d078b57e7d8cefe966c0c4e"
target_path: "C:\\Dev\\portfolio\\src\\app\\[locale]\\page.tsx"
timestamp: 2026-10-11T18-36-11Z
slug: src-app-locale-page-tsx
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score — 23/32 (72%, Good); heuristics 7 and 10 n/a (one-pass portfolio)

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Active-section nav works; status pill is static decoration |
| 2 | Match System / Real World | 3 | Domain language fits; unsourced "P95 −32%" sparkline does not |
| 3 | User Control and Freedom | 3 | Back links, Esc closes menu, locale switch keeps path |
| 4 | Consistency and Standards | 3 | Mono uppercase labels carry six different meanings |
| 5 | Error Prevention | 3 | "Download CV" vs "View CV" offered 5 times with two meanings |
| 6 | Recognition Rather Than Recall | 3 | Category tags on demo rows look like links but are not |
| 7 | Flexibility and Efficiency | n/a | Single-pass marketing surface |
| 8 | Aesthetic and Minimalist Design | 2 | 8.3k px desktop / 13.9k px mobile; stack listed twice; terminal mock shown twice |
| 9 | Error Recovery | 3 | Not-found page exists; little to recover from |
| 10 | Help and Documentation | n/a | Nothing to learn |

## Design Specificity Verdict
LLM: mostly template with authored moments. Structure (status pill → eyebrow → two-tone headline → portrait + floating widget → 3-stat row → card grid → numbered process → logo marquee → impact strip → "Let's…" contact) is interchangeable. Authored: headline, "Outcomes, not adjectives", domain SVG covers, run-142 terminal, real portrait, warm-paper/instrument palette.
Deterministic: CLI detector 0 findings. Live overlay: hero-eyebrow-chip, kicker-above-heading (6–7), numbered-section-labels (01–04), overused-font (Geist ~47–51% of text), marquee, shape-assembled-illustration (project covers), cream-palette, codex-grid-background. Agreement with LLM on eyebrows/kickers, numbered process, marquee. Likely false positives: codex-grid-background (grid inside cover art), cream-palette (CV paper card), mobile kicker double-counting the eyebrow chip.

## Priority Issues
- [P0] Proof thumbnail is the wrong document: public/reports/sample-report-p1.webp shows an old CV page ("8+ years", contradicting hero "15+") labelled "Sample performance report" (proof.tsx:42). Fix: regenerate from page 1 of sample-report.pdf. → polish
- [P1] SVG pill overflow: "cycle #142 | 96 / 98 passed" (~178px) in a 160px rect (project-cover.tsx:142). Fix: widen rect to ~200. → polish
- [P1] Proof buried, hero claims unsourced: impact numbers and real report at ~75% depth; hero spends space on unsourced −32% sparkline and "4 repos" stat. Fix: lift impact strip into hero, give sparkline a source line or remove it, name employers above the fold. → clarify / layout
- [P2] Template tells flatten hierarchy: eyebrow on every section, numbered 01–04 process, mono as costume ("PDF", "CV"), ping pill, terminal shown twice. → distill / quieter
- [P2] Length and mobile pacing: 13.9k px mobile (14.4k PL), portrait fills a screen before any work, stack shown as marquee + 4 lists, PL headline 5 lines at 390px. → distill / adapt

## Persona Red Flags
Jordan (recruiter skimming): target roles, seniority and employers (Bank Pekao, T-Mobile) appear only near the bottom; wrong thumbnail is a credibility hit.
Casey (mobile, one hand): ~1.5 screens of portrait/sparkline before work; CTAs stacked at uneven widths; no persistent CV/contact.
Riley (stress tester): fixed-width SVG text breaks with longer strings/locales; PL page ~600px longer; stat details wrap to 3 lines in 1/3 columns.

## Minor Observations
"Open-source demos" H3 lacks the eyebrow H2s have; demo category labels repeat card categories; dark-mode cyan CTA very bright; "How I work" lead off-system size; footer repeats contact block.

## Questions to Consider
- If the craft is making quality measurable, why isn't the site itself a report (run log / CI ledger of a career)?
- Would a hiring manager miss Stack, How I work or Applied AI if they disappeared?
- Which one number would you defend in an interview — and where is its source?
