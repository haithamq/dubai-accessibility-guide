import React, { useState, useMemo } from 'react';
import { Filter, Grid, List } from 'lucide-react';
import { AccessibilityPlace, FilterOptions, DisabilityType } from '../types/accessibility';
import { dubaiPlaces } from '../data/dubaiPlaces';
import DisabilityFilter from '../components/DisabilityFilter';
import SearchBar from '../components/SearchBar';
import PlacesList from '../components/PlacesList';
import PlaceDetails from '../components/PlaceDetails';

const PlacesPage: React.FC = () => {
  const [selectedPlace, setSelectedPlace] = useState<AccessibilityPlace | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    disabilityTypes: [],
    categories: [],
    priceRange: [],
    rating: 0,
    searchQuery: ''
  });

  const handleDisabilityChange = (disabilities: DisabilityType[]) => {
    setFilterOptions(prev => ({
      ...prev,
      disabilityTypes: disabilities
    }));
  };

  const handleSearch = (query: string) => {
    setFilterOptions(prev => ({
      ...prev,
      searchQuery: query
    }));
  };

  const handlePlaceSelect = (place: AccessibilityPlace) => {
    setSelectedPlace(place);
  };

  const handleCloseDetails = () => {
    setSelectedPlace(null);
  };

  const handleBackToList = () => {
    setSelectedPlace(null);
  };

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(dubaiPlaces.map(place => place.category)));
    return uniqueCategories.map(category => ({
      value: category,
      label: category.charAt(0).toUpperCase() + category.slice(1)
    }));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Accessible Places in Dubai
          </h1>
          <p className="text-muted-foreground">
            Discover places and activities that accommodate your accessibility needs
          </p>
        </div>

        {/* Search and Controls */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <SearchBar
            onSearch={handleSearch}
            placeholder="Search places, activities, or accessibility features..."
            className="max-w-2xl"
          />

          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center px-4 py-2 rounded-lg border transition-colors ${
                  showFilters
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-cyan-600'
                    : 'bg-white text-foreground border-border hover:bg-muted'
                } focus:outline-none focus:ring-2 focus:ring-primary`}
                aria-expanded={showFilters}
                aria-controls="filters-panel"
              >
                <Filter size={18} className="mr-2" aria-hidden="true" />
                Filters
                {filterOptions.disabilityTypes.length > 0 && (
                  <span className="ml-2 px-2 py-1 bg-teal-100 text-teal-800 text-xs rounded-full">
                    {filterOptions.disabilityTypes.length}
                  </span>
                )}
              </button>

              <div className="flex items-center border border-border rounded-lg bg-white">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white' : 'text-muted-foreground hover:bg-muted'} focus:outline-none focus:ring-2 focus:ring-primary rounded-l-lg transition-colors`}
                  aria-label="Grid view"
                >
                  <Grid size={18} aria-hidden="true" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white' : 'text-muted-foreground hover:bg-muted'} focus:outline-none focus:ring-2 focus:ring-primary rounded-l-lg transition-colors`}
                  aria-label="List view"
                >
                  <List size={18} aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              Showing {dubaiPlaces.length} places
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Panel */}
          {showFilters && (
            <div className="lg:w-80 flex-shrink-0">
              <div id="filters-panel" className="space-y-6">
                <DisabilityFilter
                  selectedDisabilities={filterOptions.disabilityTypes}
                  onDisabilityChange={handleDisabilityChange}
                />

                {/* Category Filter */}
                <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category.value} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filterOptions.categories.includes(category.value)}
                          onChange={(e) => {
                            const newCategories = e.target.checked
                              ? [...filterOptions.categories, category.value]
                              : filterOptions.categories.filter(c => c !== category.value);
                            setFilterOptions(prev => ({
                              ...prev,
                              categories: newCategories
                            }));
                          }}
                          className="rounded border-border text-primary focus:ring-primary"
                        />
                        <span className="ml-2 text-foreground">{category.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Price Range
                  </h3>
                  <div className="space-y-2">
                    {['$', '$$', '$$$', '$$$$'].map(price => (
                      <label key={price} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filterOptions.priceRange.includes(price)}
                          onChange={(e) => {
                            const newPriceRange = e.target.checked
                              ? [...filterOptions.priceRange, price]
                              : filterOptions.priceRange.filter(p => p !== price);
                            setFilterOptions(prev => ({
                              ...prev,
                              priceRange: newPriceRange
                            }));
                          }}
                          className="rounded border-border text-primary focus:ring-primary"
                        />
                        <span className="ml-2 text-foreground">{price}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Rating Filter */}
                <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Minimum Rating
                  </h3>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    step="0.1"
                    value={filterOptions.rating}
                    onChange={(e) => setFilterOptions(prev => ({
                      ...prev,
                      rating: parseFloat(e.target.value)
                    }))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>0</span>
                    <span className="font-medium text-primary">{filterOptions.rating.toFixed(1)}</span>
                    <span>5.0</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Places List */}
          <div className="flex-1">
            <PlacesList
              places={dubaiPlaces}
              filterOptions={filterOptions}
              onPlaceSelect={handlePlaceSelect}
            />
          </div>
        </div>
      </div>

      {/* Place Details Modal */}
      {selectedPlace && (
        <PlaceDetails
          place={selectedPlace}
          onClose={handleCloseDetails}
          onBack={handleBackToList}
        />
      )}
    </div>
  );
};

export default PlacesPage;
