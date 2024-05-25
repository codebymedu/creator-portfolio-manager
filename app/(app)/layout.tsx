import { ReactNode } from "react";
import { LayoutSideBarMobile } from "@/(app)/_components/sidebar/mobile/sidebar";
import { LayoutSideBarDesktop } from "@/(app)/_components/sidebar/desktop/sidebar";
import { LayoutHeader } from "@/(app)/_components/header/header";
import { LayoutProvider } from "@/(app)/_utils/layoutContext";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <LayoutProvider>
    <LayoutSideBarMobile />

    <LayoutSideBarDesktop />

    <div className="lg:pl-72">
      <LayoutHeader />

      <main className="py-10">
        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  </LayoutProvider>
);

export default Layout;
