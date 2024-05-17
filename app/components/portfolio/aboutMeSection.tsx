import { PiTiktokLogoLight, PiYoutubeLogo } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialInstagram } from "react-icons/sl";

export const AboutMeSection = () => (
  <div className="p-12 flex justify-between flex-col h-full">
    <div>
      <p className="text-2xl  text-neutral-400 mb-4">Hi, I'm Medu</p>

      <h1 className="text-4xl font-bold mb-4">
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

    <div className="flex gap-8">
      <div className="bg-neutral-800 text-white rounded-md flex flex-col items-center px-8 py-6 w-full">
        <SlSocialInstagram size={30} className="mb-4" />

        <div className="text-lg">300+ Followers</div>
      </div>

      <div className="bg-neutral-800 text-white rounded-md flex flex-col items-center px-8 py-6 w-full">
        <PiTiktokLogoLight size={30} className="mb-4" />

        <div className="text-lg">700+ Followers</div>
      </div>

      <div className="bg-neutral-800 text-white rounded-md flex flex-col items-center px-8 py-6 w-full">
        <PiYoutubeLogo size={35} className="mb-4" />

        <div className="text-lg">1000+ Subs</div>
      </div>

      <div className="bg-neutral-800 text-white rounded-md flex flex-col items-center px-8 py-6 w-full">
        <RiTwitterXFill size={30} className="mb-4" />

        <div className="text-lg">350+ Followers</div>
      </div>
    </div>
  </div>
);
