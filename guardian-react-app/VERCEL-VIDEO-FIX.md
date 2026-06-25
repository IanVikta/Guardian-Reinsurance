# Vercel Video Not Playing - Fix Guide

## Issue
The reinsurance.mp4 video plays locally but not on Vercel deployment.

## Root Cause
The video file (28.6 MB) is properly committed to the repository and within Vercel's 50MB limit. However, Vercel may not have deployed the commit that includes the video file.

## Verification Completed
✅ Video file exists in repository: `guardian-react-app/public/videos/reinsurance.mp4`
✅ Video file size: 30,025,774 bytes (~28.6 MB) - within Vercel's 50MB limit
✅ Video is tracked in Git (not using LFS)
✅ Video is committed in main branch (commit 84c428f)
✅ .gitignore has exception for reinsurance.mp4
✅ .vercelignore only excludes Guidance.mp4, not reinsurance.mp4
✅ Video configuration in Home.jsx is correct

## Solution: Force Vercel Redeploy

### Option 1: Redeploy from Vercel Dashboard (Recommended)
1. Go to https://vercel.com/dashboard
2. Find your Guardian Reinsurance project
3. Go to the "Deployments" tab
4. Click on the latest deployment
5. Click the "..." menu (three dots)
6. Select **"Redeploy"**
7. Make sure "Use existing Build Cache" is **UNCHECKED** (force fresh build)
8. Click "Redeploy"

### Option 2: Trigger New Deployment via Git Push
Make a small change to force a new deployment:

```bash
cd "d:\xampp\htdocs\AdvPHP\Guardian Reinsurance\guardian-react-app"

# Make a small change (add a comment or update README)
# Then commit and push
git add .
git commit -m "Trigger deployment for video file"
git push origin main
```

### Option 3: Check Vercel Build Logs
1. Go to your Vercel deployment
2. Click on the deployment
3. Go to "Build Logs"
4. Check if there are any errors related to file size or video loading
5. Look for warnings about large files

## Expected Result
After redeployment, the video should be accessible at:
`https://your-vercel-domain.vercel.app/videos/reinsurance.mp4`

And it should play automatically in the hero section.

## Troubleshooting

### If video still doesn't appear:
1. **Check Vercel file size limits**: Ensure the build output doesn't exceed limits
2. **Check video URL in deployed site**: Open browser DevTools (F12) → Network tab → Reload page → Look for reinsurance.mp4 request
3. **Check for 404 errors**: If video returns 404, it wasn't included in the deployment
4. **Verify Root Directory**: Ensure Vercel project settings have Root Directory set to `guardian-react-app`

### Alternative Solution: Use Vercel Blob Storage
If the video still doesn't deploy, consider using Vercel Blob Storage for large files:
1. Go to your Vercel project → Storage tab
2. Create a Blob store
3. Upload the video file to Blob storage
4. Update Home.jsx to use the Blob storage URL

## Video File Details
- **Path**: `guardian-react-app/public/videos/reinsurance.mp4`
- **Size**: 28.6 MB (30,025,774 bytes)
- **Format**: MP4
- **Commit**: 84c428f
- **Branch**: main (pushed to origin/main)

## Next Steps
1. Try Option 1 (Dashboard Redeploy) first
2. If that doesn't work, check the build logs
3. If video still doesn't appear, we may need to use Vercel Blob Storage or optimize the video further
