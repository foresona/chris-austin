'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm() {
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
          <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
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
          <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
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
  )
}
