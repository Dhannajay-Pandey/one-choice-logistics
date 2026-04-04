"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Marker icon
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Locations
const locations = [
  { name: "Guangzhou, China", position: [23.1291, 113.2644] },
  { name: "Yiwu, China", position: [29.3061, 120.0755] },
  { name: "Dakar, Senegal", position: [14.7167, -17.4677] },
];

export default function NetworkMap() {
  return (
    <div className="relative w-full h-[500px]">
      
      {/* 🌍 MAP */}
      <MapContainer
        center={[20, 40]}
        zoom={2}
        scrollWheelZoom={false}
        className="w-full h-full z-0"
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />

        {/* Markers */}
        {locations.map((loc) => (
          <Marker key={loc.name} position={loc.position} icon={icon}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}

        {/* Routes */}
        <Polyline
          positions={[locations[2].position, locations[0].position]}
          pathOptions={{ color: "#dc2626", weight: 3, dashArray: "6,10" }}
        />
        <Polyline
          positions={[locations[2].position, locations[1].position]}
          pathOptions={{ color: "#dc2626", weight: 3, dashArray: "6,10" }}
        />
      </MapContainer>

      {/* 🧊 LEGEND OVERLAY */}
      <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg  z-0">
        <h4 className="font-bold text-slate-900 mb-2 text-sm">
          Network Map
        </h4>

        <div className="flex items-center gap-2 mb-1">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-xs text-slate-600">
            O.C.L Locations
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-6 border-t-2 border-dashed border-red-600"></div>
          <span className="text-xs text-slate-600">
            Trade Routes
          </span>
        </div>
      </div>

    </div>
  );
}