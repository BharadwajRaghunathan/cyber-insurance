import { motion } from 'framer-motion'

const ProfileSelectionStep = ({ formData, onNext }) => {
  const handleSelect = (profileType) => {
    onNext({ profileType })
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-2xl mx-auto"
    >
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Choose Your Profile Type
        </h3>
        <p className="text-gray-600">
          Select the type of coverage you need
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSelect('individual')}
          className="card text-left hover:border-cyber-600 border-2 border-transparent transition-all cursor-pointer group"
        >
          <div className="text-5xl mb-4">👤</div>
          <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-cyber-600">
            Individual
          </h4>
          <p className="text-gray-600">
            Personal cyber protection for yourself. Perfect for individuals who want comprehensive coverage for their digital life.
          </p>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSelect('business')}
          className="card text-left hover:border-cyber-600 border-2 border-transparent transition-all cursor-pointer group opacity-60 relative"
          disabled
        >
          <div className="absolute top-4 right-4 bg-gray-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Coming Soon
          </div>
          <div className="text-5xl mb-4">🏢</div>
          <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-cyber-600">
            Business
          </h4>
          <p className="text-gray-600">
            Cyber protection for your business. Protect your company from cyber threats and data breaches.
          </p>
        </motion.button>
      </div>
    </motion.div>
  )
}

export default ProfileSelectionStep

