# Vercel Deployment Guide

## Prerequisites
- A Vercel account (free at [vercel.com](https://vercel.com))
- Your portfolio project pushed to a GitHub repository

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push your code to GitHub
```bash
git add .
git commit -m "Add Vercel deployment configuration"
git push origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a React app
5. Click "Deploy"

That's it! Your site will be live in minutes.

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
vercel
```

Follow the prompts to configure your project.

## Method 3: Automatic Deployment

Once connected to Vercel, every push to your main branch will automatically trigger a new deployment.

## Configuration Details

The `vercel.json` file includes:
- **Build Configuration**: Tells Vercel to build from `package.json` and output to `build` directory
- **Route Configuration**: Handles React Router by serving `index.html` for all routes
- **Static Assets**: Properly serves static files from the `public` folder

## Benefits of Vercel

✅ **Automatic HTTPS** - SSL certificates included  
✅ **Global CDN** - Fast loading worldwide  
✅ **Automatic Deployments** - Deploy on every git push  
✅ **Preview Deployments** - Test changes before merging  
✅ **Custom Domains** - Add your own domain easily  
✅ **Analytics** - Built-in performance monitoring  

## Custom Domain Setup

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Environment Variables

If you need environment variables:
1. Go to project settings on Vercel
2. Navigate to "Environment Variables"
3. Add your variables (e.g., API keys)

## Troubleshooting

- **Build fails**: Check the build logs in Vercel dashboard
- **Images not loading**: Ensure they're in the `public` folder
- **Routing issues**: The `vercel.json` handles React Router automatically
- **Performance**: Vercel automatically optimizes your build

## Next Steps

After deployment, you can:
- Set up a custom domain
- Configure environment variables
- Enable analytics
- Set up automatic deployments for other branches 