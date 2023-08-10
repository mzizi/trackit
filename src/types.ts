import { ReactNode } from "react";

export type VariantType =
  | "link"
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "accent"
  | "ghost"
  | null
  | undefined;

export interface LinkType {
  title: string;
  href: string;
  icon?: ReactNode;
  description?: string;
}

export type INavLink = LinkType &
  (
    | {
        subLinks: LinkType[];
      }
    | {
        subLinks?: never;
      }
  );

export interface IAppSetting extends LinkType {
  variant: VariantType;
  icon: JSX.Element;
}

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
