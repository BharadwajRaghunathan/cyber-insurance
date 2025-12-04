import { useState } from 'react'
import { motion } from 'framer-motion'

const IndividualDetailsStep = ({ formData, onNext, onBack, updateFormData }) => {
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.fullName?.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email?.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!formData.contactNumber?.trim()) newErrors.contactNumber = 'Contact number is required'
    if (!formData.address?.trim()) newErrors.address = 'Address is required'
    if (!formData.country?.trim()) newErrors.country = 'Country is required'
    if (!formData.pincode?.trim()) {
      newErrors.pincode = 'Pincode is required'
    } else if (!/^\d+$/.test(formData.pincode)) {
      newErrors.pincode = 'Pincode must be numeric'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      onNext({})
    }
  }

  const handleChange = (field, value) => {
    if (updateFormData) {
      updateFormData({ [field]: value })
    }
  }

  const countries = [
    'Bahrain', 'Saudi Arabia', 'UAE', 'Kuwait', 'Qatar', 'Oman', 'Other'
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-2xl mx-auto"
    >
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Personal Details
        </h3>
        <p className="text-gray-600">
          Please provide your personal information to proceed
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.fullName || ''}
            onChange={(e) => handleChange('fullName', e.target.value)}
            className={`input-field ${errors.fullName ? 'border-red-500' : ''}`}
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={formData.contactNumber || ''}
              onChange={(e) => handleChange('contactNumber', e.target.value)}
              className={`input-field ${errors.contactNumber ? 'border-red-500' : ''}`}
              placeholder="+973 XXXX XXXX"
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={formData.email || ''}
              onChange={(e) => handleChange('email', e.target.value)}
              className={`input-field ${errors.email ? 'border-red-500' : ''}`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Address <span className="text-red-500">*</span>
          </label>
          <textarea
            value={formData.address || ''}
            onChange={(e) => handleChange('address', e.target.value)}
            className={`input-field ${errors.address ? 'border-red-500' : ''}`}
            rows="3"
            placeholder="Enter your full address"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Country <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.country || ''}
              onChange={(e) => handleChange('country', e.target.value)}
              className={`input-field ${errors.country ? 'border-red-500' : ''}`}
            >
              <option value="">Select country</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">{errors.country}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Pincode / Postal Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.pincode || ''}
              onChange={(e) => handleChange('pincode', e.target.value)}
              className={`input-field ${errors.pincode ? 'border-red-500' : ''}`}
              placeholder="12345"
            />
            {errors.pincode && (
              <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Preferred Coverage Start Date (Optional)
          </label>
          <input
            type="date"
            value={formData.coverageStartDate || ''}
            onChange={(e) => handleChange('coverageStartDate', e.target.value)}
            className="input-field"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={onBack}
            className="btn-secondary"
          >
            Back
          </button>
          <button
            type="submit"
            className="btn-primary"
          >
            Next: Select Plan
          </button>
        </div>
      </form>
    </motion.div>
  )
}

export default IndividualDetailsStep

