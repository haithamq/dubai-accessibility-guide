import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Navigation from './components/Layout/Navigation';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import PlacesPage from './pages/PlacesPage';

type Page = 'home' | 'places' | 'favorites' | 'settings' | 'about';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  const handleNavigationClose = () => {
    setIsNavigationOpen(false);
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    setIsNavigationOpen(false);
  };

  const handleSearchFocus = () => {
    setCurrentPage('places');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigateToPlaces={() => setCurrentPage('places')} />;
      case 'places':
        return <PlacesPage />;
      case 'favorites':
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Favorites</h1>
              <p className="text-gray-600">Your favorite places will appear here.</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Accessibility Settings</h1>
              <p className="text-gray-600">Customize your accessibility preferences here.</p>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center max-w-2xl mx-auto px-4">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">About Dubai Accessibility Guide</h1>
              <p className="text-gray-600 mb-6">
                We're committed to making Dubai accessible for everyone. Our comprehensive guide 
                helps visitors with disabilities discover places and activities that meet their 
                specific accessibility needs.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md text-left">
                <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  To provide accurate, up-to-date accessibility information for Dubai's attractions, 
                  restaurants, hotels, and activities, ensuring that everyone can enjoy the city's 
                  incredible experiences.
                </p>
                <h2 className="text-xl font-semibold mb-4">Accessibility Standards</h2>
                <ul className="text-gray-700 space-y-2">
                  <li>• WCAG 2.1 AA compliant website</li>
                  <li>• Verified accessibility information</li>
                  <li>• Community-driven updates</li>
                  <li>• Regular accessibility audits</li>
                </ul>
              </div>
            </div>
          </div>
        );
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Skip to main content link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      {/* Header */}
      <Header
        onMenuToggle={handleMenuToggle}
        onSearchFocus={handleSearchFocus}
      />

      {/* Navigation */}
      <Navigation
        isOpen={isNavigationOpen}
        onClose={handleNavigationClose}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      <main id="main-content" role="main">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Accessibility Announcements */}
      <div
        id="announcements"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {/* Screen reader announcements will be inserted here */}
      </div>
    </div>
  );
};

export default App;