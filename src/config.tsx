import {
  DownloadIcon,
  FileLineChartIcon,
  GaugeIcon,
  HelpCircleIcon,
  HomeIcon,
  ListIcon,
  ShoppingCartIcon,
  StoreIcon,
} from "lucide-react";

import type { INavLink } from "@/types";

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
    subLinks: [
      {
        title: "Overview",
        icon: <GaugeIcon />,
        href: "/dashboard",
      },
      {
        title: "Reports",
        href: "/dashboard/reports",
        icon: <FileLineChartIcon />,
      },
    ],
  },
  {
    title: "Store",
    icon: <StoreIcon />,
    subLinks: [
      {
        title: "Overview",
        icon: <GaugeIcon />,
        href: "/store",
      },
      {
        title: "Stocked Items",
        href: "/store/items",
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
        href: "/purchase",
      },
      {
        title: "Requested Items",
        href: "/purchase/items",
        icon: <ListIcon />,
      },
    ],
  },
  {
    title: "Help",
    icon: <HelpCircleIcon />,
    href: "/help",
  },
];
