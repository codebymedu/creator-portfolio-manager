"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode, useContext } from "react";
import { LayoutContext } from "@/app/_utils/layoutContext";

type LayoutSideBarMobileDialogProps = {
  children: ReactNode;
};

export const LayoutSideBarMobileDialog = ({
  children,
}: LayoutSideBarMobileDialogProps) => {
  // --- STATE ---

  const { isSideBarOpen, setIsSidebarOpen } = useContext(LayoutContext);

  // --- RENDER ---

  return (
    <Transition show={isSideBarOpen} as={Fragment}>
      <Dialog className="relative z-50 lg:hidden" onClose={setIsSidebarOpen}>
        {children}
      </Dialog>
    </Transition>
  );
};
