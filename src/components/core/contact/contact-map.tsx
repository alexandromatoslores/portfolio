"use client";

import React, { memo } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import dynamic from "next/dynamic";
import { Loading } from "./contact-map-container";
import L from "leaflet";

interface Props {
  posix: [number, number];
  setMarkers?: (location: [number, number]) => void;
  zoom?: number;
}

const defaults = {
  zoom: 19,
};

const customIcon = new L.Icon({
  iconUrl: "/marker-icon.png",
  iconRetinaUrl: "/marker-icon-2x.png",
  shadowUrl: "/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const LocationMarker = ({ posix, setMarkers }: Props) => {
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      setMarkers?.([lat, lng]);
    },
  });

  return (
    <Marker position={posix} icon={customIcon} draggable={false}>
      <Popup>
        Mi ubicación <br />
        Lat: {posix[0].toFixed(4)}, Lng: {posix[1].toFixed(4)}
      </Popup>
    </Marker>
  );
};

const ContactMap = ({ zoom = defaults.zoom, posix, setMarkers }: Props) => {
  return (
    <MapContainer
      center={posix}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LocationMarker posix={posix} setMarkers={setMarkers} />
    </MapContainer>
  );
};

// Exportación dinámica corregida
export default dynamic(() => Promise.resolve(memo(ContactMap)), {
  ssr: false,
  loading: () => <Loading />,
});
