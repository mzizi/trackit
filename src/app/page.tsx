"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { GaugeIcon } from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";

import { buttonVariants } from "@/components/ui/button";
import { useStoreModal } from "@/hooks/use-store-modal";
import Layout from "@/components/layouts/DefaultLayout";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <Layout>
      <section className="w-full h-full bg-background">
        <div className="grid h-full max-w-xl gap-16 px-4 py-8 mx-auto text-center lg:text-left lg:container lg:gap-8 lg:p-10 lg:grid-cols-12">
          <div className="flex flex-col justify-center gap-16 lg:gap-16 place-self-center lg:col-span-8">
            <h1 className="text-3xl font-black !leading-snug md:text-5xl xl:text-6xl dark:text-primary">
              Supply Chain Track and Trace System
            </h1>
            <h2 className="font-light !leading-snug text-primary/80 md:text-lg lg:text-xl">
              Alleviate all your concerns a process of determining the current
              and past locations of your company&apos;s unique items or
              properties.
            </h2>
            <div className="flex items-center justify-center w-full gap-8 lg:justify-start lg:w-2/3">
              <SignedIn>
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    variant: "default",
                    size: "lg",
                    className: "!p-6 flex items-center gap-8 w-1/2",
                  })}
                >
                  <GaugeIcon />
                  <span className="font-medium">Dashboard</span>
                </Link>
              </SignedIn>
              <SignedOut>
                <Link
                  href="/sign-up"
                  className={buttonVariants({
                    variant: "outline",
                    className: "text-sm w-full",
                  })}
                >
                  Register
                </Link>
                <Link
                  href="/sign-in"
                  className={buttonVariants({ className: "text-sm w-full" })}
                >
                  Login
                </Link>
              </SignedOut>
            </div>
          </div>
          <div className="relative items-center hidden lg:col-span-4 lg:flex">
            <Image
              fill
              priority
              sizes="700"
              alt="track it"
              src="/images/shipping.svg"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SetupPage;
