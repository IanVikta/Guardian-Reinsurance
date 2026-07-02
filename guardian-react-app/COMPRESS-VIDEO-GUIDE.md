# Video Compression Guide

## The Problem
Your video (28.63 MB) exceeds Vercel's practical deployment limits. You need to either:
1. Use Vercel Blob Storage (recommended)
2. Compress the video significantly (under 10MB)

## Option 1: Online Compression (Easiest)

### Using CloudConvert (Free):
1. Go to https://cloudconvert.com/mp4-converter
2. Upload `public/videos/reinsurance.mp4`
3. Click "Settings" and adjust:
   - Resolution: 1280x720 (or lower)
   - Video Codec: H.264
   - Quality: Medium (or lower)
   - Bitrate: 1000 kbps
4. Convert and download
5. Replace the original file

### Using FreeConvert (Free):
1. Go to https://www.freeconvert.com/video-compressor
2. Upload your video
3. Select "Compress by Percentage" → 60-70%
4. Download compressed version

## Option 2: Using FFmpeg (Best Quality Control)

If you have FFmpeg installed:

```bash
# Compress to under 10MB with good quality
ffmpeg -i "public/videos/reinsurance.mp4" -vcodec h264 -crf 28 -preset medium -vf scale=1280:-1 -acodec aac -b:a 128k "public/videos/reinsurance-compressed.mp4"
```

**CRF Values:**
- 18-23: High quality (larger file)
- 24-28: Medium quality (good balance)
- 29-35: Lower quality (smaller file)

### To Install FFmpeg:
- **Windows**: Download from https://www.gyan.dev/ffmpeg/builds/
- **Mac**: `brew install ffmpeg`

## Option 3: Use a Static Image Instead (Fallback)

If compression doesn't work well:

1. Extract a frame from the video as poster image
2. Use the poster image with a subtle CSS animation
3. Keep the video for local development only

Update Home.jsx:
```jsx
{/* For production - use static image with animation */}
<div className="absolute inset-0 hero-image-animate" 
     style={{backgroundImage: 'url(/images/hero-1.jpg)'}}>
</div>

{/* For local dev - keep video */}
{process.env.NODE_ENV === 'development' && (
  <video autoPlay loop muted playsInline>
    <source src="/videos/reinsurance.mp4" type="video/mp4" />
  </video>
)}
```

## Recommended Approach

**For Production:** Use Vercel Blob Storage (see VERCEL-BLOB-SETUP.md)
- No compression needed
- Best performance
- Professional solution

**For Quick Fix:** Compress video to ~8-10MB
- Acceptable quality loss
- Works immediately
- No additional setup

## Target Specifications
- **File Size**: Under 10MB (ideal: 5-8MB)
- **Resolution**: 1280x720 or 1920x1080
- **Codec**: H.264
- **Bitrate**: 800-1500 kbps
- **Frame Rate**: 24-30 fps
