import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { htmlLang, isLocale, localePath, locales, ogLocale, type Locale } from "@/i18n/config";
import { getContent } from "@/i18n/get-content";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f1e8" },
    { media: "(prefers-color-scheme: dark)", color: "#07090f" },
  ],
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const siteTitle = "Michał Kochaniak — Senior Test Automation Engineer";

const descriptions: Record<Locale, string> = {
  en: "Senior Test Automation Engineer specializing in automation architecture, performance engineering, and AI-driven quality systems. Designing scalable frameworks, building data-driven reporting pipelines, and applying practical AI workflows in modern software delivery environments.",
  pl: "Senior Test Automation Engineer: architektura automatyzacji testów, inżynieria wydajności i systemy jakości wspierane AI. Projektuję skalowalne frameworki, buduję pipeline'y raportowania oparte na danych i wdrażam praktyczne workflow AI w nowoczesnym dostarczaniu oprogramowania.",
};

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return {
    metadataBase: new URL("https://michalkochaniak.dev"),
    title: {
      default: siteTitle,
      template: "%s | Michał Kochaniak",
    },
    description: descriptions[locale],
    keywords: [
      "test automation",
      "QA engineer",
      "performance testing",
      "JMeter",
      "Selenium",
      "Appium",
      "AI quality engineering",
      "CI/CD",
    ],
    authors: [{ name: "Michał Kochaniak" }],
    robots: { index: true, follow: true },
    alternates: {
      canonical: localePath(locale, "/"),
      languages: {
        en: "/",
        pl: "/pl",
        "x-default": "/",
      },
    },
    openGraph: {
      title: siteTitle,
      description: descriptions[locale],
      url: localePath(locale, "/"),
      type: "website",
      locale: ogLocale[locale],
      siteName: "Michał Kochaniak",
      images: [
        {
          url: "/api/og",
          width: 1200,
          height: 630,
          alt: siteTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: descriptions[locale],
      images: ["/api/og"],
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getContent(locale);
  const chrome = { nav: content.nav, ui: content.ui, site: content.site };

  return (
    <html
      lang={htmlLang[locale]}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-brand-fg"
          >
            {content.ui.skipToContent}
          </a>
          <Header content={chrome} locale={locale} />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer content={chrome} locale={locale} />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
