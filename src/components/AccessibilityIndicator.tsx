import React, { useState, useEffect } from 'react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Eye, Type, Palette, Keyboard } from 'lucide-react';

const AccessibilityIndicator: React.FC = () => {
  const [activeFeatures, setActiveFeatures] = useState<string[]>([]);

  useEffect(() => {
    const checkActiveFeatures = () => {
      const root = document.documentElement;
      const features: string[] = [];

      if (root.classList.contains('high-contrast')) {
        features.push('High Contrast');
      }
      if (root.classList.contains('large-text')) {
        features.push('Large Text');
      }
      if (root.classList.contains('reduced-motion')) {
        features.push('Reduced Motion');
      }
      if (root.classList.contains('enhanced-focus')) {
        features.push('Enhanced Focus');
      }
      if (root.classList.contains('protanopia') || 
          root.classList.contains('deuteranopia') || 
          root.classList.contains('tritanopia')) {
        features.push('Color Vision');
      }

      setActiveFeatures(features);
    };

    // Check initially
    checkActiveFeatures();

    // Set up observer for class changes
    const observer = new MutationObserver(checkActiveFeatures);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  if (activeFeatures.length === 0) return null;

  const getIcon = (feature: string) => {
    switch (feature) {
      case 'High Contrast':
        return <Eye className="h-3 w-3" />;
      case 'Large Text':
        return <Type className="h-3 w-3" />;
      case 'Reduced Motion':
      case 'Color Vision':
        return <Palette className="h-3 w-3" />;
      case 'Enhanced Focus':
        return <Keyboard className="h-3 w-3" />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed top-4 left-4 z-40">
      <Card className="p-2 shadow-lg bg-primary/10 border-primary/20">
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary" className="text-xs">
            Accessibility Active
          </Badge>
          {activeFeatures.map((feature) => (
            <Badge 
              key={feature} 
              variant="outline" 
              className="text-xs flex items-center gap-1"
            >
              {getIcon(feature)}
              {feature}
            </Badge>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AccessibilityIndicator;
