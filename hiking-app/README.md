# Wind River Range Hiking App

A modern web application for exploring trails in the Wind River Range with topographic maps, detailed trail information, user reviews, and GPX export functionality.

## Features

- **Topographic Maps**: Interactive maps using Leaflet and CartoDB tiles
- **Trail Information**: Detailed descriptions, distance, elevation gain, and difficulty ratings
- **Trail Photos**: Support for trail images and descriptions with pictures
- **Trail Reviews**: Community-driven reviews and ratings
- **GPX Export**: Download trail data as GPX files for offline navigation
- **Interactive Maps**: Click on map markers to view trail details
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 14 with React
- **Styling**: Tailwind CSS
- **Mapping**: Leaflet & React Leaflet
- **Maps Tiles**: CartoDB Voyager
- **Language**: TypeScript
- **Package Manager**: npm

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to http://localhost:3000
```

## Building

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
hiking-app/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page with main map
│   ├── globals.css          # Global styles
│   └── trails/
│       ├── page.tsx         # Trail listing page
│       └── [id]/
│           └── page.tsx     # Individual trail detail page
├── components/              # React components
│   ├── Map.tsx             # Main interactive map
│   ├── TrailMap.tsx        # Trail-specific map
│   └── ReviewForm.tsx      # Review submission form
├── data/                    # Static data
│   └── trails.json         # Trail database
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── postcss.config.js
```

## Trails Included

1. **Cirque of the Towers** - 19.2 mi, +2800 ft, Hard
2. **Titcomb Basin** - 16.0 mi, +2500 ft, Hard
3. **Lonesome Lake** - 12.5 mi, +1500 ft, Moderate
4. **Indian Basin** - 18.0 mi, +2200 ft, Hard
5. **Paintbrush Canyon** - 14.0 mi, +1800 ft, Moderate

## GPX Export

Export any trail as a GPX file directly from the trail detail page. The GPX file includes:
- Trail name
- All waypoints along the route
- Compatible with all GPS devices and mapping software

## Trail Images

Trail descriptions support images. To add images for a trail:
1. Upload images to `/public/trails/`
2. Add image paths to the trail object in `data/trails.json`
3. Images will display in the trail detail page

## Reviews

Users can:
- View existing reviews with ratings and comments
- Write new reviews with star ratings (1-5 stars)
- Share their hiking experiences
- Read recent trail feedback

## Future Enhancements

- User accounts and profile management
- Advanced filtering and search
- Weather integration
- Difficulty comparison with other trails
- Photo uploads and gallery
- GPS tracking integration
- Offline map support
- Elevation profile charts

## License

This project is part of a personal portfolio site.

## Contributing

Contributions welcome! Feel free to open issues or submit pull requests.
