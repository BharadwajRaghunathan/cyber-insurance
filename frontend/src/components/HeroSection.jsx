import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-cyber-50 via-white to-white text-gray-900 pt-24"
    >
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              CyberShield Insurance for Your Digital Life
            </h1>
            <p className="text-lg lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Stay safe in an increasingly connected world. Protect your identity, finances, and peace of mind with comprehensive cyber insurance.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white border border-cyber-50 rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-cyber-600">30%</div>
                <div className="text-sm text-gray-600">Have been victims of cybercrime</div>
              </div>
              <div className="bg-white border border-cyber-50 rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-cyber-600">64%</div>
                <div className="text-sm text-gray-600">Worry about cybercrime</div>
              </div>
              <div className="bg-white border border-cyber-50 rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-cyber-600">76%</div>
                <div className="text-sm text-gray-600">Spend more time online</div>
              </div>
            </div>

            {/* Value Props */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-cyber-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg text-gray-800">Monitor your identity and personal data online</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-cyber-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg text-gray-800">Protect against financial loss from cybercrime</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-cyber-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg text-gray-800">Get 24/7 expert assistance when something goes wrong</span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/get-quote')}
                className="btn-primary bg-cyber-500 hover:bg-cyber-600 text-white"
              >
                Get Quote
              </button>
              <button
                onClick={() => {
                  document.getElementById('product-options')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-secondary bg-white text-cyber-700 border border-cyber-100 hover:bg-cyber-50"
              >
                See Plans & Pricing
              </button>
            </div>
          </motion.div>

          {/* Right Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border border-cyber-100 shadow-md">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-cyber-50 rounded-lg p-8 text-center flex items-center justify-center h-32">
                    <div className="text-2xl font-bold text-gray-800">Protection</div>
                  </div>
                  <div className="bg-cyber-50 rounded-lg p-8 text-center flex items-center justify-center h-32">
                    <div className="text-2xl font-bold text-gray-800">Security</div>
                  </div>
                  <div className="bg-cyber-50 rounded-lg p-8 text-center flex items-center justify-center h-32">
                    <div className="text-2xl font-bold text-gray-800">Monitoring</div>
                  </div>
                  <div className="bg-cyber-50 rounded-lg p-8 text-center flex items-center justify-center h-32">
                    <div className="text-2xl font-bold text-gray-800">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

