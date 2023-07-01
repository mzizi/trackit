"use client";

import { ReactNode, useState } from "react";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { appLinks, appSettings } from "@/config";

const AppLayout = ({
  children,
  stores,
}: {
  children: ReactNode;
  stores?: Record<string, any>[];
}) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <main className="relative flex flex-col w-full h-full min-h-screen">
      <Sidebar links={appLinks} settings={appSettings} collapsed={collapsed} />

      <section
        className={`${
          collapsed ? "ml-[5rem]" : "ml-[15rem]"
        } flex-1 flex flex-col gap-4 bg-border`}
      >
        <Topbar
          stores={stores}
          collapsed={collapsed}
          collapseSidebar={setCollapsed}
        />
        <div className="flex flex-col flex-1 w-full h-full gap-4 p-4">
          {children}
        </div>
      </section>
    </main>
  );
};

export default AppLayout;
