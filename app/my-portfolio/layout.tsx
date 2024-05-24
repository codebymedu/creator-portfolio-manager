import { ReactNode } from "react";
import { Button } from "@/components/button";
import {
  HiOutlineBriefcase,
  HiOutlineUser,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

type LayoutProps = { children: ReactNode };

const Layout = ({ children }: LayoutProps) => (
  <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 justify-between my-24">
    {children}

    <div className="bg-neutral-100 w-24 self-start rounded-xl hidden lg:flex justify-start p-5 flex-col gap-4 col-span-1">
      <Button
        className="rounded-xl flex justify-center lg:px-4 lg:py-4"
        href="#about"
      >
        <HiOutlineUser size={20} color="#fff" />
      </Button>

      <Button
        className="rounded-xl flex justify-center lg:px-4 lg:py-4"
        href="#work"
      >
        <HiOutlineBriefcase size={20} color="#fff" />
      </Button>

      <Button
        className="rounded-xl flex justify-center lg:px-4 lg:py-4"
        href="#skills"
      >
        <HiOutlineWrenchScrewdriver size={20} color="#fff" />
      </Button>
    </div>
  </div>
);

export default Layout;
