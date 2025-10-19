'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import {
  Sparkles,
  Zap,
  Target,
  TrendingUp,
  MessageCircle,
  BarChart3,
  LucideIcon,
} from 'lucide-react'

interface Feature {
  title: string
  description: string
  icon?: string
  gradient?: string
}

interface FeaturesShowcaseProps {
  features?: Feature[]
  sectionTag?: string
  sectionTitle?: string
  sectionDescription?: string
  ctaText?: string
  buttonText?: string
}

const defaultFeatures = [
  {
    icon: 'Sparkles',
    title: 'Strategic Storytelling',
    description:
      'Craft compelling narratives that resonate with your audience and capture media attention',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: 'Target',
    title: 'Targeted Outreach',
    description:
      'Connect with the right journalists, influencers, and media outlets for maximum impact',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: 'MessageCircle',
    title: 'Crisis Management',
    description:
      'Navigate challenging situations with confidence and protect your brand reputation',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: 'TrendingUp',
    title: 'Growth Analytics',
    description: 'Track your PR performance with detailed metrics and actionable insights',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: 'Zap',
    title: 'Rapid Response',
    description: 'Stay ahead of trends and capitalize on opportunities with our agile approach',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: 'BarChart3',
    title: 'ROI Optimization',
    description: 'Maximize your PR investment with data-driven strategies and measurable results',
    gradient: 'from-indigo-500 to-purple-500',
  },
]

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Zap,
  Target,
  TrendingUp,
  MessageCircle,
  BarChart3,
}

export default function FeaturesShowcase({
  features: propFeatures,
  sectionTag,
  sectionTitle,
  sectionDescription,
  ctaText,
  buttonText,
}: FeaturesShowcaseProps = {}) {
  const featuresData = propFeatures && propFeatures.length > 0 ? propFeatures : defaultFeatures
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-[#db4a2b]/10 to-[#ff6b4a]/10 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-[#e3e2dd]/30 to-transparent rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-[#db4a2b]/20 rounded-lg"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-16 h-16 border-2 border-[#ff6b4a]/20 rounded-full"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div style={{ opacity }} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
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
            {sectionTag || 'Why Choose Us'}
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            {sectionTitle || (
              <>
                Features That{' '}
                <span className="bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] bg-clip-text text-transparent">
                  Drive Success
                </span>
              </>
            )}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {sectionDescription ||
              'Discover the comprehensive suite of PR services designed to elevate your brand and amplify your message'}
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => {
            const Icon = feature.icon ? iconMap[feature.icon] || Sparkles : Sparkles

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-3xl bg-white p-8 shadow-lg border-2 border-gray-100 transition-all duration-500 hover:shadow-2xl hover:border-transparent">
                  {/* Gradient border on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                    style={{ padding: '2px' }}
                  >
                    <div className="h-full w-full bg-white rounded-3xl" />
                  </div>

                  <div className="relative z-10">
                    {/* Icon with animated background */}
                    <motion.div
                      className="relative inline-flex mb-6"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} blur-xl opacity-50 group-hover:opacity-100 transition-opacity`}
                      />
                      <div
                        className={`relative p-4 rounded-2xl bg-gradient-to-br ${feature.gradient}`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-[#db4a2b] group-hover:to-[#ff6b4a] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                      {feature.description}
                    </p>

                    {/* Animated arrow */}
                    <motion.div
                      className="mt-6 flex items-center text-sm font-semibold text-gray-400 group-hover:text-[#db4a2b]"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      Learn more
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Decorative corner gradients */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-tr-full transition-opacity`}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 mb-6 text-lg">
            {ctaText || 'Ready to experience the difference?'}
          </p>
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{buttonText || 'Explore All Features'}</span>
            <motion.span
              animate={{ rotate: [0, 90, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✦
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
