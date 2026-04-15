import { HeroSection } from "@/components/sections/hero";
import { ForRecruitersSection } from "@/components/sections/for-recruiters";
import { CredibilityStrip } from "@/components/sections/credibility";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { DemoSection } from "@/components/sections/demo";
import { AiSection } from "@/components/sections/ai";
import { CapabilitiesSection } from "@/components/sections/capabilities";
import { ImpactSection } from "@/components/sections/impact";
import { ProcessSection } from "@/components/sections/process";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ForRecruitersSection />
      <CredibilityStrip />
      <AboutSection />
      <ProjectsSection />
      <DemoSection />
      <AiSection />
      <CapabilitiesSection />
      <ImpactSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
