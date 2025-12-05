import logo from '../logo2.png'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="bg-white border-t border-gray-200 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Cyber Shield Logo" className="h-10 w-auto" />
              <span className="text-lg font-bold text-gray-900">
                Cyber Shield
              </span>
            </div>
            <p className="text-sm text-gray-500">
              © 2025 Cyber Shield. All rights reserved.
            </p>
          </div>

          {/* Middle */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-sm hover:text-cyber-600 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('product-options')}
                  className="text-sm hover:text-cyber-600 transition-colors"
                >
                  Product Information
                </button>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-cyber-600 transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-cyber-600 transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Disclaimer</h3>
            <p className="text-xs text-gray-500">
              This is a product information page. Coverage, limits, and pricing are illustrative and based on Cyber Shield materials. Final terms may differ.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-400">
          <p>All rights reserved. Cyber Shield.</p>
        </div>
      </div>
    </footer >
  )
}

export default Footer

