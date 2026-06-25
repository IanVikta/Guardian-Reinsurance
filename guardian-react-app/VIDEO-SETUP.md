# Video Setup Instructions

## Background Video (Guidance.mp4)

### Local Development
The video file `Guidance.mp4` (288MB) is located in:
- **Source**: `Website Assets/Guidance.mp4`
- **Deployed**: `public/videos/Guidance.mp4`

### GitHub Limitation
GitHub has a 100MB file size limit, so the video cannot be pushed to the repository directly.

---

## Solutions for Deployment

### Option 1: Cloud Video Hosting (Recommended)
Upload the video to a cloud service and reference it:

**Services:**
- **Cloudinary** (Free tier available)
- **AWS S3** 
- **Google Cloud Storage**
- **Azure Blob Storage**

**Update in Home.jsx:**
```jsx
<video autoPlay loop muted playsInline>
  <source src="https://your-cloud-url/Guidance.mp4" type="video/mp4" />
</video>
```

---

### Option 2: YouTube/Vimeo Embed
Upload to YouTube or Vimeo and embed:

**YouTube:**
```jsx
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=0"
  className="w-full h-full object-cover"
  allow="autoplay"
/>
```

**Vimeo:**
```jsx
<iframe
  src="https://player.vimeo.com/video/VIDEO_ID?autoplay=1&loop=1&muted=1&background=1"
  className="w-full h-full object-cover"
  allow="autoplay"
/>
```

---

### Option 3: Git LFS (Large File Storage)
Use Git LFS to track large files:

```bash
# Install Git LFS
git lfs install

# Track mp4 files
git lfs track "*.mp4"

# Commit and push
git add .gitattributes
git add "public/videos/Guidance.mp4"
git commit -m "Add video with Git LFS"
git push origin develop
```

---

### Option 4: Vercel Blob Storage
Use Vercel's blob storage for large files:

1. Install Vercel CLI: `npm install -g vercel`
2. Upload video: `vercel blob put public/videos/Guidance.mp4`
3. Get URL and update code

---

## Current Setup

The Home page (`src/pages/Home.jsx`) includes:
- Video element with poster fallback image
- Video will work in local development
- Fallback poster image shows if video unavailable
- Fully responsive and optimized

### Fallback Behavior:
```jsx
<video
  autoPlay
  loop
  muted
  playsInline
  poster="/images/hero-1.jpg"  // Fallback image
>
  <source src="/videos/Guidance.mp4" type="video/mp4" />
</video>
```

---

## Recommended Workflow

### For Local Development:
✅ Video works perfectly from `public/videos/Guidance.mp4`

### For Production (Vercel):
1. Upload video to Cloudinary (free):
   - Sign up at cloudinary.com
   - Upload `Guidance.mp4`
   - Copy the video URL

2. Update `src/pages/Home.jsx`:
   ```jsx
   <source src="https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/v1234567890/Guidance.mp4" type="video/mp4" />
   ```

3. Deploy to Vercel

---

## Video Specifications

- **File**: Guidance.mp4
- **Size**: 288.34 MB
- **Usage**: Hero section background video
- **Features**:
  - Autoplay enabled
  - Looping enabled
  - Muted by default
  - Mobile-friendly (playsInline)
  - Poster fallback image

---

## Alternative: Compress Video

You can compress the video to reduce file size:

### Tools:
- **HandBrake** (Free, Desktop)
- **FFmpeg** (Command line)
- **CloudConvert** (Online)

### FFmpeg Command:
```bash
ffmpeg -i Guidance.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k Guidance-compressed.mp4
```

This can reduce the video to <100MB while maintaining acceptable quality.

---

## Current Status

✅ Gallery page created  
✅ Insights page created  
✅ Video integrated in Home hero  
✅ Fallback poster image configured  
⚠️ Video hosted locally only  
📝 Production deployment needs cloud hosting

---

**Next Step**: Choose a hosting solution and update the video source URL before deploying to Vercel.
