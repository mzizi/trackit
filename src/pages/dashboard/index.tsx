import { trpc } from "@/utils/trpc";
import { NextPageWithLayout } from "../_app";
import { GetServerSideProps } from "next";

const DashboardPage: NextPageWithLayout = (props) => {
  const query = trpc.getMe.useQuery();
  const data = query.data?.data;

  return (
    <div className="grid items-center w-full h-full grid-cols-1 gap-4">
      <h1 className="text-2xl text-center capitalize">Welcome</h1>
      <p className="font-semibold text-center capitalize">{data?.user?.name}</p>
    </div>
  );
};

DashboardPage.layout = "app";

// export const getServerSideProps: GetServerSideProps = async () => {
//   return {
//     props: {
//       requireAuth: true,
//       enableAuth: false,
//     },
//   };
// };

export default DashboardPage;
