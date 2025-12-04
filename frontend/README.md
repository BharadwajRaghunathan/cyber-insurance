# CyberShield Insurance

A single-page React application for CyberShield Insurance - comprehensive cyber protection and insurance quote management.

## Features

- **Hero Section**: Landing page with key statistics and value propositions
- **About Section**: Company credentials and trust indicators
- **Features Section**: PREVENT, PROTECT, and SUPPORT pillars
- **Product Options**: Comparison of SMART, COMFORT, PREMIUM, and LUXURY plans
- **Pricing Section**: Embedded vs Voluntary add-on pricing with Individual/Family options
- **Get Quote Flow**: Multi-step modal with:
  - Profile selection (Individual/Business)
  - Personal details form
  - Plan selection
  - Payment details (simulated)
  - Policy confirmation

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion (animations)
- React Router DOM
- Axios (for future API integration)

## Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── quote/
│   │   │   ├── ProfileSelectionStep.jsx
│   │   │   ├── IndividualDetailsStep.jsx
│   │   │   ├── PlanSelectionStep.jsx
│   │   │   ├── PaymentStep.jsx
│   │   │   └── PolicyConfirmationStep.jsx
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── ProductOptionsSection.jsx
│   │   ├── PricingSection.jsx
│   │   ├── CTASection.jsx
│   │   ├── Footer.jsx
│   │   └── GetQuoteModal.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Features Overview

### Static Sections
- All content is static and based on the provided PPT specifications
- Smooth scroll navigation between sections
- Responsive design for all screen sizes
- Professional color scheme using cyber blue theme

### Quote Flow
1. **Profile Selection**: Choose Individual or Business (Business coming soon)
2. **Personal Details**: Form with validation for required fields
3. **Plan Selection**: Visual cards showing all 4 plans with pricing
4. **Payment**: Simulated payment form (no real processing)
5. **Confirmation**: Policy activation confirmation with generated policy number

## Notes

- All pricing is in Bahraini Dinar (BD)
- Payment processing is simulated (2-second delay)
- Policy numbers are randomly generated
- No backend integration - fully static frontend
- All data is stored in component state

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

