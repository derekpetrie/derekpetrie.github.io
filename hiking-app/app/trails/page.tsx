import Link from 'next/link'
import trails from '@/data/trails.json'

const difficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Easy':
      return 'bg-green-100 text-green-800'
    case 'Moderate':
      return 'bg-yellow-100 text-yellow-800'
    case 'Hard':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default function TrailsPage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Wind River Range Trails</h1>
        <p className="text-gray-600">Discover hiking trails in one of Wyoming's most beautiful wilderness areas</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trails.trails.map((trail) => (
          <Link key={trail.id} href={`/trails/${trail.id}`}>
            <div className="h-full bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <p className="text-white text-center px-4">
                  {trail.location}
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{trail.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{trail.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Distance:</span>
                    <span className="font-semibold text-gray-900">{trail.distance} mi</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Elevation Gain:</span>
                    <span className="font-semibold text-gray-900">+{trail.elevation_gain} ft</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className={`px-3 py-1 rounded text-xs font-semibold ${difficultyColor(trail.difficulty)}`}>
                      {trail.difficulty}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-xs text-gray-500">{trail.reviews.length} reviews</span>
                  <span className="text-green-600 font-semibold">View Trail →</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
