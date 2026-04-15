import { caseStudies } from "@/lib/data";
import { CaseStudyPage } from "@/components/case-study";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const study = caseStudies["agentic-qa-assistant"];

export const metadata: Metadata = {
  title: study.title,
  description: study.subtitle,
  openGraph: {
    title: `${study.title} — Michał Kochaniak`,
    description: study.subtitle,
    type: "article",
  },
};

export default function AgenticQaAssistantPage() {
  if (!study) notFound();
  return <CaseStudyPage study={study} />;
}
