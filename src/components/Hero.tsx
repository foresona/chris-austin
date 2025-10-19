'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useRef } from 'react'

interface HeroProps {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: string
  stats?: Array<{
    label: string
    value: string
    description?: string
  }>
}

export default function Hero({ heroTitle, heroSubtitle, heroDescription, stats }: HeroProps = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Gradient Background with Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #db4a2b 0%, transparent 50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl"
          style={{
            background: 'linear-gradient(135deg, #db4a2b 0%, #ff6b4a 100%)',
            opacity: 0.15,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'linear-gradient(135deg, #e3e2dd 0%, #fff 100%)',
            opacity: 0.1,
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, #db4a2b 0%, transparent 70%)',
            opacity: 0.08,
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32"
      >
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="relative inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-6 py-2 text-sm text-white border border-white/20">
              <Sparkles className="w-4 h-4 text-[#db4a2b]" />
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-semibold">
                Future of PR, Today
              </span>
            </span>
          </motion.div>

          {/* Main Heading with Gradient */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="block text-white mb-2">{heroTitle || 'Your Story,'}</span>
              <span
                className="block bg-gradient-to-r from-[#db4a2b] via-[#ff6b4a] to-[#db4a2b] bg-clip-text text-transparent animate-gradient"
                style={{
                  backgroundSize: '200% auto',
                }}
              >
                {heroSubtitle || 'Amplified'}
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto"
          >
            {heroDescription ||
              'Transform your brand through strategic storytelling and innovative communication that delivers measurable results'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 flex items-center justify-center gap-6 flex-wrap"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-[#db4a2b]/50 transition-all duration-300 hover:shadow-[#db4a2b]/80 hover:scale-105"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            </Link>
            <Link
              href="/about"
              className="group relative inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              <span>Discover More</span>
              <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
                →
              </span>
            </Link>
          </motion.div>

          {/* Stats with Glass-morphism */}
          {stats && stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {stats.slice(0, 3).map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#db4a2b]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="relative text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="relative mt-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
