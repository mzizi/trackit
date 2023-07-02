import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const genRandomID = () =>
  crypto.randomUUID().split("-")[Math.floor(Math.random())];

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "KES",
});
