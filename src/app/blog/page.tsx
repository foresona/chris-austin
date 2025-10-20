import { Metadata } from 'next'
import BlogCard from '@/components/BlogCard'
import { getAllBlogPosts } from '@/lib/getBlogPosts'

export const metadata: Metadata = {
  title: 'Blog - Chris Austin PR Agency',
  description:
    'Insights, news, and expert perspectives on public relations and brand communication.',
}

export default async function BlogPage() {
  const posts = getAllBlogPosts()

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
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No blog posts available yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  author={post.author}
                  slug={post.slug}
                  category={post.category}
                  featured={post.featured}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
