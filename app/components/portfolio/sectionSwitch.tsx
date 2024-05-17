"use client";

import { useSearchParams } from "next/navigation";
import { AboutMeSection } from "@/app/components/portfolio/aboutMeSection";
import { SkillsSection } from "@/app/components/portfolio/skillsSection";
import { WorkSamplesSection } from "@/app/components/portfolio/workSamplesSection";

export const SectionSwitch = () => {
  // --- STATE ---

  const searchParams = useSearchParams();

  // --- HELPERS ---

  const activeSection = searchParams.get("section");

  // --- RENDER ---

  return (
    <>
      {(activeSection === "aboutMe" || !activeSection) && <AboutMeSection />}

      {activeSection === "workSamples" && <WorkSamplesSection />}

      {activeSection === "skills" && <SkillsSection />}
    </>
  );
};
