# Vercel Blob Storage Setup for Video File

## Why Use Vercel Blob?

Vercel's deployment has file size limitations that prevent large videos from being served directly. Vercel Blob Storage is designed for large files like videos.

## Steps to Upload Video to Vercel Blob

### 1. Access Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Select your Guardian Reinsurance project
3. Click on "Storage" tab in the left sidebar
4. Click "Create Database" → Select "Blob"
5. Give it a name (e.g., "guardian-media")
6. Click "Create"

### 2. Upload Your Video
1. In the Blob store, click "Upload File"
2. Select `public/videos/reinsurance.mp4` (28.6 MB)
3. It will generate a URL like: `https://[random-id].public.blob.vercel-storage.com/reinsurance.mp4`
4. **Copy this URL** - you'll need it

### 3. Update Home.jsx

Replace the video source in `src/pages/Home.jsx`:

**Find this (around line 52):**
```jsx
<source src="/videos/reinsurance.mp4" type="video/mp4" />
```

**Replace with:**
```jsx
<source src="https://[YOUR-BLOB-URL].public.blob.vercel-storage.com/reinsurance-[hash].mp4" type="video/mp4" />
```

### 4. Commit and Deploy
```bash
git add src/pages/Home.jsx
git commit -m "Use Vercel Blob storage for hero video"
git push origin main
```

## Benefits
✅ No file size limits for videos
✅ Fast CDN delivery
✅ Optimized for streaming
✅ Doesn't count toward deployment size limit
✅ Free tier includes 100GB bandwidth/month

---

## Alternative: Use Environment Variable

For better maintainability, use an environment variable:

### 1. Create .env.production file:
```env
REACT_APP_HERO_VIDEO_URL=https://[your-blob-url].public.blob.vercel-storage.com/reinsurance.mp4
```

### 2. Update Home.jsx:
```jsx
<source src={process.env.REACT_APP_HERO_VIDEO_URL || '/videos/reinsurance.mp4'} type="video/mp4" />
```

### 3. Add to Vercel:
1. Go to Project Settings → Environment Variables
2. Add: `REACT_APP_HERO_VIDEO_URL` with your Blob URL
3. Redeploy

This way, local development still works with the local file, but production uses Blob storage.
