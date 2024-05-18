import { ReactNode } from "react";
import { Button } from "@/app/components/button";
import {
  HiOutlineBriefcase,
  HiOutlineUser,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

type LayoutProps = { children: ReactNode };

const Layout = ({ children }: LayoutProps) => (
  <div className="container mx-auto flex gap-12 justify-between my-24">
    {children}

    <div className="bg-neutral-100 w-32 self-start rounded-xl flex justify-start p-5 flex-col gap-4">
      <Button
        className="rounded-xl flex justify-center px-4 py-4"
        href="#about"
      >
        <HiOutlineUser size={20} color="#fff" />
      </Button>

      <Button className="rounded-xl flex justify-center px-4 py-4" href="#work">
        <HiOutlineBriefcase size={20} color="#fff" />
      </Button>

      <Button
        className="rounded-xl flex justify-center px-4 py-4 "
        href="#skills"
      >
        <HiOutlineWrenchScrewdriver size={20} color="#fff" />
      </Button>
    </div>
  </div>
);

export default Layout;
