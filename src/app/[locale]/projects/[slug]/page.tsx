import { CaseStudyPage } from "@/components/case-study";
import { en } from "@/content/en";
import { isLocale, localePath, locales, ogLocale } from "@/i18n/config";
import { getContent } from "@/i18n/get-content";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.flatMap((locale) => Object.keys(en.caseStudies).map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/projects/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const study = getContent(locale).caseStudies[slug];
  if (!study) notFound();

  const og = `/api/og?title=${encodeURIComponent(study.title)}&subtitle=${encodeURIComponent(study.subtitle)}`;
  const path = `/projects/${slug}`;

  return {
    title: study.title,
    description: study.subtitle,
    alternates: {
      canonical: localePath(locale, path),
      languages: { en: path, pl: `/pl${path}`, "x-default": path },
    },
    openGraph: {
      title: `${study.title} — Michał Kochaniak`,
      description: study.subtitle,
      type: "article",
      locale: ogLocale[locale],
      url: localePath(locale, path),
      images: [{ url: og, width: 1200, height: 630, alt: study.title }],
    },
    twitter: { card: "summary_large_image", title: study.title, description: study.subtitle, images: [og] },
  };
}

export default async function ProjectPage({ params }: PageProps<"/[locale]/projects/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const content = getContent(locale);
  const study = content.caseStudies[slug];
  const project = content.projects.find((p) => p.slug === slug);
  if (!study || !project) notFound();

  return <CaseStudyPage content={content} study={study} project={project} locale={locale} />;
}
