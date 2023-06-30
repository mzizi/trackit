import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import AppLayout from "@/components/layouts/AppLayout";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return <AppLayout>{children}</AppLayout>;
}
