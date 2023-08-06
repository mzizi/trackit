import { format } from "date-fns";

import prisma from "@/utils/prisma";

import { SizeColumn } from "./components/columns";
import { SizesClient } from "./components/client";
import PageLayout from "@/components/layouts/PageLayout";

const SizesPage = async ({ params }: { params: { storeId: string } }) => {
  const sizes = await prisma.size.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedSizes: SizeColumn[] = sizes.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <PageLayout>
      <div className="flex-1 p-8 pt-6 space-y-4">
        <SizesClient data={formattedSizes} />
      </div>
    </PageLayout>
  );
};

export default SizesPage;
