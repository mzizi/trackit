"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useCallback, useMemo } from "react";
import { LogOutIcon } from "lucide-react";
import { SignOutButton } from "@clerk/nextjs";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/ui/icons";

import { IAppSetting, INavLink } from "@/types";
import { genRandomID } from "@/utils";

interface Props {
  links?: INavLink[];
  collapsed: boolean;
  settings?: IAppSetting[];
}

const Sidebar: FC<Props> = ({ collapsed, links, settings }) => {
  const currentRoute = usePathname();

  const styles = useMemo(() => {
    const col = "w-full grid grid-cols-[1fr,_4fr] gap-4 text-left text-sm";
    const row =
      "w-full flex flex-col gap-1 items-center justify-center text-xs";

    return {
      link: buttonVariants({
        variant: "link",
        className: `${
          collapsed ? row : col
        }  hover:text-indigo-500 dark:text-indigo-200`,
      }),
    };
  }, [collapsed]);

  const isActive = useCallback(
    (link: string) => {
      return currentRoute === link
        ? true
        : link === `${currentRoute}/`
        ? true
        : false;
    },
    [currentRoute]
  );

  return (
    <aside
      className={`fixed top-0 bottom-0 left-0 z-50 bg-background/80 shadow shadow-current/50 ${
        collapsed ? "w-0 lg:w-[5rem]" : "w-[15rem]"
      }`}
    >
      <div className="flex flex-col w-full h-screen gap-0 overflow-y-auto divide-y divide-current/10">
        <div className="sticky top-0 flex items-center w-full h-16 gap-1 px-4 dark:bg-transparent">
          <span
            className={`relative ${
              collapsed ? "w-full mx-auto" : "w-1/4"
            } aspect-square`}
          >
            <Icons.logoIcon className="w-12 h-12 aspect-square" />
          </span>
          {!collapsed && (
            <span className="relative flex items-center flex-1 w-full h-full">
              <Icons.logoIsolated className="object-cover w-full h-auto" />
            </span>
          )}
        </div>
        <div className="flex-1 w-full px-4 pt-16 pb-4 overflow-y-auto h-max">
          <div className={`gap-6 flex flex-col justify-center`}>
            {links?.map((link) => {
              if (collapsed && link.subLinks) {
                return (
                  <DropdownMenu key={`link-${genRandomID()}`}>
                    <DropdownMenuTrigger className={styles.link}>
                      {link.icon && <span>{link.icon}</span>}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      side="right"
                      className="max-w-md px-4 py-6 space-y-2 transition-all ease-in-out translate-x-4 translate-y-6 rounded-md delay-1"
                    >
                      <DropdownMenuLabel className="capitalize text-primary/90">
                        {link.title}
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator className="" />
                      <div className="flex flex-col gap-2">
                        {link.subLinks.map((subLink) => (
                          <DropdownMenuItem
                            className="p-0 text-left"
                            key={`sublink-${genRandomID()}`}
                          >
                            <Link
                              href={subLink.href}
                              className={buttonVariants({
                                variant: "link",
                                className: `${
                                  isActive(subLink.href)
                                    ? "text-indigo-500"
                                    : "text-current"
                                } w-full !p-0 items-center grid grid-cols-[1fr,_3fr] gap-2 text-left text-sm hover:text-indigo-500 dark:hover:text-indigo-200`,
                              })}
                            >
                              {subLink.icon && (
                                <span className="w-4 text-sm aspect-square">
                                  {subLink.icon}
                                </span>
                              )}
                              <span className="flex-1 text-xs">
                                {subLink.title}
                              </span>
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              } else if (link.subLinks && !collapsed) {
                return (
                  <Accordion
                    key={`link-${genRandomID()}`}
                    type="single"
                    collapsible
                  >
                    <AccordionItem
                      value={link.title}
                      className="w-full h-full bg-transparent border-0"
                    >
                      <AccordionTrigger
                        className={buttonVariants({
                          variant: "link",
                          className: `w-full flex items-center gap-2 !no-underline group [&[data-state=open]]:border [&[data-state=open]]:bg-background transition hover:text-indigo-500 dark:hover:text-indigo-200 `,
                        })}
                      >
                        <div className="flex-1 grid grid-cols-[1fr,_4fr] gap-4 text-left text-sm">
                          {link.icon && <span>{link.icon}</span>}
                          <span>{link.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 py-2 space-y-4 text-left">
                        {link.subLinks.map((subLink) => (
                          <Link
                            href={subLink.href}
                            key={`sublink-${genRandomID()}`}
                            className={buttonVariants({
                              variant: "link",
                              className: `${
                                isActive(subLink.href)
                                  ? "text-indigo-500"
                                  : "text-current"
                              } w-full !p-0 items-center grid grid-cols-[1fr,_4fr] gap-2 text-left text-sm hover:text-indigo-500 dark:hover:text-indigo-200`,
                            })}
                          >
                            {subLink.icon && (
                              <span className="w-4 text-sm aspect-square">
                                {subLink.icon}
                              </span>
                            )}
                            <span className="flex-1 text-xs">
                              {subLink.title}
                            </span>
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              } else if (link.href) {
                return (
                  <Link
                    href={link.href}
                    title={link.title}
                    key={`link-${link.href}`}
                    className={buttonVariants({
                      variant: "link",
                      size: collapsed ? "icon" : "default",
                      className: `${
                        collapsed ? "px-0 text-center" : "text-left px-4"
                      } ${
                        isActive(link.href) ? "text-indigo-500" : "text-current"
                      } ${isActive(
                        link.href
                      )} flex items-center w-full gap-4 hover:text-indigo-500 dark:hover:text-indigo-200`,
                    })}
                  >
                    {link.icon && (
                      <span className="text-sm aspect-square">{link.icon}</span>
                    )}
                    {!collapsed && <span className="flex-1">{link.title}</span>}
                  </Link>
                );
              }
            })}
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 p-4 mt-auto overflow-hidden max-h-1/3">
          {settings?.map((setting) => (
            <Link
              href={setting.href}
              title={setting.title}
              key={`link-${setting.href}`}
              className={buttonVariants({
                variant: "link",
                className: `${
                  isActive(setting.href) ? "text-indigo-500" : "text-current"
                } ${
                  collapsed ? "px-0 text-center" : "text-left px-4"
                } flex items-center w-full gap-4`,
              })}
            >
              {setting.icon && (
                <span className="text-sm aspect-square">{setting.icon}</span>
              )}
              {!collapsed && <span className="flex-1">{setting.title}</span>}
            </Link>
          ))}
          <SignOutButton>
            <div
              title="Sign Out"
              className={buttonVariants({
                variant: "link",
                size: collapsed ? "icon" : "default",
                className: `${
                  collapsed ? "px-0 text-center" : "text-left px-4"
                } flex items-center w-full gap-4 cursor-pointer dark:text-pink-300 text-pink-500`,
              })}
            >
              <span className="text-sm aspect-square">
                <LogOutIcon />
              </span>
              {!collapsed && <span className="flex-1">Sign Out</span>}
            </div>
          </SignOutButton>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
