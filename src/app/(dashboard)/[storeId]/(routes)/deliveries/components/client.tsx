"use client";

import { useParams, useRouter } from "next/navigation";

import Map from "@/components/Map";
import { buttonVariants } from "@/components/ui/button";
import { DeliveryItemList } from "@/components/ui/delivery-item";
import { Heading } from "@/components/ui/heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { genRandomID } from "@/utils";

type DeliveryItem = {
  value: string;
  endTime?: string;
  startTime?: string;
};

interface DeliveryClientProps {
  tabs?: DeliveryItem[];
}

export const DeliveryClient: React.FC<DeliveryClientProps> = ({
  tabs = [],
}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <div className="flex flex-col w-full h-full gap-4 p-2">
      <Heading
        title="Deliveries"
        description="Manage all deliveries from your store"
      />
      <Tabs defaultValue={tabs[0].value} className="w-full h-full">
        <TabsList className="justify-start w-full gap-2 p-0 bg-transparent">
          {tabs.map((tab) => (
            <TabsTrigger
              value={tab.value}
              className="text-base capitalize border border-border"
              key={`tab-trigger-${genRandomID()}`}
            >
              {tab.value.split("-").join(" ")}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent
            value={tab.value}
            className="w-full h-full transition ease-in-out border rounded shadow border-border"
            key={`tab-content-${genRandomID()}`}
          >
            <div className="grid w-full h-full min-h-[65vh] grid-cols-3 gap-2 p-4">
              <div className="col-span-1">
                <h1 className="text-lg font-medium capitalize">{tab.value}</h1>
              </div>
              <div className="col-[2/-1] w-full h-full rounded-md bg-pink-200">
                <Map />
              </div>
              {/* <DeliveryItemList key={`tab-item-${genRandomID()}`} /> */}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
