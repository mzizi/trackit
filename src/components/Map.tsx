"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { genRandomID } from "@/utils";
import { MapPinIcon } from "lucide-react";
import { DivIcon } from "leaflet";

const MapboxToken = process.env.NEXT_MAPBOX_ACCESS_TOKEN || "";

interface Props {
  coords?: number[][];
  lastPosition: [number, number];
  markers?: [number, number][];
  latestTimestamp?: string;
}

const Map = ({ coords, lastPosition, markers, latestTimestamp }: Props) => {
  const position = [-1.28333, 36.81667];
  const zoomLevel = 2;
  const geoJsonObj: any = [
    {
      type: "LineString",
      coordinates: coords,
    },
  ];

  return (
    <MapContainer
      zoom={zoomLevel}
      center={lastPosition}
      scrollWheelZoom={false}
      className="w-full h-full border rounded-md shadow border-border"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={lastPosition} draggable>
        <Popup>
          Last recorded position:
          <br />
          {lastPosition[0]}&#176;,&nbsp;
          {lastPosition[1]}&#176;
          <br />
          {latestTimestamp}
        </Popup>
      </Marker>
      {markers?.map((marker) => (
        <Marker key={`marker-${genRandomID()}`} position={marker} draggable>
          <Popup>
            marker:
            <br />
            {marker[0]}&#176;,&nbsp;
            {marker[1]}&#176;
            <br />
            {latestTimestamp}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
