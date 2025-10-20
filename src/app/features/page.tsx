import { Metadata } from 'next'
import Link from 'next/link'
import { getPageContent } from '@/lib/getPageContent'
import { ArrowRight, CheckCircle2, LucideIcon } from 'lucide-react'
import { Sparkles, Target, MessageCircle, TrendingUp, Zap, BarChart3 } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  const pageContent = getPageContent('features')
  return {
    title: `${pageContent.title || 'Why Choose Us'} - ${pageContent.titleBrandText || 'CA Agency'}`,
    description:
      pageContent.sectionDescription ||
      'Discover the comprehensive features and capabilities that make us your ideal partner for growth.',
  }
}

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Target,
  MessageCircle,
  TrendingUp,
  Zap,
  BarChart3,
}

interface Feature {
  title: string
  description: string
  icon?: string
  gradient?: string
  detailedContent?: string
  benefits?: string[]
}

export default function FeaturesPage() {
  const pageContent = getPageContent('features')
  const features = (pageContent.features as Feature[]) || []

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(219,74,43,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(219,74,43,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block mb-4 text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] bg-clip-text text-transparent">
              {pageContent.sectionTag || 'Why Choose Us'}
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              {pageContent.sectionTitle || (
                <>
                  Features That{' '}
                  <span className="bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] bg-clip-text text-transparent">
                    Drive Success
                  </span>
                </>
              )}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {pageContent.sectionDescription ||
                'We help companies grow. Global Reach. Local Touch.'}
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-32">
            {features.map((feature, index) => {
              const Icon = feature.icon ? iconMap[feature.icon] || Sparkles : Sparkles
              const isEven = index % 2 === 0

              return (
                <div
                  key={feature.title}
                  id={feature.title.toLowerCase().replace(/\s+/g, '-')}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${
                          feature.gradient || 'from-purple-500 to-pink-500'
                        } shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <h2 className="text-4xl font-bold mb-4">{feature.title}</h2>
                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    {feature.detailedContent && (
                      <div className="prose prose-lg text-gray-600 mb-8 whitespace-pre-wrap">
                        {feature.detailedContent}
                      </div>
                    )}

                    {/* Benefits */}
                    {feature.benefits && feature.benefits.length > 0 && (
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits:</h3>
                        <ul className="space-y-3">
                          {feature.benefits.map((benefit: string, i: number) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2
                                className={`w-6 h-6 flex-shrink-0 mt-0.5`}
                                style={{
                                  color: feature.gradient?.includes('purple')
                                    ? '#a855f7'
                                    : '#db4a2b',
                                }}
                              />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Visual Element */}
                  <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                    <div
                      className={`relative aspect-square rounded-3xl bg-gradient-to-br ${
                        feature.gradient || 'from-purple-500 to-pink-500'
                      } opacity-20 backdrop-blur-md border border-gray-200 p-8 shadow-2xl`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="w-32 h-32 text-gray-400/30" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {pageContent.ctaTitle || (
              <>
                Ready to Experience These Features{' '}
                <span className="bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] bg-clip-text text-transparent">
                  in Action?
                </span>
              </>
            )}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {pageContent.ctaDescription ||
              "Let's discuss how our comprehensive approach can help transform your brand and deliver exceptional results."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={pageContent.ctaPrimaryLink || '/contact'}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <span>{pageContent.ctaPrimaryText || 'Get Started Today'}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={pageContent.ctaSecondaryLink || '/services'}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white border-2 border-gray-200 px-8 py-4 text-base font-semibold text-gray-900 hover:border-gray-300 transition-all"
            >
              <span>{pageContent.ctaSecondaryText || 'View Our Services'}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
