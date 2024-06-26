import Image from "next/image";
import { SocialMediaLink } from "@/my-portfolio/_components/socialMediaLink";
import { Button } from "@/_components/button";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { AboutMeSection } from "@/my-portfolio/_components/aboutMeSection";
import { SkillsSection } from "@/my-portfolio/_components/skillsSection";
import { WorkSamplesSection } from "@/my-portfolio/_components/workSamplesSection";

const Page = () => {
  // --- RENDER ---

  return (
    <>
      <div className="text-center bg-neutral-100 rounded-xl self-start col-span-12 lg:col-span-3">
        <div className="rounded-md overflow-hidden mx-12 mt-12 mb-4">
          <Image
            alt="Profile Picture"
            src="/influencer.png"
            height="600"
            width="600"
          />
        </div>

        <p className="text-neutral-400 text-xl">Frontend Engineer</p>

        <p className="text-2xl font-semibold mt-2 text-neutral-900 mb-8 lg:mb-4">
          Hi, I&apos;m Medu
        </p>

        <div className="flex w-full justify-center gap-8 lg:gap-4 mb-12 lg:mb-8">
          <SocialMediaLink link="#" socialMedia="instagram" />

          <SocialMediaLink link="#" socialMedia="tiktok" />

          <SocialMediaLink link="#" socialMedia="twitter" />

          <SocialMediaLink link="#" socialMedia="youtube" />

          <SocialMediaLink link="#" socialMedia="other" />
        </div>

        <Button className="flex justify-center items-center gap-2 mx-auto mb-12 px-8">
          <HiOutlineEnvelope size={20} />
          Contact me
        </Button>
      </div>

      <div className="w-full gap-12 flex flex-col col-span-12 lg:col-span-8">
        <AboutMeSection />

        <WorkSamplesSection />

        <SkillsSection />

        <h1 className="text-neutral-900 text-4xl font-bold  text-center w-full">
          Let&apos;s Create Something Amazing Together!
        </h1>

        <p className="text-neutral-900 text-xl lg:text-sm -mt-8 text-center w-full mb-32">
          myemail@gmail.com
        </p>
      </div>
    </>
  );
};

export default Page;
