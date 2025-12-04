import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false)
  }

  const goHome = () => {
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={goHome}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <div className="w-10 h-10 bg-cyber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">CS</span>
            </div>
            <span className="text-xl font-bold text-gray-900 hidden sm:block">
              CyberShield Insurance
            </span>
          </button>

          {/* Center Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-cyber-600 font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-cyber-600 font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-cyber-600 font-medium transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('product-options')}
              className="text-gray-700 hover:text-cyber-600 font-medium transition-colors"
            >
              Product Options
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-cyber-600 font-medium transition-colors"
            >
              Pricing
            </button>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-3">
            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-cyber-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyber-500"
              onClick={() => setIsMenuOpen(prev => !prev)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Get Quote Button */}
            <button
              onClick={() => {
                navigate('/get-quote')
                setIsMenuOpen(false)
              }}
              className="btn-primary text-xs sm:text-sm px-3 sm:px-4 py-2"
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/98 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 text-gray-700 hover:text-cyber-600"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-gray-700 hover:text-cyber-600"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left py-2 text-gray-700 hover:text-cyber-600"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('product-options')}
              className="block w-full text-left py-2 text-gray-700 hover:text-cyber-600"
            >
              Product Options
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left py-2 text-gray-700 hover:text-cyber-600"
            >
              Pricing
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  )
}

export default Navbar

