# Image Setup Guide

## Quick Setup

1. Create the images folder:
```
guardian-react-app/public/images/
```

2. Copy images from `../Website/` folder to `public/images/` using the mapping below.

## Image Mapping

Copy and rename images as follows:

| Target Name | Source File | Usage |
|------------|-------------|--------|
| `hero-1.jpg` | `new-year-reinsurance-1.png` | Home carousel slide 1 |
| `hero-2.jpg` | `StockCake-Global hologram sphere_1749902749.jpg` | Home carousel slide 2 |
| `hero-3.jpg` | `REinsurance-image--3.png` | Home carousel slide 3 |
| `analytics.jpg` | `WhatsApp Image 2025-06-14 at 16.59.43_44379677.jpg` | Analytics section |
| `expertise.jpg` | `WhatsApp Image 2025-06-14 at 16.59.42_766f72c2.jpg` | Expertise background |
| `treaty.jpg` | `guardian-feb-1.1.png` | Treaty broking card |
| `facultative.jpg` | `guardian-sm-work-.png` | Facultative card |
| `consultant.jpg` | `WhatsApp Image 2025-06-14 at 15.34.38_ba536711.jpg` | Products hero |
| `treaty-discussion.jpg` | `IMG-20250614-WA0015.jpg` | Products treaty section |
| `strategic-analysis.jpg` | `WhatsApp Image 2025-06-14 at 16.59.43_0465ed25.jpg` | Strategic partnerships |
| `skyline.jpg` | `WhatsApp Image 2025-06-14 at 16.59.43_30c2cfd7.jpg` | Why choose us |
| `global-connectivity.jpg` | `New-year-reinsurance-2.png` | CTA background |

## Windows Command Line Setup

Run these commands from the `guardian-react-app` directory:

```cmd
mkdir public\images

copy "..\Website\new-year-reinsurance-1.png" "public\images\hero-1.jpg"
copy "..\Website\StockCake-Global hologram sphere_1749902749.jpg" "public\images\hero-2.jpg"
copy "..\Website\REinsurance-image--3.png" "public\images\hero-3.jpg"
copy "..\Website\WhatsApp Image 2025-06-14 at 16.59.43_44379677.jpg" "public\images\analytics.jpg"
copy "..\Website\WhatsApp Image 2025-06-14 at 16.59.42_766f72c2.jpg" "public\images\expertise.jpg"
copy "..\Website\guardian-feb-1.1.png" "public\images\treaty.jpg"
copy "..\Website\guardian-sm-work-.png" "public\images\facultative.jpg"
copy "..\Website\WhatsApp Image 2025-06-14 at 15.34.38_ba536711.jpg" "public\images\consultant.jpg"
copy "..\Website\IMG-20250614-WA0015.jpg" "public\images\treaty-discussion.jpg"
copy "..\Website\WhatsApp Image 2025-06-14 at 16.59.43_0465ed25.jpg" "public\images\strategic-analysis.jpg"
copy "..\Website\WhatsApp Image 2025-06-14 at 16.59.43_30c2cfd7.jpg" "public\images\skyline.jpg"
copy "..\Website\New-year-reinsurance-2.png" "public\images\global-connectivity.jpg"
```

## Alternative: Manual Copy

1. Create folder: `guardian-react-app/public/images/`
2. Open Windows Explorer
3. Navigate to the Website folder
4. Copy each file listed in the table above
5. Paste into `public/images/`
6. Rename according to the target names

## Verify Setup

After copying, you should have these 12 images:
- ✓ hero-1.jpg
- ✓ hero-2.jpg
- ✓ hero-3.jpg
- ✓ analytics.jpg
- ✓ expertise.jpg
- ✓ treaty.jpg
- ✓ facultative.jpg
- ✓ consultant.jpg
- ✓ treaty-discussion.jpg
- ✓ strategic-analysis.jpg
- ✓ skyline.jpg
- ✓ global-connectivity.jpg

Now run `npm start` to see your site with images!
