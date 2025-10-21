# 🚀 Deployment Guide

## Deploy to GitHub Pages

### Step 1: Install gh-pages package
```bash
npm install --save-dev gh-pages
```

### Step 2: Update the homepage URL
In `package.json`, replace `YOUR-GITHUB-USERNAME` with your actual GitHub username:
```json
"homepage": "https://YOUR-GITHUB-USERNAME.github.io/dubai-accessibility-guide"
```

### Step 3: Initialize Git repository (if not already done)
```bash
git init
git add .
git commit -m "Initial commit - Dubai Accessibility Guide"
```

### Step 4: Create a GitHub repository
1. Go to https://github.com/new
2. Create a new repository named `dubai-accessibility-guide`
3. Don't initialize with README (you already have files)

### Step 5: Connect to GitHub and push
```bash
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/dubai-accessibility-guide.git
git branch -M main
git push -u origin main
```

### Step 6: Deploy to GitHub Pages
```bash
npm run deploy
```

This will:
- Build your app
- Create a `gh-pages` branch
- Deploy the build folder to GitHub Pages

### Step 7: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select branch: `gh-pages` and folder: `/ (root)`
4. Click **Save**

Your site will be live at: `https://YOUR-GITHUB-USERNAME.github.io/dubai-accessibility-guide`

---

## Alternative Deployment Options

### Option 1: Vercel (Recommended - Free & Easy)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```
- Follow the prompts
- Your site will be live instantly with a vercel.app URL
- Free SSL certificate included
- Automatic deployments on git push

### Option 2: Netlify (Free & Popular)
1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect to your GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
5. Click "Deploy site"

### Option 3: Firebase Hosting
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and initialize
firebase login
firebase init hosting

# Deploy
npm run build
firebase deploy
```

### Option 4: AWS Amplify
1. Go to AWS Amplify Console
2. Click "New app" → "Host web app"
3. Connect your GitHub repository
4. Configure build settings (auto-detected for React)
5. Deploy

---

## Updating Your Deployed Site

After making changes:

**For GitHub Pages:**
```bash
git add .
git commit -m "Update: your changes"
git push
npm run deploy
```

**For Vercel/Netlify:**
```bash
git add .
git commit -m "Update: your changes"
git push
```
(Automatic deployment will trigger)

---

## Custom Domain (Optional)

### For GitHub Pages:
1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. In your repository settings → Pages → Custom domain
3. Add your domain (e.g., `dubai-accessibility.com`)
4. Configure DNS with your domain provider:
   - Add A records pointing to GitHub's IPs
   - Add CNAME record for www

### For Vercel/Netlify:
1. Go to domain settings in the platform
2. Add your custom domain
3. Follow the DNS configuration instructions

---

## Troubleshooting

### Issue: Blank page after deployment
**Solution:** Make sure your `homepage` in `package.json` matches your deployment URL

### Issue: 404 errors on refresh
**Solution:** Add a `_redirects` file in the `public` folder:
```
/*    /index.html   200
```

### Issue: Build fails
**Solution:** 
```bash
# Clear cache and rebuild
rm -rf node_modules build
npm install
npm run build
```

---

## Environment Variables

If you need environment variables (API keys, etc.):

1. Create `.env` file in root:
```
REACT_APP_API_KEY=your_api_key
```

2. For GitHub Pages, use GitHub Secrets
3. For Vercel/Netlify, add in the platform's environment settings

---

## Performance Optimization

Before deploying, consider:
- ✅ Images are optimized
- ✅ Code is minified (automatic with `npm run build`)
- ✅ Lighthouse score is good
- ✅ Accessibility features are working

---

## Need Help?

- GitHub Pages: https://docs.github.com/pages
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com

