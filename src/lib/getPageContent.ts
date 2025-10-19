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
  servicesSectionTag?: string
  servicesSectionTitle?: string
  servicesSectionDescription?: string
  services?: Array<{
    title: string
    description: string
    icon?: string
    color?: string
  }>
  processSectionTag?: string
  processSectionTitle?: string
  processSectionDescription?: string
  processSteps?: Array<{
    number: string
    title: string
    description: string
    icon?: string
    color?: string
  }>
  featuresSectionTag?: string
  featuresSectionTitle?: string
  featuresSectionDescription?: string
  features?: Array<{
    title: string
    description: string
    icon?: string
    gradient?: string
  }>
  featuresCtaText?: string
  featuresButtonText?: string
  brandName?: string
  logoCloudSectionTag?: string
  logoCloudSectionTitle?: string
  logoCloudSectionDescription?: string
  logoCloudClients?: Array<{
    name: string
    industry: string
  }>
  logoCloudCtaText?: string
  logoCloudButtonText?: string
  testimonialsSectionTag?: string
  testimonialsSectionTitle?: string
  testimonialsSectionDescription?: string
  statsBottomText?: string
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
