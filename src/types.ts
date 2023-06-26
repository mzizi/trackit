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

export interface IUser {
  _id: string;
  id: string;
  email: string;
  name: string;
  role: string;
  photo?: string;
  updatedAt: string;
  createdAt: string;
}
