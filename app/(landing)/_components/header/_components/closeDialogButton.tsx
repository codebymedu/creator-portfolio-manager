"use client";

import { useContext } from "react";
import { HeaderContext } from "@/(landing)/_components/header/_utils/headerContext";
import { HiXMark } from "react-icons/hi2";

export const HeaderCloseDialogButton = () => {
  // --- STATE ---

  const { setIsNavigationDropdownOpen } = useContext(HeaderContext);

  // --- RENDER ---

  return (
    <button
      type="button"
      className="-m-2.5 rounded-md p-2.5 text-gray-700"
      onClick={() => setIsNavigationDropdownOpen(false)}
    >
      <span className="sr-only">Close menu</span>

      <HiXMark className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};
