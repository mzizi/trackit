import prisma from "@/utils/prisma";

export const getStockCount = async (storeId: string) => {
  const stockCount = await prisma.product.count({
    where: {
      storeId,
      isArchived: false,
    },
  });

  return stockCount;
};
