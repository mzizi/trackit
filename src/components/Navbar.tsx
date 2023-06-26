import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { ListItem } from "@/components/ui/list-item";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import type { NavLink } from "@/types";

const genRandomID = () => crypto.randomUUID().split("-")[0];

interface Props {
  links?: NavLink[];
}

const Navbar: FC<Props> = ({ links = [] }) => {
  const [sideNav, setSideNav] = useState(false);

  return (
    <div className="flex items-center justify-between px-6">
      <Link href="/">
        <div className="relative w-[9rem] h-[3rem]">
          <Image
            fill
            priority
            sizes="700"
            alt="track it"
            src="/logo.png"
            className="object-cover h-auto"
          />
        </div>
      </Link>
      <div className="self-end hidden md:justify-center md:gap-24 md:flex w-max">
        <NavigationMenu>
          <NavigationMenuList className="gap-4">
            {links?.map((link) => (
              <NavigationMenuItem key={`link-${genRandomID()}`}>
                {link.subLinks ? (
                  <NavigationMenuTrigger
                    className={buttonVariants({
                      variant: "link",
                      className:
                        "bg-inherit active:bg-purple-200 hover:bg-purple-200",
                    })}
                  >
                    {link.title}
                  </NavigationMenuTrigger>
                ) : (
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={buttonVariants({
                        variant: "outline",
                        className:
                          "bg-inherit border-current hover:bg-purple-200",
                      })}
                    >
                      {link.title}
                    </NavigationMenuLink>
                  </Link>
                )}
                <NavigationMenuContent>
                  <div className="grid grid-cols-1 gap-2 p-6 w-[400px] ">
                    {link.subLinks?.map((sublink) => (
                      <ListItem
                        key={`sublink-${genRandomID()}`}
                        href={sublink.href}
                        title={sublink.title}
                      >
                        {sublink.description}
                      </ListItem>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="relative self-end">
          <div className="flex items-center self-end gap-8">
            <Link
              href="/register"
              className={buttonVariants({
                variant: "outline",
                className: "w-full",
              })}
            >
              Register
            </Link>
            <Link
              href="/login"
              className={buttonVariants({ className: "w-full" })}
            >
              Login
            </Link>
            <Button
              variant="outline"
              onClick={() => setSideNav(true)}
              className="flex p-0 text-lg border-current rounded aspect-square md:hidden"
            >
              <Icons.menu />
            </Button>
          </div>
          {/* Mobile Nav */}
          <aside
            className={`${
              sideNav ? "block" : "hidden"
            } fixed top-0 bottom-0 left-0 z-50 w-[250px] rounded border border-neutral-300 bg-background transition-all`}
          >
            <div className="grid grid-cols-1 gap-4 p-6">
              <Button
                variant="outline"
                onClick={() => setSideNav(false)}
                className={`${
                  sideNav ? "bg-purple-100" : "bg-transparent"
                } text-lg justify-self-end aspect-square p-0 rounded border-current`}
              >
                <Icons.close />
              </Button>
              {links?.map((link) => {
                if (link.subLinks) {
                  return (
                    <div
                      className="grid w-full grid-cols-1 gap-4 py-2"
                      key={`link-${genRandomID()}`}
                    >
                      <h2 className={buttonVariants({ className: "w-full" })}>
                        {link.title}
                      </h2>
                      {link.subLinks.map((sublink) => (
                        <Link
                          key={`sublink-${genRandomID()}`}
                          href={sublink.href}
                          className={buttonVariants({
                            variant: "outline",
                            className: "w-full h-max",
                          })}
                        >
                          <div className="flex flex-col gap-1">
                            <h3 className="font-semibold underline">
                              {sublink.title}
                            </h3>
                            <p className="text-xs">{sublink.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={buttonVariants({ className: "w-full" })}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
