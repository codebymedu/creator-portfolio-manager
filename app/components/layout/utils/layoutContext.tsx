"use client";

import { ReactNode, createContext, useMemo, useState } from "react";

export const LayoutContext = createContext({
  isSideBarOpen: false,
  setIsSidebarOpen: (isSideBarOpen: boolean) => {},
});

type LayoutProviderProps = { children: ReactNode };

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  // --- STATE ---

  const [isSideBarOpen, setIsSidebarOpen] = useState(false);

  // --- RENDER ---

  return (
    <LayoutContext.Provider value={{ isSideBarOpen, setIsSidebarOpen }}>
      {children}
    </LayoutContext.Provider>
  );
};
