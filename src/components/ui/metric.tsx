"use client";

import { ReactNode, useMemo } from "react";
import { TrendingUpIcon, TrendingDownIcon, MinusIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

interface Props {
  icon: ReactNode;
  label: string;
  value: number;
  trend: number;
}

const Metric = (props: Props) => {
  const sign = useMemo(() => Math.sign(props.trend), [props.trend]);

  const variant = useMemo(() => {
    return sign === -1 ? "destructive" : sign === 0 ? "default" : "success";
  }, [sign]);

  return (
    <div className="flex flex-col max-w-lg gap-2 p-2 border rounded shadow">
      <h1 className="text-base">{props.label}</h1>

      <div className="flex lg:flex-row">
        <span className="w-1/2 text-2xl font-bold">
          {sign === -1 ? "-" : sign === 1 ? "+" : ""}
          {props.value}
        </span>
        <Badge
          variant={variant}
          className="flex items-center justify-between gap-4 text-xs rounded"
        >
          <span className="w-6 h-6">
            {sign === -1 ? (
              <TrendingDownIcon />
            ) : sign === 0 ? (
              <MinusIcon />
            ) : (
              <TrendingUpIcon />
            )}
          </span>
          <span className="flex-1 text-sm texl-right">{props.trend}%</span>
        </Badge>
      </div>
    </div>
  );
};

export default Metric;
