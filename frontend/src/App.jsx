import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import FeaturesSection from './components/FeaturesSection'
import ProductOptionsSection from './components/ProductOptionsSection'
import PricingSection from './components/PricingSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import QuotePage from './QuotePage'
import { Routes, Route } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ProductOptionsSection />
      <PricingSection />
      <CTASection />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/get-quote" element={<QuotePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

