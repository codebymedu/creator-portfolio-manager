import { SocialMediaPlatforms } from "@/types/socialMedia";
import { ReactNode } from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { PiTiktokLogoLight, PiYoutubeLogo } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { FiLink } from "react-icons/fi";

type SocialMediaLinkProps = {
  socialMedia: SocialMediaPlatforms;
  link: string;
};

export const SocialMediaLink = ({
  socialMedia,
  link,
}: SocialMediaLinkProps) => (
  <a
    href={link}
    target="_blank"
    className="hover:scale-105 scale-125 lg:scale-100"
  >
    {SOCIAL_MEDIA_ICONS[socialMedia]}
  </a>
);

export const SOCIAL_MEDIA_ICONS: Record<SocialMediaPlatforms, ReactNode> = {
  instagram: <SlSocialInstagram size={25} />,
  tiktok: <PiTiktokLogoLight size={25} />,
  youtube: <PiYoutubeLogo size={25} />,
  twitter: <RiTwitterXFill size={25} />,
  other: <FiLink size={25} />,
};
