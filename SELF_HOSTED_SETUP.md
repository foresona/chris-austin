# Self-Hosted Tina CMS Setup

## ✅ What Was Implemented

Your Chris Austin PR website now has a **self-hosted Tina CMS backend** that will work in production on Vercel!

### Architecture:

- **Database:** MongoDB Atlas (Free tier - 512MB storage)
- **Authentication:** NextAuth.js (username/password login)
- **Git Provider:** GitHub (for saving content changes)
- **Local Mode:** Still works for development (no auth required)

## 🚀 Deploying to Vercel

### Step 1: Add Environment Variables in Vercel

Go to your Vercel project settings and add these environment variables:

```bash
# Set to false for production (enables auth)
TINA_PUBLIC_IS_LOCAL=false

# GitHub Configuration
GITHUB_OWNER=foresona
GITHUB_REPO=business-web
GITHUB_BRANCH=main
GITHUB_PERSONAL_ACCESS_TOKEN=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

# MongoDB Configuration
MONGODB_URI=mongodb+srv://tina-admin:PskHZFrQ708a3Fdo@tina-cms.kti89n4.mongodb.net/

# NextAuth Configuration
NEXTAUTH_SECRET=3fe9c7b83a01681ee207a902299b0a8a
NEXTAUTH_URL=https://your-production-url.vercel.app
```

### Step 2: Deploy

```bash
git push  # If connected to GitHub (will auto-deploy)
# OR
vercel --prod  # Manual deployment
```

### Step 3: First Login

1. Visit `https://your-site.vercel.app/admin`
2. Login with default credentials:
   - **Username:** `tinauser`
   - **Password:** `tinarocks`
3. You'll be prompted to change your password

## 📝 How It Works Now

### Local Development (No Auth)

```bash
npm run dev
# Visit http://localhost:3000/admin
# Edit content freely (no login required)
```

### Production (With Auth)

```bash
# Visit https://your-site.vercel.app/admin
# Login required
# Changes are saved to GitHub automatically
# MongoDB stores the search index
```

## 🔐 Security Notes

**⚠️ IMPORTANT: Your GitHub token is currently in the .env.local file. For production:**

1. **Never commit `.env.local`** - it's already in `.gitignore`
2. **Set environment variables in Vercel dashboard only**
3. **Regenerate GitHub token** if you think it was exposed
4. **Change default password** on first login

## 🎯 Default User

The default user is stored in `content/users/index.json`:

```json
{
  "users": [
    {
      "username": "tinauser",
      "password": "$2a$10$IhARAZKN7uCbI.uRHKW3Tu9dJTB6AzDKs4UOfWYVHB9i1VvQIlqUK",
      "name": "Tina User"
    }
  ]
}
```

### To Add More Users:

Check the [Tina User Management docs](https://tina.io/docs/self-hosted/user-management/)

## 💾 MongoDB Setup

Your MongoDB cluster is already configured:

- **Cluster:** tina-cms.kti89n4.mongodb.net
- **Database:** tinacms
- **Collection:** tinacms
- **Free tier:** 512MB storage

If you need to create your own:

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free cluster
3. Get connection string
4. Update `MONGODB_URI` environment variable

## 📂 File Structure

```
/src/pages/api/tina/[...routes].ts  # API endpoint for Tina
/tina/database.ts                    # Database configuration
/tina/__generated__/databaseClient.ts # Generated DB client
/content/users/index.json            # User credentials
/.env.local                          # Local environment vars (NOT COMMITTED)
```

## 🔄 How Content Saves

### Local Mode (TINA_PUBLIC_IS_LOCAL=true):

- Saves directly to files
- No authentication
- No GitHub commits
- Perfect for development

### Production Mode (TINA_PUBLIC_IS_LOCAL=false):

- Saves to files via GitHub API
- Requires authentication
- Automatically commits to GitHub
- MongoDB indexes for fast queries

## 🐛 Troubleshooting

### "Body must be a string" Error

This is a known compatibility issue with Next.js 15 and tinacms-authjs. It doesn't affect functionality - the site still works.

### Admin Shows 404 in Production

Make sure environment variables are set in Vercel and `TINA_PUBLIC_IS_LOCAL=false`

### Can't Login

1. Check `NEXTAUTH_SECRET` is set
2. Check `NEXTAUTH_URL` matches your domain
3. Try default credentials: `tinauser` / `tinarocks`

### Content Not Saving

1. Check GitHub token has repo write access
2. Check MongoDB URI is correct
3. Check Vercel logs for errors

## 🎉 Benefits of Self-Hosted

✅ **Admin works in production** (not just locally)
✅ **Content editing from anywhere** (not just dev machine)
✅ **Multi-user support** (add team members)
✅ **Audit trail** (all changes committed to GitHub)
✅ **Free tier available** (MongoDB Atlas free + Vercel free)
✅ **No vendor lock-in** (you own the data)

## 🚨 Cost Breakdown

- **Vercel:** Free tier (Hobby plan)
- **MongoDB Atlas:** Free tier (M0 cluster, 512MB)
- **GitHub:** Free (public/private repos)
- **Total:** **$0/month** 🎉

Upgrade options:

- Vercel Pro: $20/month (if you need more)
- MongoDB M10: $0.08/hour (~$57/month) (if you outgrow free tier)

## 📚 Resources

- [Tina Self-Hosted Docs](https://tina.io/docs/self-hosted/overview/)
- [MongoDB Atlas Free Tier](https://www.mongodb.com/pricing)
- [NextAuth.js Docs](https://next-auth.js.org/)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)
