import React from 'react';
import { DisabilityType } from '../types/accessibility';
import { disabilityTypeInfo } from '../data/accessibilityFeatures';

interface DisabilityFilterProps {
  selectedDisabilities: DisabilityType[];
  onDisabilityChange: (disabilities: DisabilityType[]) => void;
}

const DisabilityFilter: React.FC<DisabilityFilterProps> = ({
  selectedDisabilities,
  onDisabilityChange
}) => {
  const handleDisabilityToggle = (disability: DisabilityType) => {
    const newSelection = selectedDisabilities.includes(disability)
      ? selectedDisabilities.filter(d => d !== disability)
      : [...selectedDisabilities, disability];
    
    onDisabilityChange(newSelection);
  };

  const handleKeyDown = (event: React.KeyboardEvent, disability: DisabilityType) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleDisabilityToggle(disability);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Filter by Accessibility Needs
      </h2>
      <p className="text-gray-600 text-sm mb-6">
        Select the types of accessibility features you need to find suitable places.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(disabilityTypeInfo).map(([key, info]) => {
          const disability = key as DisabilityType;
          const isSelected = selectedDisabilities.includes(disability);
          
          return (
            <div
              key={disability}
              onClick={() => handleDisabilityToggle(disability)}
              onKeyDown={(e) => handleKeyDown(e, disability)}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                isSelected
                  ? 'border-blue-500 bg-blue-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              role="checkbox"
              aria-checked={isSelected}
              tabIndex={0}
              aria-describedby={`${disability}-description`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl" aria-hidden="true">
                  {info.icon}
                </span>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">
                    {info.name}
                  </h3>
                  <p 
                    id={`${disability}-description`}
                    className="text-sm text-gray-600 mt-1"
                  >
                    {info.description}
                  </p>
                </div>
                {isSelected && (
                  <div className="text-blue-500" aria-hidden="true">
                    ✓
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      {selectedDisabilities.length > 0 && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-medium text-blue-900 mb-2">
            Selected Accessibility Needs:
          </h3>
          <div className="flex flex-wrap gap-2">
            {selectedDisabilities.map(disability => (
              <span
                key={disability}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
              >
                {disabilityTypeInfo[disability].icon} {disabilityTypeInfo[disability].name}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDisabilityToggle(disability);
                  }}
                  className="ml-2 text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  aria-label={`Remove ${disabilityTypeInfo[disability].name} filter`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DisabilityFilter;
