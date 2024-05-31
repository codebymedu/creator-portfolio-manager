"use client";

import { Button } from "@/_components/button";
import { AboutMeForm } from "@/(app)/portfolio/edit/_components/aboutMeForm";
import { SocialMediaAccountsForm } from "@/(app)/portfolio/edit/_components/socialMediaAccountsForm";
import { SkillsForm } from "@/(app)/portfolio/edit/_components/skillsForm";
import { useFormState } from "react-dom";
import { editPortfolio } from "@/_actions/portfolio";

export const EditPortfolioForm = () => {
  // --- STATE ---

  const [formState, dispatchEditPortfolio] = useFormState(editPortfolio, {
    status: null,
  });

  // --- RENDER ---

  return (
    <form action={dispatchEditPortfolio}>
      <AboutMeForm />

      <SocialMediaAccountsForm />

      <SkillsForm />

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Button type="submit" className="lg:px-8">
          Update portfolio
        </Button>
      </div>
    </form>
  );
};
