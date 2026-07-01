'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import Link from 'next/link'
import trails from '@/data/trails.json'

const trailIcon = (trailId: number) =>
  L.divIcon({
    className: 'custom-icon',
    html: `<div class="trail-marker">${trailId}</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  })

export default function Map() {
  const center: [number, number] = [42.85, -109.05]

  return (
    <MapContainer
      center={center}
      zoom={10}
      style={{ height: '100%', width: '100%' }}
      className="rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />

      {trails.trails.map((trail) => (
        <Marker
          key={trail.id}
          position={[trail.coordinates[0], trail.coordinates[1]]}
          icon={trailIcon(trail.id)}
        >
          <Popup>
            <div className="w-48">
              <h3 className="font-bold text-green-900 mb-2">{trail.name}</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p><span className="font-semibold">Distance:</span> {trail.distance} mi</p>
                <p><span className="font-semibold">Elevation:</span> +{trail.elevation_gain} ft</p>
                <p><span className="font-semibold">Difficulty:</span> {trail.difficulty}</p>
              </div>
              <Link
                href={`/trails/${trail.id}`}
                className="block mt-3 text-center px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
              >
                View Details
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
