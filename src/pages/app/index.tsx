import { GetServerSideProps } from "next";

import Dashboard from "@/components/Dashboard";
import { trpc } from "@/utils/trpc";

import type { NextPageWithLayout } from "@/pages/_app";

const Overview: NextPageWithLayout = (props) => {
  const query = trpc.getMe.useQuery();
  const data = query.data?.data;

  return <Dashboard />;
};

Overview.layout = "app";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      requireAuth: true,
      enableAuth: true,
    },
  };
};

export default Overview;
