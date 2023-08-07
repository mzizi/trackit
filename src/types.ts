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

export type INavLink =
  | {
      title: string;
      href: string;
      icon?: ReactNode;
      subLinks: LinkType[];
    }
  | {
      title: string;
      href: string;
      icon?: ReactNode;
      subLinks?: never;
    };

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

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}
