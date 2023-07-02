import { SmileIcon } from "lucide-react";

import Metric from "@/components/ui/metric";
import Barchart from "@/components/charts/Barchart";

interface Props {
  title?: string;
  description?: string;
}

const Dashboard = async (props: Props) => {
  return (
    <div className="relative w-full h-full">
      <div className="flex flex-col w-full h-full gap-8 divide-y divide-border">
        <div className="flex flex-col items-center justify-between w-full gap-6 lg:flex-row">
          <div className="grid items-center w-full h-full gap-4 lg:text-start lg:w-1/2 2xl:w-1/3">
            <h1 className="text-5xl font-extrabold leading-snug">
              {props.title}
            </h1>
            <h4 className="text-sm font-medium text-foreground/90">
              {props.description}
            </h4>
          </div>
          <section className="grid flex-1 grid-cols-1 gap-2 lg:w-1/2 2xl:grid-cols-4">
            <Metric
              icon={<SmileIcon />}
              label="Happy Customers"
              value={7500}
              trend={0}
            />
            <Metric
              icon={<SmileIcon />}
              label="Happy Customers"
              value={2400}
              trend={-25}
            />
            <Metric
              icon={<SmileIcon />}
              label="Happy Customers"
              value={100}
              trend={-75}
            />
            <Metric
              icon={<SmileIcon />}
              label="Happy Customers"
              value={300}
              trend={25}
            />
          </section>
        </div>
        <div className="flex flex-col items-center w-full h-full gap-8 p-4 my-8 divide-y-2 lg:justify-between lg:flex-row lg:divide-y-0 lg:divide-x-2 divide-border">
          <div className="p-4 h-[32rem] w-full lg:w-1/2 mx-auto">
            <Barchart
              variant="green"
              yLabel="Amount"
              xLabel="Month"
              caption="Inventory Turnover"
              data={[
                { name: "Jan", total: 5 },
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
          <div className="p-4 h-[32rem] w-full lg:w-1/2 mx-auto">
            <Barchart
              caption="Supply Chain Costs"
              yLabel="Amount"
              xLabel="Month"
              variant="yellow"
              data={[
                { name: "Jan", total: 5 },
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
    </div>
  );
};

export default Dashboard;
