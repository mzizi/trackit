import Dashboard from "@/components/Dashboard";
import PageLayout from "@/components/layouts/PageLayout";
import { BanknoteIcon, ShoppingBagIcon } from "lucide-react";
import { PackageIcon, SmileIcon } from "lucide-react";

const page = async ({}) => {
  return (
    <PageLayout>
      <Dashboard
        title="Dashboard"
        description="Overview of your store"
        metrics={[
          {
            trend: 25,
            icon: <ShoppingBagIcon />,
            label: "Orders",
            value: 17500,
          },
          {
            trend: -18,
            icon: <PackageIcon />,
            label: "Shipments",
            value: 1800,
          },
          {
            trend: 25,
            icon: <SmileIcon />,
            label: "Happy Customers",
            value: 7500,
          },
          {
            trend: 0,
            icon: <BanknoteIcon />,
            label: "Payments",
            value: 3600,
          },
        ]}
      />
    </PageLayout>
  );
};

export default page;
