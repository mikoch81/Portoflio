import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07090f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://michalkochaniak.dev"),
  title: {
    default: "Michał Kochaniak — Senior Test Automation Engineer",
    template: "%s | Michał Kochaniak",
  },
  description:
  "Senior Test Automation Engineer specializing in automation architecture, performance engineering, and AI-driven quality systems. Building scalable frameworks, data-driven reporting pipelines, and practical AI workflows for modern software delivery.",
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
  openGraph: {
    title: "Michał Kochaniak — Senior Test Automation Engineer",
    description:
      "Automation · Performance · AI-Driven Quality Systems · CI/CD · AI-assisted QA",
    url: "https://michalkochaniak.dev",
    type: "website",
    locale: "en_US",
    siteName: "Michał Kochaniak",
    images: [
      {
        url: "https://michalkochaniak.dev/api/og",
        width: 1200,
        height: 630,
        alt: "Michał Kochaniak — Senior Test Automation Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michał Kochaniak — Senior Test Automation Engineer",
    description:
      "Automation · Performance · AI-Driven Quality Systems · CI/CD · AI-assisted QA",
    images: ["https://michalkochaniak.dev/api/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-cyan focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-background"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
