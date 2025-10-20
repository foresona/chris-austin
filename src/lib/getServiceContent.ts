import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const servicesDirectory = path.join(process.cwd(), 'content/services')

export interface ServiceContent {
  title: string
  slug: string
  icon?: string
  color?: string
  excerpt: string
  whatWeDoTitle?: string
  whatWeDoContent?: string
  benefitsTitle?: string
  benefits?: string[]
  ctaTitle?: string
  ctaDescription?: string
  ctaPrimaryText?: string
  ctaPrimaryLink?: string
  ctaSecondaryText?: string
  ctaSecondaryLink?: string
  featured?: boolean
  body?: string
}

export function getServiceBySlug(slug: string): ServiceContent | null {
  try {
    const fullPath = path.join(servicesDirectory, `${slug}.mdx`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      title: data.title || '',
      slug: data.slug || slug,
      icon: data.icon,
      color: data.color,
      excerpt: data.excerpt || '',
      whatWeDoTitle: data.whatWeDoTitle,
      whatWeDoContent: data.whatWeDoContent,
      benefitsTitle: data.benefitsTitle,
      benefits: data.benefits,
      ctaTitle: data.ctaTitle,
      ctaDescription: data.ctaDescription,
      ctaPrimaryText: data.ctaPrimaryText,
      ctaPrimaryLink: data.ctaPrimaryLink,
      ctaSecondaryText: data.ctaSecondaryText,
      ctaSecondaryLink: data.ctaSecondaryLink,
      featured: data.featured,
      body: content,
    }
  } catch (error) {
    console.error(`Error reading service ${slug}:`, error)
    return null
  }
}

export function getAllServices(): ServiceContent[] {
  try {
    if (!fs.existsSync(servicesDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(servicesDirectory)
    const services = fileNames
      .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx?$/, '')
        return getServiceBySlug(slug)
      })
      .filter((service): service is ServiceContent => service !== null)

    return services
  } catch (error) {
    console.error('Error reading services:', error)
    return []
  }
}
