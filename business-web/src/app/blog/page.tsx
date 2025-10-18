import { Metadata } from 'next'
import BlogCard from '@/components/BlogCard'

export const metadata: Metadata = {
  title: 'Blog - Chris Austin PR Agency',
  description:
    'Insights, news, and expert perspectives on public relations and brand communication.',
}

export default async function BlogPage() {
  // Sample posts - In production, these would come from Tina CMS
  const samplePosts = [
    {
      _sys: { filename: 'mastering-media-relations-2025' },
      title: 'Mastering Media Relations in 2025',
      excerpt:
        "Discover the latest strategies for building and maintaining strong relationships with journalists in today's evolving media landscape.",
      date: '2025-10-15T00:00:00.000Z',
      author: 'Chris Austin',
      category: 'Insights',
      featured: true,
    },
    {
      _sys: { filename: 'crisis-management-playbook' },
      title: 'The Crisis Management Playbook',
      excerpt:
        "A comprehensive guide to navigating PR crises with confidence and protecting your brand's reputation when it matters most.",
      date: '2025-10-10T00:00:00.000Z',
      author: 'Sarah Mitchell',
      category: 'Insights',
      featured: false,
    },
    {
      _sys: { filename: 'storytelling-digital-age' },
      title: 'Brand Storytelling in the Digital Age',
      excerpt:
        'Learn how to craft compelling narratives that resonate with modern audiences across digital platforms.',
      date: '2025-10-05T00:00:00.000Z',
      author: 'David Park',
      category: 'Insights',
      featured: false,
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-white via-[#e3e2dd]/20 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              <span style={{ color: '#db4a2b' }}>Insights</span> & Perspectives
            </h1>
            <p className="text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Expert perspectives on public relations, brand communication, and the evolving media
              landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {samplePosts.map((post) => (
              <BlogCard
                key={post._sys.filename}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                author={post.author}
                slug={post._sys.filename}
                category={post.category}
                featured={post.featured}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
