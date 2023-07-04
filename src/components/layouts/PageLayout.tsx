"use client";

import { FC, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

interface Props {
  title?: string;
  subtitle?: string;
  children: ReactNode;
}

const PageLayout: FC<Props> = ({ title, subtitle, children }) => {
  return (
    <div className="relative w-full h-full border rounded-md shadow bg-background text-foreground">
      {title && subtitle && <Heading title={title} description={subtitle} />}
      <section className="flex flex-col w-full h-full gap-4 p-8 lg:px-12 lg:py-8 ">
        {children}
      </section>
    </div>
  );
};

export default PageLayout;
