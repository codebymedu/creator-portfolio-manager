import { HiOutlineBriefcase } from "react-icons/hi2";
import { RiHome6Line } from "react-icons/ri";

export const navigationLinks = [
  { id: "dashboard", name: "Dashboard", href: "/app", icon: RiHome6Line },
  {
    id: "editPortfolio",
    name: "Edit Portfolio",
    href: "/app/portfolio/edit",
    icon: HiOutlineBriefcase,
  },
];

export const userNavigationLinks = [
  { name: "Your profile", href: "/app/settings" },
  { name: "Sign out", href: "#" },
];
