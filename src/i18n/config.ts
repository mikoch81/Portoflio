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

/**
 * Strips any locale prefix, returning the unprefixed path. The default locale is
 * included because the proxy rewrites "/" to "/en" and usePathname reports that.
 */
export function stripLocale(pathname: string): { locale: Locale; path: string } {
  const [, first = "", ...rest] = pathname.split("/");
  if (isLocale(first)) {
    return { locale: first, path: `/${rest.join("/")}`.replace(/\/$/, "") || "/" };
  }
  return { locale: defaultLocale, path: pathname || "/" };
}

export const htmlLang: Record<Locale, string> = { en: "en", pl: "pl" };
export const ogLocale: Record<Locale, string> = { en: "en_US", pl: "pl_PL" };
