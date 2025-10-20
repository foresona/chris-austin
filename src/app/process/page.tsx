import { Metadata } from 'next'
import Link from 'next/link'
import { getPageContent } from '@/lib/getPageContent'
import { ArrowRight, CheckCircle2, LucideIcon } from 'lucide-react'
import { Lightbulb, Target, Rocket, TrendingUp } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  const pageContent = getPageContent('process')
  return {
    title: `${pageContent.title || 'Our Process'} - ${pageContent.titleBrandText || 'CA Agency'}`,
    description:
      pageContent.sectionDescription ||
      'Discover our proven four-step process that transforms brands and delivers exceptional results.',
  }
}

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  Target,
  Rocket,
  TrendingUp,
}

export default function ProcessPage() {
  const pageContent = getPageContent('process')
  const processSteps = pageContent.steps || []

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(219,74,43,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(219,74,43,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block mb-4 text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] bg-clip-text text-transparent">
              {pageContent.sectionTag || 'Our Process'}
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              {pageContent.sectionTitle || (
                <>
                  How We{' '}
                  <span className="bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] bg-clip-text text-transparent">
                    Make Magic
                  </span>
                </>
              )}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {pageContent.sectionDescription ||
                'A proven four-step process that transforms brands and delivers exceptional results'}
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-32">
            {processSteps.map((step, index) => {
              const Icon = step.icon ? iconMap[step.icon] || Lightbulb : Lightbulb
              const isEven = index % 2 === 0

              return (
                <div
                  key={step.number}
                  id={`step-${step.number}`}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${
                          step.color || 'from-purple-500 to-pink-500'
                        } shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div
                        className={`text-6xl font-bold bg-gradient-to-br ${
                          step.color || 'from-purple-500 to-pink-500'
                        } bg-clip-text text-transparent`}
                      >
                        {step.number}
                      </div>
                    </div>

                    <h2 className="text-4xl font-bold mb-6">{step.title}</h2>
                    <p className="text-xl text-gray-400 mb-8 leading-relaxed">{step.description}</p>

                    {/* Key Activities */}
                    {step.keyActivities && step.keyActivities.length > 0 && (
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-300 mb-4">
                          Key Activities:
                        </h3>
                        <ul className="space-y-3">
                          {step.keyActivities.map((activity: string, i: number) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2
                                className={`w-6 h-6 flex-shrink-0 mt-0.5`}
                                style={{
                                  color: step.color
                                    ? `rgb(${
                                        step.color.includes('purple')
                                          ? '168, 85, 247'
                                          : '219, 74, 43'
                                      })`
                                    : '#db4a2b',
                                }}
                              />
                              <span className="text-gray-300">{activity}</span>
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
                        step.color || 'from-purple-500 to-pink-500'
                      } opacity-20 backdrop-blur-md border border-white/10 p-8 shadow-2xl`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="w-32 h-32 text-white/30" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Visualization */}
      <section className="py-24 bg-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              {pageContent.timelineTitle || 'Your Journey With Us'}
            </h2>
            <p className="text-xl text-gray-400">
              {pageContent.timelineDescription ||
                "From discovery to optimization, we're with you every step of the way"}
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] -translate-y-1/2 hidden lg:block" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {processSteps.map((step) => {
                const Icon = step.icon ? iconMap[step.icon] || Lightbulb : Lightbulb
                return (
                  <div key={step.number} className="text-center">
                    <div className="relative inline-block mb-6">
                      <div
                        className={`w-20 h-20 rounded-full bg-gradient-to-br ${
                          step.color || 'from-purple-500 to-pink-500'
                        } flex items-center justify-center shadow-xl relative z-10`}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#db4a2b] to-[#ff6b4a] blur-xl opacity-50" />
                    </div>
                    <div className="text-sm font-bold text-[#db4a2b] mb-2">{step.number}</div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {pageContent.ctaTitle || (
              <>
                Ready to Start Your{' '}
                <span className="bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] bg-clip-text text-transparent">
                  Transformation?
                </span>
              </>
            )}
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            {pageContent.ctaDescription ||
              "Let's discuss how our process can help you achieve your goals and deliver measurable results."}
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-all"
            >
              <span>{pageContent.ctaSecondaryText || 'View Our Services'}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
