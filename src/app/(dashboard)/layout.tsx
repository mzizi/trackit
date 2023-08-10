import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import { ModalProvider } from "@/providers/modal-provider";
import prisma from "@/utils/prisma";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prisma.store.findFirst({
    where: {
      userId,
    },
  });

  if (!store) {
    return <ModalProvider />;
  }

  return <>{children}</>;
}
