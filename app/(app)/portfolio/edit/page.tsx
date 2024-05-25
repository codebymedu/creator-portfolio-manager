import { Title } from "@/_components/title";
import { Button } from "@/_components/button";
import { AboutMeForm } from "@/(app)/portfolio/edit/_components/aboutMeForm";
import { SocialMediaAccountsForm } from "@/(app)/portfolio/edit/_components/socialMediaAccountsForm";
import { SkillsForm } from "@/(app)/portfolio/edit/_components/skillsForm";

const Page = () => {
  // --- RENDER ---

  return (
    <form className="px-4">
      <Title className="mb-2">Customize your portfolio</Title>

      <p className="mt-1 text-sm leading-6 text-gray-600 mb-8">
        This information will be displayed publicly so be careful what you
        share.
      </p>

      <AboutMeForm />

      <SocialMediaAccountsForm />

      <SkillsForm />

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Button className="lg:px-8">Update portfolio</Button>
      </div>
    </form>
  );
};

export default Page;
