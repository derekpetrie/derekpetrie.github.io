'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const MapComponent = dynamic(() => import('@/components/Map'), {
  ssr: false,
})

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 bg-green-50 border-b border-green-200">
              <h2 className="text-xl font-semibold text-green-900">Topographic Map</h2>
              <p className="text-sm text-green-700 mt-1">Explore trails in the Wind River Range</p>
            </div>
            <div style={{ height: '600px', width: '100%' }}>
              {mounted && <MapComponent />}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About</h3>
            <p className="text-gray-600 text-sm mb-4">
              The Wind River Range is one of Wyoming's most pristine alpine wilderness areas, featuring stunning peaks, alpine lakes, and excellent backpacking opportunities.
            </p>
            <p className="text-gray-600 text-sm">
              Use this app to explore trails, read reviews, and export GPX files for your adventures.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/trails" className="block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-center">
                Browse Trails
              </Link>
              <Link href="/trails/1" className="block px-4 py-2 bg-gray-200 text-gray-900 rounded hover:bg-gray-300 text-center">
                Featured Trail
              </Link>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg shadow p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Tip</h3>
            <p className="text-sm text-blue-800">
              Click on map markers to view trail details. Download GPX files for offline navigation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
