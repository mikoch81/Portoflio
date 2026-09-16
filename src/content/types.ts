import type { Locale } from "@/i18n/config";

export type ProjectCategory = "automation" | "performance" | "ci" | "ai";
export type CoverKind = "browser" | "mobile" | "chart" | "terminal" | "pipeline" | "api";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  featured: boolean;
  badge?: string;
  summary: string;
  outcome: string;
  tech: string[];
  cover: CoverKind;
  repositoryUrl?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  role: string;
  context: string;
  challenge: string[];
  approach: string[];
  stack: { category: string; items: string[] }[];
  outcomes: string[];
  conclusion: string;
}

export interface Stat {
  value: string;
  label: string;
  detail?: string;
}

export interface Content {
  locale: Locale;
  site: {
    name: string;
    role: string;
    location: string;
    email: string;
    linkedin: string;
    github: string;
    cvPdf: string;
    availability: string;
  };
  meta: {
    title: string;
    description: string;
    cvTitle: string;
    cvDescription: string;
  };
  nav: {
    work: string;
    how: string;
    ai: string;
    stack: string;
    proof: string;
    contact: string;
    cv: string;
  };
  ui: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    themeLight: string;
    themeDark: string;
    switchLanguage: string;
    switchLanguageShort: string;
    viewWork: string;
    downloadCv: string;
    viewCv: string;
    getInTouch: string;
    viewCase: string;
    viewRepo: string;
    allProjects: string;
    copyEmail: string;
    copied: string;
    backToPortfolio: string;
    footerRights: string;
    notFoundTitle: string;
    notFoundBody: string;
    backHome: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    lead: string;
    stats: Stat[];
    portraitAlt: string;
    sparklineLabel: string;
  };
  work: {
    eyebrow: string;
    title: string;
    lead: string;
    featuredLabel: string;
    openSourceLabel: string;
    openSourceLead: string;
    categories: Record<ProjectCategory, string>;
  };
  projects: Project[];
  caseStudies: Record<string, CaseStudy>;
  caseStudyUi: {
    overview: string;
    challenge: string;
    approach: string;
    stack: string;
    outcomes: string;
    summary: string;
    atAGlance: string;
    role: string;
    context: string;
    category: string;
    repository: string;
    related: string;
  };
  how: {
    eyebrow: string;
    title: string;
    manifesto: string;
    steps: { step: string; title: string; description: string }[];
  };
  ai: {
    eyebrow: string;
    title: string;
    lead: string;
    useCases: { title: string; description: string; details: string[] }[];
    terminal: { title: string; command: string; lines: string[] };
    footnote: string;
  };
  stack: {
    eyebrow: string;
    title: string;
    lead: string;
    groups: { category: string; items: string[] }[];
    logos: { slug: string; label: string }[];
  };
  proof: {
    eyebrow: string;
    title: string;
    lead: string;
    impact: Stat[];
    report: { title: string; description: string; cta: string; href: string; previewAlt: string };
    cv: { title: string; description: string };
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    emailCta: string;
    linkedinCta: string;
    githubCta: string;
  };
}
