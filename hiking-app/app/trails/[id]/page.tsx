'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import trails from '@/data/trails.json'

const TrailMap = dynamic(() => import('@/components/TrailMap'), {
  ssr: false,
})

const ReviewForm = dynamic(() => import('@/components/ReviewForm'), {
  ssr: false,
})

export default function TrailPage({ params }: { params: { id: string } }) {
  const trail = trails.trails.find((t) => t.id === parseInt(params.id))
  const [reviews, setReviews] = useState<any[]>(trail?.reviews || [])
  const [showReviewForm, setShowReviewForm] = useState(false)

  if (!trail) {
    return (
      <div className="py-8 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Trail not found</h1>
          <Link href="/trails" className="text-green-600 hover:text-green-700">
            Back to all trails
          </Link>
        </div>
      </div>
    )
  }

  const exportGPX = () => {
    const gpxHeader = `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="Wind River Hiking App">
  <trk>
    <name>${trail.name}</name>
    <trkseg>`

    const gpxPoints = trail.gpx_points.map(
      ([lat, lon]) =>
        `      <trkpt lat="${lat}" lon="${lon}"><name>${trail.name}</name></trkpt>`
    ).join('\n')

    const gpxFooter = `
    </trkseg>
  </trk>
</gpx>`

    const gpxContent = gpxHeader + '\n' + gpxPoints + gpxFooter

    const blob = new Blob([gpxContent], { type: 'application/gpx+xml' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${trail.name.replace(/\s+/g, '-')}.gpx`
    link.click()
    URL.revokeObjectURL(url)
  }

  const addReview = (review: any) => {
    setReviews([...reviews, review])
    setShowReviewForm(false)
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <Link href="/trails" className="text-green-600 hover:text-green-700 mb-6 inline-block">
        ← Back to all trails
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Images */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Trail images would display here</span>
            </div>
            {trail.images.length > 0 && (
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  {trail.images.length} photos available for this trail
                </p>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{trail.name}</h1>
            <p className="text-gray-700 mb-6">{trail.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-sm text-green-700 font-semibold">Distance</p>
                <p className="text-2xl font-bold text-green-900">{trail.distance}</p>
                <p className="text-xs text-green-600">miles</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <p className="text-sm text-blue-700 font-semibold">Elevation Gain</p>
                <p className="text-2xl font-bold text-blue-900">+{trail.elevation_gain}</p>
                <p className="text-xs text-blue-600">feet</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <p className="text-sm text-purple-700 font-semibold">Difficulty</p>
                <p className="text-2xl font-bold text-purple-900">{trail.difficulty}</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                <p className="text-sm text-orange-700 font-semibold">Location</p>
                <p className="text-sm font-bold text-orange-900">{trail.location}</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
            <div className="p-4 bg-green-50 border-b border-green-200">
              <h2 className="text-lg font-semibold text-green-900">Trail Map</h2>
            </div>
            <div style={{ height: '400px', width: '100%' }}>
              <TrailMap trail={trail} />
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Reviews ({reviews.length})</h2>

            {reviews.length === 0 ? (
              <p className="text-gray-600 mb-6">No reviews yet. Be the first to review this trail!</p>
            ) : (
              <div className="space-y-4 mb-6">
                {reviews.map((review, idx) => (
                  <div key={idx} className="border-l-4 border-green-500 pl-4 py-2">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-gray-900">{review.author}</p>
                      <span className="text-yellow-500">{'★'.repeat(review.rating)}</span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                    <p className="text-xs text-gray-500 mt-2">{review.date}</p>
                  </div>
                ))}
              </div>
            )}

            {!showReviewForm ? (
              <button
                onClick={() => setShowReviewForm(true)}
                className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Write a Review
              </button>
            ) : (
              <ReviewForm
                trailName={trail.name}
                onSubmit={addReview}
                onCancel={() => setShowReviewForm(false)}
              />
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <button
            onClick={exportGPX}
            className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold flex items-center justify-center space-x-2"
          >
            <span>📥</span>
            <span>Export GPX File</span>
          </button>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Trail Info</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-600 font-semibold uppercase">Location</p>
                <p className="text-gray-900">{trail.location}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 font-semibold uppercase">Coordinates</p>
                <p className="text-gray-900 text-sm font-mono">
                  {trail.coordinates[0].toFixed(4)}, {trail.coordinates[1].toFixed(4)}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600 font-semibold uppercase">Trail Points</p>
                <p className="text-gray-900">{trail.gpx_points.length} waypoints</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Before You Go</h3>
            <ul className="text-sm text-blue-900 space-y-2">
              <li>✓ Check weather forecast</li>
              <li>✓ Bring plenty of water</li>
              <li>✓ Pack a map (GPX file)</li>
              <li>✓ Tell someone your plans</li>
              <li>✓ Start early</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
