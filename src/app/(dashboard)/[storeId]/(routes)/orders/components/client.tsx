"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ApiList } from "@/components/ui/api-list";

import { columns, OrderColumn } from "./columns";

interface OrderClientProps {
  data: OrderColumn[];
}

export const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Orders (${data.length})`}
          description="Manage orders"
        />
        <Button onClick={() => router.push(`/${params.storeId}/orders/new`)}>
          <Plus className="w-4 h-4 mr-2" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="products" columns={columns} data={data} />
      <Separator />
      <ApiList title="Orders" entityName="orders" entityIdName="orderId" />
    </>
  );
};
