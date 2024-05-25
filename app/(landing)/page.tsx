import { HeroSection } from "@/(landing)/_components/section/hero";
import { FeaturesSection } from "@/(landing)/_components/section/features";
import { ProcessSection } from "@/(landing)/_components/section/process";
import { BenefitsSection } from "@/(landing)/_components/section/benefits";
import { CTASection } from "@/(landing)/_components/section/cta";

export default function Home() {
  // --- RENDER ---

  return (
    <main>
      <HeroSection />

      <FeaturesSection />

      <ProcessSection />

      <BenefitsSection />

      <CTASection />
    </main>
  );
}
