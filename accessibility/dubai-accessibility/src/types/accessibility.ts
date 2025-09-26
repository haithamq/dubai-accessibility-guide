// Disability types and accessibility features for Dubai accessibility app

export type DisabilityType = 
  | 'visual' // Blind or visually impaired
  | 'hearing' // Deaf or hard of hearing
  | 'mobility' // Mobility impairments
  | 'cognitive' // Cognitive disabilities
  | 'colorblind' // Color blindness
  | 'autism'; // Autism spectrum

export interface AccessibilityFeature {
  id: string;
  name: string;
  description: string;
  disabilityTypes: DisabilityType[];
  icon: string;
}

export interface AccessibilityPlace {
  id: string;
  name: string;
  description: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  category: 'attraction' | 'restaurant' | 'hotel' | 'shopping' | 'transport' | 'entertainment';
  accessibilityFeatures: AccessibilityFeature[];
  images: string[];
  rating: number;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  openingHours: {
    [key: string]: string; // day of week -> hours
  };
  contactInfo: {
    phone?: string;
    email?: string;
    website?: string;
  };
  additionalInfo: string;
  verified: boolean;
}

export interface FilterOptions {
  disabilityTypes: DisabilityType[];
  categories: string[];
  priceRange: string[];
  rating: number;
  searchQuery: string;
}

export interface AccessibilityInfo {
  wheelchairAccess: boolean;
  brailleSignage: boolean;
  audioGuides: boolean;
  signLanguage: boolean;
  quietSpaces: boolean;
  colorContrast: boolean;
  largeText: boolean;
  tactileMaps: boolean;
  assistiveTechnology: boolean;
  staffTraining: boolean;
}
