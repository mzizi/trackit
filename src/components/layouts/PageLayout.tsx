"use client";

import { FC, ReactNode } from "react";

import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
}

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <div className="relative w-full h-full border rounded-md shadow bg-background text-foreground">
      <section className="flex flex-col w-full h-full gap-4 p-8 lg:px-12 lg:py-8 ">
        {children}
      </section>
    </div>
  );
};

export default PageLayout;
