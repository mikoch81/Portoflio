import type { Metadata } from "next";
import { CvPage } from "./cv-page";

export const metadata: Metadata = {
  title: "CV — Michał Kochaniak",
  description:
    "Senior Test Automation Engineer. Automation architecture, performance engineering, AI-driven quality systems.",
};

export default function Page() {
  return <CvPage />;
}
