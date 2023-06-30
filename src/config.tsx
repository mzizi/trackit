import {
  BanknoteIcon,
  DownloadIcon,
  GaugeIcon,
  HelpCircleIcon,
  HomeIcon,
  ListIcon,
  LogOutIcon,
  MapIcon,
  SettingsIcon,
  ShoppingCartIcon,
  StoreIcon,
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
    href: "/app",
  },
  {
    title: "Store",
    icon: <StoreIcon />,
    subLinks: [
      {
        title: "Overview",
        icon: <GaugeIcon />,
        href: "/dashboard/store",
      },
      {
        title: "Stocked Items",
        href: "/dashboard/store/list",
        icon: <ListIcon />,
      },
    ],
  },
  {
    title: "Purchase",
    icon: <ShoppingCartIcon />,
    subLinks: [
      {
        title: "Overview",
        icon: <GaugeIcon />,
        href: "/dashboard/purchase",
      },
      {
        title: "Requested Items",
        href: "/dashboard/purchase/list",
        icon: <ListIcon />,
      },
    ],
  },
  {
    title: "Payment",
    icon: <BanknoteIcon />,
    subLinks: [
      {
        title: "Overview",
        icon: <GaugeIcon />,
        href: "/dashboard/payment",
      },
      {
        title: "Payment Items",
        href: "/dashboard/payment/list",
        icon: <ListIcon />,
      },
    ],
  },
  {
    title: "Delivery",
    icon: <TruckIcon />,
    subLinks: [
      {
        title: "Overview",
        icon: <GaugeIcon />,
        href: "/dashboard/delivery",
      },
      {
        title: "Tracking",
        href: "/dashboard/delivery/tracking",
        icon: <MapIcon />,
      },
    ],
  },
];

export const appSettings: IAppSetting[] = [
  {
    title: "Help",
    variant: "ghost",
    icon: <HelpCircleIcon />,
  },
  {
    title: "Settings",
    variant: "accent",
    icon: <SettingsIcon />,
  },
  // {
  //   title: "Log Out",
  //   variant: "destructive",
  //   icon: <LogOutIcon />,
  // },
];
