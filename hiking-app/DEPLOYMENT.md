# Deployment Guide

## Deploy to Vercel (Recommended)

The easiest way to deploy the Wind River Hiking App is using Vercel, which automatically optimizes your Next.js app for production.

### Prerequisites
- A [Vercel](https://vercel.com) account (sign up free with GitHub)
- Your project pushed to GitHub

### Steps to Deploy

1. **Push to GitHub**
   ```bash
   git push origin claude/wind-river-hiking-app-9h1o97
   ```

2. **Connect to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Select "Import Git Repository"
   - Choose your GitHub repository
   - Click "Import"

3. **Configure Project**
   - Project name: `wind-river-hiking-app` (or your preferred name)
   - Root directory: `hiking-app/`
   - Framework preset: Next.js
   - Build command: `npm run build` (default)
   - Output directory: `.next` (default)

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your app will be live at a URL like `wind-river-hiking-app.vercel.app`

### Set Custom Domain (Optional)
1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Access on iPhone

### As a Web App (Recommended)

1. **Open in Safari**
   - Open the app URL in Safari on your iPhone
   - Example: `https://wind-river-hiking-app.vercel.app`

2. **Install as App**
   - Tap the Share button (box with arrow)
   - Scroll and tap "Add to Home Screen"
   - Choose a name (e.g., "Wind River")
   - Tap "Add"

3. **Use the App**
   - App now appears on your home screen
   - Opens in full screen (without Safari UI)
   - Works offline with downloaded data
   - Service worker caches resources

### Alternative: In Safari
- Just bookmark the website
- Access from Safari any time

## Features on iPhone

✅ **Works Offline** - Service worker caches maps and trail data
✅ **Standalone Mode** - Runs like a native app
✅ **Touch Optimized** - All buttons and controls sized for fingers
✅ **GPS Integration** - Can use iPhone's location services
✅ **GPX Export** - Download and open in Maps app or other GPS apps
✅ **Safe Areas** - Respects iPhone notch and home indicator

## Performance Tips

1. **Offline Mode**
   - Service worker caches static assets
   - Trail data is stored in browser
   - Works even without internet

2. **Data Optimization**
   - PNG images are optimized
   - Minimal JavaScript for faster loading
   - Maps tiles cached locally

3. **Battery Usage**
   - Maps rendering is efficient
   - No continuous GPS tracking
   - Use "Low Power Mode" friendly

## Troubleshooting

### App Not Installing?
- Make sure you're using Safari (not Chrome)
- iOS 13+ required
- Not all web apps show install prompt

### Maps Not Loading?
- Check internet connection
- Try clearing Safari cache (Settings > Safari > Clear History)
- Service worker may need time to cache tiles

### GPX Export Not Working?
- Use recent version of Safari
- Check file download permissions
- Open exported file in Maps or Garmin Connect

## Environment Variables

If you need to add environment variables:

1. Create `.env.local` in the project root
2. Add variables (e.g., `NEXT_PUBLIC_MAP_API_KEY`)
3. Restart dev server (`npm run dev`)

For Vercel:
1. Go to Project Settings > Environment Variables
2. Add variables
3. Redeploy

## Monitoring & Analytics

### View Deployment Logs
```bash
vercel logs
```

### Performance Metrics
- Use Vercel Analytics (built-in)
- Check Web Vitals in browser DevTools

## Local Development Before Deployment

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
# Test on iOS using iPhone connected to same WiFi:
# Use local IP: http://192.168.x.x:3000
```

## Production Build

```bash
# Build for production
npm run build

# Test production build locally
npm start

# Build should complete without errors
```

## Continuous Deployment

Every push to your repository automatically redeploys:
1. Push changes to GitHub
2. Vercel detects changes
3. Automatic build and deployment
4. Live within 1-2 minutes

## Security

- SSL/TLS enabled automatically by Vercel
- Content Security Policy configured
- No sensitive data in repository
- Git credentials not exposed

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **PWA Docs**: https://web.dev/progressive-web-apps/

## Updating the App

To update after deployment:

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Vercel automatically redeploys
5. Refresh app on iPhone to get updates

(On iPhone, you may need to fully close and reopen the app for updates)
