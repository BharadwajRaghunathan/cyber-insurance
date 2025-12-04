import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const PaymentStep = ({ formData, onNext, onBack, updateFormData }) => {
  const [errors, setErrors] = useState({})
  const [isProcessing, setIsProcessing] = useState(false)

  // Initialize cardholderName with fullName if not set (only on mount)
  useEffect(() => {
    if (!formData.cardholderName && formData.fullName) {
      updateFormData({ cardholderName: formData.fullName })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Only run once on mount

  const validate = () => {
    const newErrors = {}
    const cardholderName = formData.cardholderName || formData.fullName || ''
    if (!cardholderName.trim()) newErrors.cardholderName = 'Cardholder name is required'
    if (!formData.cardNumber?.trim()) {
      newErrors.cardNumber = 'Card number is required'
    } else if (!/^\d{13,19}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Invalid card number'
    }
    if (!formData.expiry?.trim()) {
      newErrors.expiry = 'Expiry date is required'
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expiry)) {
      newErrors.expiry = 'Invalid format (MM/YY)'
    }
    if (!formData.cvv?.trim()) {
      newErrors.cvv = 'CVV is required'
    } else if (!/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = 'Invalid CVV'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\s/g, '')
    if (value.length <= 19) {
      value = value.match(/.{1,4}/g)?.join(' ') || value
      updateFormData({ cardNumber: value })
    }
  }

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, '')
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4)
    }
    updateFormData({ expiry: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validate()) {
      setIsProcessing(true)
      // Simulate payment processing
      setTimeout(() => {
        setIsProcessing(false)
        onNext({})
      }, 2000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-4xl mx-auto"
    >
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Payment Details
        </h3>
        <p className="text-gray-600">
          Complete your purchase to activate your cyber insurance policy
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Payment Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Cardholder Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.cardholderName || ''}
                onChange={(e) => updateFormData({ cardholderName: e.target.value })}
                className={`input-field ${errors.cardholderName ? 'border-red-500' : ''}`}
                placeholder={formData.fullName || "John Doe"}
              />
              {errors.cardholderName && (
                <p className="text-red-500 text-sm mt-1">{errors.cardholderName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Card Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.cardNumber || ''}
                onChange={handleCardNumberChange}
                className={`input-field ${errors.cardNumber ? 'border-red-500' : ''}`}
                placeholder="1234 5678 9012 3456"
                maxLength="19"
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Expiry (MM/YY) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.expiry || ''}
                  onChange={handleExpiryChange}
                  className={`input-field ${errors.expiry ? 'border-red-500' : ''}`}
                  placeholder="12/25"
                  maxLength="5"
                />
                {errors.expiry && (
                  <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  CVV <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.cvv || ''}
                  onChange={(e) => updateFormData({ cvv: e.target.value.replace(/\D/g, '').slice(0, 4) })}
                  className={`input-field ${errors.cvv ? 'border-red-500' : ''}`}
                  placeholder="123"
                  maxLength="4"
                />
                {errors.cvv && (
                  <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Billing Address (Optional)
              </label>
              <textarea
                value={formData.billingAddress || formData.address || ''}
                onChange={(e) => updateFormData({ billingAddress: e.target.value })}
                className="input-field"
                rows="3"
                placeholder="Enter billing address"
              />
            </div>

            <div className="flex justify-between pt-6">
              <button
                type="button"
                onClick={onBack}
                className="btn-secondary"
                disabled={isProcessing}
              >
                Back
              </button>
              <button
                type="submit"
                className="btn-primary"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Pay & Activate Policy'
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Plan Summary */}
        <div className="lg:col-span-1">
          <div className="card bg-cyber-50 sticky top-4">
            <h4 className="font-bold text-gray-900 mb-4">Order Summary</h4>
            <div className="space-y-4 mb-6">
              <div>
                <div className="text-sm text-gray-600">Plan</div>
                <div className="font-semibold text-gray-900">{formData.selectedPlan?.name || 'N/A'}</div>
                <div className="text-sm text-gray-600">{formData.coverageType === 'individual' ? 'Individual' : 'Family'}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Annual Premium</div>
                <div className="text-2xl font-bold text-cyber-600">
                  BD {formData.selectedPlan?.price || '0.00'}
                </div>
                <div className="text-xs text-gray-500">per year</div>
              </div>
              <div className="pt-4 border-t border-gray-300">
                <div className="text-sm font-semibold text-gray-900 mb-2">Coverage Includes:</div>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• 24/7 Cyber Assistance</li>
                  <li>• Identity Theft Protection</li>
                  <li>• Online Banking Fraud Coverage</li>
                  {formData.selectedPlan?.name !== 'SMART' && (
                    <>
                      <li>• Online Shopping Protection</li>
                      {['PREMIUM', 'LUXURY'].includes(formData.selectedPlan?.name) && (
                        <>
                          <li>• Legal Support</li>
                          <li>• IT Assistance</li>
                          <li>• Data Recovery</li>
                        </>
                      )}
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PaymentStep

