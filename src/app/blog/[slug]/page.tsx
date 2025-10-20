import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/getBlogPosts'
import { getPageContent } from '@/lib/getPageContent'
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  const homeContent = getPageContent('home')

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const brandName = homeContent.brandName || 'CA Agency'

  return {
    title: `${post.title} - ${brandName} Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  const homeContent = getPageContent('home')

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  // Get CTA content from CMS with fallbacks
  const ctaTitle = homeContent.blogCtaTitle || 'Ready to Transform Your Brand?'
  const ctaDescription =
    homeContent.blogCtaDescription ||
    "Let's discuss how we can help you achieve your PR and communication goals."
  const ctaPrimaryText = homeContent.blogCtaPrimaryText || 'Get in Touch'
  const ctaPrimaryLink = homeContent.blogCtaPrimaryLink || '/contact'
  const ctaSecondaryText = homeContent.blogCtaSecondaryText || 'Read More Articles'
  const ctaSecondaryLink = homeContent.blogCtaSecondaryLink || '/blog'

  return (
    <article className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#db4a2b] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>

          {/* Category Badge */}
          {post.category && (
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] text-white text-sm font-semibold">
                <Tag className="w-4 h-4" />
                {post.category}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">{post.excerpt}</p>

          {/* Meta information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      {post.coverImage && (
        <section className="py-12">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl">
              <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-12 pb-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div
            className="prose prose-lg prose-gray max-w-none 
            prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mt-8 prose-headings:mb-4
            prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-[#db4a2b] prose-a:font-medium prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900 prose-strong:font-bold
            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6 
            prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-gray-700 prose-li:my-2
            prose-blockquote:text-gray-700 prose-blockquote:border-l-4 prose-blockquote:border-l-[#db4a2b] prose-blockquote:pl-4 prose-blockquote:italic
            prose-code:text-[#db4a2b] prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
            prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto"
          >
            <ReactMarkdown
              components={{
                h1: (props) => (
                  <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900" {...props} />
                ),
                h2: (props) => (
                  <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-900" {...props} />
                ),
                h3: (props) => (
                  <h3 className="text-2xl font-bold mt-6 mb-3 text-gray-900" {...props} />
                ),
                h4: (props) => (
                  <h4 className="text-xl font-bold mt-4 mb-2 text-gray-900" {...props} />
                ),
                p: (props) => <p className="text-gray-700 leading-relaxed mb-4" {...props} />,
                ul: (props) => <ul className="list-disc pl-6 my-6 space-y-2" {...props} />,
                ol: (props) => <ol className="list-decimal pl-6 my-6 space-y-2" {...props} />,
                li: (props) => <li className="text-gray-700" {...props} />,
                strong: (props) => <strong className="font-bold text-gray-900" {...props} />,
                a: (props) => (
                  <a className="text-[#db4a2b] font-medium hover:underline" {...props} />
                ),
                blockquote: (props) => (
                  <blockquote
                    className="border-l-4 border-[#db4a2b] pl-4 italic text-gray-700 my-6"
                    {...props}
                  />
                ),
                code: (props) => (
                  <code
                    className="text-[#db4a2b] bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono"
                    {...props}
                  />
                ),
                pre: (props) => (
                  <pre
                    className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6"
                    {...props}
                  />
                ),
              }}
            >
              {post.body}
            </ReactMarkdown>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">{ctaTitle}</h2>
          <p className="text-xl text-white/90 mb-8">{ctaDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={ctaPrimaryLink}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#db4a2b] shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <span>{ctaPrimaryText}</span>
            </Link>
            <Link
              href={ctaSecondaryLink}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-all"
            >
              <span>{ctaSecondaryText}</span>
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
