import { LineChartIcon } from "lucide-react";

interface Props {
  title?: string;
}

function LineChart({ title = "Line Chart Sample" }: Props) {
  return (
    <div className="grid grid-rows-[auto,_1fr] w-full h-full gap-4">
      <div className="flex items-center gap-8 p-4 text-gray-500 bg-accent dark:text-gray-800">
        <LineChartIcon />
        <h1 className="font-sans text-lg font-semibold capitalize ">{title}</h1>
      </div>
      <div className="bg-blue-200 shadow"></div>
    </div>
  );
}

LineChart.displayName = "LineChart";

export default LineChart;
