/* eslint-disable @next/next/no-img-element */
import { ReactNode, useMemo, useState } from "react";

import Sidebar from "@/components/Sidebar";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import Topbar from "@/components/Topbar";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const styles = useMemo(() => {
    const base = {
      aside: "fixed top-0 bottom-0 left-0 z-50 border-r border-gray-400",
      content: "flex-1 flex flex-col justify-center",
    };

    return openSidebar
      ? {
          aside: `${base.aside} w-[15rem]`,
          content: `${base.content} ml-[15rem]`,
        }
      : {
          aside: `${base.aside} w-[5rem]`,
          content: `${base.content} ml-[5rem]`,
        };
  }, [openSidebar]);

  return (
    <main className="relative flex w-full h-full min-h-screen">
      <aside className={styles.aside}>
        <Sidebar collapsed={!openSidebar} />
      </aside>
      <section className={styles.content}>
        <Topbar collapseSidebar={setOpenSidebar} />
        <div className="flex flex-col items-center flex-1 bg-slate-200">
          {children}
        </div>
      </section>
    </main>
  );
};

export default AppLayout;