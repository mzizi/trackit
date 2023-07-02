import {
  BanknoteIcon,
  DownloadIcon,
  GaugeIcon,
  HelpCircleIcon,
  HomeIcon,
  ListIcon,
  LogOutIcon,
  MapIcon,
  MegaphoneIcon,
  PaletteIcon,
  RulerIcon,
  SettingsIcon,
  ShoppingCartIcon,
  StoreIcon,
  TagsIcon,
  TruckIcon,
} from "lucide-react";

import type { IAppSetting, INavLink } from "@/types";

export const navLinks: INavLink[] = [
  {
    title: "Resources",
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
    title: "Products",
    icon: <StoreIcon />,
    href: "/products",
  },
  {
    title: "Billboards",
    icon: <MegaphoneIcon />,
    href: "/billboards",
  },
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
  {
    title: "Orders",
    icon: <ShoppingCartIcon />,
    href: "/orders",
  },
  // {
  //   title: "Payments",
  //   icon: <BanknoteIcon />,
  //   href: "/payments",
  // },
  // {
  //   title: "Delivery",
  //   icon: <TruckIcon />,
  //   subLinks: [
  //     {
  //       title: "Overview",
  //       icon: <ListIcon />,
  //       href: "/delivery",
  //     },
  //     {
  //       title: "Tracking",
  //       href: "/delivery/tracking",
  //       icon: <MapIcon />,
  //     },
  //   ],
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
