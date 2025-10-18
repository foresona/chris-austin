'use client'

import { motion } from 'framer-motion'

// Sample client logos - these would be replaced with actual client logos
const clients = [
  { name: 'TechStart', industry: 'Technology' },
  { name: 'GreenLife', industry: 'Sustainability' },
  { name: 'Artisan Collective', industry: 'Creative' },
  { name: 'Urban Ventures', industry: 'Real Estate' },
  { name: 'HealthFirst', industry: 'Healthcare' },
  { name: 'FinanceHub', industry: 'Finance' },
  { name: 'EduLearn', industry: 'Education' },
  { name: 'FoodCraft', industry: 'Hospitality' },
  { name: 'SportElite', industry: 'Sports' },
  { name: 'FashionForward', industry: 'Fashion' },
]

// Duplicate for infinite scroll effect
const allClients = [...clients, ...clients]

export default function LogoCloud() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#db4a2b] rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#e3e2dd] rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] bg-clip-text text-transparent"
          >
            Trusted Partners
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Brands That{' '}
            <span className="bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] bg-clip-text text-transparent">
              Trust Us
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;ve partnered with industry leaders across sectors to tell their stories
          </p>
        </motion.div>

        {/* Infinite scrolling logos */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* First row - scroll right */}
          <motion.div
            className="flex gap-8 mb-8"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {allClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="group relative flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-64 h-32 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-gray-100 shadow-lg flex flex-col items-center justify-center p-6 transition-all duration-300 hover:border-[#db4a2b]/50 hover:shadow-xl overflow-hidden">
                  {/* Animated background */}
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-[#db4a2b]/0 to-[#ff6b4a]/0 group-hover:from-[#db4a2b]/5 group-hover:to-[#ff6b4a]/5 transition-all duration-500" />

                  {/* Logo placeholder - in production, this would be an image */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:bg-gradient-to-r group-hover:from-[#db4a2b] group-hover:to-[#ff6b4a] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {client.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-700 transition-colors">
                      {client.industry}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#db4a2b]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Second row - scroll left */}
          <motion.div
            className="flex gap-8"
            animate={{
              x: ['-50%', '0%'],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {allClients.reverse().map((client, index) => (
              <motion.div
                key={`${client.name}-${index}-rev`}
                className="group relative flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-64 h-32 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-gray-100 shadow-lg flex flex-col items-center justify-center p-6 transition-all duration-300 hover:border-[#db4a2b]/50 hover:shadow-xl overflow-hidden">
                  {/* Animated background */}
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-[#db4a2b]/0 to-[#ff6b4a]/0 group-hover:from-[#db4a2b]/5 group-hover:to-[#ff6b4a]/5 transition-all duration-500" />

                  {/* Logo placeholder */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:bg-gradient-to-r group-hover:from-[#db4a2b] group-hover:to-[#ff6b4a] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {client.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-700 transition-colors">
                      {client.industry}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#ff6b4a]/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">Ready to join these industry leaders?</p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Work Together
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
