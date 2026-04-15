import { HeroSection } from "@/components/sections/hero";
import { CredibilityStrip } from "@/components/sections/credibility";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { CapabilitiesSection } from "@/components/sections/capabilities";
import { ImpactSection } from "@/components/sections/impact";
import { ProcessSection } from "@/components/sections/process";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CredibilityStrip />
      <AboutSection />
      <ProjectsSection />
      <CapabilitiesSection />
      <ImpactSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
