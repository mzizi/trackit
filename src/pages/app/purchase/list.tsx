import { MoreHorizontal } from "lucide-react";
import { GetServerSideProps } from "next";

import { DataTable } from "@/components/DataTable";
import PageLayout from "@/components/layouts/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { trpc } from "@/utils/trpc";

import type { ColumnDef } from "@tanstack/react-table";
import type { NextPageWithLayout } from "@/pages/_app";

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: () => <div className="w-2/3 text-center xl:w-2/4">Status</div>,
    cell: ({ row }) => {
      const status = row.getValue("status") as Payment["status"];
      const baseStyle =
        "justify-center xl:w-2/4 w-2/3 p-2 mx-auto capitalize rounded-md border-current";
      const styling =
        status === "failed"
          ? "text-pink-500"
          : status === "processing"
          ? "text-indigo-500"
          : status === "success"
          ? "text-green-500"
          : "text-primary";
      return (
        <Badge variant="outline" className={`${baseStyle} ${styling}`}>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "KES",
      }).format(amount);

      return <div className="font-medium text-right">{formatted}</div>;
    },
  },
  {
    id: "actions",
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <div className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-8 h-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-4 space-y-2 shadow" align="end">
              <DropdownMenuLabel className="text-sm font-extrabold text-gray-600 uppercase">
                Actions
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
];

const StoreItems: NextPageWithLayout = (props) => {
  const query = trpc.getMe.useQuery();
  const data = query.data?.data;

  return (
    <PageLayout>
      <DataTable columns={columns} data={payments} />
    </PageLayout>
  );
};

StoreItems.layout = "app";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      requireAuth: true,
      enableAuth: true,
    },
  };
};

export default StoreItems;
