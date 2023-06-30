import { GetServerSideProps } from "next";

import Dashboard from "@/components/Dashboard";
import { trpc } from "@/utils/trpc";

import type { NextPageWithLayout } from "@/pages/_app";

const Store: NextPageWithLayout = (props) => {
  const query = trpc.getMe.useQuery();
  const data = query.data?.data;

  return <Dashboard />;
};

Store.layout = "app";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      requireAuth: true,
      enableAuth: true,
    },
  };
};

export default Store;
