import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content/pages')

export interface PageContent {
  title: string
  pageTitle?: string
  subtitle?: string
  description?: string
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: string
  ctaTitle?: string
  ctaDescription?: string
  ctaButtonText?: string
  stats?: Array<{
    label: string
    value: string
    description?: string
  }>
  services?: Array<{
    title: string
    description: string
    icon?: string
    color?: string
  }>
  processSteps?: Array<{
    number: string
    title: string
    description: string
    icon?: string
    color?: string
  }>
  features?: Array<{
    title: string
    description: string
    icon?: string
    gradient?: string
  }>
  aboutTitle?: string
  aboutDescription?: string
  story?: string
  mission?: string
  values?: Array<{
    title: string
    description: string
    icon?: string
  }>
  team?: Array<{
    name: string
    position: string
    bio?: string
    image?: string
  }>
  contactSectionTitle?: string
  contactSectionDescription?: string
  email?: string
  phone?: string
  address?: string
  officeHours?: string
  socialMedia?: {
    twitter?: string
    linkedin?: string
    instagram?: string
  }
  footerBrandName?: string
  footerTagline?: string
  body?: string
}

export function getPageContent(slug: string): PageContent {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      ...data,
      body: content,
    } as PageContent
  } catch (error) {
    console.error(`Error loading page content for ${slug}:`, error)
    // Return default content if file doesn't exist
    return {
      title: slug,
      pageTitle: 'Content Not Found',
      description: 'This page content is not yet configured.',
    }
  }
}
