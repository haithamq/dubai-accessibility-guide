# 🎨 Dubai Accessibility Guide

> A beautiful, accessible React application helping people discover accessible places and activities in Dubai

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=react)](https://haithamq.github.io/dubai-accessibility-guide)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/haithamq/dubai-accessibility-guide)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-green?style=for-the-badge&logo=accessibility)](https://www.w3.org/WAI/WCAG21/quickref/)

## ✨ Features

### 🎨 Beautiful Design
- **Vibrant Gradients**: Colorful, modern design with glassmorphism effects
- **Smooth Animations**: Hover effects, transitions, and floating elements
- **Responsive Layout**: Beautiful on all devices and screen sizes
- **Modern UI**: Built with shadcn/ui design system

### ♿ Comprehensive Accessibility
- **WCAG 2.1 AA Compliant**: Meets international accessibility standards
- **Screen Reader Support**: Full compatibility with assistive technologies
- **Keyboard Navigation**: Complete keyboard accessibility
- **High Contrast Mode**: Enhanced visibility options
- **Large Text Support**: Adjustable text sizing
- **Reduced Motion**: Respects user motion preferences
- **Color Blind Support**: Filters for different color vision needs

### 🌟 User Experience
- **Accessibility Settings**: Floating button with quick access to settings
- **Visual Indicators**: Shows active accessibility features
- **Search & Filter**: Find places by name and accessibility type
- **Detailed Information**: Comprehensive accessibility details for each place
- **Expert Verified**: All information verified by accessibility experts

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/haithamq/dubai-accessibility-guide.git
   cd dubai-accessibility-guide
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint

# Type check
npm run type-check
```

### Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── Layout/          # Layout components (Header, Footer, Navigation)
│   ├── AccessibilityButton.tsx
│   ├── AccessibilityIndicator.tsx
│   ├── DisabilityFilter.tsx
│   ├── PlaceCard.tsx
│   ├── PlaceDetails.tsx
│   ├── PlacesList.tsx
│   └── SearchBar.tsx
├── pages/               # Page components
│   ├── HomePage.tsx
│   ├── PlacesPage.tsx
│   └── AccessibilitySettings.tsx
├── data/                # Mock data and types
│   ├── dubaiPlaces.ts
│   ├── accessibilityFeatures.ts
│   └── types/
├── lib/                 # Utilities
│   └── utils.ts
├── App.tsx              # Main app component
├── index.tsx            # Entry point
└── index.css            # Global styles
```

### Technology Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better development experience
- **shadcn/ui** - Beautiful, accessible component library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **PostCSS** - CSS processing

## 🎯 Accessibility Features

### Supported Disability Types
- 👁️ **Visual Impairment** - Blind and visually impaired users
- 👂 **Hearing Impairment** - Deaf and hard of hearing users
- ♿ **Mobility Impairment** - Wheelchair and mobility aid users
- 🧠 **Cognitive Disability** - Learning and cognitive needs
- 🌈 **Color Blindness** - Color vision deficiencies
- 🌟 **Autism Spectrum** - Sensory and social needs

### Accessibility Controls
- **High Contrast Mode** - Enhanced color contrast
- **Large Text** - Increased text size for better readability
- **Reduced Motion** - Respects user motion preferences
- **Enhanced Focus** - Improved focus indicators
- **Color Filters** - Support for different color vision needs

## 🌍 Deployment

### GitHub Pages
The app is automatically deployed to GitHub Pages:
- **Live Site**: https://haithamq.github.io/dubai-accessibility-guide
- **Source**: `main` branch
- **Build**: `npm run build`

### Manual Deployment
```bash
# Build the app
npm run build

# Deploy to your hosting service
# Upload the 'build' folder contents
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Standards
- Follow TypeScript best practices
- Maintain accessibility standards (WCAG 2.1 AA)
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📊 Project Status

- ✅ **Core Features** - Complete
- ✅ **Accessibility** - WCAG 2.1 AA Compliant
- ✅ **Design** - Beautiful, modern UI
- ✅ **Responsive** - Mobile and desktop optimized
- 🔄 **Content** - Expanding Dubai places database
- 🔄 **Testing** - Comprehensive test coverage in progress

## 🎨 Design System

### Colors
- **Primary**: Blue gradients for main actions
- **Secondary**: Purple/Teal gradients for accents
- **Success**: Green for positive actions
- **Warning**: Yellow/Orange for attention
- **Error**: Red for errors and warnings

### Typography
- **Headings**: Bold, clear hierarchy
- **Body**: Readable, accessible font sizes
- **Links**: Clear contrast and focus states

### Components
- **Cards**: Rounded corners, subtle shadows
- **Buttons**: Multiple variants with hover states
- **Forms**: Accessible inputs with clear labels
- **Navigation**: Clear, consistent structure

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** - Beautiful component library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide** - Beautiful icons
- **Dubai Accessibility Community** - For feedback and testing
- **WCAG Guidelines** - Accessibility standards

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/haithamq/dubai-accessibility-guide/issues)
- **Discussions**: [GitHub Discussions](https://github.com/haithamq/dubai-accessibility-guide/discussions)
- **Email**: [Contact Support](mailto:support@dubai-accessibility.com)

---

<div align="center">

**Made with ❤️ for the Dubai accessibility community**

[⭐ Star this repo](https://github.com/haithamq/dubai-accessibility-guide) | [🐛 Report Bug](https://github.com/haithamq/dubai-accessibility-guide/issues) | [💡 Request Feature](https://github.com/haithamq/dubai-accessibility-guide/issues)

</div>