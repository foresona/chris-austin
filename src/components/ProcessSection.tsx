'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { Lightbulb, Target, Rocket, TrendingUp, ArrowRight, LucideIcon } from 'lucide-react'

interface ProcessStep {
  number: string
  title: string
  description: string
  icon?: string
  color?: string
}

interface ProcessSectionProps {
  processSteps?: ProcessStep[]
}

const defaultSteps = [
  {
    number: '01',
    icon: 'Lightbulb',
    title: 'Discovery & Strategy',
    description:
      'We dive deep into your brand, audience, and goals to craft a tailored PR strategy that resonates.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    number: '02',
    icon: 'Target',
    title: 'Content Creation',
    description:
      'Our team develops compelling narratives and press materials that capture attention and drive engagement.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '03',
    icon: 'Rocket',
    title: 'Campaign Launch',
    description:
      'Strategic execution across media channels, leveraging our network to amplify your message.',
    color: 'from-orange-500 to-red-500',
  },
  {
    number: '04',
    icon: 'TrendingUp',
    title: 'Monitor & Optimize',
    description: 'Continuous tracking, analysis, and refinement to ensure maximum impact and ROI.',
    color: 'from-green-500 to-emerald-500',
  },
]

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  Target,
  Rocket,
  TrendingUp,
}

export default function ProcessSection({ processSteps }: ProcessSectionProps) {
  const steps = processSteps && processSteps.length > 0 ? processSteps : defaultSteps
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-black">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(219,74,43,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(219,74,43,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <motion.div
          style={{ y }}
          className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#db4a2b]/20 to-transparent blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#ff6b4a]/10 to-transparent blur-3xl"
        />
      </div>

      <motion.div style={{ opacity }} className="relative mx-auto max-w-7xl px-6 lg:px-8">
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
            Our Process
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            How We{' '}
            <span className="bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] bg-clip-text text-transparent">
              Make Magic
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A proven four-step process that transforms brands and delivers exceptional results
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#db4a2b]/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon ? iconMap[step.icon] || Lightbulb : Lightbulb
              const isHovered = hoveredIndex === index

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="relative group"
                >
                  {/* Card */}
                  <motion.div
                    className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 backdrop-blur-sm"
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Number Badge */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-black to-gray-900 border-2 border-white/20 flex items-center justify-center"
                      animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-2xl font-bold bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] bg-clip-text text-transparent">
                        {step.number}
                      </span>
                    </motion.div>

                    {/* Icon */}
                    <div className="relative mb-6">
                      <motion.div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg`}
                        animate={isHovered ? { scale: 1.1, rotate: [0, -10, 10, 0] } : { scale: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#db4a2b] group-hover:to-[#ff6b4a] group-hover:bg-clip-text transition-all">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                      {step.description}
                    </p>

                    {/* Arrow indicator */}
                    <motion.div
                      className="flex items-center text-sm font-semibold text-[#db4a2b] opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={isHovered ? { x: [0, 5, 0] } : { x: 0 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <span className="mr-2">Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>

                    {/* Bottom accent line */}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${step.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    />
                  </motion.div>

                  {/* Connecting Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-1/2 -right-4 z-10"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-black border-2 border-[#db4a2b] flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-[#db4a2b]" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-[#db4a2b]/50 transition-all duration-300 hover:shadow-[#db4a2b]/80"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
