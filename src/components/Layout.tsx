import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedBackground } from './AnimatedBackground'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
]

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        {/* Glass effect background */}
        <div className="absolute inset-0 backdrop-blur-md bg-white/70 border-b border-white/20 shadow-lg shadow-black/5" />

        <nav className="relative flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto" aria-label="Global">          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent"
              >
                Nest
              </motion.span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="rounded-full p-2.5 text-gray-700 hover:bg-black/5 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </motion.button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    delay: 0.1 * i,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }}
              >
                <Link
                  to={item.href}
                  className={`text-sm font-medium transition-all duration-200 relative group ${
                    location.pathname === item.href ? 'text-primary-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full ${
                    location.pathname === item.href ? 'w-full' : ''
                  }`} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop CTA button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary-600/10 bg-gradient-to-r from-primary-600 to-primary-500 hover:to-primary-600 transition-all duration-200 hover:shadow-lg hover:shadow-primary-600/20"
              >
                Schedule Consultation
              </Link>
            </motion.div>
          </div>
        </nav>

        {/* Mobile menu */}
        <Dialog 
          as="div" 
          className="lg:hidden" 
          open={mobileMenuOpen} 
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/90 backdrop-blur-lg px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                  Nest
                </span>
              </Link>
              <button
                type="button"
                className="rounded-full p-2.5 text-gray-700 hover:bg-black/5 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: {
                          delay: i * 0.1,
                          duration: 0.3
                        }
                      }}
                    >
                      <Link
                        to={item.href}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                          location.pathname === item.href
                            ? 'bg-primary-50 text-primary-600'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="/contact"
                    className="block rounded-full px-6 py-2.5 text-center text-sm font-semibold text-white shadow-md shadow-primary-600/10 bg-gradient-to-r from-primary-600 to-primary-500 hover:to-primary-600 transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </motion.header>      <div className="mt-16">
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }
            }}
            exit={{ 
              opacity: 0, 
              y: -20,
              transition: {
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1]
              }
            }}
            className="w-full relative z-10"
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  )
}
