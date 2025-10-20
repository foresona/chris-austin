import { Metadata } from 'next'
import { Award, Heart, Zap, LucideIcon } from 'lucide-react'
import { getPageContent } from '@/lib/getPageContent'

export const metadata: Metadata = {
  title: 'About Us - Chris Austin PR Agency',
  description:
    "Learn about Chris Austin PR Agency's mission, values, and the team behind successful PR campaigns.",
}

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  heart: Heart,
  award: Award,
  zap: Zap,
}

export default function AboutPage() {
  const pageContent = getPageContent('about')
  const homeContent = getPageContent('home')

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-white via-[#e3e2dd]/20 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              {pageContent.pageTitle || 'About'}{' '}
              <span style={{ color: '#db4a2b' }}>
                {pageContent.titleBrandText || homeContent.brandName || 'Chris Austin PR'}
              </span>
            </h1>
            <p className="text-xl font-medium leading-8 text-gray-900 max-w-3xl mx-auto">
              {pageContent.subtitle ||
                "For over 15 years, we've been crafting compelling narratives and building meaningful connections between brands and their audiences."}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <div className="space-y-4 text-gray-800 text-lg leading-relaxed">
                <p>{pageContent.story}</p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden bg-gray-200">
              {/* Placeholder for image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-lg font-medium">
                <p>Agency Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">{pageContent.mission}</p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-32" style={{ backgroundColor: '#e3e2dd' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pageContent.values?.map((value, index) => {
              const IconComponent = value.icon ? iconMap[value.icon.toLowerCase()] : Heart
              return (
                <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-md">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                    style={{ backgroundColor: '#db4a2b' }}
                  >
                    {IconComponent && <IconComponent className="h-8 w-8 text-white" />}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-800 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {pageContent.team && pageContent.team.length > 0 && (
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Meet Our Team
              </h2>
              <p className="mt-4 text-lg text-gray-600">The experts behind your success stories</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pageContent.team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="mb-6 relative h-64 rounded-2xl overflow-hidden bg-gray-200 shadow-lg">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl font-bold text-gray-400">
                          {member.name?.[0] || '?'}
                        </div>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{member.name}</h3>
                  <p className="text-sm font-semibold mb-4" style={{ color: '#db4a2b' }}>
                    {member.position}
                  </p>
                  <p className="text-gray-800 leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
