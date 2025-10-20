'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Features', href: '/features' },
  { name: 'Process', href: '/process' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

interface HeaderProps {
  brandName?: string
}

export default function Header({ brandName }: HeaderProps = {}) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const isHomePage = pathname === '/'

  useEffect(() => {
    console.log('Header: pathname =', pathname, 'isHomePage =', isHomePage)

    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
      console.log('Header: isScrolled =', scrolled, 'scrollY =', window.scrollY)
    }
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname, isHomePage])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  // Calculate background color based on page and scroll state
  const getBackgroundColor = () => {
    if (isHomePage && !isScrolled) {
      return 'linear-gradient(to bottom right, #000000, #111827, #000000)' // Same gradient as hero
    } else if (isHomePage && isScrolled) {
      return 'rgba(255, 255, 255, 0.98)'
    } else if (!isHomePage && !isScrolled) {
      return 'rgba(255, 255, 255, 0.85)'
    } else {
      return 'rgba(255, 255, 255, 0.98)'
    }
  }

  // Calculate blur amount
  const getBlurAmount = () => {
    if (isHomePage && !isScrolled) {
      return '0px' // No blur on solid background
    } else if (isHomePage && isScrolled) {
      return '12px'
    } else if (!isHomePage && !isScrolled) {
      return '10px'
    } else {
      return '12px'
    }
  }

  // Determine if text should be white (only on homepage at top)
  const shouldUseWhiteText = isHomePage && !isScrolled
  console.log('Header: shouldUseWhiteText =', shouldUseWhiteText, '(isHomePage:', isHomePage, 'isScrolled:', isScrolled, ')')

  return (
    <motion.header
      style={{
        background: getBackgroundColor(), // Use 'background' instead of 'backgroundColor' for gradients
        backdropFilter: `blur(${getBlurAmount()})`,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'border-b border-gray-200 shadow-md' 
          : isHomePage 
            ? '' // No border on homepage
            : 'border-b border-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 group">
              <motion.span
                className="text-2xl font-bold transition-all duration-300 bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {brandName || 'Chris Austin PR'}
              </motion.span>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              style={{
                color: shouldUseWhiteText ? '#ffffff' : '#374151',
              }}
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors ${
                shouldUseWhiteText
                  ? 'hover:bg-white/10 drop-shadow-lg'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  color: shouldUseWhiteText ? '#ffffff' : '#111827',
                  textShadow: shouldUseWhiteText ? '0 1px 2px rgba(0, 0, 0, 0.2)' : undefined,
                }}
                className={`relative text-sm font-semibold leading-6 transition-colors group ${
                  shouldUseWhiteText
                    ? 'hover:text-gray-200'
                    : 'hover:text-[#db4a2b]'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/contact"
              className="group relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a]" />
              <span className="absolute inset-0 bg-gradient-to-r from-[#ff6b4a] to-[#db4a2b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Get Started</span>
            </Link>
          </div>
        </nav>

        <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] bg-clip-text text-transparent">
                    {brandName || 'Chris Austin PR'}
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href="/contact"
                      className="block w-full rounded-full px-6 py-2.5 text-center text-sm font-semibold text-white shadow-lg bg-gradient-to-r from-[#db4a2b] to-[#ff6b4a] hover:shadow-xl transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
