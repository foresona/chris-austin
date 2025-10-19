import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import ProcessSection from '@/components/ProcessSection'
import FeaturesShowcase from '@/components/FeaturesShowcase'
import StatsSection from '@/components/StatsSection'
import LogoCloud from '@/components/LogoCloud'
import Testimonials from '@/components/Testimonials'
import Link from 'next/link'
import { getPageContent } from '@/lib/getPageContent'
import { getFeaturedTestimonials } from '@/lib/getTestimonials'

// Force dynamic rendering to always fetch fresh content from CMS
export const dynamic = 'force-dynamic'

export default function Home() {
  // Load homepage content from Tina CMS
  const pageContent = getPageContent('home')

  // Load featured testimonials from Tina CMS
  const featuredTestimonials = getFeaturedTestimonials()

  return (
    <div className="bg-white">
      <Hero
        heroTitle={pageContent.heroTitle}
        heroSubtitle={pageContent.heroSubtitle}
        heroDescription={pageContent.heroDescription}
      />
      <ServicesSection services={pageContent.services} />
      <ProcessSection processSteps={pageContent.processSteps} />
      <FeaturesShowcase features={pageContent.features} />
      <StatsSection stats={pageContent.stats} />
      <LogoCloud />
      <Testimonials testimonials={featuredTestimonials} />

      {/* CTA Section with stunning design */}
      <section className="relative py-32 overflow-hidden bg-black">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-white mb-2">
                {pageContent.ctaTitle || 'Ready to Amplify'}
              </span>
              <span className="block bg-gradient-to-r from-[#db4a2b] via-[#ff6b4a] to-[#db4a2b] bg-clip-text text-transparent animate-gradient">
                Your Story?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              {pageContent.ctaDescription ||
                "Let's create a PR strategy that delivers real results for your brand!"}
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] px-10 py-5 text-lg font-semibold text-white shadow-2xl shadow-[#db4a2b]/50 transition-all duration-300 hover:shadow-[#db4a2b]/80 hover:scale-105"
            >
              <span>{pageContent.ctaButtonText || 'Get Started Today'}</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
