"use client";

import { useContext } from "react";
import { HeaderContext } from "@/(landing)/_components/header/_utils/headerContext";
import { HiBars3 } from "react-icons/hi2";

export const HeaderOpenDialogButton = () => {
  // --- STATE ---

  const { setIsNavigationDropdownOpen } = useContext(HeaderContext);

  // --- RENDER ---

  return (
    <button
      type="button"
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      onClick={() => setIsNavigationDropdownOpen(true)}
    >
      <span className="sr-only">Open main menu</span>

      <HiBars3 className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};
