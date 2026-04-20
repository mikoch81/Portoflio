import { CaseStudyPage } from "@/components/case-study";
import { caseStudies } from "@/lib/data";
import type { Metadata } from "next";

const study = caseStudies["ai-performance-reporting"];

export const metadata: Metadata = {
  title: study.title,
  description: study.subtitle,
  openGraph: {
    title: `${study.title} — Michał Kochaniak`,
    description: study.subtitle,
    type: "article",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

export default function AiPerformanceReportingPage() {
  return <CaseStudyPage study={study} />;
}
