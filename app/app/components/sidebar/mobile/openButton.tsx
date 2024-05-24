"use client";

import { Fragment, useContext } from "react";
import { LayoutContext } from "@/app/utils/layoutContext";
import { IoMdClose } from "react-icons/io";
import { TransitionChild } from "@headlessui/react";

export const LayoutSideBarMobileOpenButton = () => {
  // --- STATE ---

  const { setIsSidebarOpen } = useContext(LayoutContext);

  // --- RENDER ---

  return (
    <TransitionChild
      as={Fragment}
      enter="ease-in-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in-out duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
        <button
          type="button"
          className="-m-2.5 p-2.5"
          onClick={() => setIsSidebarOpen(false)}
        >
          <span className="sr-only">Close sidebar</span>

          <IoMdClose className="h-6 w-6 text-white" aria-hidden="true" />
        </button>
      </div>
    </TransitionChild>
  );
};
