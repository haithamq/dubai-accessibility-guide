import React from 'react';
import { AccessibilityPlace, FilterOptions } from '../types/accessibility';
import PlaceCard from './PlaceCard';

interface PlacesListProps {
  places: AccessibilityPlace[];
  filterOptions: FilterOptions;
  onPlaceSelect: (place: AccessibilityPlace) => void;
  isLoading?: boolean;
}

const PlacesList: React.FC<PlacesListProps> = ({
  places,
  filterOptions,
  onPlaceSelect,
  isLoading = false
}) => {
  const getFilteredPlaces = () => {
    return places.filter(place => {
      // Filter by disability types
      if (filterOptions.disabilityTypes.length > 0) {
        const hasRequiredFeatures = filterOptions.disabilityTypes.every(disabilityType =>
          place.accessibilityFeatures.some(feature =>
            feature.disabilityTypes.includes(disabilityType)
          )
        );
        if (!hasRequiredFeatures) return false;
      }

      // Filter by categories
      if (filterOptions.categories.length > 0) {
        if (!filterOptions.categories.includes(place.category)) return false;
      }

      // Filter by price range
      if (filterOptions.priceRange.length > 0) {
        if (!filterOptions.priceRange.includes(place.priceRange)) return false;
      }

      // Filter by rating
      if (place.rating < filterOptions.rating) return false;

      // Filter by search query
      if (filterOptions.searchQuery) {
        const query = filterOptions.searchQuery.toLowerCase();
        const searchableText = [
          place.name,
          place.description,
          place.address,
          ...place.accessibilityFeatures.map(f => f.name),
          ...place.accessibilityFeatures.map(f => f.description)
        ].join(' ').toLowerCase();
        
        if (!searchableText.includes(query)) return false;
      }

      return true;
    });
  };

  const filteredPlaces = getFilteredPlaces();

  if (isLoading) {
    return (
      <div className="space-y-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="flex space-x-2">
              <div className="h-6 bg-gray-200 rounded w-20"></div>
              <div className="h-6 bg-gray-200 rounded w-24"></div>
              <div className="h-6 bg-gray-200 rounded w-16"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (filteredPlaces.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          No places found
        </h3>
        <p className="text-gray-600 mb-6">
          Try adjusting your filters or search terms to find more places.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg max-w-md mx-auto">
          <h4 className="font-medium text-blue-900 mb-2">Search Tips:</h4>
          <ul className="text-sm text-blue-800 text-left space-y-1">
            <li>• Try broader search terms</li>
            <li>• Remove some accessibility filters</li>
            <li>• Check different categories</li>
            <li>• Lower the minimum rating</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Results Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Found {filteredPlaces.length} accessible place{filteredPlaces.length !== 1 ? 's' : ''}
        </h2>
        <p className="text-gray-600">
          {filterOptions.disabilityTypes.length > 0 && (
            <span>
              Filtered for: {filterOptions.disabilityTypes.join(', ')} accessibility needs
            </span>
          )}
          {filterOptions.searchQuery && (
            <span>
              {filterOptions.disabilityTypes.length > 0 && ' • '}
              Search: "{filterOptions.searchQuery}"
            </span>
          )}
        </p>
      </div>

      {/* Places Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlaces.map((place) => (
          <PlaceCard
            key={place.id}
            place={place}
            onViewDetails={onPlaceSelect}
          />
        ))}
      </div>

      {/* Load More Button (for future pagination) */}
      {filteredPlaces.length >= 8 && (
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
            Load More Places
          </button>
        </div>
      )}
    </div>
  );
};

export default PlacesList;
