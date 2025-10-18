# How to Edit Content in Tina CMS (Local Mode)

## Current Status: ✅ Local Mode is Working Correctly

"You are in local mode" is the **correct** status for development. This means Tina is reading/writing directly to your local files.

## How to Edit Content

### Method 1: Collection List View (Easiest)

1. **Open Admin**: `http://localhost:3000/admin`

2. **Navigate to Collections Sidebar**:

   - Look for the left sidebar in the admin
   - You should see three collections:
     - 📄 **Pages**
     - 📝 **Blog Posts**
     - ⭐ **Testimonials**

3. **Edit a Page**:

   - Click on **"Pages"** in the sidebar
   - You'll see a list: `home.mdx`, `about.mdx`, `contact.mdx`
   - Click on any file (e.g., `home.mdx`)
   - Edit the fields in the form
   - Click **Save** (top right)

4. **Edit Blog Posts**:

   - Click on **"Blog Posts"** in the sidebar
   - See all blog posts
   - Click to edit or click **"Create New"**
   - Edit and Save

5. **Edit Testimonials**:
   - Click on **"Testimonials"** in the sidebar
   - See all testimonials
   - Click to edit or create new
   - Edit and Save

### Method 2: Create New Content

1. Go to any collection (Pages, Blog Posts, or Testimonials)
2. Click **"Create New"** button
3. Fill in the form
4. Click **Save**

### Method 3: Direct File URLs

You can also navigate directly to edit a specific file:

- Home: `http://localhost:3000/admin#/collections/page/home`
- About: `http://localhost:3000/admin#/collections/page/about`
- Contact: `http://localhost:3000/admin#/collections/page/contact`

## Troubleshooting

### "I can't see the collections in the sidebar"

Try:

1. Refresh the admin page (`http://localhost:3000/admin`)
2. Check that dev server is running (`npm run dev`)
3. Look for the **hamburger menu** (≡) if on mobile view
4. Check browser console for errors (F12 → Console tab)

### "I don't see my changes on the website"

1. **Save** your changes in the admin
2. **Refresh** the website page
3. Check that the file was updated in `/content/pages/`
4. Dev server should auto-reload (Turbopack hot reload)

### "The form is empty or broken"

This might mean:

1. The content file doesn't exist yet
2. The schema doesn't match the file structure
3. Try creating a new document instead

## What You Can Edit Right Now

### ✅ Home Page (home.mdx)

- Hero Title, Subtitle, Description
- CTA Title, Description, Button Text
- Statistics (add/remove/edit the 4 stats)

### ✅ About Page (about.mdx)

- Page Title, Subtitle
- Company Story & Mission
- Values (add/edit/remove)
- Team Members (add/edit/remove)

### ✅ Contact Page (contact.mdx)

- Page Title & Description
- Email, Phone, Address
- Office Hours
- Social Media Links

### ✅ Blog Posts

- Create/edit blog articles
- Set featured status
- Add cover images
- Rich text content

### ✅ Testimonials

- Add client testimonials
- Upload photos
- Set ratings
- Feature on homepage

## Local Mode vs Cloud Mode

**Local Mode** (current):

- ✅ Free forever
- ✅ Edits save directly to your Git repo
- ✅ Full control over your content
- ✅ No external dependencies
- ❌ No authentication (anyone with access to localhost can edit)
- ❌ No collaborative editing

**Cloud Mode** (optional, requires tina.io account):

- ✅ Authentication & user management
- ✅ Collaborative editing
- ✅ Editorial workflow
- ❌ Requires paid plan for production use

For local development and solo projects, **Local Mode is perfect**!

## Need Visual/Contextual Editing?

If you want to edit content **while viewing the actual page** (not just in forms), you need to set up Tina's visual editing mode. Let me know if you want me to set that up!

Otherwise, the collection-based editing in the admin is fully functional and easier to use for most scenarios.
