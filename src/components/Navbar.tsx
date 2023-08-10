import Link from "next/link";
import Image from "next/image";
import { FC, useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { ListItem } from "@/components/ui/list-item";
import NavbarAuth from "@/components/NavbarAuth";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ThemeToggle from "@/components/ThemeToggle";
import { genRandomID } from "@/utils";

import type { INavLink } from "@/types";
interface Props {
  navItems?: INavLink[];
}

const Navbar: FC<Props> = ({ navItems = [] }) => {
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
            {navItems.map((navItem) => {
              if (navItem.subLinks) {
                return (
                  <NavigationMenuItem key={navItem.href}>
                    <NavigationMenuTrigger>
                      {navItem.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-4 p-6 grid-cols-1 lg:grid-cols-[.75fr_2fr] w-[350px] lg:w-[700px]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex flex-col justify-end w-full h-full p-6 no-underline border rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                              href="/"
                            >
                              <Icons.logo className="w-6 h-6" />
                              <div className="mt-4 mb-2 text-lg font-medium">
                                {navItem.title}
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                {navItem.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li className="row-span-3">
                          <ul className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2 ">
                            {navItem.subLinks.map((subLink) => (
                              <ListItem
                                key={subLink.title}
                                title={subLink.title}
                                href={subLink.href}
                              >
                                {subLink.description}
                              </ListItem>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              } else {
                return (
                  <NavigationMenuItem key={navItem.href}>
                    <Link href={navItem.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {navItem.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              }
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center justify-center flex-1 gap-8 w-max">
          <NavbarAuth />
          <ThemeToggle />
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
            {navItems?.map((link) => {
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
