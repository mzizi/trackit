"use client";

import colors from "tailwindcss/colors";
import {
  Bar,
  BarChart,
  Cell,
  Label,
  LabelList,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const commonColors = {
  blue: Object.values(colors.blue),
  pink: Object.values(colors.pink),
  yellow: Object.values(colors.yellow),
  gray: Object.values(colors.gray),
  orange: Object.values(colors.orange),
  green: Object.values(colors.green),
  stone: Object.values(colors.stone),
};

type chartVariants = keyof typeof commonColors;

interface OverviewProps {
  data: any[];
  caption?: string;
  yLabel?: string;
  xLabel?: string;
  variant?: chartVariants | "primary" | "default";
}

const chartColors = {
  ...commonColors,
  primary: Object.values(colors.indigo),
  default: Object.values(colors.slate),
};

const Barchart: React.FC<OverviewProps> = ({
  data,
  yLabel,
  xLabel,
  caption = "",
  variant = "default",
}) => {
  return (
    <div className="flex flex-col w-full h-full gap-8 text-background">
      <ResponsiveContainer className="flex-1 w-full h-full ">
        <BarChart data={data} margin={{ left: 20, bottom: 20 }}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            label={{ value: xLabel, offset: 0, position: "bottom" }}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
            label={{
              value: yLabel,
              angle: -90,
              offset: 0,
              position: "left",
            }}
          />
          <Bar dataKey="total" radius={[4, 4, 0, 0]}>
            {chartColors[variant].map((_entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={chartColors[variant][index % 20]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <h1 className="text-2xl font-extrabold text-center capitalize text-foreground/80">
        {caption}
      </h1>
    </div>
  );
};

export default Barchart;
