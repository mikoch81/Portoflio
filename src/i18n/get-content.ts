import { en } from "@/content/en";
import { pl } from "@/content/pl";
import type { Content } from "@/content/types";
import type { Locale } from "./config";

const contents: Record<Locale, Content> = { en, pl };

export function getContent(locale: Locale): Content {
  return contents[locale];
}
