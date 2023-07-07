"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import Map from "@/components/Map";
import { buttonVariants } from "@/components/ui/button";
import { DeliveryItemList } from "@/components/ui/delivery-item";
import { Heading } from "@/components/ui/heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { genRandomID } from "@/utils";

import people from "@/assets/data/users.json";

type DeliveryItem = {
  value: string;
};

interface DeliveryClientProps {
  tabs?: DeliveryItem[];
  data?: any[];
}

export const DeliveryClient: React.FC<DeliveryClientProps> = ({
  tabs = [],
  data = people,
}) => {
  const [lngLatCoords, setLngLatCoords] = useState<number[][]>([]);
  const [lastPosition, setLastPosition] = useState<[number, number]>([
    -1.28333, 36.81667,
  ]);
  const [latLngMarkerPositions, setLatLngMarkerPositions] = useState<
    [number, number][]
  >([]);

  useEffect(() => {
    if (window && data) {
      const keys = Object.keys(data[0]).filter((key) => key === "address");
      const values = data
        .map((item) => item[keys[0]])
        .map((val) => Object.values(val["geolocation"])) as [number, number][];
      if (values) {
        setLngLatCoords(values);
        setLatLngMarkerPositions(values);
      }
    }
  }, [data]);

  // logic to transform data into the items needed to pass to the map

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
            <div className="grid w-full h-[65vh] overflow-hidden grid-cols-3 gap-2 p-4">
              <div className="flex flex-col col-span-1 gap-4 divide-y divide-border">
                <h1 className="text-base font-medium capitalize">
                  {tab.value}
                </h1>
                <DeliveryItemList key={`tab-item-${genRandomID()}`} />
              </div>
              <div className="col-[2/-1] w-full h-[calc(65vh-_2rem)] rounded-md bg-pink-200">
                <Map
                  coords={lngLatCoords}
                  lastPosition={lastPosition}
                  markers={latLngMarkerPositions}
                  latestTimestamp={new Date().toLocaleTimeString()}
                />
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
