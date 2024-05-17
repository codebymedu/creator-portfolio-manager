import Image from "next/image";
import { SocialMediaLink } from "@/app/components/socialMediaLink";
import { Button } from "@/app/components/button";
import {
  HiOutlineEnvelope,
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

const Page = () => {
  // --- RENDER ---

  return (
    <div className="container mx-auto flex gap-12 justify-between my-24">
      <div className="text-center bg-neutral-100 w-1/3 rounded-xl ">
        <div className="rounded-md overflow-hidden mx-12 mt-12  mb-4">
          <Image
            alt="Profile Picture"
            src="/influencer.png"
            height="600"
            width="600"
          />
        </div>

        <p className="text-neutral-400 ">Social Media Manager</p>

        <p className="text-lg font-semibold mt-2 text-neutral-900 mb-4">
          Hi, I'm Jane
        </p>

        <div className="flex w-full justify-center gap-4 mb-8">
          {/* TODO: add hover effects to these */}
          <SocialMediaLink link="#" socialMedia="instagram" />
          <SocialMediaLink link="#" socialMedia="tiktok" />
          <SocialMediaLink link="#" socialMedia="twitter" />
          <SocialMediaLink link="#" socialMedia="youtube" />
          <SocialMediaLink link="#" socialMedia="other" />
        </div>

        <Button className="flex justify-center items-center gap-2 mx-auto mb-12">
          <HiOutlineEnvelope size={20} />
          Contact me
        </Button>
      </div>
      <div className="bg-neutral-100 w-full rounded-xl">test</div>
      <div className="bg-neutral-100 w-32 self-start rounded-xl flex justify-start p-6 flex-col gap-4">
        <Button className="bg-neutral-800 rounded-lg flex justify-center">
          <HiOutlineUser size={25} color="#fff" />
        </Button>

        <Button className="bg-neutral-800  rounded-lg flex justify-center">
          <HiOutlineBriefcase size={25} color="#fff" />
        </Button>

        <Button className="bg-neutral-800  rounded-lg flex justify-center ">
          <HiOutlineWrenchScrewdriver size={25} color="#fff" />
        </Button>
      </div>
    </div>
  );
};

export default Page;
