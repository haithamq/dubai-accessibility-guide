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
    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-foreground mb-4">
        Filter by Accessibility Needs
      </h2>
      <p className="text-muted-foreground text-sm mb-6">
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
                  ? 'border-primary bg-gradient-to-br from-cyan-50 to-blue-50 shadow-md'
                  : 'border-border bg-white hover:border-primary/30 hover:shadow-sm'
              } focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
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
                  <h3 className="font-medium text-foreground">
                    {info.name}
                  </h3>
                  <p 
                    id={`${disability}-description`}
                    className="text-sm text-muted-foreground mt-1"
                  >
                    {info.description}
                  </p>
                </div>
                {isSelected && (
                  <div className="text-primary" aria-hidden="true">
                    ✓
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      {selectedDisabilities.length > 0 && (
        <div className="mt-6 p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-primary/20">
          <h3 className="font-medium text-primary mb-2">
            Selected Accessibility Needs:
          </h3>
          <div className="flex flex-wrap gap-2">
            {selectedDisabilities.map(disability => (
              <span
                key={disability}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white border border-primary/30 text-foreground"
              >
                {disabilityTypeInfo[disability].icon} {disabilityTypeInfo[disability].name}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDisabilityToggle(disability);
                  }}
                  className="ml-2 text-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-primary rounded"
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
