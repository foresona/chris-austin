# Self-Hosted Tina CMS Testing Guide

This guide will help you verify that the self-hosted Tina CMS setup is working correctly.

## Current Configuration Status

Based on your `.env.local` file:
- **Mode**: Local (`TINA_PUBLIC_IS_LOCAL=true`)
- **MongoDB URI**: Configured ✅
- **GitHub Token**: Configured ✅
- **NextAuth Secret**: Configured ✅

## Testing Checklist

### 1. Test Local Mode (No Auth Required)

**Current Setting**: `TINA_PUBLIC_IS_LOCAL=true`

Run these commands to verify local mode:

```bash
# Start the dev server
npm run dev

# Wait for server to start, then in another terminal:
curl http://localhost:3000/api/tina/graphql -d '{"query":"{ getPostList { id } }"}' -H "Content-Type: application/json"
```

**Expected Result**: You should see a JSON response with your blog posts list.

**Visual Test**:
1. Go to `http://localhost:3000/admin`
2. You should see the Tina admin interface **without any login prompt**
3. Try editing a blog post or testimonial
4. Changes should save to the local files in `/content`

### 2. Test Self-Hosted Mode (With Auth)

To test the full self-hosted setup with authentication:

**Step 1**: Update `.env.local`:
```bash
TINA_PUBLIC_IS_LOCAL=false
```

**Step 2**: Restart the dev server:
```bash
npm run dev
```

**Step 3**: Test GraphQL API with authentication:
```bash
# This should now require authentication
curl http://localhost:3000/api/tina/graphql -d '{"query":"{ getPostList { id } }"}' -H "Content-Type: application/json"
```

**Expected Result**: You'll get an authentication error (401 Unauthorized) - this is correct!

**Step 4**: Test Admin Interface:
1. Go to `http://localhost:3000/admin`
2. You **should** see a GitHub login prompt
3. Click "Sign in with GitHub"
4. Authorize the app
5. You should be redirected back to the admin interface
6. Try editing content - it should commit to GitHub

### 3. Test MongoDB Connection

To verify MongoDB is working:

```bash
# With TINA_PUBLIC_IS_LOCAL=false
npm run dev
```

Check the terminal output for:
- ✅ **Success**: No MongoDB connection errors
- ❌ **Failure**: "MongoServerError" or connection timeout

### 4. Test GitHub Provider

To verify GitHub integration is working:

**Prerequisites**:
- Ensure `GITHUB_PERSONAL_ACCESS_TOKEN` has repo access
- Your GitHub token should have these scopes: `repo`, `user`

**Test**:
1. Set `TINA_PUBLIC_IS_LOCAL=false`
2. Start dev server: `npm run dev`
3. Edit content via admin interface
4. Check GitHub repository for new commits

### 5. Verify Database Client Generation

Check that the database client is properly generated:

```bash
ls -la tina/__generated__/
```

**Expected Files**:
- `client.ts` or `client.js`
- `databaseClient.ts` or `databaseClient.js`
- `queries.gql`
- `schema.gql`
- `types.ts`

## Quick Test Script

Run this automated test:

```bash
# Test 1: Check if server starts
npm run dev &
sleep 10

# Test 2: Check if homepage loads
curl -s http://localhost:3000 | grep -q "Chris Austin" && echo "✅ Homepage loads" || echo "❌ Homepage failed"

# Test 3: Check if admin route exists
curl -s http://localhost:3000/admin | grep -q "tina" && echo "✅ Admin route exists" || echo "❌ Admin route failed"

# Test 4: Check GraphQL endpoint
curl -s http://localhost:3000/api/tina/graphql -d '{"query":"{ getPostList { id } }"}' -H "Content-Type: application/json" | grep -q "data" && echo "✅ GraphQL working" || echo "❌ GraphQL failed"

# Clean up
pkill -f "next dev"
```

## Common Issues & Solutions

### Issue 1: "Cannot connect to MongoDB"
**Solution**: 
- Verify `MONGODB_URI` is correct
- Check if IP is whitelisted in MongoDB Atlas (0.0.0.0/0 for testing)
- Verify MongoDB cluster is running

### Issue 2: "GitHub authentication failed"
**Solution**:
- Regenerate GitHub Personal Access Token
- Ensure token has `repo` scope
- Verify token is not expired

### Issue 3: "NextAuth secret missing"
**Solution**:
- Generate a new secret: `openssl rand -base64 32`
- Add to `.env.local` as `NEXTAUTH_SECRET`

### Issue 4: Admin page shows 404
**Solution**:
- Check `next.config.ts` - remove admin route restriction
- Ensure Tina CMS is properly configured in `tina/config.ts`

## Production Verification

Once deployed to Vercel:

1. **Test Homepage**: Visit `https://your-domain.vercel.app`
2. **Test Admin**: Visit `https://your-domain.vercel.app/admin`
3. **Test Login**: Sign in with GitHub
4. **Test Edit**: Make a content change
5. **Verify Commit**: Check GitHub for automated commit
6. **Test MongoDB**: Check MongoDB Atlas for stored data

## Environment Variables Checklist

### Required for Production (Self-Hosted Mode):

- [ ] `TINA_PUBLIC_IS_LOCAL=false`
- [ ] `GITHUB_OWNER=foresona`
- [ ] `GITHUB_REPO=chris-austin`
- [ ] `GITHUB_BRANCH=main`
- [ ] `GITHUB_PERSONAL_ACCESS_TOKEN=<your-token>`
- [ ] `MONGODB_URI=<your-mongodb-uri>`
- [ ] `NEXTAUTH_SECRET=<your-secret>`
- [ ] `NEXTAUTH_URL=<your-production-url>`

## Success Indicators

✅ **Self-Hosted Setup is Working** if:
1. Local mode works without authentication
2. Production mode requires GitHub login
3. Content edits create GitHub commits
4. MongoDB stores indexing data
5. No console errors in browser
6. GraphQL queries return data
7. Admin interface is accessible

## Next Steps

If all tests pass:
1. Set `TINA_PUBLIC_IS_LOCAL=false` in `.env.local`
2. Test authentication flow locally
3. Deploy to Vercel with environment variables
4. Test production deployment
5. Configure GitHub OAuth App for production domain
