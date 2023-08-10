"use client";

import { FC, ReactNode } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import type { INavLink } from "@/types";
interface Props {
  links?: INavLink[];
  children: ReactNode;
}

const Layout: FC<Props> = ({ children, links }) => {
  return (
    <main className="relative flex flex-col h-full min-h-screen gap-4">
      <nav className="sticky inset-0 w-full h-full py-4 border-b-2 bg-accent lg:px-24 border-b-border">
        <Navbar navItems={links} />
      </nav>

      <section className="flex flex-col justify-center flex-1 w-full px-2 lg:px-24">
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
