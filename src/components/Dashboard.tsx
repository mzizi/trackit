import Overview from "@/components/charts/Overview";
import Metric from "@/components//ui/metric";
import { SmileIcon } from "lucide-react";

const Dashboard = async () => {
  return (
    <div className="container relative border rounded-md shadow bg-background text-foreground">
      <div className="flex flex-col w-full h-full gap-4 divide-y min-h-fit divide-border">
        <div className="flex items-center justify-between w-full">
          <div className="grid items-center w-full h-full gap-2 p-4 sm:w-1/2">
            <h1 className="text-5xl font-extrabold leading-snug">Dashboard</h1>
            <p className="text-sm font-normal">Overview of your store</p>
          </div>
          <section className="flex flex-wrap items-center justify-between w-full">
            <Metric
              icon={<SmileIcon />}
              label="Happy Customers"
              value="+7500"
              trend={25}
            />
            <Metric
              icon={<SmileIcon />}
              label="Happy Customers"
              value="+7500"
              trend={25}
            />
            <Metric
              icon={<SmileIcon />}
              label="Happy Customers"
              value="+7500"
              trend={25}
            />
            <Metric
              icon={<SmileIcon />}
              label="Happy Customers"
              value="+7500"
              trend={25}
            />
          </section>
        </div>
        <div className="flex items-center justify-center flex-1 w-full p-4 h-[60%]">
          <Overview
            data={[
              { name: "Jan", total: 0 },
              { name: "Feb", total: 10 },
              { name: "Mar", total: 20 },
              { name: "Apr", total: 30 },
              { name: "May", total: 40 },
              { name: "Jun", total: 50 },
              { name: "Jul", total: 60 },
              { name: "Aug", total: 65 },
              { name: "Sep", total: 70 },
              { name: "Oct", total: 80 },
              { name: "Nov", total: 90 },
              { name: "Dec", total: 95 },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
