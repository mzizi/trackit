import { FC, ReactNode } from "react";

import Navbar from "@/components/Navbar";

import type { NavLink } from "@/lib/types";
interface Props {
  links?: NavLink[];
  children: ReactNode;
}

const Layout: FC<Props> = ({ children, links }) => {
  return (
    <main className="flex flex-col items-center min-h-screen gap-4">
      <nav
        style={{ background: "var(--gradient)" }}
        className="sticky inset-0 w-full h-full py-4 border-b-2 md:px-24 border-b-border"
      >
        <Navbar links={links} />
      </nav>

      <section className="flex flex-col w-full px-2 md:px-24">
        {children}
      </section>
    </main>
  );
};

export default Layout;
