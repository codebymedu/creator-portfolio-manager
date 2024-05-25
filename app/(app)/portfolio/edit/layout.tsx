import { ReactNode } from "react";
import { LayoutSideBarLink } from "@/(app)/portfolio/edit/_components/sidebarLink";

type LayoutProps = { children: ReactNode };

const navigation = [
  { name: "General", href: "/portfolio/edit", current: true },
  { name: "Projects", href: "/portfolio/edit/projects", current: false },
];

const Layout = ({ children }: LayoutProps) => (
  <div className="grid grid-cols-12 ">
    <nav className="flex flex-1 flex-col col-span-3 pr-32" aria-label="Sidebar">
      <ul role="list" className="-mx-2 space-y-1">
        {navigation.map((item) => (
          <LayoutSideBarLink
            href={item.href}
            key={item.name}
            label={item.name}
          />
        ))}
      </ul>
    </nav>

    <div className="col-span-9"> {children}</div>
  </div>
);

export default Layout;
