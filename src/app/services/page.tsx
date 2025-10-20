import { Metadata } from 'next'
import Link from 'next/link'
import { getAllServices } from '@/lib/getServiceContent'
import { ArrowRight, LucideIcon } from 'lucide-react'
import { Newspaper, Users, Target, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services - CA Agency',
  description:
    'Discover our comprehensive suite of marketing and PR services designed to elevate your brand.',
}

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Newspaper,
  Users,
  Target,
  TrendingUp,
  Website: Newspaper, // Fallback for Website
}

export default function ServicesPage() {
  const services = getAllServices()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-white via-[#e3e2dd]/20 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to transform your brand and drive measurable results
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon ? iconMap[service.icon] || Newspaper : Newspaper

              return (
                <Link
                  key={index}
                  href={`/services/${service.slug}`}
                  className="group relative h-full overflow-hidden rounded-3xl bg-white border border-gray-200 p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-[#db4a2b]/20 hover:-translate-y-2"
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      service.color || 'from-orange-500 to-red-500'
                    } opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Icon with gradient background */}
                  <div className="relative mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${
                        service.color || 'from-orange-500 to-red-500'
                      } shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#db4a2b] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">{service.excerpt}</p>

                  {/* Learn more link */}
                  <div className="flex items-center text-sm font-semibold text-[#db4a2b] group-hover:translate-x-2 transition-transform">
                    <span className="mr-2">Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${
                      service.color || 'from-orange-500 to-red-500'
                    } w-0 group-hover:w-full transition-all duration-500`}
                  />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Let&apos;s discuss how our services can help achieve your business goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#db4a2b] shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
