# Guardian Reinsurance - Vercel Deployment Guide

## 🚀 Quick Deploy to Vercel

### Prerequisites
- GitHub repository: `https://github.com/IanVikta/Guardian-Reinsurance.git`
- Vercel account (free tier works perfectly)
- Node.js installed locally (for testing)

---

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push Your Code to GitHub
```bash
# Make sure all changes are committed
git add .
git commit -m "Ready for Vercel deployment"
git push origin develop
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click **"Add New..."** → **"Project"**
4. Import your repository: `Guardian-Reinsurance`

### Step 3: Configure Build Settings
Vercel will auto-detect Create React App. Verify these settings:

- **Framework Preset**: `Create React App`
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `build` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

### Step 4: Environment Variables (if needed)
Currently, this project doesn't require any environment variables.

### Step 5: Deploy
1. Click **"Deploy"**
2. Wait 2-3 minutes for the build to complete
3. Your site will be live at: `https://guardian-reinsurance-<random>.vercel.app`

---

## Method 2: Deploy via Vercel CLI

### Install Vercel CLI
```bash
npm install -g vercel
```

### Login to Vercel
```bash
vercel login
```

### Deploy
```bash
# Navigate to project directory
cd "d:\xampp\htdocs\AdvPHP\Guardian Reinsurance\guardian-react-app"

# Deploy to production
vercel --prod
```

---

## 🎯 Custom Domain Setup

### After Initial Deployment:
1. Go to your project dashboard on Vercel
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain: `www.guardianrebrokers.co.ug`
4. Follow DNS configuration instructions provided by Vercel
5. Add these DNS records to your domain provider:

**For Apex Domain (guardianrebrokers.co.ug):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For WWW Subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## ✅ Post-Deployment Checklist

### 1. Test All Pages
- [ ] Home page loads correctly
- [ ] About page with hero section
- [ ] Products page
- [ ] Claims page with redesigned hero
- [ ] Contact page with Google Maps

### 2. Test Functionality
- [ ] Navigation links work
- [ ] All buttons link to correct pages
- [ ] Logo displays correctly
- [ ] Loader shows on initial load
- [ ] Images load properly
- [ ] Google Maps embedded correctly
- [ ] Responsive design on mobile

### 3. SEO Verification
- [ ] Favicon appears in browser tab
- [ ] Page title shows correct info
- [ ] Meta descriptions present
- [ ] Open Graph tags working (test by sharing URL)

### 4. Performance Check
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Check image optimization
- [ ] Verify page load times

---

## 🔄 Continuous Deployment

Vercel automatically redeploys when you push to GitHub:

```bash
# Make changes to your code
git add .
git commit -m "Update: description of changes"
git push origin develop
```

Vercel will automatically:
1. Detect the push
2. Build the project
3. Deploy the new version
4. Keep previous versions as rollback points

---

## 📊 Monitoring & Analytics

### Enable Vercel Analytics (Optional)
1. Go to project dashboard
2. Click **"Analytics"** tab
3. Enable Web Analytics (free for basic metrics)

---

## 🐛 Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Test build locally: `npm run build`

### Images Not Loading
- Verify images are in `/public/images/` directory
- Check image paths start with `/images/` not `./images/`
- Ensure images are committed to Git

### Routing Issues (404 on refresh)
- The `vercel.json` file handles this with catch-all route
- Ensures React Router works on all routes

### Environment Issues
- Node version: Vercel uses Node 18.x by default
- Specify version in `package.json` if needed:
  ```json
  "engines": {
    "node": "18.x"
  }
  ```

---

## 💡 Pro Tips

1. **Preview Deployments**: Every pull request gets a preview URL
2. **Rollback**: Instant rollback to any previous deployment
3. **Environment Variables**: Use for API keys and secrets
4. **Edge Functions**: Available if you need serverless functions later
5. **Custom Headers**: Configure in `vercel.json` for security

---

## 📞 Support Resources

- Vercel Docs: https://vercel.com/docs
- React Deployment: https://create-react-app.dev/docs/deployment/
- GitHub Integration: https://vercel.com/docs/git/vercel-for-github

---

## 🎉 Your Site is Live!

Once deployed, share your URL:
- **Vercel URL**: `https://guardian-reinsurance.vercel.app`
- **Custom Domain** (after setup): `https://www.guardianrebrokers.co.ug`

---

**Deployed**: Guardian Reinsurance Brokers Website  
**Platform**: Vercel  
**Repository**: https://github.com/IanVikta/Guardian-Reinsurance.git  
**Tech Stack**: React 18 + Tailwind CSS + AOS Animations
