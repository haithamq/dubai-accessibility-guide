import React from 'react';
import { X, MapPin, Star, DollarSign, Phone, Globe, Mail, ArrowLeft } from 'lucide-react';
import { AccessibilityPlace } from '../types/accessibility';

interface PlaceDetailsProps {
  place: AccessibilityPlace;
  onClose: () => void;
  onBack: () => void;
}

const PlaceDetails: React.FC<PlaceDetailsProps> = ({ place, onClose, onBack }) => {
  const getPriceRange = (priceRange: string) => {
    const symbols = {
      '$': '1',
      '$$': '2',
      '$$$': '3',
      '$$$$': '4'
    };
    return symbols[priceRange as keyof typeof symbols] || '1';
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="place-details-title"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-lg">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label="Go back to places list"
            >
              <ArrowLeft size={20} className="mr-2" aria-hidden="true" />
              Back to Places
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label="Close place details"
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Place Header */}
          <div className="mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h1 id="place-details-title" className="text-3xl font-bold text-gray-800 mb-2">
                  {place.name}
                </h1>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin size={20} className="mr-2" aria-hidden="true" />
                  <span>{place.address}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Star size={18} className="text-yellow-400 mr-1" aria-hidden="true" />
                    <span className="font-medium text-gray-700">{place.rating}</span>
                    <span className="text-gray-500 ml-1">/ 5.0</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign size={18} className="text-gray-400 mr-1" aria-hidden="true" />
                    <span className="text-gray-600">
                      {getPriceRange(place.priceRange)}/4
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              {place.description}
            </p>
          </div>

          {/* Image Gallery Placeholder */}
          <div className="mb-8">
            <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">🏛️</div>
                <p className="text-lg font-medium">{place.name}</p>
                <p className="text-sm opacity-90">Photo Gallery</p>
              </div>
            </div>
          </div>

          {/* Accessibility Features */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Accessibility Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {place.accessibilityFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-200"
                >
                  <span className="text-2xl" aria-hidden="true">
                    {feature.icon}
                  </span>
                  <div>
                    <h3 className="font-medium text-green-900 mb-1">
                      {feature.name}
                    </h3>
                    <p className="text-sm text-green-700">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          {place.additionalInfo && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Additional Information
              </h2>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-blue-900">{place.additionalInfo}</p>
              </div>
            </div>
          )}

          {/* Opening Hours */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Opening Hours
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {Object.entries(place.openingHours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span className="font-medium text-gray-700 capitalize">
                      {day}:
                    </span>
                    <span className="text-gray-600">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {place.contactInfo.phone && (
                <a
                  href={`tel:${place.contactInfo.phone}`}
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <Phone size={20} className="text-blue-600 mr-3" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-blue-900">Phone</p>
                    <p className="text-sm text-blue-700">{place.contactInfo.phone}</p>
                  </div>
                </a>
              )}
              {place.contactInfo.email && (
                <a
                  href={`mailto:${place.contactInfo.email}`}
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <Mail size={20} className="text-blue-600 mr-3" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-blue-900">Email</p>
                    <p className="text-sm text-blue-700">{place.contactInfo.email}</p>
                  </div>
                </a>
              )}
              {place.contactInfo.website && (
                <a
                  href={place.contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <Globe size={20} className="text-blue-600 mr-3" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-blue-900">Website</p>
                    <p className="text-sm text-blue-700">Visit Website</p>
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
