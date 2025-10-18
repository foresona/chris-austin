import { Metadata } from 'next'
import { Award, Heart, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Chris Austin PR Agency',
  description:
    "Learn about Chris Austin PR Agency's mission, values, and the team behind successful PR campaigns.",
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-white via-[#e3e2dd]/20 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              About <span style={{ color: '#db4a2b' }}>Chris Austin PR</span>
            </h1>
            <p className="text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              For over 15 years, we&apos;ve been crafting compelling narratives and building
              meaningful connections between brands and their audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Chris Austin PR Agency was founded with a simple belief: every brand has a unique
                  story worth telling. What started as a one-person operation has grown into a
                  full-service PR powerhouse, but our core mission remains unchanged.
                </p>
                <p>
                  We believe in the power of authentic storytelling, strategic thinking, and
                  building genuine relationships. Our approach combines traditional PR expertise
                  with modern digital strategies to create campaigns that resonate and deliver
                  results.
                </p>
                <p>
                  Today, we&apos;re proud to work with innovative brands across industries, from
                  startups disrupting their markets to established companies redefining their
                  narratives.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden bg-gray-200">
              {/* Placeholder for image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <p>Agency Image</p>
              </div>
            </div>
          </div>
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
            <div className="bg-white rounded-2xl p-8 text-center">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                style={{ backgroundColor: '#db4a2b' }}
              >
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Authenticity</h3>
              <p className="text-gray-600">
                We believe in genuine storytelling that reflects your brand&apos;s true values and
                resonates with real people.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                style={{ backgroundColor: '#db4a2b' }}
              >
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We&apos;re committed to delivering exceptional results through strategic thinking,
                creativity, and meticulous execution.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                style={{ backgroundColor: '#db4a2b' }}
              >
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We stay ahead of industry trends, embracing new technologies and approaches to keep
                your brand relevant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Chris Austin', role: 'Founder & CEO', bio: '15+ years of PR expertise' },
              {
                name: 'Sarah Mitchell',
                role: 'Head of Media Relations',
                bio: 'Former journalist and PR strategist',
              },
              { name: 'David Park', role: 'Creative Director', bio: 'Award-winning storyteller' },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <p>{member.name}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="font-semibold mb-2" style={{ color: '#db4a2b' }}>
                  {member.role}
                </p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
