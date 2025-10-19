'use client'

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Award, Users, Newspaper, Globe } from 'lucide-react'

interface Stat {
  label: string
  value: string
  description?: string
}

interface StatsProps {
  stats?: Stat[]
  bottomText?: string
}

const iconMap = [Award, Users, Newspaper, Globe]

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US').format(Math.floor(latest))
      }
    })
  }, [springValue])

  return <span ref={ref} />
}

export default function StatsSection({ stats: propStats, bottomText }: StatsProps = {}) {
  // Use provided stats or fallback to defaults
  const stats = propStats || [
    { label: 'Successful Campaigns', value: '500', description: 'Industry-leading results' },
    { label: 'Happy Clients', value: '200', description: 'Trusted partnerships' },
    { label: 'Media Placements', value: '10000', description: 'Global coverage' },
    { label: 'Countries Reached', value: '50', description: 'Worldwide impact' },
  ]

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(219, 74, 43, 0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#db4a2b]/20 to-[#ff6b4a]/20 blur-2xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#e3e2dd]/40 to-transparent blur-2xl"
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

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
            Our Impact
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Results That{' '}
            <span className="bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] bg-clip-text text-transparent">
              Speak Volumes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers tell a story. Here&apos;s ours of dedication, excellence, and measurable impact
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = iconMap[index % iconMap.length]
            const numValue = parseInt(stat.value.replace(/[^0-9]/g, '')) || 0
            const suffix = stat.value.match(/\D+$/)?.[0] || '+'

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-3xl bg-white border-2 border-gray-100 p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-[#db4a2b]/30">
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#db4a2b]/5 via-[#ff6b4a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#db4a2b] to-[#ff6b4a] shadow-lg mb-6"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Counter */}
                  <div className="relative mb-4">
                    <motion.h3 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-[#db4a2b] group-hover:to-[#ff6b4a] transition-all">
                      <Counter value={numValue} />
                      <span>{suffix}</span>
                    </motion.h3>
                  </div>

                  {/* Label */}
                  <p className="relative text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#db4a2b] transition-colors">
                    {stat.label}
                  </p>

                  {/* Description */}
                  <p className="relative text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                    {stat.description}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#db4a2b]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#ff6b4a]/5 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Pulse effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 border-[#db4a2b] opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom highlight text */}
        {bottomText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p
              className="text-lg text-gray-600"
              dangerouslySetInnerHTML={{ __html: bottomText }}
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}
