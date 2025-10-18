# Step-by-Step: How to Edit Content in Tina Admin

## ✅ Your Admin is Already Running!

Since the admin is accessible, here's exactly how to edit content:

## Step 1: Open the Admin

Open your browser and go to: **`http://localhost:3000/admin`**

You should see:

- Tina CMS logo
- Message: "You are in local mode" ← This is **normal and correct**!

## Step 2: Find the Collections Sidebar

Look at the **LEFT side** of the screen. You should see a sidebar with:

```
📁 Collections
  📄 Pages
  📝 Blog Posts
  ⭐ Testimonials
```

**Can't see the sidebar?**

- Look for a **hamburger menu icon** (≡) in the top-left
- Click it to expand the sidebar
- Or try making your browser window wider

## Step 3: Edit the Home Page

1. Click on **"Pages"** in the left sidebar
2. You'll see a list of files:
   - `home.mdx`
   - `about.mdx`
   - `contact.mdx`
3. **Click on `home.mdx`**
4. You should now see a form with fields like:
   - Page ID: `Home`
   - Hero Title: `Your Story`
   - Hero Subtitle: `Amplified`
   - CTA Title: `Ready to Amplify Your Story?`
   - Statistics (list of 4 items)
5. **Edit any field** you want
6. Click the **"Save"** button (top right corner)
7. **Go to your website** (`http://localhost:3000`)
8. **Refresh the page** - you should see your changes!

## Step 4: Create a New Blog Post

1. Click on **"Blog Posts"** in the left sidebar
2. Click the **"+ Create"** or **"Create New"** button
3. Fill in the form:
   - Title: `My First Blog Post`
   - Excerpt: `This is a test post`
   - Date: Select today's date
   - Author: Your name
   - Category: Select one
   - Body: Write some content
4. Click **"Save"**
5. Go to `http://localhost:3000/blog` to see it listed

## Step 5: Add a Testimonial

1. Click on **"Testimonials"** in the left sidebar
2. Click **"+ Create"** or **"Create New"**
3. Fill in:
   - Client Name: `John Doe`
   - Client Position: `CEO`
   - Company: `Test Company`
   - Rating: `5`
   - Testimonial: Write something positive
   - Featured: Toggle ON to show on homepage
   - Date: Select today
4. Click **"Save"**
5. Refresh homepage to see it (if featured is ON)

## Common Issues & Solutions

### Issue: "I see 'You are in local mode' but no collections"

**Solution:**

1. Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
2. Check browser console (F12) for errors
3. Make sure dev server is running in terminal

### Issue: "I can see collections but clicking them does nothing"

**Solution:**

1. Check if content files exist in `/content/pages/`
2. Try creating a new document instead
3. Check browser console for JavaScript errors

### Issue: "I saved changes but don't see them on the site"

**Solution:**

1. Make sure you clicked "Save" in the admin
2. Refresh your website page (the actual site, not admin)
3. Check the terminal - Turbopack should show a compilation
4. Verify the file was updated in `/content/pages/home.mdx`

### Issue: "The form shows weird field names or is empty"

**Solution:**

- This means the schema doesn't match the content
- Try these direct links:
  - `http://localhost:3000/admin#/collections/page`
  - `http://localhost:3000/admin#/collections/post`
  - `http://localhost:3000/admin#/collections/testimonial`

## Pro Tips

1. **Use the GraphQL Playground**: Visit `http://localhost:3000/admin/index.html#/graphql` to test queries

2. **Check the Files**: Your edits are saved to actual files in `/content/` - you can verify changes there

3. **Git Integration**: All your edits create Git changes - you can commit them!

4. **Local = Free**: Local mode is completely free and perfect for development

5. **No Auth Needed**: In local mode, anyone with localhost access can edit (secure for solo dev)

## Still Having Issues?

If you're still stuck, please tell me:

1. Do you see the sidebar with "Pages", "Blog Posts", "Testimonials"?
2. Can you click on "Pages" and see the list of files?
3. When you click on `home.mdx`, do you see a form?
4. Are there any errors in the browser console (F12 → Console tab)?

I'm here to help! 🚀
