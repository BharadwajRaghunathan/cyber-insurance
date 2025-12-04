const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-cyber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CS</span>
              </div>
              <span className="text-lg font-bold text-white">
                CyberShield Insurance
              </span>
            </div>
            <p className="text-sm">
              © 2025 CyberShield Insurance. All rights reserved.
            </p>
          </div>

          {/* Middle */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-sm hover:text-cyber-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('product-options')}
                  className="text-sm hover:text-cyber-400 transition-colors"
                >
                  Product Information
                </button>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-cyber-400 transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-cyber-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-white font-semibold mb-4">Disclaimer</h3>
            <p className="text-xs text-gray-400">
              This is a product information page. Coverage, limits, and pricing are illustrative and based on CyberShield Insurance materials. Final terms may differ.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>All rights reserved. CyberShield Insurance.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

