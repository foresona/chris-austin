import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const testimonialsDirectory = path.join(process.cwd(), 'content/testimonials')

export interface Testimonial {
  id: string
  clientName: string
  clientPosition: string
  company: string
  clientImage?: string
  companyLogo?: string
  testimonial: string
  rating: number
  featured?: boolean
  date: string
}

export function getAllTestimonials(): Testimonial[] {
  try {
    // Get all .md files from testimonials directory
    const fileNames = fs.readdirSync(testimonialsDirectory)
    const testimonials = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(testimonialsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          id,
          clientName: data.clientName || '',
          clientPosition: data.clientPosition || '',
          company: data.company || '',
          clientImage: data.clientImage,
          companyLogo: data.companyLogo,
          testimonial: content || data.testimonial || '',
          rating: data.rating || 5,
          featured: data.featured || false,
          date: data.date || new Date().toISOString(),
        } as Testimonial
      })

    // Sort by date, newest first
    return testimonials.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error loading testimonials:', error)
    return []
  }
}

export function getFeaturedTestimonials(): Testimonial[] {
  const allTestimonials = getAllTestimonials()
  return allTestimonials.filter((testimonial) => testimonial.featured)
}
