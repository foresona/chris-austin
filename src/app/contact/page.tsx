import { getPageContent } from '@/lib/getPageContent'
import { Mail, Phone, MapPin } from 'lucide-react'
import ContactForm from './ContactForm'

export default async function ContactPage() {
  const pageContent = await getPageContent('contact')

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-white via-[#e3e2dd]/20 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              {pageContent?.pageTitle || "Let's Start a"}{' '}
              <span style={{ color: '#db4a2b' }}>{pageContent?.subtitle || 'Conversation'}</span>
            </h1>
            <p className="text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              {pageContent?.description ||
                "Ready to amplify your brand's story? We'd love to hear from you."}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {pageContent?.contactSectionTitle || 'Get In Touch'}
              </h2>
              <p className="text-gray-600 mb-8">
                {pageContent?.contactSectionDescription ||
                  "Whether you're looking to launch a new campaign, manage a crisis, or simply explore how PR can benefit your brand, we're here to help."}
              </p>

              <div className="space-y-6">
                {pageContent?.email && (
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div
                        className="flex items-center justify-center h-12 w-12 rounded-full"
                        style={{ backgroundColor: '#db4a2b' }}
                      >
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a
                          href={`mailto:${pageContent.email}`}
                          className="hover:text-[#db4a2b] transition-colors"
                        >
                          {pageContent.email}
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                {pageContent?.phone && (
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div
                        className="flex items-center justify-center h-12 w-12 rounded-full"
                        style={{ backgroundColor: '#db4a2b' }}
                      >
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-gray-600">
                        <a
                          href={`tel:${pageContent.phone.replace(/\s/g, '')}`}
                          className="hover:text-[#db4a2b] transition-colors"
                        >
                          {pageContent.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                {pageContent?.address && (
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div
                        className="flex items-center justify-center h-12 w-12 rounded-full"
                        style={{ backgroundColor: '#db4a2b' }}
                      >
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Office</h3>
                      <p className="text-gray-600 whitespace-pre-line">{pageContent.address}</p>
                    </div>
                  </div>
                )}
              </div>

              {pageContent?.officeHours && (
                <div className="mt-12 p-6 rounded-2xl" style={{ backgroundColor: '#e3e2dd' }}>
                  <h3 className="text-xl font-bold mb-3">Office Hours</h3>
                  <p className="text-gray-700">{pageContent.officeHours}</p>
                </div>
              )}
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
