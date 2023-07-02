import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import AppLayout from "@/components/layouts/AppLayout";
import prisma from "@/utils/prisma";
import PageLayout from "@/components/layouts/PageLayout";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prisma.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <AppLayout stores={stores}>
      <PageLayout>{children}</PageLayout>
    </AppLayout>
  );
}
