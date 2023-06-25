interface Link {
  title: string;
  href: string;
  description?: string;
}

export type NavLink =
  | {
      title: string;
      subLinks: Link[];
    }
  | {
      title: string;
      href: string;
      subLinks?: never;
    };
