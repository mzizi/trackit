"use client";

import { ReactNode, useMemo, useState } from "react";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { appLinks, appSettings } from "@/config";
import { redirect, useParams } from "next/navigation";
import { IAppSetting, INavLink } from "@/types";

const AppLayout = ({
  children,
  stores,
}: {
  children: ReactNode;
  stores?: Record<string, any>[];
}) => {
  const params = useParams();

  const links = useMemo(() => {
    if (params.storeId) {
      return appLinks.map((link) => ({
        ...link,
        href: link.href ? `/${params.storeId}${link.href}` : undefined,
      })) as INavLink[];
    }
    return appLinks;
  }, [params.storeId]);

  const settings = useMemo(() => {
    if (params.storeId) {
      return appSettings.map((link) => ({
        ...link,
        href: `/${params.storeId}${link.href}`,
      })) as IAppSetting[];
    }
    return appSettings;
  }, [params.storeId]);

  const [collapsed, setCollapsed] = useState(true);
  return (
    <main className="relative flex flex-col w-full h-full min-h-screen">
      <Sidebar links={links} settings={settings} collapsed={collapsed} />

      <section
        className={`${
          collapsed ? "lg:ml-[5rem]" : "lg:ml-[15rem]"
        } flex-1 flex flex-col gap-4 bg-border`}
      >
        <Topbar
          stores={stores}
          collapsed={collapsed}
          collapseSidebar={setCollapsed}
        />
        <div className="flex flex-col flex-1 h-full gap-4 lg:px-4">
          {children}
        </div>
      </section>
    </main>
  );
};

export default AppLayout;
