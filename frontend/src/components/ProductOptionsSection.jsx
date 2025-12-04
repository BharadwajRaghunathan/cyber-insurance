import { motion } from 'framer-motion'

const ProductOptionsSection = () => {
  const plans = [
    {
      name: 'SMART',
      aggregateLimit: '5,000',
      excess: '100',
      idTheft: 'Not covered',
      legalSupport: 'Not covered',
      onlineShopping: 'Not covered',
      bankingFraud: '2,000',
      itAssistance: 'Not covered',
      dataRecovery: 'Not covered',
      legalReferral: 'Not covered',
      assistance: 'Covered'
    },
    {
      name: 'COMFORT',
      aggregateLimit: '5,000',
      excess: '100',
      idTheft: '5,000',
      legalSupport: 'Not covered',
      onlineShopping: '5,000',
      bankingFraud: '3,000',
      itAssistance: 'Limited',
      dataRecovery: 'Not covered',
      legalReferral: 'Not covered',
      assistance: 'Covered'
    },
    {
      name: 'PREMIUM',
      aggregateLimit: '10,000',
      excess: '100',
      idTheft: '7,000',
      legalSupport: '2,000',
      onlineShopping: '7,000',
      bankingFraud: '5,000',
      itAssistance: 'Up to 3 times/year',
      dataRecovery: 'Covered (up to 2,000)',
      legalReferral: 'Covered',
      assistance: 'Covered',
      badge: 'Best Value'
    },
    {
      name: 'LUXURY',
      aggregateLimit: '15,000',
      excess: '100',
      idTheft: '12,000',
      legalSupport: '2,000',
      onlineShopping: '12,000',
      bankingFraud: '10,000',
      itAssistance: 'Up to 3 times/year',
      dataRecovery: 'Covered (up to 2,000)',
      legalReferral: 'Covered',
      assistance: 'Covered',
      badge: 'Maximum Protection'
    }
  ]

  return (
    <section id="product-options" className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Product Options
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that best fits your cyber protection needs
          </p>
          <div className="w-24 h-1 bg-cyber-600 mx-auto mt-4"></div>
        </div>

        {/* Plan Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`card relative ${plan.badge ? 'border-2 border-cyber-600' : ''}`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-cyber-600 text-white px-4 py-1 rounded-full text-sm font-semibold leading-snug text-center inline-flex flex-col">
                    {plan.badge === 'Maximum Protection' ? (
                      <>
                        <span>Maximum</span>
                        <span>Protection</span>
                      </>
                    ) : (
                      plan.badge
                    )}
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-cyber-600 mb-1">
                  BD {plan.aggregateLimit}
                </div>
                <div className="text-sm text-gray-500">Aggregate Limit (Excess {plan.excess})</div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">ID Theft:</span>
                  <span className="font-semibold">{plan.idTheft}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Legal Support:</span>
                  <span className="font-semibold">{plan.legalSupport}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Online Shopping:</span>
                  <span className="font-semibold">{plan.onlineShopping}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Banking Fraud:</span>
                  <span className="font-semibold">{plan.bankingFraud}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-cyber-600 text-white">
                <th className="px-6 py-4 text-left font-semibold">Feature / Limit</th>
                {plans.map(plan => (
                  <th key={plan.name} className="px-6 py-4 text-center font-semibold">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-medium text-gray-900">Aggregate limit</td>
                {plans.map(plan => (
                  <td key={plan.name} className="px-6 py-4 text-center text-gray-700">
                    {plan.aggregateLimit} (Excess {plan.excess})
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Direct economic loss due to ID theft</td>
                {plans.map(plan => (
                  <td key={plan.name} className="px-6 py-4 text-center text-gray-700">
                    {plan.idTheft}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-medium text-gray-900">Legal defense & psychological support</td>
                {plans.map(plan => (
                  <td key={plan.name} className="px-6 py-4 text-center text-gray-700">
                    {plan.legalSupport}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Online shopping</td>
                {plans.map(plan => (
                  <td key={plan.name} className="px-6 py-4 text-center text-gray-700">
                    {plan.onlineShopping}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-medium text-gray-900">Online banking / credit card fraud</td>
                {plans.map(plan => (
                  <td key={plan.name} className="px-6 py-4 text-center text-gray-700">
                    {plan.bankingFraud}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">24/7 cyber assistance</td>
                {plans.map(plan => (
                  <td key={plan.name} className="px-6 py-4 text-center text-green-600 font-semibold">
                    {plan.assistance}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-medium text-gray-900">Expert IT assistance</td>
                {plans.map(plan => (
                  <td key={plan.name} className="px-6 py-4 text-center text-gray-700">
                    {plan.itAssistance}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Data recovery & system restoration</td>
                {plans.map(plan => (
                  <td key={plan.name} className="px-6 py-4 text-center text-gray-700">
                    {plan.dataRecovery}
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Legal referral</td>
                {plans.map(plan => (
                  <td key={plan.name} className="px-6 py-4 text-center text-gray-700">
                    {plan.legalReferral}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  )
}

export default ProductOptionsSection

