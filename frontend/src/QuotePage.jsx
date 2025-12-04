import { useState } from 'react'
import Navbar from './components/Navbar'
import ProfileSelectionStep from './components/quote/ProfileSelectionStep'
import IndividualDetailsStep from './components/quote/IndividualDetailsStep'
import PlanSelectionStep from './components/quote/PlanSelectionStep'
import PaymentStep from './components/quote/PaymentStep'
import PolicyConfirmationStep from './components/quote/PolicyConfirmationStep'

const QuotePage = () => {
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
    if (data && Object.keys(data).length > 0) {
      updateFormData(data)
    }
    nextStep()
  }

  const CurrentStepComponent = steps[currentStep].component

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24 pb-16 bg-gray-50">
        <section className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get Your Cyber Insurance Quote
            </h1>
            <p className="text-lg text-gray-600">
              Follow the steps below to customize your CyberShield Insurance plan and activate your policy.
            </p>
          </div>

          {/* Progress bar */}
          <div className="bg-white rounded-2xl shadow-md px-6 py-4 mb-10 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              {steps.slice(0, 4).map((step, index) => (
                <div key={step.id} className="flex items-center flex-1">
                  <div className="flex items-center flex-1">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                        index <= currentStep
                          ? 'bg-cyber-600 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {index < currentStep ? '✓' : index + 1}
                    </div>
                    {index < 3 && (
                      <div
                        className={`flex-1 h-1 mx-2 ${
                          index < currentStep ? 'bg-cyber-600' : 'bg-gray-200'
                        }`}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-sm text-gray-600 text-center">
              Step {Math.min(currentStep + 1, 4)} of 4: {steps[Math.min(currentStep, 3)].name}
            </div>
          </div>

          {/* Step content */}
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
            <CurrentStepComponent
              formData={formData}
              onNext={handleStepComplete}
              onBack={prevStep}
              updateFormData={updateFormData}
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export default QuotePage


