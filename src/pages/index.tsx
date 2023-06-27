import Link from "next/link";
import Image from "next/image";

import { NextPageWithLayout } from "./_app";
import { buttonVariants } from "@/components/ui/button";

const IndexPage: NextPageWithLayout = () => {
  return (
    <section className="bg-background">
      <div className="container grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="flex flex-col gap-8 lg:gap-16 place-self-center lg:col-span-7">
          <h1 className="text-4xl font-black !leading-snug md:text-5xl xl:text-6xl dark:text-primary">
            Supply Chain Track and Trace System
          </h1>
          <h2 className="font-light text-primary/80 !leading-snug md:text-lg lg:text-xl">
            Alleviate all your concerns a process of determining the current and
            past locations of your company&apos;s unique items or properties.
          </h2>
          <div className="flex items-center justify-center w-2/3 gap-8">
            <Link
              href="/register"
              className={buttonVariants({
                variant: "outline",
                className: "text-sm w-full",
              })}
            >
              Register
            </Link>
            <Link
              href="/login"
              className={buttonVariants({ className: "text-sm w-full" })}
            >
              Login
            </Link>
          </div>
        </div>
        <div className="relative items-center hidden lg:col-span-5 lg:flex">
          <Image
            fill
            priority
            sizes="700"
            alt="track it"
            src="/images/shipping.svg"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default IndexPage;
