import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import DefaultLayout from "@/components/layouts/DefaultLayout";

import db from "@/utils/prisma";
import { navLinks } from "@/config";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (userId) {
    const store = await db.store.findFirst({
      where: {
        userId,
      },
    });

    if (store) {
      redirect(`/${store.id}`);
    }
  }

  return <DefaultLayout links={navLinks}>{children}</DefaultLayout>;
}
