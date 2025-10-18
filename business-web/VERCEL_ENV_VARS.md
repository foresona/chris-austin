# 🔐 Vercel Environment Variables - Quick Copy

Copy these into Vercel when deploying:

## Environment Variables

```bash
# Mode Configuration
TINA_PUBLIC_IS_LOCAL=false

# GitHub Configuration
GITHUB_OWNER=foresona
GITHUB_REPO=chris-austin
GITHUB_BRANCH=main
GITHUB_PERSONAL_ACCESS_TOKEN=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

# MongoDB Configuration  
MONGODB_URI=mongodb+srv://tina-admin:PskHZFrQ708a3Fdo@tina-cms.kti89n4.mongodb.net/tinacms

# NextAuth Configuration
NEXTAUTH_SECRET=3fe9c7b83a01681ee207a902299b0a8a
NEXTAUTH_URL=https://your-domain.vercel.app
```

## After First Deployment

1. **Update NEXTAUTH_URL** with your actual Vercel URL
2. **Add GitHub OAuth credentials**:
   ```bash
   GITHUB_ID=<from-github-oauth-app>
   GITHUB_SECRET=<from-github-oauth-app>
   ```

## Generate New Secrets

```bash
# Generate NextAuth Secret
openssl rand -base64 32

# Generate GitHub PAT
# Go to: https://github.com/settings/tokens
# Scopes needed: repo
```

---

⚠️ **Security Note**: These are example values from your `.env.local`. 
In production, you may want to regenerate tokens for security.
