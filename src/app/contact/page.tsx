'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-white via-[#e3e2dd]/20 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Let&apos;s Start a <span style={{ color: '#db4a2b' }}>Conversation</span>
            </h1>
            <p className="text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Ready to amplify your brand&apos;s story? We&apos;d love to hear from you.
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
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you&apos;re looking to launch a new campaign, manage a crisis, or simply
                explore how PR can benefit your brand, we&apos;re here to help.
              </p>

              <div className="space-y-6">
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
                        href="mailto:hello@chrisaustin.pr"
                        className="hover:text-[#db4a2b] transition-colors"
                      >
                        hello@chrisaustin.pr
                      </a>
                    </p>
                  </div>
                </div>

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
                      <a href="tel:+1234567890" className="hover:text-[#db4a2b] transition-colors">
                        +1 (234) 567-890
                      </a>
                    </p>
                  </div>
                </div>

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
                    <p className="text-gray-600">
                      123 PR Avenue
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-2xl" style={{ backgroundColor: '#e3e2dd' }}>
                <h3 className="text-xl font-bold mb-3">Office Hours</h3>
                <p className="text-gray-700">
                  Monday - Friday: 9:00 AM - 6:00 PM EST
                  <br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db4a2b] focus:border-transparent outline-none transition"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db4a2b] focus:border-transparent outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db4a2b] focus:border-transparent outline-none transition"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db4a2b] focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your PR needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-lg px-6 py-4 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                  style={{ backgroundColor: '#db4a2b' }}
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>

                {submitted && (
                  <div className="text-center text-green-600 font-semibold">
                    Thank you! We&apos;ll be in touch soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
