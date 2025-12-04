import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-cyber-600 via-cyber-700 to-cyber-900 text-white pt-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              CyberShield Insurance for Your Digital Life
            </h1>
            <p className="text-xl lg:text-2xl text-cyber-100 mb-8 leading-relaxed">
              Stay safe in an increasingly connected world. Protect your identity, finances, and peace of mind with comprehensive cyber insurance.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">30%</div>
                <div className="text-sm text-cyber-100">Have been victims of cybercrime</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">64%</div>
                <div className="text-sm text-cyber-100">Worry about cybercrime</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">76%</div>
                <div className="text-sm text-cyber-100">Spend more time online</div>
              </div>
            </div>

            {/* Value Props */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-cyber-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg">Monitor your identity and personal data online</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-cyber-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg">Protect against financial loss from cybercrime</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-cyber-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg">Get 24/7 expert assistance when something goes wrong</span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/get-quote')}
                className="btn-primary bg-white text-cyber-600 hover:bg-cyber-50"
              >
                Get Quote
              </button>
              <button
                onClick={() => {
                  document.getElementById('product-options')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-secondary bg-transparent border-white text-white hover:bg-white/10"
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
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-cyber-500/30 rounded-lg p-4 text-center">
                    <div className="text-4xl mb-2">🛡️</div>
                    <div className="text-sm font-semibold">Protection</div>
                  </div>
                  <div className="bg-cyber-500/30 rounded-lg p-4 text-center">
                    <div className="text-4xl mb-2">🔒</div>
                    <div className="text-sm font-semibold">Security</div>
                  </div>
                  <div className="bg-cyber-500/30 rounded-lg p-4 text-center">
                    <div className="text-4xl mb-2">📊</div>
                    <div className="text-sm font-semibold">Monitoring</div>
                  </div>
                  <div className="bg-cyber-500/30 rounded-lg p-4 text-center">
                    <div className="text-4xl mb-2">💼</div>
                    <div className="text-sm font-semibold">Support</div>
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

