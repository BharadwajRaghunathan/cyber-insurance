import { motion } from 'framer-motion'

const FeaturesSection = () => {
  const features = [
    {
      title: 'PREVENT',
      subtitle: 'Stay safe online before incidents happen',
      icon: '🛡️',
      color: 'from-blue-500 to-blue-600',
      items: [
        {
          category: 'Personal Data Monitoring',
          details: [
            'Public / deep / dark web monitoring',
            'Dynamic risk dashboard and alerts when suspicious activity is detected'
          ]
        },
        {
          category: 'Device Protection',
          details: [
            'Advanced protection software (anti-phishing, anti-spyware, anti-ransomware)',
            'Available for desktop and smartphones'
          ]
        },
        {
          category: 'Educational Material',
          details: [
            'Articles, videos, infographics to promote safe online behavior',
            'SaaS white-label platform, available on desktop and mobile browsers'
          ]
        },
        {
          category: 'Language Support',
          details: [
            'Arabic, Portuguese, Czech, Dutch, English, French, German, Greek, Italian, Japanese, Polish, Russian, Spanish, Swedish & Vietnamese'
          ]
        }
      ]
    },
    {
      title: 'PROTECT',
      subtitle: 'Financial indemnity against cybercrime losses',
      icon: '💰',
      color: 'from-green-500 to-green-600',
      items: [
        {
          category: 'Identity Theft Coverage',
          details: [
            'Direct economic losses due to identity theft',
            'Cost of rectifying records and unpaid leave to meet banks/authorities'
          ]
        },
        {
          category: 'Legal & Psychological Support',
          details: [
            'Legal defense costs in case of cybercrime / cyberbullying',
            'Psychological support costs'
          ]
        },
        {
          category: 'Online Shopping Protection',
          details: [
            'Theft or damaged goods purchased online',
            'Coverage for online purchase issues'
          ]
        },
        {
          category: 'Banking & Card Fraud',
          details: [
            'Unreimbursed fraudulent transactions',
            'Card blocking & reissue, bank deductibles'
          ]
        }
      ]
    },
    {
      title: 'SUPPORT',
      subtitle: 'Expert help when incidents occur',
      icon: '🎧',
      color: 'from-purple-500 to-purple-600',
      items: [
        {
          category: '24/7 Cyber Assistance',
          details: [
            '24/7 cyber assistance / resolution hotline',
            'Expert IT assistance, including remote device support and malware cleaning'
          ]
        },
        {
          category: 'Data Recovery',
          details: [
            'Data recovery and system restoration assistance',
            'Remote or via specialized service center'
          ]
        },
        {
          category: 'Legal Referral',
          details: [
            'Legal referral for digital life and cyber-crime related questions',
            'Expert guidance on cyber-related legal matters'
          ]
        }
      ]
    }
  ]

  return (
    <section id="features" className="section-container bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Cyber Protection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three pillars of protection: Prevent, Protect, and Support
          </p>
          <div className="w-24 h-1 bg-cyber-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card h-full flex flex-col"
            >
              <div className={`bg-gradient-to-br ${feature.color} rounded-xl p-6 mb-6 text-white`}>
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/90">{feature.subtitle}</p>
              </div>

              <div className="space-y-6 flex-grow">
                {feature.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <h4 className="font-semibold text-gray-900 mb-2">{item.category}</h4>
                    <ul className="space-y-1">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-gray-600 text-sm flex items-start">
                          <svg className="w-4 h-4 text-cyber-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default FeaturesSection

