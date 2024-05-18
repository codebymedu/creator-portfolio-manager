import { PiTiktokLogoLight, PiYoutubeLogo } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialInstagram } from "react-icons/sl";
import { Card } from "@/app/components/card";

export const AboutMeSection = () => (
  <div
    id="about"
    className="p-12 flex justify-between flex-col h-full bg-neutral-100 w-full rounded-xl"
  >
    <div className="mb-8">
      <p className="text-xl lg:text-2xl text-neutral-400 mb-4">Hi, I'm Medu</p>

      <h1 className="text-neutral-900 text-3xl lg:text-4xl font-bold mb-4">
        I'm a Frontend Developer and Content Creator based in Germany
      </h1>

      <p className="text-neutral-600 mb-8">
        Aenean ac mollis odio. Donec eget diam eget sapien tincidunt gravida.
        Duis condimentum sodales lacus, sed dapibus ex bibendum at. Sed sodales
        vel metus in luctus. Sed justo ante, maximus ac faucibus vel, finibus in
        lorem. Aenean et mi sit amet mauris posuere ullamcorper. Aenean sit amet
        faucibus eros. Vivamus dapibus sed purus ac ultricies.
      </p>
    </div>

    <div className="flex flex-col lg:flex-row gap-8">
      <Card className="flex flex-col items-center w-full">
        <SlSocialInstagram size={30} className="mb-4" />

        <div className="text-xl lg:text-lg">300+ Followers</div>
      </Card>

      <Card className="flex flex-col items-center w-full">
        <PiTiktokLogoLight size={30} className="mb-4" />

        <div className="text-xl lg:text-lg">700+ Followers</div>
      </Card>

      <Card className="flex flex-col items-center w-full">
        <PiYoutubeLogo size={35} className="mb-4" />

        <div className="text-xl lg:text-lg">1000+ Subs</div>
      </Card>

      <Card className="flex flex-col items-center w-full">
        <RiTwitterXFill size={30} className="mb-4" />

        <div className="text-xl lg:text-lg">350+ Followers</div>
      </Card>
    </div>
  </div>
);
