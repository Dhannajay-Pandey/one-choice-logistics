"use client";

import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// 🔥 Custom SVG Icon (your shield)
const shieldIcon = L.divIcon({
  className: "",
  html: `
    <div style="display:flex;justify-content:center;align-items:center;">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="#dc2626" stroke-width="2">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    </div>
  `,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

// 🌍 Locations
const locations = [
  {
    name: "Lagos",
    position: [6.5244, 3.3792],
  },
  {
    name: "Guangzhou",
    position: [23.1291, 113.2644],
  },
  {
    name: "Yiwu",
    position: [29.3151, 120.0768],
  },
];

export default function MapComponent() {
  return (
    <div className="h-[400px] w-full rounded-xl overflow-hidden border">
      <MapContainer
        center={[20, 30]}
        zoom={2}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        {/* 🗺️ Map Tiles */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {/* 📍 Markers */}
        {locations.map((loc, i) => (
          <Marker key={i} position={loc.position} icon={shieldIcon}>
            <Popup>
              <div className="text-slate-900 font-bold">{loc.name}</div>
              <div className="text-xs text-slate-500 uppercase">
                Logistics Hub
              </div>
            </Popup>
          </Marker>
        ))}

        {/* ✈️ Routes (dotted lines) */}
        <Polyline
          positions={[locations[0].position, locations[1].position]}
          pathOptions={{
            dashArray: "5,10",
            color: "#dc2626",
            opacity: 0.7,
          }}
        />
        <Polyline
          positions={[locations[0].position, locations[2].position]}
          pathOptions={{
            dashArray: "5,10",
            color: "#dc2626",
            opacity: 0.7,
          }}
        />
      </MapContainer>
    </div>
  );
}