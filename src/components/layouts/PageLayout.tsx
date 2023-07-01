"use client";

import { FC, ReactNode } from "react";

import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
}

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <div className="relative w-full p-8 border rounded-md shadow h-max bg-background text-foreground">
      <section className="w-full h-full p-4 border-2 rounded-md shadow border-border">
        {children}
      </section>
    </div>
  );
};

export default PageLayout;
