import { motion } from 'framer-motion'

const PlanSelectionStep = ({ formData, onNext, onBack, updateFormData }) => {
  const plans = [
    {
      name: 'SMART',
      aggregateLimit: '5,000',
      excess: '100',
      price: 1.8,
      features: [
        'Aggregate limit 5,000 (Excess 100)',
        'Online banking / card fraud: 2,000',
        '24/7 cyber assistance'
      ]
    },
    {
      name: 'COMFORT',
      aggregateLimit: '5,000',
      excess: '100',
      price: 3.3,
      features: [
        'Aggregate limit 5,000 (Excess 100)',
        'ID theft cover: 5,000',
        'Online shopping: 5,000',
        'Online banking / card fraud: 3,000',
        '24/7 cyber assistance'
      ]
    },
    {
      name: 'PREMIUM',
      aggregateLimit: '10,000',
      excess: '100',
      price: 4.9,
      badge: 'Best Value',
      features: [
        'Aggregate limit 10,000 (Excess 100)',
        'ID theft cover: 7,000',
        'Online banking / card fraud: 5,000',
        'Online shopping: 7,000',
        'Legal support: 2,000',
        'IT assistance: Up to 3 times/year',
        'Data recovery: Up to 2,000',
        '24/7 cyber assistance'
      ]
    },
    {
      name: 'LUXURY',
      aggregateLimit: '15,000',
      excess: '100',
      price: 6.5,
      badge: 'Maximum Protection',
      features: [
        'Aggregate limit 15,000 (Excess 100)',
        'ID theft cover: 12,000',
        'Online banking / card fraud: 10,000',
        'Online shopping: 12,000',
        'Legal support: 2,000',
        'IT assistance: Up to 3 times/year',
        'Data recovery: Up to 2,000',
        '24/7 cyber assistance'
      ]
    }
  ]

  const handleSelectPlan = (plan) => {
    updateFormData({ selectedPlan: plan })
  }

  const handleNext = () => {
    if (formData.selectedPlan) {
      onNext({})
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-6xl mx-auto"
    >
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Select Your Plan
        </h3>
        <p className="text-gray-600">
          Choose the cyber protection plan that best fits your needs
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => handleSelectPlan(plan)}
            className={`card cursor-pointer transition-all ${
              formData.selectedPlan?.name === plan.name
                ? 'border-2 border-cyber-600 bg-cyber-50'
                : 'border-2 border-transparent hover:border-cyber-300'
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-cyber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {plan.badge}
                </span>
              </div>
            )}
            <div className="text-center mb-4">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h4>
              <div className="text-3xl font-bold text-cyber-600 mb-1">
                BD {plan.price}
              </div>
              <div className="text-sm text-gray-500">per year</div>
            </div>
            <div className="text-center mb-4 pb-4 border-b border-gray-200">
              <div className="text-sm text-gray-600">
                Limit: BD {plan.aggregateLimit}
              </div>
              <div className="text-xs text-gray-500">Excess: {plan.excess}</div>
            </div>
            <ul className="space-y-2 text-sm">
              {plan.features.slice(0, 4).map((feature, idx) => (
                <li key={idx} className="flex items-start text-gray-600">
                  <svg className="w-4 h-4 text-cyber-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            {formData.selectedPlan?.name === plan.name && (
              <div className="mt-4 pt-4 border-t border-cyber-600">
                <div className="text-center text-cyber-600 font-semibold">
                  ✓ Selected
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {formData.selectedPlan && (
        <div className="card bg-cyber-50 border-2 border-cyber-600 mb-6">
          <h4 className="font-bold text-gray-900 mb-2">Selected Plan: {formData.selectedPlan.name}</h4>
          <div className="text-sm text-gray-700">
            <div>Annual Premium: <span className="font-semibold">BD {formData.selectedPlan.price}</span></div>
            <div>Coverage Limit: <span className="font-semibold">BD {formData.selectedPlan.aggregateLimit}</span></div>
          </div>
        </div>
      )}

      <div className="flex justify-between pt-6">
        <button
          onClick={onBack}
          className="btn-secondary"
        >
          Back: Personal Details
        </button>
        <button
          onClick={handleNext}
          disabled={!formData.selectedPlan}
          className={`btn-primary ${!formData.selectedPlan ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next: Payment Details
        </button>
      </div>
    </motion.div>
  )
}

export default PlanSelectionStep

