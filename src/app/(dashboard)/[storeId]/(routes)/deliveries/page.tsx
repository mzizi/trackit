import prisma from "@/utils/prisma";

import PageLayout from "@/components/layouts/PageLayout";
import { DeliveryClient } from "./components/client";

const tabs = ["new-delivery", "ongoing", "scheduled"];
const stops = [];

const DeliveryPage = async ({ params }: { params: { storeId: string } }) => {
  const sizes = await prisma.size.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return <DeliveryClient tabs={tabs.map((tab) => ({ value: tab }))} />;
};

export default DeliveryPage;
