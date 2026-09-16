import { CopyEmail } from "@/components/copy-email";
import { FadeIn } from "@/components/motion";
import { Eyebrow } from "@/components/section-header";
import { buttonVariants } from "@/components/ui/button";
import type { Content } from "@/content/types";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Mail } from "lucide-react";

export function ContactSection({ content }: { content: Pick<Content, "contact" | "site" | "ui"> }) {
  const { contact, site, ui } = content;

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <FadeIn className="space-y-7">
          <Eyebrow>{contact.eyebrow}</Eyebrow>
          <h2 id="contact-title" className="text-4xl font-semibold tracking-[-0.035em] text-fg sm:text-5xl lg:text-6xl">
            {contact.title}
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-fg-2">{contact.lead}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href={`mailto:${site.email}`} className={cn(buttonVariants({ variant: "default", size: "lg" }), "h-11 px-6 text-sm font-medium shadow-glow")}>
              <Mail className="mr-1 size-4" aria-hidden="true" />
              {contact.emailCta}
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 px-6 text-sm")}>
              {contact.linkedinCta}
              <ArrowUpRight className="ml-1 size-4" aria-hidden="true" />
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 px-6 text-sm")}>
              {contact.githubCta}
              <ArrowUpRight className="ml-1 size-4" aria-hidden="true" />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="space-y-3 lg:justify-self-end">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-3">{ui.copyEmail}</p>
          <CopyEmail email={site.email} label={ui.copyEmail} copiedLabel={ui.copied} />
          <p className="text-sm text-fg-3">{site.location}</p>
        </FadeIn>
      </div>
    </section>
  );
}
