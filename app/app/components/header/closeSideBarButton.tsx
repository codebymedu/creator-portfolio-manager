"use client";

import { useContext } from "react";
import { LayoutContext } from "@/app/utils/layoutContext";
import { HiMiniBars3 } from "react-icons/hi2";

export const LayoutHeaderCloseSideBarButton = () => {
  // --- STATE ---

  const { setIsSidebarOpen } = useContext(LayoutContext);

  // --- RENDER ---

  return (
    <button
      type="button"
      className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
      onClick={() => setIsSidebarOpen(true)}
    >
      <span className="sr-only">Open sidebar</span>
      <HiMiniBars3 className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};
