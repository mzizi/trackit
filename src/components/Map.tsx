"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const MapboxToken = process.env.NEXT_MAPBOX_PUBLIC_TOKEN || "";

const Map = () => {
  const position = [-1.28333, 36.81667];
  //   const position = [51.505, -0.09]; // [latitude, longitude]
  const zoomLevel = 16;

  return (
    <MapContainer
      center={position}
      zoom={zoomLevel}
      scrollWheelZoom={false}
      className="w-full h-full border rounded-md shadow border-border"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
