export default function AboutPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Wind River Range</h1>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Overview</h2>
            <p className="text-gray-700">
              The Wind River Range is one of Wyoming's most pristine and dramatic alpine wilderness areas.
              Stretching approximately 80 miles north to south in west-central Wyoming, it features some of
              the most stunning mountain scenery in the United States.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Geography</h2>
            <p className="text-gray-700">
              The range contains numerous peaks over 13,000 feet, with Gannett Peak being the highest at
              13,804 feet. The area is characterized by glaciated peaks, cirque lakes, alpine meadows, and
              pristine wilderness. The range is home to numerous mountain lakes and high alpine basins.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Wilderness Areas</h2>
            <p className="text-gray-700">
              The Wind River Range is protected by several designated wilderness areas, including the
              Popo Agie Wilderness, Wind River Wilderness, and Fitzpatrick Wilderness. These areas are
              managed to preserve their pristine character and protect wildlife habitat.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hiking & Backpacking</h2>
            <p className="text-gray-700">
              The Wind River Range offers exceptional opportunities for hiking and backpacking, from day
              hikes to challenging multi-week expeditions. Popular trails range from easy day hikes to
              challenging alpine routes. The area is known for crystal-clear alpine lakes, abundant wildflowers,
              and excellent fishing opportunities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Wildlife</h2>
            <p className="text-gray-700">
              The range is home to diverse wildlife including bighorn sheep, mule deer, elk, black bears,
              mountain goats, and various bird species. The pristine environment provides crucial habitat
              for these species.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Best Time to Visit</h2>
            <p className="text-gray-700">
              The best time to hike in the Wind River Range is from July through September, when snow has
              melted and trails are generally accessible. Some lower elevation trails may be passable earlier
              in the season. Weather can change rapidly, and temperatures can drop below freezing even in summer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Using This App</h2>
            <p className="text-gray-700">
              This app provides detailed trail information, topographic maps, elevation profiles, and the
              ability to export GPX files for offline navigation. Reviews from other hikers can help you
              plan your adventure. Trail descriptions include difficulty ratings, distances, and elevation gain.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Safety & Preparation</h2>
            <div className="text-gray-700 space-y-2">
              <p>Before heading out on a trail:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Check the weather forecast</li>
                <li>Bring adequate water and food</li>
                <li>Wear appropriate footwear and clothing</li>
                <li>Bring a map and/or GPS device (download GPX files from this app)</li>
                <li>Tell someone where you're going and when you'll return</li>
                <li>Start early to allow adequate daylight</li>
                <li>Be prepared to turn back if conditions deteriorate</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Leave No Trace</h2>
            <p className="text-gray-700">
              Help preserve the Wind River Range for future generations by following Leave No Trace principles:
              pack out everything you pack in, stay on established trails, respect wildlife, and minimize
              campfire impacts.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
