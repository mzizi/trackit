"use client";

import { FC } from "react";

interface DeliveryItemProps {
  active?: boolean;
  distance?: string;
  startTime?: Date;
  endTime?: Date;
}

const customer = {
  address: {
    geolocation: {
      lat: "-37.3159",
      long: "81.1496",
    },
    city: "kilcoole",
    street: "new road",
    number: 7682,
    zipcode: "12926-3874",
  },
  id: 1,
  email: "john@gmail.com",
  username: "johnd",
  password: "m38rmF$",
  name: {
    firstname: "john",
    lastname: "doe",
  },
  phone: "1-570-236-7033",
  __v: 0,
};

const DeliveryItem = (props: DeliveryItemProps) => {
  return (
    <div className="flex flex-col gap-0.5 p-4 border border-border rounded shadow">
      <div className="text-base capitalize">{`${customer.name.firstname} ${customer.name.lastname}`}</div>
      <div className="flex items-center gap-1 text-sm capitalize text-muted-foreground">
        <span>{customer.address.street}</span>
        <span>{customer.address.number},</span>
        <span>{customer.address.city}</span>
      </div>
    </div>
  );
};

interface DeliveryItemListProps {
  stops?: DeliveryItemProps[];
}

const tabs = ["new-delivery", "ongoing", "scheduled"];

export const DeliveryItemList: FC<DeliveryItemListProps> = ({ stops = [] }) => {
  return (
    <div className="flex flex-col w-full h-[65vh] gap-4 py-4 overflow-y-auto">
      <DeliveryItem />
      <DeliveryItem />
      <DeliveryItem />
      <DeliveryItem />
      <DeliveryItem />
      <DeliveryItem />
      <DeliveryItem />
      <DeliveryItem />
      <DeliveryItem />
      <DeliveryItem />
    </div>
  );
};
