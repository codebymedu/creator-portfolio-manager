import { HiOutlineBriefcase } from "react-icons/hi2";
import { RiHome6Line } from "react-icons/ri";

export const navigationLinks = [
  { id: "dashboard", name: "Dashboard", href: "", icon: RiHome6Line },
  {
    id: "editPortfolio",
    name: "Edit Portfolio",
    href: "/portfolio/edit",
    icon: HiOutlineBriefcase,
  },
];

export const userNavigationLinks = [
  { name: "Your profile", href: "/settings" },
  { name: "Sign out", href: "#" },
];
