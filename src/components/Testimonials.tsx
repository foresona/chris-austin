'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { useRef } from 'react'

interface Testimonial {
  clientName: string
  clientPosition: string
  company: string
  testimonial: string
  rating: number
  clientImage?: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
  sectionTag?: string
  sectionTitle?: string
  sectionDescription?: string
}

export default function Testimonials({
  testimonials,
  sectionTag,
  sectionTitle,
  sectionDescription,
}: TestimonialsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const yReverse = useTransform(scrollYProgress, [0, 1], [-30, 30])

  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y }}
          className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#db4a2b]/10 to-transparent blur-3xl"
        />
        <motion.div
          style={{ y: yReverse }}
          className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-[#e3e2dd]/40 to-transparent blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] bg-clip-text text-transparent"
          >
            {sectionTag || 'Testimonials'}
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            {sectionTitle || (
              <>
                What Our Clients{' '}
                <span className="bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] bg-clip-text text-transparent">
                  Say
                </span>
              </>
            )}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {sectionDescription ||
              "Don't just take our word for it—hear from the brands we've helped grow"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative h-full"
            >
              <div className="relative h-full overflow-hidden rounded-3xl bg-white border border-gray-200 p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-[#db4a2b]/20">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#db4a2b]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Quote icon */}
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-[#db4a2b]/10 to-[#ff6b4a]/10 flex items-center justify-center"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <Quote className="w-10 h-10 text-[#db4a2b]/30" />
                </motion.div>

                {/* Rating Stars */}
                <div className="relative flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                    >
                      <Star
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? 'fill-current' : 'stroke-current fill-none'
                        }`}
                        style={{ color: '#db4a2b' }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="relative text-gray-700 mb-8 leading-relaxed">
                  &ldquo;{testimonial.testimonial}&rdquo;
                </blockquote>

                {/* Client Info */}
                <div className="relative flex items-center pt-6 border-t border-gray-100">
                  {testimonial.clientImage && (
                    <div className="relative h-14 w-14 mr-4 rounded-full overflow-hidden bg-gradient-to-br from-[#db4a2b] to-[#ff6b4a] p-0.5">
                      <div className="h-full w-full rounded-full overflow-hidden bg-white p-0.5">
                        <Image
                          src={testimonial.clientImage}
                          alt={testimonial.clientName}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-[#db4a2b] transition-colors">
                      {testimonial.clientName}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.clientPosition}</p>
                    <p className="text-sm font-semibold bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] bg-clip-text text-transparent">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Accent corner */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#db4a2b]/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
