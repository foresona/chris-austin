# 🚀 Deployment Guide - Chris Austin PR Agency

## Prerequisites

Before deploying, ensure you have:
- ✅ GitHub repository: `foresona/chris-austin`
- ✅ MongoDB Atlas cluster with connection URI
- ✅ GitHub Personal Access Token with `repo` scope
- ✅ All code committed and pushed to main branch

---

## 🎯 Deploy to Vercel (Recommended)

### Step 1: Import Project to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select `foresona/chris-austin`
4. Click "Import"

### Step 2: Configure Environment Variables

Before clicking "Deploy", add these environment variables in Vercel:

#### Required Environment Variables

| Variable | Value | Notes |
|----------|-------|-------|
| `TINA_PUBLIC_IS_LOCAL` | `false` | Enables self-hosted mode |
| `GITHUB_OWNER` | `foresona` | Your GitHub username/org |
| `GITHUB_REPO` | `chris-austin` | Your repository name |
| `GITHUB_BRANCH` | `main` | Main branch name |
| `GITHUB_PERSONAL_ACCESS_TOKEN` | `ghp_xxx...` | Generate from GitHub Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token. Needs `repo` scope |
| `MONGODB_URI` | `mongodb+srv://tina-admin:...@tina-cms.xxx.mongodb.net/tinacms` | Your MongoDB Atlas connection string with database name |
| `NEXTAUTH_SECRET` | `<your-secret>` | Generate with: `openssl rand -base64 32` |
| `NEXTAUTH_URL` | `https://your-domain.vercel.app` | Will be your Vercel deployment URL (update after first deploy) |

### Step 3: Deploy

1. Click "Deploy"
2. Wait for build to complete (~2-5 minutes)
3. Note your deployment URL (e.g., `https://chris-austin-xxx.vercel.app`)

### Step 4: Update NEXTAUTH_URL

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Find `NEXTAUTH_URL`
3. Update value to your actual deployment URL: `https://chris-austin-xxx.vercel.app`
4. Click "Save"
5. Trigger a redeploy: Deployments → Latest → Three dots → Redeploy

### Step 5: Configure GitHub OAuth App

1. Go to GitHub → Settings → Developer settings → OAuth Apps → New OAuth App
2. Fill in:
   - **Application name**: `Chris Austin PR CMS`
   - **Homepage URL**: `https://your-domain.vercel.app`
   - **Authorization callback URL**: `https://your-domain.vercel.app/api/auth/callback/github`
3. Click "Register application"
4. Copy the **Client ID**
5. Generate a new **Client Secret** and copy it

### Step 6: Add GitHub OAuth Credentials to Vercel

1. Go back to Vercel → Your Project → Settings → Environment Variables
2. Add these two new variables:
   - `GITHUB_ID` = `<your-client-id>`
   - `GITHUB_SECRET` = `<your-client-secret>`
3. Redeploy again

### Step 7: Test Your Deployment

1. Visit `https://your-domain.vercel.app`
2. Homepage should load perfectly
3. Visit `https://your-domain.vercel.app/admin`
4. You should see **"Sign in with GitHub"** button
5. Click to authenticate
6. After login, you should access the TinaCMS admin interface
7. Try editing a blog post and saving
8. Check your GitHub repo for the automated commit

---

## 🔍 Verification Checklist

- [ ] Homepage loads at `https://your-domain.vercel.app`
- [ ] Admin requires GitHub authentication
- [ ] Can successfully log in with GitHub
- [ ] Can view collections (posts, testimonials, pages)
- [ ] Can edit content
- [ ] Edits create commits in GitHub
- [ ] Content changes appear on the website

---

## 🐛 Troubleshooting

### Build Fails

**Error**: `Database is not open`
- **Solution**: Ensure `MONGODB_URI` includes the database name: `mongodb+srv://...net/tinacms`

**Error**: `GITHUB_PERSONAL_ACCESS_TOKEN is not defined`
- **Solution**: Check environment variables are set in Vercel dashboard

### Authentication Not Working

**Issue**: No login button appears
- **Solution**: Verify `TINA_PUBLIC_IS_LOCAL=false` in Vercel env variables

**Issue**: GitHub OAuth fails
- **Solution**: 
  1. Check `NEXTAUTH_URL` matches your deployment URL
  2. Verify GitHub OAuth callback URL is correct
  3. Ensure `GITHUB_ID` and `GITHUB_SECRET` are set

### Content Changes Not Saving

**Issue**: Edits don't create commits
- **Solution**: 
  1. Verify `GITHUB_PERSONAL_ACCESS_TOKEN` has `repo` scope
  2. Check token hasn't expired
  3. Ensure `GITHUB_OWNER` and `GITHUB_REPO` are correct

---

## 📊 Monitoring

### Vercel Dashboard
- View deployment logs
- Monitor build times
- Check function invocations

### MongoDB Atlas
- Monitor database connections
- Check query performance
- View stored content index

### GitHub
- Check commit history for content changes
- Verify automated commits from TinaCMS

---

## 🔄 Updating Content

### Via Admin Interface (Recommended)
1. Go to `https://your-domain.vercel.app/admin`
2. Sign in with GitHub
3. Edit content through the visual interface
4. Save changes (automatically commits to GitHub)
5. Vercel auto-deploys on commit

### Via Git (Direct)
1. Clone repository
2. Edit files in `/content` directory
3. Commit and push
4. Vercel auto-deploys

---

## 🚨 Important Notes

### .env.local File
- ⚠️ **Never commit `.env.local` to Git**
- It's already in `.gitignore`
- Contains sensitive credentials

### MongoDB Atlas
- Keep your connection string secure
- Whitelist Vercel IPs or use `0.0.0.0/0` for all IPs
- Monitor usage to stay within free tier limits

### GitHub Token
- Regenerate if compromised
- Use fine-grained tokens for better security
- Scope should be limited to the specific repository

---

## 📈 Scaling

### Performance
- Vercel's Edge Network provides global CDN
- MongoDB free tier (M0) sufficient for small sites
- Upgrade MongoDB if hitting connection limits

### Custom Domain
1. Go to Vercel → Your Project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update `NEXTAUTH_URL` to custom domain
5. Update GitHub OAuth callback URL

---

## 🎉 Success!

Your Chris Austin PR Agency website is now live with:
- ✅ Self-hosted TinaCMS with authentication
- ✅ MongoDB backend for content indexing
- ✅ GitHub OAuth for secure admin access
- ✅ Automatic deployments on content changes
- ✅ Global CDN via Vercel Edge Network

**Admin URL**: `https://your-domain.vercel.app/admin`

Need help? Check the troubleshooting guides:
- `SELF_HOSTED_DEPLOYMENT.md`
- `PORT_CONFLICT_TROUBLESHOOTING.md`
- `TEST_SELF_HOSTED.md`
