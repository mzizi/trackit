"use client";

import "./globals.css";

import { Inter } from "next/font/google";

import Layout from "@/components/Layout";
import { navLinks } from "@/lib/config";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout links={navLinks}>{children}</Layout>
      </body>
    </html>
  );
}
