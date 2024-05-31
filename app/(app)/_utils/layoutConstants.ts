import { HiOutlineBriefcase } from "react-icons/hi2";
import { RiHome6Line } from "react-icons/ri";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdOutlineAttachMoney } from "react-icons/md";

export const navigationLinks = [
  { id: "dashboard", name: "Dashboard", href: "/dashboard", icon: RiHome6Line },
  {
    id: "editPortfolio",
    name: "Edit Portfolio",
    href: "/portfolio/edit",
    icon: HiOutlineBriefcase,
  },
  {
    id: "gigs",
    name: "Manage Gigs (soon)",
    href: "#",
    icon: MdOutlineAttachMoney,
  },
  {
    id: "subscribe",
    name: "Try Pro for free (soon)",
    href: "#",
    icon: AiFillThunderbolt,
  },
];

export const userNavigationLinks = [
  { name: "Your profile", href: "/settings" },
  { name: "Sign out", href: "#" },
];
