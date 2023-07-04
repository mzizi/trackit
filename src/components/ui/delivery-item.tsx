"use client";

import { FC } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { genRandomID } from "@/utils";

interface DeliveryItemProps {
  active?: boolean;
  distance: string;
  startTime: Date;
  endTime?: Date;
}

const DeliveryItem = (props: DeliveryItemProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

interface DeliveryItemListProps {
  stops?: DeliveryItemProps[];
}

const tabs = ["new-delivery", "ongoing", "scheduled"];

export const DeliveryItemList: FC<DeliveryItemListProps> = ({ stops = [] }) => {
  return <div className="w-full h-full"></div>;
};
