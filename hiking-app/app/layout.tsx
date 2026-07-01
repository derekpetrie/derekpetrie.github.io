import type { Metadata } from 'next'
import './globals.css'
import RootLayoutClient from './layout-client'

export const metadata: Metadata = {
  title: 'Wind River Range Hiking App',
  description: 'Explore trails, view topographic maps, read reviews, and export GPX files for the Wind River Range',
  manifest: '/manifest.json',
  viewport: 'width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=5',
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/icon-192.png' },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Wind River Hiking',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Wind River',
    'theme-color': '#059669',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <header className="bg-white shadow">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-green-700">Wind River Range</h1>
              <div className="space-x-4">
                <a href="/" className="text-gray-600 hover:text-green-700">Map</a>
                <a href="/trails" className="text-gray-600 hover:text-green-700">Trails</a>
                <a href="/about" className="text-gray-600 hover:text-green-700">About</a>
              </div>
            </div>
          </nav>
        </header>
        <main className="max-w-7xl mx-auto">
          {children}
        </main>
        <RootLayoutClient />
      </body>
    </html>
  )
}
