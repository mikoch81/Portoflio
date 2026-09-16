export const locales = ["en", "pl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

/** Builds a locale-aware path. The default locale lives at the root. */
export function localePath(locale: Locale, href: string): string {
  if (locale === defaultLocale) return href;
  if (href === "/") return `/${locale}`;
  return href.startsWith("/") ? `/${locale}${href}` : href;
}

/** Strips a locale prefix, returning the canonical (default-locale) path. */
export function stripLocale(pathname: string): { locale: Locale; path: string } {
  const [, first = "", ...rest] = pathname.split("/");
  if (isLocale(first) && first !== defaultLocale) {
    return { locale: first, path: `/${rest.join("/")}`.replace(/\/$/, "") || "/" };
  }
  return { locale: defaultLocale, path: pathname || "/" };
}

export const htmlLang: Record<Locale, string> = { en: "en", pl: "pl" };
export const ogLocale: Record<Locale, string> = { en: "en_US", pl: "pl_PL" };
