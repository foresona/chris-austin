# Self-Hosted Tina CMS Deployment Guide

This guide will help you deploy the Chris Austin PR Agency website with a self-hosted Tina CMS backend that works in production.

## 🎯 Overview

We're using:

- **Next.js 15** - Frontend framework
- **Tina CMS (Self-Hosted)** - Content management with authentication
- **MongoDB Atlas** - Free database tier for storing content
- **NextAuth** - Authentication for admin access
- **GitHub** - Git backend for version control
- **Vercel** - Free hosting

## 📋 Prerequisites

1. GitHub account (already set up: `foresona/chris-austin`)
2. MongoDB Atlas account (free tier)
3. Vercel account (free tier)
4. GitHub Personal Access Token

---

## 🚀 Step 1: Set Up MongoDB Atlas (Free)

### 1.1 Create MongoDB Account

1. Go to https://www.mongodb.com/cloud/atlas/register
2. Sign up for free (no credit card required)

### 1.2 Create a Cluster

1. Click "Build a Database"
2. Choose **M0 FREE** tier
3. Select a region close to your users
4. Click "Create Cluster"

### 1.3 Create Database User

1. Go to "Database Access" in left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Username: `tinauser` (or your choice)
5. Password: Generate a strong password (save it!)
6. Database User Privileges: "Read and write to any database"
7. Click "Add User"

### 1.4 Allow Network Access

1. Go to "Network Access" in left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (0.0.0.0/0)
   - This is needed for Vercel to access the database
4. Click "Confirm"

### 1.5 Get Connection String

1. Go back to "Database" view
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string (looks like):
   ```
   mongodb+srv://tinauser:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<password>` with your actual password
6. **Save this connection string** - you'll need it for `MONGODB_URI`

---

## 🔑 Step 2: Create GitHub Personal Access Token

### 2.1 Generate Token

1. Go to https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name it: `Tina CMS - Chris Austin`
4. Expiration: Choose "No expiration" or longer period
5. Select scopes:
   - ✅ `repo` (Full control of private repositories)
   - ✅ `workflow` (Update GitHub Action workflows)
