# Environment Variables for Vercel Deployment

Copy these to Vercel's Environment Variables settings:

## Required Environment Variables

```bash
# MongoDB Connection (get from MongoDB Atlas)
MONGODB_URI=mongodb+srv://tinauser:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority

# GitHub Integration
GITHUB_OWNER=foresona
GITHUB_REPO=chris-austin
GITHUB_BRANCH=main
GITHUB_PERSONAL_ACCESS_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# NextAuth Configuration
NEXTAUTH_SECRET=YOUR_GENERATED_SECRET_HERE
NEXTAUTH_URL=https://your-vercel-url.vercel.app

# Tina Configuration
TINA_PUBLIC_IS_LOCAL=false
```

## How to Get Each Value

### MONGODB_URI

1. Sign up at https://www.mongodb.com/cloud/atlas/register
2. Create free M0 cluster
3. Create database user
4. Get connection string from "Connect" button
5. Replace `<password>` with actual password

### GITHUB_PERSONAL_ACCESS_TOKEN

1. Go to https://github.com/settings/tokens
2. Generate new token (classic)
3. Select scopes: `repo` and `workflow`
4. Copy the token (starts with `ghp_`)

### NEXTAUTH_SECRET

Generate with one of these commands:

```bash
openssl rand -base64 32
# OR
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### NEXTAUTH_URL

- Use your Vercel deployment URL
- Must include `https://` protocol
- Example: `https://chris-austin.vercel.app`
- Update this after first deployment if using preview URL initially

## Quick Setup Checklist

- [ ] MongoDB Atlas account created
- [ ] Database cluster created (M0 free tier)
- [ ] Database user created
- [ ] Network access configured (0.0.0.0/0)
- [ ] Connection string copied
- [ ] GitHub Personal Access Token generated
- [ ] NextAuth secret generated
- [ ] All variables added to Vercel
- [ ] First deployment successful
- [ ] NEXTAUTH_URL updated with production URL
- [ ] Admin tested at `/admin`
- [ ] Content editing tested
- [ ] GitHub commits verified

## Testing Your Setup

After deployment:

1. Visit: `https://your-site.vercel.app/admin`
2. Click "Sign in with GitHub"
3. Authorize the application
4. Try editing content
5. Verify commit appears in GitHub
6. Check if changes deploy automatically

## Common Issues

### "Cannot connect to database"

→ Check MONGODB_URI format and IP whitelist

### "GitHub authentication failed"

→ Verify GITHUB_PERSONAL_ACCESS_TOKEN has `repo` scope

### "NextAuth error"

→ Ensure NEXTAUTH_URL matches exactly (with https://)

### "Unauthorized" in admin

→ Sign in with GitHub account that has repo access

---

**Need the full guide?** See [SELF_HOSTED_DEPLOYMENT.md](./SELF_HOSTED_DEPLOYMENT.md)
