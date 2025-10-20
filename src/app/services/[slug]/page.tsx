import { Metadata } from 'next'
import Link from 'next/link'
import { getServiceBySlug, getAllServices } from '@/lib/getServiceContent'
import { ArrowLeft, CheckCircle2, LucideIcon } from 'lucide-react'
import { Newspaper, Users, Target, TrendingUp } from 'lucide-react'
import { notFound } from 'next/navigation'

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Newspaper,
  Users,
  Target,
  TrendingUp,
  Website: Newspaper,
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const services = getAllServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${service.title} - CA Agency`,
    description: service.excerpt,
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const Icon = service.icon ? iconMap[service.icon] || Newspaper : Newspaper
  const benefits = service.benefits || []

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className={`relative py-24 sm:py-32 bg-gradient-to-br ${
          service.color || 'from-orange-500 to-red-500'
        } overflow-hidden`}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm shadow-lg mb-6">
                <Icon className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                {service.title}
              </h1>
              <p className="text-xl leading-8 text-white/90">{service.excerpt}</p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 shadow-2xl">
                <div className="h-full flex items-center justify-center text-white/50 text-lg">
                  Service illustration placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* What We Do */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {service.whatWeDoTitle || 'What We Do'}
              </h2>
              <div className="prose prose-lg text-gray-600 whitespace-pre-wrap">
                {service.whatWeDoContent ||
                  `Our ${service.title.toLowerCase()} service is designed to help your business thrive in today's competitive landscape. We combine strategic thinking with creative execution to deliver exceptional results.`}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {service.benefitsTitle || 'Key Benefits'}
              </h2>
              {benefits.length > 0 && (
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2
                        className={`w-6 h-6 flex-shrink-0 mt-0.5 text-transparent bg-gradient-to-br ${
                          service.color || 'from-orange-500 to-red-500'
                        } bg-clip-text`}
                        style={{
                          filter: 'drop-shadow(0 0 2px currentColor)',
                        }}
                      />
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {service.ctaTitle || `Ready to Transform Your Brand with ${service.title}?`}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {service.ctaDescription ||
              "Let's discuss how we can help you achieve your goals and deliver measurable results."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={service.ctaPrimaryLink || '/contact'}
              className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r ${
                service.color || 'from-orange-500 to-red-500'
              } px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105`}
            >
              <span>{service.ctaPrimaryText || 'Get Started'}</span>
            </Link>
            <Link
              href={service.ctaSecondaryLink || '/services'}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white border-2 border-gray-200 px-8 py-4 text-base font-semibold text-gray-900 hover:border-gray-300 transition-all"
            >
              <span>{service.ctaSecondaryText || 'View All Services'}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
