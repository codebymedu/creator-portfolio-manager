import Image from "next/image";
import { SocialMediaLink } from "@/app/components/portfolio/socialMediaLink";
import { Button } from "@/app/components/button";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { SectionSwitch } from "@/app/components/portfolio/sectionSwitch";

const Page = () => {
  // --- RENDER ---

  return (
    <>
      <div className="text-center bg-neutral-100 w-1/3 rounded-xl ">
        <div className="rounded-md overflow-hidden mx-12 mt-12  mb-4">
          <Image
            alt="Profile Picture"
            src="/influencer.png"
            height="600"
            width="600"
          />
        </div>

        <p className="text-neutral-400 ">Frontend Engineer</p>

        <p className="text-lg font-semibold mt-2 text-neutral-900 mb-4">
          Hi, I'm Medu
        </p>

        <div className="flex w-full justify-center gap-4 mb-8">
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

      <div className="bg-neutral-100 w-full rounded-xl">
        <SectionSwitch />
      </div>
    </>
  );
};

export default Page;
