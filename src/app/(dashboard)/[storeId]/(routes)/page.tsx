import Dashboard from "@/components/Dashboard";
import PageLayout from "@/components/layouts/PageLayout";

const page = async ({}) => {
  return (
    <PageLayout>
      <Dashboard title="Dashboard" description="Overview of your store" />
    </PageLayout>
  );
};

export default page;
