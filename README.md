# Chris Austin PR Agency Website# Chris Austin PR Agency Website

A modern, full-stack PR agency website built with Next.js 15, TypeScript, and TinaCMS for easy content management.A stunning, modern PR agency website built with Next.js 15, featuring dynamic content management and interactive animations inspired by Apple's simplicity and Check.co's beauty.

## 🚀 Features## 🚀 Key Features

- ✅ **Modern Stack**: Next.js 15 with TypeScript- **Tina CMS** - Free, Git-based content management with visual editing at `/admin`

- ✅ **Content Management**: TinaCMS Cloud integration for easy editing- **Interactive Sections** - 7 unique sections with advanced animations

- ✅ **Responsive Design**: Mobile-first, beautiful UI- **Dark Theme Hero** - Apple-inspired design with parallax effects

- ✅ **Smooth Animations**: Framer Motion for engaging interactions- **Animated Stats** - Counting animations with Framer Motion springs

- ✅ **SEO Optimized**: Metadata and structured data- **Infinite Logo Scroll** - Smooth bi-directional scrolling

- ✅ **Fast Performance**: Optimized builds and lazy loading- **Process Workflow** - 4-step visualization with connecting arrows

- ✅ **Type Safe**: Full TypeScript coverage- **Features Showcase** - 6 services with gradient themes

- **Testimonials** - Glass-morphism cards with hover effects

## 📋 Prerequisites

## 🎨 Design System

- Node.js 18+

- npm or yarn**Brand Colors:** `#db4a2b` (Coral Red) • `#e3e2dd` (Light Beige)

- A TinaCMS Cloud account (free tier available)

- Vercel account for deployment (optional)**Tech Stack:** Next.js 15 • TypeScript • Tailwind CSS 4 • Framer Motion • Lottie React • Tina CMS

## 🛠️ Quick StartThis is a [Next.js](https://nextjs.org) project.

### 1. Clone the Repository## Getting Started

````bashFirst, run the development server:

git clone https://github.com/foresona/chris-austin.git

cd chris-austin```bash

```npm run dev

# or

### 2. Install Dependenciesyarn dev

# or

```bashpnpm dev

npm install --legacy-peer-deps# or

```bun dev

````

> Note: We use `--legacy-peer-deps` due to TinaCMS peer dependency requirements with Next.js 15.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Set Up Environment Variables

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Copy the example environment file:

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

```bash

cp .env.example .env.local## Learn More

```

To learn more about Next.js, take a look at the following resources:

Edit `.env.local` with your configuration:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

```env- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id_here

TINA_TOKEN=your_token_hereYou can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

TINA_SEARCH_TOKEN=your_search_token_here

TINA_PUBLIC_IS_LOCAL=false## Deploy on Vercel

```

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### 4. Set Up TinaCMS Cloud

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

1. Go to [https://app.tina.io](https://app.tina.io) and sign up
2. Create a new project
3. Connect your GitHub repository
4. Copy your Client ID and Tokens
5. Add them to `.env.local`

For detailed setup instructions, see [TINA_CLOUD_SETUP.md](./TINA_CLOUD_SETUP.md)

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Access the CMS at [http://localhost:3000/admin](http://localhost:3000/admin)

## 📦 Project Structure

```
chris-austin/
├── content/              # Content files (MDX)
│   ├── blog/            # Blog posts
│   ├── pages/           # Page content (home, about, contact)
│   └── testimonials/    # Client testimonials
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js 15 app directory
│   ├── components/      # React components
│   └── lib/             # Utility functions
├── tina/
│   ├── config.ts        # TinaCMS configuration
│   └── __generated__/   # Auto-generated TinaCMS files
└── ...
```

## 🎨 Customization

### Editing Content

1. Go to `/admin` on your deployed site
2. Log in with GitHub
3. Edit any page, blog post, or testimonial
4. Click Save - changes are automatically committed to GitHub
5. Vercel auto-deploys your changes

### Customizing Styles

- Brand colors are defined in `tailwind.config.ts`
- Main color: `#db4a2b` (Chris Austin Red)
- Accent color: `#ff6b4a` (Lighter red)
- Neutral: `#e3e2dd` (Beige)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/foresona/chris-austin)

1. Click the button above or go to [Vercel](https://vercel.com)
2. Import your forked repository
3. Add environment variables from `.env.example`
4. Deploy!

### Environment Variables for Vercel

Add these in your Vercel project settings:

- `NEXT_PUBLIC_TINA_CLIENT_ID` - From TinaCMS Cloud
- `TINA_TOKEN` - Content token from TinaCMS Cloud
- `TINA_SEARCH_TOKEN` - Search token from TinaCMS Cloud
- `TINA_PUBLIC_IS_LOCAL` - Set to `false`

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

## 🧪 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **CMS**: [TinaCMS Cloud](https://tina.io/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📚 Documentation

- [TinaCMS Cloud Setup Guide](./TINA_CLOUD_SETUP.md)
- [Deployment Guide](./DEPLOYMENT_SUCCESS.md)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, email hello@chrisaustinpr.com or open an issue in this repository.

---

**Built with ❤️ by Foresona**
