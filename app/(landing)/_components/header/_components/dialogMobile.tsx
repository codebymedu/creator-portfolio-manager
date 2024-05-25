"use client";

import { ReactNode, useContext } from "react";
import { HeaderContext } from "@/(landing)/_components/header/_utils/headerContext";
import { Dialog } from "@headlessui/react";

type HeaderDialogMobileProps = {
  children: ReactNode;
};

export const HeaderDialogMobile = ({ children }: HeaderDialogMobileProps) => {
  // --- STATE ---

  const { isNavigationDropdownOpen, setIsNavigationDropdownOpen } =
    useContext(HeaderContext);

  // --- RENDER ---

  return (
    <Dialog
      className="lg:hidden"
      open={isNavigationDropdownOpen}
      onClose={() => {
        setIsNavigationDropdownOpen(false);
      }}
    >
      {children}
    </Dialog>
  );
};
