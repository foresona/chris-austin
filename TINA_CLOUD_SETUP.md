# TinaCMS Cloud Setup Guide

## 🎯 Quick Setup (5 minutes)

### Step 1: Create TinaCMS Cloud Account

1. Go to https://app.tina.io/register
2. Click "Sign up with GitHub"
3. Authorize TinaCMS to access your GitHub account

### Step 2: Create a New Project

1. Once logged in, click **"Create a Project"** or **"Add New Project"**
2. Select your repository: **`foresona/chris-austin`**
3. Choose the branch: **`main`**
4. Click **"Continue"** or **"Create Project"**

### Step 3: Get Your Credentials

After creating the project, TinaCMS Cloud will show you:

- **Client ID**: A string like `abc123def456...`
- **Read-Only Token**: A longer string starting with `...`

**⚠️ IMPORTANT:** Copy these values now! You'll need them in the next step.

### Step 4: Add Environment Variables to Vercel

Run these commands in your terminal (I'll help you with this):

```bash
# Add Client ID (this is public, safe to commit)
vercel env add NEXT_PUBLIC_TINA_CLIENT_ID production

# Add Token (keep this secret!)
vercel env add TINA_TOKEN production
```

Or add them manually in Vercel Dashboard:

1. Go to https://vercel.com/foresonas-projects/chrisaustin/settings/environment-variables
2. Add `NEXT_PUBLIC_TINA_CLIENT_ID` with your Client ID
3. Add `TINA_TOKEN` with your Token
4. Set both to "Production" environment

### Step 5: Deploy

After adding the environment variables:

```bash
# I'll run this for you
vercel --prod
```

### Step 6: Test Your CMS

1. Visit: https://chrisaustin.vercel.app/admin
2. Click "Continue with GitHub"
3. Authorize if prompted
4. You should see your content!
5. Try editing the Home page

## 📝 What Changed

### Files Updated:

- ✅ `tina/config.ts` - Now uses TinaCMS Cloud
- ✅ Configuration simplified (no MongoDB needed)

### What You Can Do:

- ✅ Edit content via `/admin` with GitHub authentication
- ✅ Changes automatically commit to your repository
- ✅ Vercel auto-deploys when you save changes in TinaCMS
- ✅ No database setup needed
- ✅ Multi-user collaboration (invite team members in TinaCMS Cloud)

## 🎨 Editing Your Website

### To Edit the Home Page:

1. Go to `/admin`
2. Click "Pages" in the sidebar
3. Select "home.mdx"
4. Edit any field:
   - Hero Title/Subtitle
   - Hero Description
   - CTA Section
   - Statistics
   - About Section
5. Click "Save" (commits to GitHub)
6. Wait ~1 minute for Vercel to deploy

### To Edit Blog Posts:

1. Go to `/admin`
2. Click "Blog Posts"
3. Select a post or create new
4. Edit content using the rich text editor
5. Save (auto-commits and deploys)

### To Edit Testimonials:

1. Go to `/admin`
2. Click "Testimonials"
3. Edit existing or add new
4. Save

## 🔧 Local Development

For local development with TinaCMS Cloud:

1. Create `.env.local`:

```bash
NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id_here
TINA_TOKEN=your_token_here
TINA_PUBLIC_IS_LOCAL=false
```

2. Run dev server:

```bash
npm run dev
```

3. Access admin at `http://localhost:3000/admin`

## 🆘 Troubleshooting

### "Unauthorized" Error

- Ensure you've added both environment variables to Vercel
- Redeploy after adding variables

### Can't See Content

- Check that your Client ID and Token are correct
- Verify you authorized TinaCMS to access your repository

### Changes Not Deploying

- Check GitHub commits (TinaCMS creates commits when you save)
- Check Vercel deployment logs
- Ensure Vercel is connected to your GitHub repo

## 📚 Resources

- TinaCMS Cloud Dashboard: https://app.tina.io
- TinaCMS Documentation: https://tina.io/docs
- Vercel Dashboard: https://vercel.com/foresonas-projects/chrisaustin

---

**Ready to set up?** Follow the steps above and let me know when you have your Client ID and Token!
