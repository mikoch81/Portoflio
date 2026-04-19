import type { Metadata } from "next";
import Image from "next/image";

import { siteConfig } from "@/lib/data";
import {
  certifications,
  education,
  experience,
  headline,
  interests,
  signatureAreas,
  snapshot,
  strengths,
  summary,
  technologyGroups,
} from "../cv-data";

export const metadata: Metadata = {
  title: "CV Print — Michał Kochaniak",
  description: "Print-first 2-page CV layout for PDF generation.",
};

const currentRole = experience[0];
const priorRoles = experience.slice(1, 5);
const legacyRole = experience[5];

function PrintSectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div className="h-px w-6 bg-[#2c5858]" aria-hidden="true" />
      <h2 className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#2c5858]">
        {children}
      </h2>
    </div>
  );
}

function BulletList({ items, compact = false }: { items: string[]; compact?: boolean }) {
  return (
    <ul className={compact ? "space-y-1.5" : "space-y-2"}>
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-[11.5px] leading-[1.5] text-[#4b5963]">
          <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2c5858]" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function RoleBlock({
  role,
  company,
  meta,
  period,
  highlights,
}: {
  role: string;
  company: string;
  meta: string;
  period: string;
  highlights: string[];
}) {
  return (
    <div className="break-inside-avoid-page border-b border-[#ddd5c8] pb-4 last:border-b-0 last:pb-0">
      <div className="mb-2 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-[#12202a]">{role}</h3>
          <p className="mt-1 text-[12.5px] font-medium text-[#24424c]">{company}</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[#69757d]">{meta}</p>
        </div>
        <p className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#69757d]">
          {period}
        </p>
      </div>
      <BulletList items={highlights} compact />
    </div>
  );
}

export default function PrintPage() {
  return (
    <main className="cv-print-preview min-h-screen bg-[#0b1016] px-4 py-8 print:bg-white print:p-0">
      <div className="mx-auto flex max-w-[980px] flex-col gap-8 print:max-w-none print:gap-0">
        <article className="cv-print-sheet overflow-hidden rounded-[20px] bg-[#f7f2ea] text-[#17242d] shadow-[0_28px_80px_-36px_rgba(0,0,0,0.75)] print:rounded-none print:shadow-none">
          <div className="grid h-full grid-cols-[1.7fr_0.95fr]">
            <div className="border-r border-[#ddd5c8] px-[14mm] py-[13mm]">
              <header className="mb-6 border-b border-[#ddd5c8] pb-5">
                <p className="mb-2 text-[9.5px] font-semibold uppercase tracking-[0.28em] text-[#2c5858]">
                  QA Automation / Software Quality / Enterprise Delivery
                </p>
                <h1 className="text-[31px] font-semibold tracking-[-0.05em] text-[#10202a]">
                  {siteConfig.name}
                </h1>
                <p className="mt-2 text-[16px] font-medium leading-[1.3] text-[#223744]">{headline}</p>
                <p className="mt-4 max-w-[104mm] text-[11.8px] leading-[1.62] text-[#4d5a64]">
                  {summary}
                </p>
              </header>

              <section className="mb-6 grid grid-cols-[0.95fr_1.15fr] gap-6">
                <div>
                  <PrintSectionTitle>Profile Snapshot</PrintSectionTitle>
                  <BulletList items={snapshot} compact />
                </div>

                <div>
                  <PrintSectionTitle>Core Strengths</PrintSectionTitle>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {strengths.map((item) => (
                      <div key={item} className="border-b border-[#e6ddd0] pb-2 text-[11.2px] leading-[1.4] text-[#34454e]">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section>
                <PrintSectionTitle>Current Experience</PrintSectionTitle>
                <RoleBlock {...currentRole} />
              </section>
            </div>

            <aside className="bg-[linear-gradient(180deg,rgba(255,255,255,0.48)_0%,rgba(255,255,255,0.14)_100%)] px-[10mm] py-[13mm]">
              <section className="mb-5 flex flex-col items-center rounded-[16px] border border-[#ddd5c8] bg-white/55 px-4 py-4 text-center">
                <div className="relative h-[34mm] w-[34mm] overflow-hidden rounded-[14px] border border-[#d3cabd] bg-[#e9e1d6] shadow-[0_10px_24px_-18px_rgba(0,0,0,0.45)]">
                  <Image
                    src="/foto-cv.jpg"
                    alt="Portrait of Michał Kochaniak"
                    fill
                    sizes="34mm"
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="mt-3 text-[9.5px] font-semibold uppercase tracking-[0.22em] text-[#6b767d]">
                  Resume Portrait
                </p>
              </section>

              <section className="mb-5 rounded-[16px] bg-[#1d3138] px-4 py-4 text-[#eff3ef]">
                <p className="text-[9.5px] font-semibold uppercase tracking-[0.24em] text-[#9fd0c8]">
                  Contact
                </p>
                <div className="mt-3 space-y-2 text-[11px] leading-[1.4] text-white/82">
                  <p>Lodz, Poland</p>
                  <p>{siteConfig.email}</p>
                  <p>linkedin.com/in/michalkochaniak</p>
                  <p>github.com/mikoch81</p>
                </div>
              </section>

              <section className="mb-5 rounded-[16px] border border-[#ddd5c8] bg-white/55 px-4 py-4">
                <PrintSectionTitle>Signature Areas</PrintSectionTitle>
                <div className="space-y-2">
                  {signatureAreas.map((item) => (
                    <div key={item} className="rounded-[12px] border border-[#ddd5c8] bg-[#fbf8f3] px-3 py-2 text-[10.5px] font-medium uppercase tracking-[0.12em] text-[#35454d]">
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-5 rounded-[16px] border border-[#ddd5c8] bg-white/55 px-4 py-4">
                <PrintSectionTitle>Education</PrintSectionTitle>
                <div className="space-y-4">
                  {education.map((item) => (
                    <div key={item.title} className="border-b border-[#e6ddd0] pb-3 last:border-b-0 last:pb-0">
                      <p className="text-[11.5px] font-semibold text-[#14212b]">{item.title}</p>
                      <p className="text-[11px] text-[#29414c]">{item.subtitle}</p>
                      <p className="mt-1 text-[9.5px] uppercase tracking-[0.12em] text-[#68747c]">{item.period}</p>
                      <p className="mt-1.5 text-[10.7px] leading-[1.45] text-[#4d5a64]">{item.details}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[16px] border border-[#ddd5c8] bg-white/55 px-4 py-4">
                <PrintSectionTitle>Certifications</PrintSectionTitle>
                <BulletList items={certifications} compact />
              </section>
            </aside>
          </div>
        </article>

        <article className="cv-print-sheet overflow-hidden rounded-[20px] bg-[#f7f2ea] text-[#17242d] shadow-[0_28px_80px_-36px_rgba(0,0,0,0.75)] print:rounded-none print:shadow-none">
          <div className="grid h-full grid-cols-[1.52fr_1fr]">
            <div className="border-r border-[#ddd5c8] px-[14mm] py-[13mm]">
              <header className="mb-5 border-b border-[#ddd5c8] pb-4">
                <p className="text-[9.5px] font-semibold uppercase tracking-[0.28em] text-[#2c5858]">
                  Earlier Roles
                </p>
                <h2 className="mt-2 text-[24px] font-semibold tracking-[-0.03em] text-[#10202a]">
                  Career History and Technical Foundation
                </h2>
              </header>

              <section>
                <PrintSectionTitle>Professional Experience</PrintSectionTitle>
                <div className="space-y-4">
                  {priorRoles.map((job) => (
                    <RoleBlock key={`${job.company}-${job.role}`} {...job} />
                  ))}
                </div>

                <div className="mt-4 rounded-[16px] border border-[#ddd5c8] bg-white/45 px-4 py-4">
                  <p className="text-[11.5px] font-semibold text-[#14212b]">
                    {legacyRole.role} | {legacyRole.company}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[#69757d]">
                    {legacyRole.meta} | {legacyRole.period}
                  </p>
                  <p className="mt-2 text-[10.8px] leading-[1.45] text-[#4d5a64]">
                    {legacyRole.highlights[0]}
                  </p>
                </div>
              </section>
            </div>

            <aside className="bg-[linear-gradient(180deg,rgba(255,255,255,0.48)_0%,rgba(255,255,255,0.14)_100%)] px-[10mm] py-[13mm]">
              <section className="mb-5 rounded-[16px] border border-[#ddd5c8] bg-white/55 px-4 py-4">
                <PrintSectionTitle>Selected Tools & Technologies</PrintSectionTitle>
                <div className="space-y-3">
                  {technologyGroups.map((group) => (
                    <div key={group.category} className="rounded-[12px] border border-[#ddd5c8] bg-[#fbf8f3] px-3 py-3">
                      <h3 className="mb-1.5 text-[9.5px] font-semibold uppercase tracking-[0.18em] text-[#2c5858]">
                        {group.category}
                      </h3>
                      <p className="text-[10.7px] leading-[1.45] text-[#4d5a64]">{group.items}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[16px] border border-[#ddd5c8] bg-white/55 px-4 py-4">
                <PrintSectionTitle>Interests</PrintSectionTitle>
                <BulletList items={interests} compact />
              </section>
            </aside>
          </div>
        </article>
      </div>
    </main>
  );
}