"use client";

import { ReactNode, createContext, useState } from "react";

export const HeaderContext = createContext({
  isNavigationDropdownOpen: false,
  setIsNavigationDropdownOpen: (isNavigationDropdownOpen: boolean) => {},
});

type HeaderProviderProps = { children: ReactNode };

export const HeaderProvider = ({ children }: HeaderProviderProps) => {
  // --- STATE ---

  const [isNavigationDropdownOpen, setIsNavigationDropdownOpen] =
    useState(false);

  // --- RENDER ---

  return (
    <HeaderContext.Provider
      value={{ isNavigationDropdownOpen, setIsNavigationDropdownOpen }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
