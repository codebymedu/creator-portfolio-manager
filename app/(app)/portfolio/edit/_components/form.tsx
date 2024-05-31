"use client";

import { Button } from "@/_components/button";
import { AboutMeForm } from "@/(app)/portfolio/edit/_components/aboutMeForm";
import { SocialMediaAccountsForm } from "@/(app)/portfolio/edit/_components/socialMediaAccountsForm";
import { SkillsForm } from "@/(app)/portfolio/edit/_components/skillsForm";
import { useFormState } from "react-dom";
import { editPortfolio } from "@/_actions/portfolio";
import { pick } from "lodash";
import { EditPortfolioState } from "@/_actions/portfolio/types";

export const EditPortfolioForm = () => {
  // --- STATE ---

  const [formState, dispatchEditPortfolio] = useFormState<
    EditPortfolioState,
    FormData
  >(editPortfolio, {
    status: null,
  });

  console.log({ formState });

  // --- RENDER ---

  return (
    <form action={dispatchEditPortfolio}>
      <AboutMeForm
        validationErrors={{
          about: formState.errors?.about,
          headline: formState.errors?.headline,
          photo: formState.errors?.photo,
          publicName: formState.errors?.publicName,
          username: formState.errors?.username,
        }}
      />

      <SocialMediaAccountsForm
        validationErrors={{
          instagramUsername: formState.errors?.instagramUsername,
          otherLink: formState.errors?.otherLink,
          tikTokUsername: formState.errors?.tikTokUsername,
          xUsername: formState.errors?.xUsername,
          youtubeUsername: formState.errors?.youtubeUsername,
        }}
      />

      <SkillsForm validationErrors={formState.errors?.skills} />

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Button type="submit" className="lg:px-8">
          Update portfolio
        </Button>
      </div>
    </form>
  );
};
