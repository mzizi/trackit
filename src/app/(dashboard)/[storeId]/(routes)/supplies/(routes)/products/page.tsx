import { format } from "date-fns";

import { formatter } from "@/utils";
import prisma from "@/utils/prisma";

import { ProductsClient } from "./components/client";
import { ProductColumn } from "./components/columns";

const ProductList = async ({ params }: { params: { storeId: string } }) => {
  const products = await prisma.product.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      category: true,
      size: true,
      color: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedProducts: ProductColumn[] = products.map((item) => ({
    id: item.id,
    name: item.name,
    isFeatured: item.isFeatured,
    isArchived: item.isArchived,
    price: formatter.format(item.price.toNumber()),
    category: item.category.name,
    size: item.size.name,
    color: item.color.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return <ProductsClient data={formattedProducts} />;
};

export default ProductList;
