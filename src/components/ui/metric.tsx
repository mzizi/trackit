"use client";

import { ReactNode, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { TrendingUpIcon, TrendingDownIcon, MinusIcon } from "lucide-react";
import { Badge, BadgeProps } from "@/components/ui/badge";

interface Props {
  icon: ReactNode;
  label: string;
  value: string;
  trend: number;
}

const Metric = (props: Props) => {
  const sign = useMemo(() => Math.sign(props.trend), [props.trend]);

  const variant = useMemo(() => {
    return sign === -1 ? "destructive" : sign === 0 ? "default" : "success";
  }, [sign]);

  return (
    <div className="flex flex-col justify-center gap-2 p-2 border rounded shadow">
      <h1 className="text-base">{props.label}</h1>

      <div className="flex items-center gap-4">
        <span className="w-1/2 text-2xl font-bold">{props.value}</span>
        <Badge
          variant={variant}
          className="flex items-center w-1/2 h-full !gap-2 text-sm rounded"
        >
          <span className="aspect-square">
            {sign === -1 ? (
              <TrendingDownIcon />
            ) : sign === 0 ? (
              <MinusIcon />
            ) : (
              <TrendingUpIcon />
            )}
          </span>
          <span className="text-sm">{props.trend}%</span>
        </Badge>
      </div>
    </div>
  );
};

export default Metric;
