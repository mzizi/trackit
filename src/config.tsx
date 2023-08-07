import {
  DownloadIcon,
  HelpCircleIcon,
  HomeIcon,
  MapIcon,
  PackageIcon,
  PaletteIcon,
  RulerIcon,
  SettingsIcon,
  StoreIcon,
  TagsIcon,
  UsersIcon,
} from "lucide-react";

import type { IAppSetting, INavLink } from "@/types";

export const navLinks: INavLink[] = [
  {
    title: "Resources",
    href: "/resources",
    icon: <DownloadIcon />,
    subLinks: [
      {
        title: "API Documentation",
        href: "/api-doc",
        description: "View Swagger documentation for API",
      },
      {
        title: "View on Github",
        href: "https://github.com/rodgersgitau/trackit",
        description: "View github repository",
      },
    ],
  },
];

export const appLinks: INavLink[] = [
  {
    title: "Home",
    icon: <HomeIcon />,
    href: "/",
  },
  {
    title: "Orders",
    icon: <PackageIcon />,
    href: "/orders",
  },
  {
    title: "Deliveries",
    icon: <MapIcon />,
    href: "/deliveries",
  },
  {
    title: "Customers",
    icon: <UsersIcon />,
    href: "/customers",
  },
  {
    title: "Products",
    icon: <StoreIcon />,
    href: "/products",
    subLinks: [
      {
        title: "Categories",
        icon: <TagsIcon />,
        href: "/categories",
      },
      {
        title: "Sizes",
        icon: <RulerIcon />,
        href: "/sizes",
      },
      {
        title: "Colors",
        icon: <PaletteIcon />,
        href: "/colors",
      },
    ],
  },
  // {
  //   title: "Payments",
  //   icon: <BanknoteIcon />,
  //   href: "/payments",
  // },
];

export const appSettings: IAppSetting[] = [
  {
    title: "Help",
    variant: "ghost",
    href: "/help",
    icon: <HelpCircleIcon />,
  },
  {
    title: "Settings",
    variant: "accent",
    href: "/settings",
    icon: <SettingsIcon />,
  },
  // {
  //   title: "Log Out",
  //   variant: "destructive",
  //   icon: <LogOutIcon />,
  // },
];
