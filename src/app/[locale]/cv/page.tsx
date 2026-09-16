import type { Metadata } from "next";
import { CvPage } from "./cv-page";

export const metadata: Metadata = {
  title: "CV — Michał Kochaniak",
  description:
    "Senior Test Automation Engineer. Automation architecture, performance engineering, AI-driven quality systems.",
  openGraph: {
    title: "CV — Michał Kochaniak",
    description:
      "Senior Test Automation Engineer. Automation architecture, performance engineering, AI-driven quality systems.",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

export default function Page() {
  return <CvPage />;
}
