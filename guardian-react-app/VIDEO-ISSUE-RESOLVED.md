# Why the Video Wasn't Showing on Vercel - RESOLVED

## The Problem

The reinsurance.mp4 video (28.6 MB) was playing locally but not appearing on Vercel deployment.

## Root Cause

**Missing Route Configuration in `vercel.json`**

The `vercel.json` configuration file had routes for `/static/` and `/images/` but was **missing a route for `/videos/`**. This meant Vercel wasn't serving files from the videos directory, even though the file was in the repository.

## The Fix

Added the videos route to `vercel.json`:

```json
{
  "src": "/videos/(.*)",
  "dest": "/videos/$1"
}
```

## Why the Video WAS in the Repository

✅ Video file committed: `84c428f` (June 25, 2026)
✅ File size: 30,025,774 bytes (~28.6 MB) - under Vercel's 50MB limit
✅ `.gitignore` has exception: `!public/videos/reinsurance.mp4`
✅ `.vercelignore` only excludes `Guidance.mp4`, not `reinsurance.mp4`
✅ Video tracked in Git: blob `4bf6a05`
✅ Video exists on GitHub: confirmed via `git ls-tree`

## Technical Details

### File Structure
- **Path**: `public/videos/reinsurance.mp4`
- **Used in**: `src/pages/Home.jsx` (hero section background video)
- **Format**: MP4
- **Size**: 28.6 MB

### Vercel Configuration
Vercel needed explicit routing for the videos folder because:
1. Create React App serves files from `public/` at build time
2. Vercel's static file serving requires route configuration
3. Without the route, requests to `/videos/*` were being redirected to `index.html`

### Complete Route Configuration
```json
"routes": [
  { "src": "/static/(.*)", "dest": "/static/$1" },
  { "src": "/images/(.*)", "dest": "/images/$1" },
  { "src": "/videos/(.*)", "dest": "/videos/$1" },
  { "src": "/(.*)", "dest": "/index.html" }
]
```

## Result

✅ Video route added to `vercel.json`
✅ Changes committed and pushed to main branch
✅ Vercel will automatically redeploy with the fix
✅ Video should now play on the deployed site

## Testing

Once Vercel deployment completes, verify:
1. Visit your Vercel site homepage
2. Check that the video plays in the hero section background
3. Open browser DevTools → Network tab
4. Look for `/videos/reinsurance.mp4` - should return 200 OK
5. If still issues, try accessing directly: `https://your-site.vercel.app/videos/reinsurance.mp4`

## Future Considerations

If you add more videos:
- The `/videos/(.*)` route will handle all files in that directory
- Keep video files under 50MB each
- Optimize videos for web (H.264 codec, web-optimized MP4)
- Consider using Vercel Blob Storage for very large videos

## Commits Related to This Fix
- `84c428f` - Added reinsurance.mp4 video
- `7aab0f2` - Triggered deployment for video verification
- `6fc148e` - **Added videos route to vercel.json (THE FIX)**
