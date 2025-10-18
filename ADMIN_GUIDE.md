# Tina CMS Admin Guide

## Accessing the Admin Panel

Visit `http://localhost:3000/admin` (or your deployed URL + `/admin`)

## What You Can Edit

### 1. **Pages** 📄

Edit the content for your website pages dynamically.

#### Home Page (`home.mdx`)

- **Hero Section**:

  - Hero Title: Main heading
  - Hero Subtitle: The gradient text (e.g., "Amplified")
  - Hero Description: Subtext below the hero

- **CTA Section** (Bottom of homepage):

  - CTA Title: Call-to-action heading
  - CTA Description: Supporting text
  - CTA Button Text: Button label

- **Statistics**: Add/edit the 4 stats displayed in the Stats Section
  - Label (e.g., "Successful Campaigns")
  - Value (e.g., "500")
  - Description (e.g., "Industry-leading results")

#### About Page (`about.mdx`)

- **Page Title & Subtitle**
- **Our Story**: Company background
- **Mission Statement**: Your mission
- **Company Values**: Add/edit core values
  - Title (e.g., "Authenticity")
  - Description
  - Icon name (use Lucide icon names like `heart`, `award`, `zap`)
- **Team Members**: Add/edit team profiles
  - Name
  - Position
  - Bio
  - Photo (upload image)

#### Contact Page (`contact.mdx`)

- **Page Title & Description**
- **Contact Information**:
  - Email address
  - Phone number
  - Office address
  - Office hours
- **Social Media**:
  - Twitter handle
  - LinkedIn URL
  - Instagram handle

### 2. **Blog Posts** 📝

Create and manage blog articles.

- Title
- Excerpt (summary)
- Date
- Cover Image
- Author name
- Category (Press Release, Media Coverage, Industry News, Case Study, Insights)
- Featured toggle (shows on homepage)
- Body content (rich text editor)

### 3. **Testimonials** ⭐

Add and manage client testimonials.

- Client Name
- Client Position/Title
- Company Name
- Client Photo
- Company Logo
- Rating (1-5 stars)
- Testimonial text (rich text)
- Featured toggle (shows on homepage)
- Date

## How to Edit Content

1. **Navigate** to the collection (Pages, Blog Posts, or Testimonials)
2. **Select** the item you want to edit
3. **Make changes** in the form fields
4. **Preview** your changes in real-time (if available)
5. **Save** your changes

All changes are automatically saved to your Git repository as Markdown/MDX files!

## Tips

- **Images**: Use the image picker to upload photos - they'll be stored in `/public`
- **Rich Text**: Use the WYSIWYG editor for formatted content
- **Featured Items**: Toggle "Featured" to display items on the homepage
- **Preview**: Changes may take a moment to reflect on the live site
- **Git Integration**: All edits are version-controlled - you can always revert!

## Content Files Location

Your content is stored in:

- `/content/pages/` - Page content files
- `/content/blog/` - Blog posts
- `/content/testimonials/` - Client testimonials

You can also edit these files directly in your code editor if preferred!

## Need Help?

- Tina CMS Docs: https://tina.io/docs
- GraphQL API Playground: `http://localhost:3000/admin/index.html#/graphql`
