import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react'

interface FooterProps {
  contactData?: {
    email?: string
    phone?: string
    address?: string
    socialMedia?: {
      twitter?: string
      linkedin?: string
      instagram?: string
    }
    footerBrandName?: string
    footerTagline?: string
  }
}

export default function Footer({ contactData }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#db4a2b' }}>
              {contactData?.footerBrandName || 'Chris Austin PR Agency'}
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              {contactData?.footerTagline ||
                'Leading public relations agency specializing in brand storytelling, media relations, and strategic communications that drive results.'}
            </p>
            <div className="flex space-x-4">
              {contactData?.socialMedia?.linkedin && (
                <a
                  href={
                    contactData.socialMedia.linkedin.startsWith('http')
                      ? contactData.socialMedia.linkedin
                      : `https://linkedin.com/${contactData.socialMedia.linkedin}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {contactData?.socialMedia?.twitter && (
                <a
                  href={
                    contactData.socialMedia.twitter.startsWith('http')
                      ? contactData.socialMedia.twitter
                      : `https://twitter.com/${contactData.socialMedia.twitter.replace('@', '')}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              {contactData?.socialMedia?.instagram && (
                <a
                  href={
                    contactData.socialMedia.instagram.startsWith('http')
                      ? contactData.socialMedia.instagram
                      : `https://instagram.com/${contactData.socialMedia.instagram.replace('@', '')}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              {contactData?.email && (
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <a
                    href={`mailto:${contactData.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {contactData.email}
                  </a>
                </li>
              )}
              {contactData?.phone && (
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <a
                    href={`tel:${contactData.phone.replace(/\s/g, '')}`}
                    className="hover:text-white transition-colors"
                  >
                    {contactData.phone}
                  </a>
                </li>
              )}
              {contactData?.address && (
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{contactData.address}</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} {contactData?.footerBrandName || 'Chris Austin PR Agency'}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
