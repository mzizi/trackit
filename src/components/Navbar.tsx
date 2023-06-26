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

interface Props {
  links?: NavLink[];
}

const Navbar: FC<Props> = ({ links = [] }) => {
  const [sideNav, setSideNav] = useState(false);

  return (
    <div className="flex items-center justify-between px-6 md:gap-24">
      <Link href="/" className="w-[100px] h-[20]">
        <Image
          width={100}
          height={20}
          alt="track it"
          src="/logo.png"
          className="object-cover w-full h-auto"
        />
      </Link>
      <div className="flex-1 hidden w-max md:block">
        <NavigationMenu>
          <NavigationMenuList className="gap-4">
            {links?.map((link, idx) => (
              <NavigationMenuItem
                key={`link-${Math.floor(Math.random() * idx)}`}
              >
                {link.subLinks ? (
                  <NavigationMenuTrigger
                    className={buttonVariants({
                      variant: "ghost",
                    })}
                  >
                    {link.title}
                  </NavigationMenuTrigger>
                ) : (
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={buttonVariants({
                        variant: "ghost",
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
                        key={sublink.href}
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
      </div>
      <div className="relative self-end">
        <Button
          variant="outline"
          onClick={() => setSideNav(true)}
          className="flex p-0 text-lg border-current rounded aspect-square md:hidden"
        >
          <Icons.menu />
        </Button>
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
            {links?.map((link, idx) => {
              if (link.subLinks) {
                return (
                  <div
                    className="grid w-full grid-cols-1 gap-4 py-2"
                    key={`link- ${Math.floor(Math.random() * idx)}`}
                  >
                    <h2 className={buttonVariants({ className: "w-full" })}>
                      {link.title}
                    </h2>
                    {link.subLinks.map((sublink) => (
                      <Link
                        key={sublink.href}
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
  );
};

export default Navbar;
