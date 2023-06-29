import { ReactNode } from "react";

export interface LinkType {
  title: string;
  href: string;
  icon?: ReactNode;
  description?: string;
}

export type INavLink =
  | {
      title: string;
      href?: never;
      icon?: ReactNode;
      subLinks: LinkType[];
    }
  | {
      title: string;
      href: string;
      icon?: ReactNode;
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
