# 🚀 Deploy to Vercel - Quick Start

## One-Click Deploy

### Option 1: Via Vercel Dashboard (Easiest)

1. **Visit Vercel**: Go to [vercel.com](https://vercel.com)

2. **Sign In**: Use your GitHub account

3. **Import Project**:
   - Click "Add New..." → "Project"
   - Select: `Guardian-Reinsurance`
   - Click "Import"

4. **Configure** (auto-detected):
   - Framework: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`

5. **Deploy**: Click "Deploy" button

6. **Done!** Your site will be live in ~2 minutes at:
   ```
   https://guardian-reinsurance-XXXXX.vercel.app
   ```

---

## Option 2: Via Command Line

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Navigate to project
cd "guardian-react-app"

# Deploy
vercel --prod
```

---

## 🎯 Next Steps After Deployment

### 1. Test Your Live Site
Visit all pages to ensure everything works:
- ✅ Home page with carousel
- ✅ About page with hero
- ✅ Products page
- ✅ Claims page
- ✅ Contact page with Google Maps

### 2. Set Up Custom Domain (Optional)
In Vercel dashboard:
- Go to Project Settings → Domains
- Add: `www.guardianrebrokers.co.ug`
- Follow DNS configuration instructions

### 3. Enable Analytics (Optional)
- Go to Analytics tab
- Enable Web Analytics for visitor insights

---

## 📱 Share Your Site

Your deployed URLs:
- **Vercel URL**: `https://guardian-reinsurance.vercel.app`
- **GitHub Repo**: https://github.com/IanVikta/Guardian-Reinsurance

---

## 🔄 Auto-Deployments Enabled

Every time you push to GitHub, Vercel automatically:
1. Detects the change
2. Builds the project
3. Deploys the new version

```bash
# Make updates
git add .
git commit -m "Your changes"
git push origin develop

# Vercel deploys automatically!
```

---

## ⚡ That's It!

Your professional reinsurance website is now live and ready to receive visitors.

For detailed troubleshooting, see `DEPLOYMENT-GUIDE.md`
