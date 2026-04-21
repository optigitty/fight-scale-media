import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { FeatureShowcaseSection } from "@/components/FeatureShowcaseSection";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { OpportunitySection } from "@/components/OpportunitySection";

export default function HomePage() {
  return (
    <main className="bg-bg-primary text-text-primary">
      <HeroSection />
      <FeatureShowcaseSection />
      <OpportunitySection />
      <HowItWorksSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
