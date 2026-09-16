import { FadeIn } from "@/components/motion";
import { ProjectCover } from "@/components/project-cover";
import { Eyebrow } from "@/components/section-header";
import { buttonVariants } from "@/components/ui/button";
import type { CaseStudy, Content, Project } from "@/content/types";
import { localePath, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

function Block({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className="space-y-6">
      <h2 id={id} className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
        <span className="h-px w-6 bg-brand/60" aria-hidden="true" />
        {label}
      </h2>
      {children}
    </section>
  );
}

export function CaseStudyPage({
  content,
  study,
  project,
  locale,
}: {
  content: Pick<Content, "caseStudyUi" | "ui" | "work" | "projects">;
  study: CaseStudy;
  project: Project;
  locale: Locale;
}) {
  const { caseStudyUi: t, ui, work } = content;
  const related = content.projects.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 2);
  const fallback = content.projects.filter((p) => p.slug !== project.slug && !related.includes(p)).slice(0, 2 - related.length);
  const relatedProjects = [...related, ...fallback];
  const techAll = study.stack.flatMap((g) => g.items);

  return (
    <article className="relative pt-28 pb-24 sm:pt-32 sm:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <Link
            href={`${localePath(locale, "/")}#work`}
            className="inline-flex items-center gap-2 text-sm text-fg-3 transition-colors hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {ui.allProjects}
          </Link>
        </FadeIn>

        <FadeIn className="mt-10 max-w-3xl space-y-6">
          <Eyebrow>{work.categories[project.category]}</Eyebrow>
          <h1 className="text-4xl font-semibold tracking-[-0.035em] text-fg sm:text-5xl lg:text-6xl">{study.title}</h1>
          <p className="text-lg leading-relaxed text-fg-2 sm:text-xl">{study.subtitle}</p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12">
          <ProjectCover kind={project.cover} className="aspect-21/9 rounded-3xl border border-line" />
        </FadeIn>

        <div className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-20">
          <div className="space-y-16">
            <FadeIn>
              <Block id="overview" label={t.overview}>
                <p className="text-lg leading-relaxed text-fg-2">{study.overview}</p>
              </Block>
            </FadeIn>

            <FadeIn>
              <Block id="challenge" label={t.challenge}>
                <ol className="grid gap-3 sm:grid-cols-2">
                  {study.challenge.map((item, i) => (
                    <li key={i} className="flex gap-4 rounded-2xl border border-line bg-surface-1 p-5">
                      <span className="font-mono text-sm text-brand tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                      <p className="text-[15px] leading-relaxed text-fg-2">{item}</p>
                    </li>
                  ))}
                </ol>
              </Block>
            </FadeIn>

            <FadeIn>
              <Block id="approach" label={t.approach}>
                <ol className="relative space-y-6 border-l border-line pl-8">
                  {study.approach.map((item, i) => (
                    <li key={i} className="relative">
                      <span className="absolute -left-[2.35rem] top-1.5 grid size-5 place-items-center rounded-full border border-brand/50 bg-bg font-mono text-[10px] text-brand">
                        {i + 1}
                      </span>
                      <p className="text-[15px] leading-relaxed text-fg-2">{item}</p>
                    </li>
                  ))}
                </ol>
              </Block>
            </FadeIn>

            <FadeIn>
              <Block id="outcomes" label={t.outcomes}>
                <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                  {study.outcomes.map((item, i) => (
                    <li key={i} className="bg-bg p-5">
                      <p className="text-[15px] leading-relaxed text-fg">{item}</p>
                    </li>
                  ))}
                </ul>
              </Block>
            </FadeIn>

            <FadeIn>
              <Block id="summary" label={t.summary}>
                <blockquote className="rounded-3xl border border-line bg-surface-1 p-7 font-display text-xl leading-snug text-fg sm:p-8 sm:text-2xl">
                  {study.conclusion}
                </blockquote>
              </Block>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <aside className="space-y-6 rounded-3xl border border-line bg-surface-1 p-6 lg:sticky lg:top-28" aria-label={t.atAGlance}>
              <h2 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">{t.atAGlance}</h2>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-fg-3">{t.role}</dt>
                  <dd className="mt-1 font-medium text-fg">{study.role}</dd>
                </div>
                <div>
                  <dt className="text-fg-3">{t.context}</dt>
                  <dd className="mt-1 font-medium text-fg">{study.context}</dd>
                </div>
                <div>
                  <dt className="text-fg-3">{t.category}</dt>
                  <dd className="mt-1 font-medium text-fg">{work.categories[project.category]}</dd>
                </div>
                <div>
                  <dt className="text-fg-3">{t.stack}</dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">
                    {techAll.map((item) => (
                      <span key={item} className="rounded-md border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-fg-2">
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
              {study.repositoryUrl ?? project.repositoryUrl ? (
                <a
                  href={study.repositoryUrl ?? project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-10 w-full text-sm")}
                >
                  {ui.viewRepo}
                  <ArrowUpRight className="ml-1 size-4" aria-hidden="true" />
                </a>
              ) : null}
            </aside>
          </FadeIn>
        </div>

        <FadeIn className="mt-24">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-fg">{t.related}</h2>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2">
            {relatedProjects.map((p) => (
              <li key={p.slug}>
                <Link
                  href={localePath(locale, `/projects/${p.slug}`)}
                  className="group flex h-full gap-5 rounded-2xl border border-line bg-surface-1 p-5 transition-[border-color,box-shadow] hover:border-line-strong hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
                >
                  <ProjectCover kind={p.cover} className="hidden w-32 shrink-0 rounded-xl border border-line sm:block" />
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand">{work.categories[p.category]}</span>
                    <h3 className="text-lg font-semibold tracking-tight text-fg">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-fg-2">{p.outcome}</p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-1 text-sm font-medium text-fg group-hover:text-brand">
                      {ui.viewCase}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </article>
  );
}
