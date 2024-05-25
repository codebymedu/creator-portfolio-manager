"use client";

import { Button } from "@/_components/button";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { HiPlus } from "react-icons/hi2";

export const NewProjectDialogOpenButton = () => {
  // --- STATE ---

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // --- CALLBACKS ---

  const handleOpen = () => {
    console.log("asdddddddddddd");
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("dialog", "new-project");

    router.replace(`${pathname}?${newSearchParams.toString()}`, {
      scroll: false,
    });
  };

  // --- RENDER ---

  return (
    <Button handleClick={handleOpen} className="lg:px-6">
      <HiPlus className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
      New Project
    </Button>
  );
};
