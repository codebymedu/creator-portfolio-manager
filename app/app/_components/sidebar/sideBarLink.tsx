"use client";

import { navigationLinks } from "@/app/_utils/layoutConstants";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LayoutSideBarLinkProps = {
  id: string;
};

export const LayoutSideBarLink = ({ id }: LayoutSideBarLinkProps) => {
  // --- STATE ----

  const pathname = usePathname();

  // --- HELPERS ---

  const link = navigationLinks.find((link) => link.id === id);

  // --- RENDER ---

  if (!link) {
    return null;
  }

  return (
    <li>
      <Link
        href={link.href}
        className={clsx(
          pathname === link.href
            ? "bg-neutral-700 text-white"
            : "text-neutral-200 hover:text-white hover:bg-neutral-700",
          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
        )}
      >
        <link.icon
          className={clsx(
            pathname === link.href
              ? "text-white"
              : "text-neutral-200 group-hover:text-white",
            "h-6 w-6 shrink-0"
          )}
          aria-hidden="true"
        />

        {link.name}
      </Link>
    </li>
  );
};
