"use client";

import { ReactNode } from "react";
import { Button } from "@/app/components/button";
import {
  HiOutlineBriefcase,
  HiOutlineUser,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

type LayoutProps = { children: ReactNode };

const Layout = ({ children }: LayoutProps) => {
  // --- STATE ---

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // --- CALLBACKS ---

  const handleSwitchSection =
    (sectionName: "aboutMe" | "workSamples" | "skills") => () => {
      const params = new URLSearchParams(searchParams);

      params.set("section", sectionName);

      router.replace(`${pathname}?${params.toString()}`);
    };

  // --- RENDER ---

  return (
    <div className="container mx-auto flex gap-12 justify-between my-24">
      {children}

      <div className="bg-neutral-100 w-32 self-start rounded-xl flex justify-start p-5 flex-col gap-4">
        <Button
          className="rounded-xl flex justify-center px-4 py-4"
          handleClick={handleSwitchSection("aboutMe")}
        >
          <HiOutlineUser size={20} color="#fff" />
        </Button>

        <Button
          className="rounded-xl flex justify-center px-4 py-4"
          handleClick={handleSwitchSection("workSamples")}
        >
          <HiOutlineBriefcase size={20} color="#fff" />
        </Button>

        <Button
          className="rounded-xl flex justify-center px-4 py-4 "
          handleClick={handleSwitchSection("skills")}
        >
          <HiOutlineWrenchScrewdriver size={20} color="#fff" />
        </Button>
      </div>
    </div>
  );
};
export default Layout;
