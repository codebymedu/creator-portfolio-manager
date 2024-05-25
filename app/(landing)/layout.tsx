import { ReactNode } from "react";
import { Footer } from "@/(landing)/_components/footer";
import { Header } from "@/(landing)/_components/header/header";

type LayoutProps = { children: ReactNode };

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />

    {children}

    <Footer />
  </>
);

export default Layout;
