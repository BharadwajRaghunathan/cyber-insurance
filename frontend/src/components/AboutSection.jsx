import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section id="about" className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Cyber Shield
          </h2>
          <div className="w-24 h-1 bg-cyber-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="card">
              <div className="flex items-start">
                <div className="bg-cyber-100 rounded-lg p-3 mr-4">
                  <svg className="w-6 h-6 text-cyber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">20+ Years of Experience</h3>
                  <p className="text-gray-600">
                    More than 20 years of cyber protection experience in the USA
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start">
                <div className="bg-cyber-100 rounded-lg p-3 mr-4">
                  <svg className="w-6 h-6 text-cyber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Award-Winning Excellence</h3>
                  <p className="text-gray-600">
                    Security Software Company of the Year in 2023
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start">
                <div className="bg-cyber-100 rounded-lg p-3 mr-4">
                  <svg className="w-6 h-6 text-cyber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Global Trust</h3>
                  <p className="text-gray-600">
                    180+ million customers protected in 100+ countries, trusted by leading brands and financial institutions
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-cyber-50 to-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Financial Institutions</h3>
              <p className="text-gray-700 text-lg mb-6">
                67% of consumers consider financial institutions credible distributors for cyber protection services.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-cyber-600">180M+</div>
                  <div className="text-sm text-gray-600">Customers</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-cyber-600">100+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
            </div>

            <div className="card bg-cyber-50 border border-cyber-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Most Valuable Brands Trust Us</h3>
              <p className="text-gray-700">
                We partner with leading financial institutions and brands worldwide to deliver comprehensive cyber protection solutions.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutSection

