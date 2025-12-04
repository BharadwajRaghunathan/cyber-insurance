import { useState } from 'react'
import { motion } from 'framer-motion'

const PricingSection = () => {
  const [pricingType, setPricingType] = useState('embedded') // 'embedded' or 'voluntary'
  const [coverageType, setCoverageType] = useState('individual') // 'individual' or 'family'

  const pricing = {
    embedded: {
      individual: {
        LUXURY: 4.7,
        PREMIUM: 3.5,
        COMFORT: 2.4,
        SMART: 1.3
      },
      family: {
        LUXURY: 7.1,
        PREMIUM: 5.3,
        COMFORT: 3.6,
        SMART: 2.0
      }
    },
    voluntary: {
      individual: {
        LUXURY: 6.5,
        PREMIUM: 4.9,
        COMFORT: 3.3,
        SMART: 1.8
      },
      family: {
        LUXURY: 9.8,
        PREMIUM: 7.4,
        COMFORT: 5.0,
        SMART: 2.7
      }
    }
  }

  const plans = ['SMART', 'COMFORT', 'PREMIUM', 'LUXURY']

  return (
    <section id="pricing" className="section-container bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Product Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Annual premiums in Bahraini Dinar (BD)
          </p>
          <div className="w-24 h-1 bg-cyber-600 mx-auto mt-4"></div>
        </div>

        {/* Toggle Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <div className="flex bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setPricingType('embedded')}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${
                pricingType === 'embedded'
                  ? 'bg-cyber-600 text-white'
                  : 'text-gray-700 hover:text-cyber-600'
              }`}
            >
              Embedded
            </button>
            <button
              onClick={() => setPricingType('voluntary')}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${
                pricingType === 'voluntary'
                  ? 'bg-cyber-600 text-white'
                  : 'text-gray-700 hover:text-cyber-600'
              }`}
            >
              Voluntary Add-on
            </button>
          </div>

          <div className="flex bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setCoverageType('individual')}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${
                coverageType === 'individual'
                  ? 'bg-cyber-600 text-white'
                  : 'text-gray-700 hover:text-cyber-600'
              }`}
            >
              Individual
            </button>
            <button
              onClick={() => setCoverageType('family')}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${
                coverageType === 'family'
                  ? 'bg-cyber-600 text-white'
                  : 'text-gray-700 hover:text-cyber-600'
              }`}
            >
              Family
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {plans.map((plan, index) => {
            const price = pricing[pricingType][coverageType][plan]
            return (
              <motion.div
                key={plan}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-cyber-600">BD {price}</span>
                </div>
                <div className="text-sm text-gray-500 mb-4">per year</div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-xs text-gray-600">
                    {pricingType === 'embedded' ? 'Embedded' : 'Voluntary Add-on'}
                  </div>
                  <div className="text-xs text-gray-600">
                    {coverageType === 'individual' ? 'Individual' : 'Family'} Coverage
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Pricing Table */}
        <div className="card bg-white">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-cyber-600 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Plan</th>
                  <th className="px-6 py-4 text-center font-semibold">Individual</th>
                  <th className="px-6 py-4 text-center font-semibold">Family</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan, index) => (
                  <tr
                    key={plan}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900">{plan}</td>
                    <td className="px-6 py-4 text-center text-gray-700">
                      BD {pricing[pricingType].individual[plan]}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">
                      BD {pricing[pricingType].family[plan]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              Rates are net RI premiums, excluding any taxes or partner commission, and are annual.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default PricingSection

