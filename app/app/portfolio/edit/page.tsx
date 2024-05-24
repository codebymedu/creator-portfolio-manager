import { Title } from "@/app/components/title";
import { Button } from "@/app/components/button";
import { AboutMeForm } from "@/app/app/portfolio/edit/components/aboutMeForm";
import { SocialMediaAccountsForm } from "@/app/app/portfolio/edit/components/socialMediaAccountsForm";
import { ProjectsForm } from "@/app/app/portfolio/edit/components/projectsForm";
import { SkillsForm } from "@/app/app/portfolio/edit/components/skillsForm";

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

      <ProjectsForm />

      <SkillsForm />

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Button className="lg:px-8">Update portfolio</Button>
      </div>
    </form>
  );
};

export default Page;
