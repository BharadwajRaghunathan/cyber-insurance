import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProfileSelectionStep from './quote/ProfileSelectionStep'
import IndividualDetailsStep from './quote/IndividualDetailsStep'
import PlanSelectionStep from './quote/PlanSelectionStep'
import PaymentStep from './quote/PaymentStep'
import PolicyConfirmationStep from './quote/PolicyConfirmationStep'

const GetQuoteModal = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    profileType: null, // 'individual' or 'business'
    fullName: '',
    contactNumber: '',
    email: '',
    address: '',
    country: '',
    pincode: '',
    coverageStartDate: '',
    selectedPlan: null,
    coverageType: 'individual', // 'individual' or 'family'
    cardholderName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    billingAddress: ''
  })

  const steps = [
    { id: 0, name: 'Profile', component: ProfileSelectionStep },
    { id: 1, name: 'Details', component: IndividualDetailsStep },
    { id: 2, name: 'Plan', component: PlanSelectionStep },
    { id: 3, name: 'Payment', component: PaymentStep },
    { id: 4, name: 'Confirmation', component: PolicyConfirmationStep }
  ]

  const updateFormData = (data) => {
    setFormData(prev => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleStepComplete = (data) => {
    updateFormData(data)
    nextStep()
  }

  const CurrentStepComponent = steps[currentStep].component

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
        >
          {/* Header */}
          {currentStep < 4 && (
            <div className="bg-cyber-600 text-white px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Get Your Cyber Insurance Quote</h2>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}

          {/* Progress Bar */}
          {currentStep < 4 && (
            <div className="bg-gray-100 px-6 py-4">
              <div className="flex items-center justify-between mb-2">
                {steps.slice(0, 4).map((step, index) => (
                  <div key={step.id} className="flex items-center flex-1">
                    <div className="flex items-center flex-1">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                          index <= currentStep
                            ? 'bg-cyber-600 text-white'
                            : 'bg-gray-300 text-gray-600'
                        }`}
                      >
                        {index < currentStep ? '✓' : index + 1}
                      </div>
                      {index < 3 && (
                        <div
                          className={`flex-1 h-1 mx-2 ${
                            index < currentStep ? 'bg-cyber-600' : 'bg-gray-300'
                          }`}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600 text-center">
                Step {currentStep + 1} of 4: {steps[currentStep].name}
              </div>
            </div>
          )}

          {/* Step Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <CurrentStepComponent
              formData={formData}
              onNext={handleStepComplete}
              onBack={prevStep}
              onClose={onClose}
              updateFormData={updateFormData}
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default GetQuoteModal

