import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const PolicyConfirmationStep = ({ formData, onClose }) => {
  const navigate = useNavigate()

  // Generate a random policy number
  const generatePolicyNumber = () => {
    const random = Math.floor(Math.random() * 1000000).toString().padStart(6, '0')
    return `CS-CYB-2025-${random}`
  }

  const policyNumber = generatePolicyNumber()
  const startDate = formData.coverageStartDate || new Date().toISOString().split('T')[0]
  const selectedPlan = formData.selectedPlan

  const getPlanFeatures = (planName) => {
    const features = {
      SMART: [
        '24/7 Cyber Assistance',
        'Online Banking / Card Fraud Coverage (BD 2,000)'
      ],
      COMFORT: [
        '24/7 Cyber Assistance',
        'Identity Theft Protection (BD 5,000)',
        'Online Shopping Protection (BD 5,000)',
        'Online Banking / Card Fraud Coverage (BD 3,000)'
      ],
      PREMIUM: [
        '24/7 Cyber Assistance',
        'Identity Theft Protection (BD 7,000)',
        'Online Shopping Protection (BD 7,000)',
        'Online Banking / Card Fraud Coverage (BD 5,000)',
        'Legal Defense & Psychological Support (BD 2,000)',
        'Expert IT Assistance (Up to 3 times/year)',
        'Data Recovery & System Restoration (Up to BD 2,000)',
        'Legal Referral Services'
      ],
      LUXURY: [
        '24/7 Cyber Assistance',
        'Identity Theft Protection (BD 12,000)',
        'Online Shopping Protection (BD 12,000)',
        'Online Banking / Card Fraud Coverage (BD 10,000)',
        'Legal Defense & Psychological Support (BD 2,000)',
        'Expert IT Assistance (Up to 3 times/year)',
        'Data Recovery & System Restoration (Up to BD 2,000)',
        'Legal Referral Services'
      ]
    }
    return features[planName] || []
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-4xl mx-auto text-center"
    >
      <div className="mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Your Cyber Insurance Policy is Activated
        </h2>
        <p className="text-xl text-gray-600">
          Welcome to CyberShield Insurance
        </p>
      </div>

      <div className="card bg-gradient-to-br from-cyber-50 to-cyber-100 mb-6">
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div>
            <div className="text-sm text-gray-600 mb-1">Policy Number</div>
            <div className="text-2xl font-bold text-cyber-600">{policyNumber}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Start Date</div>
            <div className="text-xl font-semibold text-gray-900">{new Date(startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Coverage Limit</div>
            <div className="text-xl font-semibold text-gray-900">
              BD {selectedPlan?.aggregateLimit || '0'},000 per policy year
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Plan</div>
            <div className="text-xl font-semibold text-gray-900">
              {selectedPlan?.name || 'N/A'} – {formData.coverageType === 'individual' ? 'Individual' : 'Family'}
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-6 text-left">
        <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included in Your Plan</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div>
            <div className="text-cyber-600 font-semibold mb-2">PREVENT</div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Personal data monitoring</li>
              <li>• Device protection</li>
              <li>• Educational resources</li>
            </ul>
          </div>
          <div>
            <div className="text-cyber-600 font-semibold mb-2">PROTECT</div>
            <ul className="text-sm text-gray-600 space-y-1">
              {getPlanFeatures(selectedPlan?.name).map((feature, idx) => (
                <li key={idx}>• {feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-cyber-600 font-semibold mb-2">SUPPORT</div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 24/7 cyber assistance hotline</li>
              <li>• Expert IT assistance</li>
              <li>• Data recovery services</li>
              {['PREMIUM', 'LUXURY'].includes(selectedPlan?.name) && (
                <li>• Legal referral services</li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="card bg-cyber-600 text-white mb-6">
        <div className="flex items-start">
          <div className="text-4xl mr-4">📦</div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Your Welcome Kit</h3>
            <p className="text-cyber-100">
              You will receive your digital welcome kit, including access to your Cyber Insurance Chatbot for 24/7 support and incident guidance. Check your email ({formData.email}) for details.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => {
            // Placeholder for PDF download
            alert('Policy summary PDF will be available soon')
          }}
          className="btn-secondary"
        >
          View Policy Summary (PDF)
        </button>
        <button
          onClick={() => {
            if (onClose) {
              onClose()
            } else {
              navigate('/')
            }
          }}
          className="btn-primary"
        >
          Back to Home
        </button>
      </div>
    </motion.div>
  )
}

export default PolicyConfirmationStep

