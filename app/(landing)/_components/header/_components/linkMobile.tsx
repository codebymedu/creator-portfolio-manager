"use client";

import Link from "next/link";
import { useContext } from "react";
import { HeaderContext } from "@/(landing)/_components/header/_utils/headerContext";

type HeaderLinkMobileProps = { name: string; href: string };

export const HeaderLinkMobile = ({ href, name }: HeaderLinkMobileProps) => {
  // --- STATE ---

  const { setIsNavigationDropdownOpen } = useContext(HeaderContext);

  // --- RENDER ---

  return (
    <Link
      key={name}
      href={href}
      onClick={() => setIsNavigationDropdownOpen(false)}
      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
    >
      {name}
    </Link>
  );
};
