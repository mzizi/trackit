import {
  BanknoteIcon,
  LayersIcon,
  PackageIcon,
  ShoppingBagIcon,
  SmileIcon,
} from "lucide-react";

import { getStockCount } from "@/actions/get-stock-count";
import { getSalesCount } from "@/actions/get-sales-count";
import { getTotalRevenue } from "@/actions/get-total-revenue";

import Dashboard from "@/components/Dashboard";
import PageLayout from "@/components/layouts/PageLayout";

interface Props {
  params: {
    storeId: string;
  };
}

const Page = async ({ params }: Props) => {
  const salesCount = await getSalesCount(params.storeId);
  const stockCount = await getStockCount(params.storeId);
  const totalRevenue = await getTotalRevenue(params.storeId);

  return (
    <PageLayout>
      <Dashboard
        title="Dashboard"
        description="Overview of your store"
        metrics={[
          {
            trend: 25,
            icon: <ShoppingBagIcon />,
            label: "Sales",
            value: salesCount,
          },
          {
            trend: 0,
            icon: <LayersIcon />,
            label: "Stock",
            value: stockCount,
          },
          {
            trend: 25,
            icon: <SmileIcon />,
            label: "Happy Customers",
            value: 7500,
          },
          {
            trend: -18,
            icon: <BanknoteIcon />,
            label: "Total Revenue",
            value: totalRevenue,
          },
        ]}
      />
    </PageLayout>
  );
};

export default Page;
