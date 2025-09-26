# Dubai Accessibility Guide

A comprehensive React web application that helps people with disabilities discover accessible places and activities in Dubai.

## Features

### 🎯 Core Functionality
- **Accessibility-First Design**: Built with WCAG 2.1 AA compliance
- **Disability-Specific Filtering**: Filter places by 6 types of accessibility needs
- **Comprehensive Place Database**: Detailed information about accessible venues
- **Search Functionality**: Find places by name, features, or accessibility requirements
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### ♿ Accessibility Features Supported
1. **Visual Impairment** - Braille signage, audio guides, large text options
2. **Hearing Impairment** - Sign language support, audio descriptions
3. **Mobility Impairment** - Wheelchair access, ramps, accessible restrooms
4. **Cognitive Disability** - Clear signage, trained staff, quiet spaces
5. **Color Blindness** - High contrast colors, alternative indicators
6. **Autism Spectrum** - Quiet spaces, sensory-friendly environments

### 🏛️ Place Categories
- **Attractions** - Museums, landmarks, entertainment venues
- **Restaurants** - Accessible dining experiences
- **Hotels** - Accommodation with accessibility features
- **Shopping** - Malls and retail spaces
- **Transport** - Accessible transportation options
- **Entertainment** - Theaters, cinemas, and recreational facilities

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom accessibility utilities
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Accessibility**: ARIA landmarks, screen reader support, keyboard navigation

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dubai-accessibility
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Accessibility Features

### Screen Reader Support
- Semantic HTML structure with proper ARIA landmarks
- Descriptive alt text for images
- Screen reader announcements for dynamic content
- Skip navigation links

### Keyboard Navigation
- Full keyboard accessibility
- Visible focus indicators
- Logical tab order
- Keyboard shortcuts for common actions

### Visual Accessibility
- High contrast mode support
- Customizable text sizes
- Color-blind friendly design
- Clear visual hierarchy

### Motor Accessibility
- Large touch targets (minimum 44px)
- No time-based interactions
- Easy-to-use controls
- Reduced motion support

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout/         # Header, Navigation, Footer
│   ├── DisabilityFilter.tsx
│   ├── SearchBar.tsx
│   ├── PlaceCard.tsx
│   ├── PlaceDetails.tsx
│   └── PlacesList.tsx
├── pages/              # Page components
│   ├── HomePage.tsx
│   └── PlacesPage.tsx
├── data/               # Mock data and configurations
│   ├── accessibilityFeatures.ts
│   └── dubaiPlaces.ts
├── types/              # TypeScript type definitions
│   └── accessibility.ts
├── App.tsx             # Main application component
├── index.css           # Global styles and accessibility utilities
└── index.tsx           # Application entry point
```

## Contributing

We welcome contributions to improve accessibility and add new features. Please ensure that:

1. All new features maintain WCAG 2.1 AA compliance
2. Components are tested with screen readers
3. Keyboard navigation is fully functional
4. Code follows the existing TypeScript patterns

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For accessibility issues or questions, please contact:
- Email: info@dubaiaccessibility.ae
- Phone: +971 4 123 4567

## Acknowledgments

- Dubai Municipality for accessibility guidelines
- Accessibility experts and community members
- Users who provided feedback and suggestions