6. Click "Generate token"
7. **Copy the token immediately** (you won't see it again!)

### 2.2 Token Details

- This token allows Tina to commit content changes to GitHub
- Format: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
- **Save this** - you'll need it for `GITHUB_PERSONAL_ACCESS_TOKEN`

---

## 🔐 Step 3: Generate NextAuth Secret

Run this command locally to generate a secret:

```bash
openssl rand -base64 32
```

Or use this Node.js script:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

**Save this output** - you'll need it for `NEXTAUTH_SECRET`

---

## 🌐 Step 4: Deploy to Vercel

### 4.1 Connect Repository to Vercel

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import `foresona/chris-austin` repository
4. Framework Preset: **Next.js** (auto-detected)
5. Root Directory: `./` (default)
6. Build Command: `npm run build` (default)
7. Output Directory: `.next` (default)

### 4.2 Configure Environment Variables

**BEFORE** clicking "Deploy", add these environment variables:

#### Required Variables:

```bash
# MongoDB Connection
MONGODB_URI=mongodb+srv://tinauser:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority

# GitHub Integration
GITHUB_OWNER=foresona
GITHUB_REPO=chris-austin
GITHUB_BRANCH=main
GITHUB_PERSONAL_ACCESS_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# NextAuth Configuration
NEXTAUTH_SECRET=YOUR_GENERATED_SECRET_FROM_STEP_3
NEXTAUTH_URL=https://your-vercel-url.vercel.app

# Tina Configuration
TINA_PUBLIC_IS_LOCAL=false
```

#### Important Notes:

- Replace `YOUR_PASSWORD` with your MongoDB password
- Replace `ghp_xxx...` with your GitHub token
- Replace `YOUR_GENERATED_SECRET_FROM_STEP_3` with the secret from Step 3
- For `NEXTAUTH_URL`, you can use the Vercel preview URL first, then update it after deployment

### 4.3 Deploy

1. Click "Deploy"
2. Wait for build to complete (~2-3 minutes)
3. Note your deployment URL (e.g., `https://chris-austin.vercel.app`)

### 4.4 Update NEXTAUTH_URL

1. Go to Vercel project settings
2. Navigate to "Environment Variables"
3. Update `NEXTAUTH_URL` with your actual Vercel URL
4. Redeploy from "Deployments" tab

---

## 👤 Step 5: Create Admin User

### 5.1 Access Tina Backend

1. Go to your deployed site: `https://your-site.vercel.app/admin`
2. You'll see the Tina login screen
3. Click "Sign in with GitHub"

### 5.2 First Login

The first time you sign in with GitHub:

1. Authorize the application
2. You'll be redirected back to the admin
3. You're now authenticated and can edit content!

### 5.3 Authorize Additional Users

To allow other GitHub users to access the admin:

1. They need to be part of the `foresona` GitHub organization
2. OR you can configure authorization in `src/pages/api/tina/[...routes].ts`

---

## ✅ Step 6: Test the Setup

### 6.1 Test Admin Access

1. Visit: `https://your-site.vercel.app/admin`
2. Sign in with GitHub
3. Try editing a testimonial
4. Click "Save"
5. Changes should commit to GitHub

### 6.2 Test Live Updates

1. After saving in admin, check GitHub repository
2. You should see a new commit with your changes
3. Vercel will auto-deploy the new content
4. Visit the main site to see changes live

---

## 🔧 Environment Variables Reference

Here's a complete list of all required environment variables:

| Variable                       | Description                   | Example                        |
| ------------------------------ | ----------------------------- | ------------------------------ |
| `MONGODB_URI`                  | MongoDB connection string     | `mongodb+srv://...`            |
| `GITHUB_OWNER`                 | GitHub organization/user      | `foresona`                     |
| `GITHUB_REPO`                  | Repository name               | `chris-austin`                 |
| `GITHUB_BRANCH`                | Git branch to use             | `main`                         |
| `GITHUB_PERSONAL_ACCESS_TOKEN` | GitHub PAT with repo access   | `ghp_xxx...`                   |
| `NEXTAUTH_SECRET`              | Random secret for NextAuth    | Generated string               |
| `NEXTAUTH_URL`                 | Full URL of your site         | `https://your-site.vercel.app` |
| `TINA_PUBLIC_IS_LOCAL`         | Set to `false` for production | `false`                        |

---

## 🎉 Success!

You now have:

- ✅ Website deployed on Vercel
- ✅ Admin interface accessible at `/admin`
- ✅ Content stored in MongoDB (free tier)
- ✅ Changes committed to GitHub automatically
- ✅ Auto-deployment on content updates
- ✅ **Still 100% free!**

## 📝 Content Editing Workflow

1. Visit `https://your-site.vercel.app/admin`
2. Sign in with GitHub
3. Edit content (testimonials, blog posts, pages)
4. Click "Save"
5. Tina commits to GitHub
6. Vercel auto-deploys
7. Changes appear live in ~1-2 minutes

---

## 🐛 Troubleshooting

### "Failed to connect to database"

- Check `MONGODB_URI` is correct
- Verify IP whitelist includes 0.0.0.0/0
- Check database user has correct permissions

### "GitHub authentication failed"

- Verify `GITHUB_PERSONAL_ACCESS_TOKEN` is valid
- Check token has `repo` scope
- Confirm token hasn't expired

### "NextAuth error"

- Verify `NEXTAUTH_SECRET` is set
- Check `NEXTAUTH_URL` matches your domain exactly
- Must include `https://` protocol

### "Cannot edit content"

- Sign in with GitHub first
- Check browser console for errors
- Verify all environment variables are set in Vercel

### Admin shows "unauthorized"

- Make sure you're signed in with a GitHub account
- Check if you have access to the repository
- Verify NextAuth is configured correctly

---

## 🔄 Making Content Changes

### Option 1: Via Admin (Recommended)

1. Go to `/admin`
2. Edit content visually
3. Save changes

### Option 2: Via Git

1. Edit files in `content/` folder locally
2. Commit and push to GitHub
3. Vercel auto-deploys

---

## 💰 Cost Breakdown

- **Vercel Free Tier**: ✅ Free forever (bandwidth limits apply)
- **MongoDB Atlas Free Tier**: ✅ Free forever (512MB storage)
- **GitHub**: ✅ Free for public repos
- **Domain**: Optional ($12/year if you want custom domain)

**Total: $0/month** 🎉

---

## 📚 Additional Resources

- [Tina Self-Hosted Docs](https://tina.io/docs/self-hosted/overview/)
- [MongoDB Atlas Getting Started](https://www.mongodb.com/docs/atlas/getting-started/)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Vercel Documentation](https://vercel.com/docs)

---

## 🆘 Need Help?

- Check Vercel build logs: `https://vercel.com/foresonas-projects/business-web`
- Check MongoDB Atlas logs in the cluster dashboard
- Review GitHub commits to see if Tina is saving properly
- Contact support or check documentation links above
