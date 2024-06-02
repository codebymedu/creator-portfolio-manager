"use client";

import { userNavigationLinks } from "@/(app)/_utils/layoutConstants";
import { MenuItem } from "@headlessui/react";
import Link from "next/link";

export const HeaderNavigationLinks = () => (
  <>
    {userNavigationLinks.map((item) => (
      <MenuItem key={item.name}>
        {item.action ? (
          <button
            onClick={item.action}
            className="block px-3 py-1 text-sm leading-6 text-gray-900"
          >
            {item.name}
          </button>
        ) : (
          <Link
            href={item.href}
            className="block px-3 py-1 text-sm leading-6 text-gray-900"
          >
            {item.name}
          </Link>
        )}
      </MenuItem>
    ))}
  </>
);
