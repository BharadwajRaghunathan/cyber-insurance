import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const CTASection = () => {
  const navigate = useNavigate()
  return (
    <section className="section-container bg-gradient-to-br from-cyber-600 to-cyber-800 text-white py-20 lg:py-28">
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
        <p className="text-xl lg:text-2xl text-cyber-100 mb-12 lg:mb-16 leading-relaxed max-w-3xl mx-auto">
          Protect yourself and your family from cyber threats. Get a quote in minutes and activate your policy today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
          <button
            onClick={() => navigate('/get-quote')}
            className="btn-primary bg-white text-cyber-600 hover:bg-cyber-50 text-lg px-8 py-4 min-w-[180px]"
          >
            Get Quote Now
          </button>
          <button
            onClick={() => {
              document.getElementById('product-options')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 min-w-[180px]"
          >
            View Plans
          </button>
        </div>
      </motion.div>
    </section>
  )
}

export default CTASection

