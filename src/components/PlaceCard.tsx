import React from 'react';
import { MapPin, Star, DollarSign, Clock, Phone, Globe, CheckCircle } from 'lucide-react';
import { AccessibilityPlace } from '../types/accessibility';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface PlaceCardProps {
  place: AccessibilityPlace;
  onViewDetails: (place: AccessibilityPlace) => void;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place, onViewDetails }) => {
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
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onViewDetails(place);
    }
  };

  return (
    <Card
      className="hover:shadow-lg transition-shadow duration-200 cursor-pointer"
      onClick={() => onViewDetails(place)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${place.name}`}
    >
      {/* Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 rounded-t-lg flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-4xl mb-2">🏛️</div>
          <p className="text-sm font-medium">{place.name}</p>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl mb-1">
              {place.name}
            </CardTitle>
            <div className="flex items-center text-muted-foreground text-sm mb-2">
              <MapPin size={16} className="mr-1" aria-hidden="true" />
              <span>{place.address}</span>
            </div>
          </div>
          {place.verified && (
            <CheckCircle 
              size={20} 
              className="text-emerald-500 ml-2" 
              aria-label="Verified accessibility information"
            />
          )}
        </div>

        <CardDescription className="line-clamp-2">
          {place.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Rating and Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Star size={16} className="text-amber-500 mr-1 fill-current" aria-hidden="true" />
            <span className="text-sm font-medium">
              {place.rating}
            </span>
            <span className="text-sm text-muted-foreground ml-1">/ 5.0</span>
          </div>
          <div className="flex items-center">
            <DollarSign size={16} className="text-muted-foreground mr-1" aria-hidden="true" />
            <span className="text-sm text-muted-foreground">
              {getPriceRange(place.priceRange)}/4
            </span>
          </div>
        </div>

        {/* Accessibility Features */}
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">
            Accessibility Features:
          </h4>
          <div className="flex flex-wrap gap-2">
            {place.accessibilityFeatures.slice(0, 3).map((feature) => (
              <Badge
                key={feature.id}
                variant="secondary"
                className="text-xs"
              >
                {feature.icon} {feature.name}
              </Badge>
            ))}
            {place.accessibilityFeatures.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{place.accessibilityFeatures.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" aria-hidden="true" />
            <span>Open today</span>
          </div>
          <div className="flex space-x-2">
            {place.contactInfo.phone && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                asChild
              >
                <a
                  href={`tel:${place.contactInfo.phone}`}
                  aria-label={`Call ${place.name}`}
                >
                  <Phone size={14} aria-hidden="true" />
                </a>
              </Button>
            )}
            {place.contactInfo.website && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                asChild
              >
                <a
                  href={place.contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${place.name} website`}
                >
                  <Globe size={14} aria-hidden="true" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlaceCard;
