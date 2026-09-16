import { AppliedAiSection } from "@/components/sections/applied-ai";
import { ContactSection } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero";
import { HowIWorkSection } from "@/components/sections/how-i-work";
import { ProofSection } from "@/components/sections/proof";
import { StackSection } from "@/components/sections/stack";
import { WorkSection } from "@/components/sections/work";
import { isLocale } from "@/i18n/config";
import { getContent } from "@/i18n/get-content";
import { notFound } from "next/navigation";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getContent(locale);

  return (
    <>
      <HeroSection content={content} />
      <WorkSection content={content} locale={locale} />
      <HowIWorkSection content={content} />
      <AppliedAiSection content={content} />
      <StackSection content={content} />
      <ProofSection content={content} locale={locale} />
      <ContactSection content={content} />
    </>
  );
}
