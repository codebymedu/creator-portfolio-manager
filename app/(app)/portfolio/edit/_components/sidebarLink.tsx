"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LayoutSideBarLinkProps = {
  href: string;
  label: string;
};

export const LayoutSideBarLink = ({ href, label }: LayoutSideBarLinkProps) => {
  // --- STATE ----

  const pathname = usePathname();

  // --- RENDER ---

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          pathname === href
            ? "bg-neutral-200 text-neutral-600"
            : "text-gray-700 hover:text-neutral-600 hover:bg-neutral-200",
          "group flex gap-x-3 rounded-md p-2 pl-3 text-sm leading-6 font-semibold"
        )}
      >
        {label}
      </Link>
    </li>
  );
};
