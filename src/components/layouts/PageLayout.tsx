"use client";

import { FC, ReactNode } from "react";

import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
}

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <div className="relative w-full p-8 border rounded-md shadow h-max bg-background text-foreground">
      <section className="flex flex-col w-full h-full gap-8 px-6 py-4">
        {children}
      </section>
    </div>
  );
};

export default PageLayout;
