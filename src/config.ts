import type { NavLink } from "@/types";

export const navLinks: NavLink[] = [
  {
    title: "Resources",
    subLinks: [
      {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
      },
      {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
          "For sighted users to preview content available behind a link.",
      },
      {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
          "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      },
    ],
  },
  {
    title: "View on Github",
    href: "https://github.com/rodgersgitau/trackit",
  },
];
