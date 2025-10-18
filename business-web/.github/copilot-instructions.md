# Chris Austin PR Agency - Development Instructions

This is a modern PR agency website built with Next.js 15, TypeScript, Tailwind CSS, and Tina CMS.

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Tina CMS (for content management)
- Framer Motion (animations)
- shadcn/ui (UI components)

## Brand Colors
- Primary: #db4a2b (Coral Red)
- Secondary: #e3e2dd (Light Beige)

## Project Structure
- `/app` - Next.js App Router pages and layouts
- `/components` - Reusable React components
- `/content` - Tina CMS content (blog posts, testimonials)
- `/tina` - Tina CMS configuration and schemas
- `/public` - Static assets

## Content Management
All content is managed through Tina CMS at `/admin`. Content is stored as Markdown files in the `/content` directory and version-controlled with Git.

## Development Guidelines
- Use TypeScript for all code
- Follow Next.js 15 App Router conventions
- Use Tailwind CSS for styling with the brand color palette
- Ensure all components are responsive and accessible
- Use Framer Motion for smooth animations
- Keep content separate from code using Tina CMS
