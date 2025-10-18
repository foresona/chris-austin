'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { formatDate } from '@/lib/utils'

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  author: string
  slug: string
  coverImage?: string
  category?: string
  featured?: boolean
}

export default function BlogCard({
  title,
  excerpt,
  date,
  author,
  slug,
  coverImage,
  category,
  featured,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {featured && (
        <div className="absolute top-4 left-4 z-10">
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white"
            style={{ backgroundColor: '#db4a2b' }}
          >
            Featured
          </span>
        </div>
      )}

      {coverImage && (
        <div className="relative h-64 w-full overflow-hidden bg-gray-200">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        {category && (
          <span
            className="mb-2 text-xs font-semibold uppercase tracking-wider"
            style={{ color: '#db4a2b' }}
          >
            {category}
          </span>
        )}

        <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-[#db4a2b] transition-colors">
          <Link href={`/blog/${slug}`}>
            <span className="absolute inset-0" />
            {title}
          </Link>
        </h3>

        <p className="mb-4 flex-1 text-gray-600 line-clamp-3">{excerpt}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar className="mr-1.5 h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </div>
          <div className="flex items-center font-medium text-gray-900 group-hover:text-[#db4a2b] transition-colors">
            Read more
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        <p className="mt-2 text-sm text-gray-500">By {author}</p>
      </div>
    </motion.article>
  )
}
