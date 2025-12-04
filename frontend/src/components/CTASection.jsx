import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const CTASection = () => {
  const navigate = useNavigate()
  return (
    <section className="section-container bg-gradient-to-br from-cyber-50 to-white text-gray-900 py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto px-4 sm:px-6"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 lg:mb-10">
          Get Your Cyber Insurance Now
        </h2>
        <p className="text-lg lg:text-2xl text-gray-600 mb-12 lg:mb-16 leading-relaxed max-w-3xl mx-auto">
          Protect yourself and your family from cyber threats. Get a quote in minutes and activate your policy today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
          <button
            onClick={() => navigate('/get-quote')}
            className="btn-primary text-lg px-8 py-4 min-w-[180px]"
          >
            Get Quote Now
          </button>
          <button
            onClick={() => {
              document.getElementById('product-options')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-secondary text-lg px-8 py-4 min-w-[180px]"
          >
            View Plans
          </button>
        </div>
      </motion.div>
    </section>
  )
}

export default CTASection

