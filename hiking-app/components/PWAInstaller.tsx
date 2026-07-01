'use client'

import { useEffect, useState } from 'react'

export default function PWAInstaller() {
  const [mounted, setMounted] = useState(false)
  const [installPrompt, setInstallPrompt] = useState<any>(null)
  const [installed, setInstalled] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Register service worker for offline support
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Service worker registration failed, but app still works
      })
    }

    // Handle PWA install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setInstallPrompt(e)
    }

    const handleAppInstalled = () => {
      setInstalled(true)
      setInstallPrompt(null)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    // Check if app is running as PWA
    if (window.navigator.standalone) {
      setInstalled(true)
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  const handleInstall = async () => {
    if (!installPrompt) return

    installPrompt.prompt()
    const { outcome } = await installPrompt.userChoice
    if (outcome === 'accepted') {
      setInstallPrompt(null)
    }
  }

  if (!mounted || installed || !installPrompt) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-green-600 to-green-500 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="font-semibold">Install Wind River App</p>
          <p className="text-sm opacity-90">Quick access from your home screen</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleInstall}
            className="px-6 py-2 bg-white text-green-600 rounded font-semibold hover:bg-gray-100"
          >
            Install
          </button>
          <button
            onClick={() => setInstallPrompt(null)}
            className="px-4 py-2 text-white hover:bg-green-700 rounded"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}
