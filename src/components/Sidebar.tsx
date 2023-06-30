import Link from "next/link";
// import { useRouter } from "next/router";
import { FC, useMemo } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
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
  user?: {
    name: string;
    avatar?: string;
  };
  links?: INavLink[];
  settings?: IAppSetting[];
  collapsed: boolean;
}

const Sidebar: FC<Props> = ({ collapsed, links, user, settings }) => {
  // const router = useRouter();

  const styles = useMemo(() => {
    const col = "w-full grid grid-cols-[1fr,_4fr] gap-4 text-left text-sm";
    const row =
      "w-full flex flex-col gap-1 items-center justify-center text-xs";

    return {
      link: buttonVariants({
        variant: "ghost",
        className: `${collapsed ? row : col}`,
      }),
    };
  }, [collapsed]);

  return (
    <div className="flex flex-col w-full h-screen gap-0 overflow-y-auto divide-y-2 divide-border">
      <div className="sticky top-0 flex items-center w-full h-16 gap-1 bg-primary/90 text-primary-foreground">
        <span
          className={`relative ${
            collapsed ? "w-3/4 mx-auto" : "w-1/4"
          } aspect-square`}
        >
          <Icons.logoIcon className="object-cover w-full h-full" />
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
                    <DropdownMenuSeparator className="bg-primary" />
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
                              className:
                                "w-full !p-0 items-center grid grid-cols-[1fr,_3fr] gap-2 text-left text-sm hover:text-indigo-500",
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
                    className="w-full overflow-hidden border-0 rounded-md bg-accent h-max"
                  >
                    <AccordionTrigger
                      className={buttonVariants({
                        variant: "ghost",
                        className: `w-full flex items-center gap-2 !no-underline [&[data-state=open]]:border [&[data-state=open]]:bg-background transition `,
                      })}
                      // onClick={() => router.push(link?.subLinks[0]?.href)}
                    >
                      <div className="flex-1 grid grid-cols-[1fr,_4fr] gap-4 text-left text-sm">
                        {link.icon && <span>{link.icon}</span>}
                        <span>{link.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-2 space-y-4 text-left bg-transparent border-b border-l border-r rounded shadow border-border">
                      {link.subLinks.map((subLink) => (
                        <Link
                          href={subLink.href}
                          key={`sublink-${genRandomID()}`}
                          className={buttonVariants({
                            variant: "secondary",
                            className:
                              "w-full !p-0 items-center grid grid-cols-[1fr,_4fr] gap-2 text-left text-sm hover:text-indigo-500",
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
                <Button
                  key={`link-${link.href}`}
                  variant="ghost"
                  className={`${
                    collapsed ? "px-0 text-center" : "text-left px-4"
                  } flex items-center w-full gap-4`}
                >
                  {link.icon && (
                    <span className="text-sm aspect-square">{link.icon}</span>
                  )}
                  {!collapsed && <span className="flex-1">{link.title}</span>}
                </Button>
              );
            }
          })}
        </div>
      </div>
      <div className="flex flex-col w-full gap-4 p-4 mt-auto overflow-hidden max-h-1/3">
        {settings?.map((setting) => (
          <Button
            key={`link-${genRandomID()}`}
            variant={setting.variant}
            className={`${
              collapsed ? "px-0 text-center" : "text-left px-4"
            } flex items-center w-full gap-4`}
          >
            {setting.icon && (
              <span className="text-sm aspect-square">{setting.icon}</span>
            )}
            {!collapsed && <span className="flex-1">{setting.title}</span>}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
