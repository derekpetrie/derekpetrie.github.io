'use client'

import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import L from 'leaflet'

interface Trail {
  id: number
  name: string
  coordinates: number[]
  gpx_points: (number[] | [number, number])[]
}

const startIcon = L.icon({
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzIyYzU1ZSIvPjwvc3ZnPg==',
  iconSize: [32, 32],
  iconAnchor: [16, 16],
})

const endIcon = L.icon({
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iI2VmNDQyNiIvPjwvc3ZnPg==',
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iI2VmNDQyNiIvPjwvc3ZnPg==',
  iconSize: [32, 32],
  iconAnchor: [16, 16],
})

export default function TrailMap({ trail }: { trail: Trail }) {
  if (!trail.gpx_points || trail.gpx_points.length === 0) {
    return null
  }

  const bounds: [number[], number[]] = trail.gpx_points.reduce(
    (acc, point) => {
      const p = Array.isArray(point) ? point : [point[0], point[1]]
      return [
        [Math.min(acc[0][0], p[0] as number), Math.min(acc[0][1], p[1] as number)],
        [Math.max(acc[1][0], p[0] as number), Math.max(acc[1][1], p[1] as number)],
      ]
    },
    [
      [trail.gpx_points[0][0] as number, trail.gpx_points[0][1] as number],
      [trail.gpx_points[0][0] as number, trail.gpx_points[0][1] as number],
    ]
  )

  const center: [number, number] = [
    (bounds[0][0] + bounds[1][0]) / 2,
    (bounds[0][1] + bounds[1][1]) / 2,
  ]

  return (
    <MapContainer
      center={center}
      zoom={12}
      bounds={bounds}
      style={{ height: '100%', width: '100%' }}
      className="rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />

      <Polyline
        positions={trail.gpx_points}
        color="#059669"
        weight={3}
        opacity={0.8}
        dashArray="5, 5"
      />

      <Marker position={trail.gpx_points[0]} icon={startIcon}>
        <Popup>
          <div className="text-sm font-semibold text-green-900">Start</div>
        </Popup>
      </Marker>

      <Marker position={trail.gpx_points[trail.gpx_points.length - 1]} icon={endIcon}>
        <Popup>
          <div className="text-sm font-semibold text-red-900">End</div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}
