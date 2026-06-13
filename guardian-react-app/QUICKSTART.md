# Guardian Reinsurance - Quick Start Guide

Get your Guardian Reinsurance website running in 3 simple steps!

## Step 1: Setup Images (30 seconds)

**Option A: Automated (Recommended)**
```cmd
setup-images.bat
```
Double-click the `setup-images.bat` file or run it from command prompt.

**Option B: Manual**
- See `SETUP-IMAGES.md` for detailed instructions

## Step 2: Install Dependencies (2-3 minutes)

Open Command Prompt in this folder and run:
```cmd
npm install
```

## Step 3: Start the App (10 seconds)

```cmd
npm start
```

Your browser will automatically open to `http://localhost:3000`

---

## What You'll See

✅ **Home Page** (`/`)
- Auto-rotating hero carousel with 3 slides
- Market analytics section
- Expertise showcase with 3 value props
- Strategic solutions cards
- FAQ accordion
- Premium CTA section

✅ **Products Page** (`/products`)
- Hero with decorative pattern
- 4 Product cards (Treaty, Facultative, Claims, Accounting)
- Strategic partnerships section
- Why choose us section
- Glassmorphic CTA

✅ **Responsive Design**
- Mobile-first approach
- Tablet optimized
- Desktop enhanced
- Mobile menu drawer

---

## Troubleshooting

### Images not showing?
1. Check that `public/images/` folder exists
2. Run `setup-images.bat` again
3. Verify files in `../Website/` folder exist

### Port already in use?
React will automatically try port 3001, 3002, etc.

### npm install fails?
1. Make sure Node.js is installed: `node --version`
2. Update npm: `npm install -g npm@latest`
3. Clear cache: `npm cache clean --force`

---

## Next Steps

### Customize Content
- Edit text in `src/pages/Home.jsx`
- Edit text in `src/pages/Products.jsx`

### Change Colors
- Edit `tailwind.config.js`
- Update color values in `theme.extend.colors`

### Add More Pages
1. Create `src/pages/YourPage.jsx`
2. Import in `src/App.js`
3. Add route: `<Route path="/your-page" element={<YourPage />} />`

### Deploy to Production
```cmd
npm run build
```
Then upload the `build/` folder to your web server.

---

## Need Help?

- Check `README.md` for full documentation
- Review `SETUP-IMAGES.md` for image setup details
- See design specs in `../guardian_prestige/DESIGN.md`

---

**Built with React + Tailwind CSS**

Enjoy building with Guardian Re! 🛡️
