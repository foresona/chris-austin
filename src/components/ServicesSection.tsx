'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Newspaper, Users, Target, TrendingUp, ArrowUpRight, LucideIcon } from 'lucide-react'
import { useRef } from 'react'
import Link from 'next/link'

interface Service {
  title: string
  description: string
  icon?: string
  color?: string
}

interface ServicesSectionProps {
  services?: Service[]
  sectionTag?: string
  sectionTitle?: string
  sectionDescription?: string
}

const defaultServices = [
  {
    icon: 'Newspaper',
    title: 'Media Relations',
    description:
      'Build meaningful relationships with journalists and secure high-impact media placements that matter.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: 'Users',
    title: 'Brand Storytelling',
    description:
      'Craft compelling narratives that connect with your audience and elevate your brand presence.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: 'Target',
    title: 'Crisis Management',
    description:
      'Navigate challenges with strategic communication that protects and strengthens your reputation.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: 'TrendingUp',
    title: 'Strategic Campaigns',
    description:
      'Data-driven campaigns designed to achieve measurable results and exceptional ROI.',
    color: 'from-green-500 to-emerald-500',
  },
]

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Newspaper,
  Users,
  Target,
  TrendingUp,
}

export default function ServicesSection({
  services,
  sectionTag,
  sectionTitle,
  sectionDescription,
}: ServicesSectionProps) {
  const servicesData = services && services.length > 0 ? services : defaultServices
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#db4a2b]/10 to-transparent blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#e3e2dd]/30 to-transparent blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
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
            {sectionTag || 'What We Do'}
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            {sectionTitle || (
              <>
                Comprehensive PR{' '}
                <span className="bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] bg-clip-text text-transparent">
                  Solutions
                </span>
              </>
            )}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {sectionDescription ||
              "Tailored strategies that transform your brand's presence and drive real business results"}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon ? iconMap[service.icon] || Newspaper : Newspaper
            const slug = service.title
              .toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/[^a-z0-9-]/g, '')

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <Link
                  href={`/services/${slug}`}
                  className="relative block h-full overflow-hidden rounded-3xl bg-white border border-gray-200 p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-[#db4a2b]/20"
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Icon with gradient background */}
                  <div className="relative mb-6">
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Floating arrow */}
                    <motion.div
                      className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10, y: 10 }}
                      whileHover={{ x: 0, y: 0 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#db4a2b] to-[#ff6b4a] flex items-center justify-center shadow-lg">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#db4a2b] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">{service.description}</p>

                  {/* Bottom accent line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
