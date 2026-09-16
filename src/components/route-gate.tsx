"use client";

import { useLocale } from "@/i18n/use-locale";

export function HideOnRoutes({ prefixes, children }: { prefixes: string[]; children: React.ReactNode }) {
  const { path } = useLocale();
  if (prefixes.some((p) => path.startsWith(p))) return null;
  return <>{children}</>;
}
