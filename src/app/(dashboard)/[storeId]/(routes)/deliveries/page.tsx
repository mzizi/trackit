import prisma from "@/utils/prisma";

import { DeliveryClient } from "./components/client";

const tabs = ["ongoing", "scheduled"];
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
