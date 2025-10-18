# Chris Austin PR Agency - Deployment Information

## 🌐 Live URLs

- **Production:** https://business-8d6siruw5-foresonas-projects.vercel.app
- **Vercel Dashboard:** https://vercel.com/foresonas-projects/business-web

## 📝 Content Management

### Important: Admin Only Works Locally

The Tina CMS admin interface (`/admin`) **only works in development mode** because we're using the free local-only setup.

### How to Edit Content:

1. **Start the dev server locally:**

   ```bash
   npm run dev
   ```

2. **Access the admin:**

   - Visit `http://localhost:3000/admin`
   - Edit testimonials, blog posts, and page content

3. **Deploy changes:**
   ```bash
   git add .
   git commit -m "Update content"
   git push  # If connected to GitHub
   # OR
   vercel --prod  # Manual deployment
   ```

## 🚀 Deployment Process

### Manual Deployment

```bash
vercel --prod
```

### Auto-Deployment (Recommended)

Connect your GitHub repository to Vercel for automatic deployments:

1. Go to https://vercel.com/foresonas-projects/business-web
2. Connect a Git repository
3. Every push to main branch will auto-deploy

## 📂 Project Structure

```
/content           # All content files (committed to git)
├── blog/          # Blog posts (MDX)
├── testimonials/  # Client testimonials (MD)
└── pages/         # Page content (MDX)

/src
├── app/           # Next.js pages
├── components/    # React components
└── lib/           # Utilities (getTestimonials, getPageContent)

/tina
└── config.ts      # Tina CMS schema

/public
└── admin/         # Admin interface (dev only)
```

## 🎨 Editable Content

### Testimonials

- **Path:** `content/testimonials/*.md`
- **Edit via:** `/admin` (local only)
- **Fields:** Client name, position, company, testimonial text, rating, featured flag

### Blog Posts

- **Path:** `content/blog/*.mdx`
- **Edit via:** `/admin` (local only)
- **Fields:** Title, excerpt, date, cover image, author, category, body

### Pages (Home, About, Contact)

- **Path:** `content/pages/*.mdx`
- **Edit via:** `/admin` (local only)
- **Fields:** Hero text, CTA text, stats, team members, contact info, etc.

## 🔧 Environment Variables

Currently none required! Using Tina local mode (free).

If you later upgrade to Tina Cloud:

- `NEXT_PUBLIC_TINA_CLIENT_ID` - From tina.io
- `TINA_TOKEN` - From tina.io

## 💡 Tips

1. **Always test locally before deploying**

   ```bash
   npm run dev
   # Check localhost:3000
   ```

2. **Build locally to catch errors**

   ```bash
   npm run build
   npm run start  # Test production build
   ```

3. **Content is version controlled**

   - All content in `/content` is committed to git
   - Changes are tracked and can be reverted
   - No database needed

4. **Performance**
   - Static content is cached by Vercel's CDN
   - Fast global delivery
   - Optimized images with Next.js Image component

## 🆘 Troubleshooting

### "Admin not found" on production

✅ **This is normal!** Admin only works locally with `npm run dev`

### Content not updating

1. Make sure changes are committed to git
2. Redeploy with `vercel --prod`
3. Clear browser cache

### Build fails

1. Check ESLint errors
2. Run `npm run build` locally first
3. Check Vercel build logs

## 📱 Pages Available

- `/` - Homepage
- `/about` - About page
- `/blog` - Blog listing
- `/contact` - Contact page
- `/admin` - Content management (dev only)

## 🎉 Free Stack

- **Hosting:** Vercel (free tier)
- **CMS:** Tina CMS (local mode, free forever)
- **Framework:** Next.js 15 (open source)
- **No costs, no credit card needed!**
