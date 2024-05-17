import Image from "next/image";

type SocialMedia = "instagram" | "tiktok" | "youtube" | "twitter" | "other";

type SocialMediaLinkProps = {
  socialMedia: SocialMedia;
  link: string;
};

export const SocialMediaLink = ({
  socialMedia,
  link,
}: SocialMediaLinkProps) => (
  <a href={link} target="_blank" className="hover:scale-105">
    <Image
      alt={SOCIAL_MEDIA_ICON_ALTS[socialMedia]}
      src={SOCIAL_MEDIA_ICONS[socialMedia]}
      height="30"
      width="30"
    />
  </a>
);

const SOCIAL_MEDIA_ICONS: Record<SocialMedia, string> = {
  instagram: "/instagram.svg",
  tiktok: "/tiktok.svg",
  youtube: "/youtube.svg",
  twitter: "/twitter.svg",
  other: "/link.svg",
};

const SOCIAL_MEDIA_ICON_ALTS: Record<SocialMedia, string> = {
  instagram: "Instagram profile link",
  tiktok: "TikTok profile link",
  youtube: "Youtube profile link",
  twitter: "Twitter profile link",
  other: "Other social media profile link",
};
