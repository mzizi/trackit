import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

import NavbarAuth from "@/components/NavbarAuth";
import { Button, buttonVariants } from "@/components/ui/button";
import { ListItem } from "@/components/ui/list-item";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { genRandomID } from "@/utils";

import type { INavLink } from "@/types";
interface Props {
  links?: INavLink[];
}

const Navbar: FC<Props> = ({ links = [] }) => {
  const [sideNav, setSideNav] = useState(false);

  return (
    <div className="flex items-center justify-between px-6">
      <Link href="/">
        <div className="relative w-[8rem] h-[2rem] text-primary">
          <Image
            fill
            priority
            sizes="700"
            alt="track it"
            src="/images/logo.svg"
            className="object-contain"
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
                        "bg-inherit active:bg-indigo-200 hover:bg-indigo-200",
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
                          "bg-inherit border-current active:bg-indigo-200 hover:bg-indigo-200",
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

        <div className="flex items-center justify-center flex-1 gap-8 w-max">
          <NavbarAuth />
          <Button
            variant="outline"
            onClick={() => setSideNav((prev) => !prev)}
            className="flex p-0 text-lg border-current rounded md:hidden aspect-square"
          >
            {sideNav ? <XIcon /> : <MenuIcon />}
          </Button>
        </div>
        {/* Mobile Nav */}
        <div
          onClick={() => setSideNav((prev) => !prev)}
          className={`${
            sideNav ? "block" : "hidden"
          } fixed inset-0 left-0 z-50 bg-black/30`}
        >
          <aside className="p-6 h-full bg-background backdrop-blur-md w-[250px] rounded border border-neutral-300 transition-all">
            <div className="relative flex items-center w-full gap-8 pb-8">
              <strong className="flex-1 p-4 text-lg uppercase">Menu</strong>
              <Button
                variant="default"
                onClick={() => setSideNav(false)}
                className={`text-lg aspect-square !p-0 rounded-full`}
              >
                <XIcon />
              </Button>
            </div>
            {links?.map((link) => {
              if (link.subLinks) {
                return (
                  <div
                    key={`link-${genRandomID()}`}
                    className="flex flex-col w-full gap-2 p-4 divide-y divide-neutral-400 dark:divide-neutral-200"
                  >
                    <strong className="w-full font-sans font-bold text-primary/80">
                      {link.title}
                    </strong>
                    <div className="flex flex-col flex-1 w-full gap-4 py-4 ">
                      {link?.subLinks.map((sublink) => (
                        <Link
                          key={`sublink-${genRandomID()}`}
                          href={sublink.href}
                          className="flex-1 text-sm font-medium hover:text-indigo-800 hover:underline"
                        >
                          {sublink.title}
                        </Link>
                      ))}
                    </div>
                    <div className="self-end">
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
                        className={buttonVariants({
                          className: "text-sm w-full",
                        })}
                      >
                        Login
                      </Link>
                    </div>
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
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
