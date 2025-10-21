import { AccessibilityPlace } from '../types/accessibility';
import { accessibilityFeatures } from './accessibilityFeatures';

export const dubaiPlaces: AccessibilityPlace[] = [
  {
    id: 'burj-khalifa',
    name: 'Burj Khalifa',
    description: 'The world\'s tallest building with accessible viewing decks and facilities',
    address: '1 Sheikh Mohammed bin Rashid Blvd, Downtown Dubai',
    coordinates: { lat: 25.1972, lng: 55.2744 },
    category: 'attraction',
    accessibilityFeatures: [
      accessibilityFeatures[0], // wheelchair access
      accessibilityFeatures[1], // braille signage
      accessibilityFeatures[2], // audio guides
      accessibilityFeatures[6], // large text
      accessibilityFeatures[9]  // trained staff
    ],
    images: ['burj-khalifa-1.jpg', 'burj-khalifa-2.jpg'],
    rating: 4.8,
    priceRange: '$$$',
    openingHours: {
      'Monday': '8:00 AM - 11:00 PM',
      'Tuesday': '8:00 AM - 11:00 PM',
      'Wednesday': '8:00 AM - 11:00 PM',
      'Thursday': '8:00 AM - 11:00 PM',
      'Friday': '8:00 AM - 11:00 PM',
      'Saturday': '8:00 AM - 11:00 PM',
      'Sunday': '8:00 AM - 11:00 PM'
    },
    contactInfo: {
      phone: '+971 4 888 8888',
      website: 'https://www.burjkhalifa.ae'
    },
    additionalInfo: 'Elevator access to observation decks. Audio guides available in multiple languages. Wheelchair accessible restrooms on all floors.',
    verified: true
  },
  {
    id: 'dubai-mall',
    name: 'The Dubai Mall',
    description: 'One of the world\'s largest shopping malls with comprehensive accessibility features',
    address: 'Financial Centre Road, Downtown Dubai',
    coordinates: { lat: 25.1975, lng: 55.2796 },
    category: 'shopping',
    accessibilityFeatures: [
      accessibilityFeatures[0], // wheelchair access
      accessibilityFeatures[1], // braille signage
      accessibilityFeatures[2], // audio guides
      accessibilityFeatures[4], // quiet spaces
      accessibilityFeatures[6], // large text
      accessibilityFeatures[7], // tactile maps
      accessibilityFeatures[9]  // trained staff
    ],
    images: ['dubai-mall-1.jpg', 'dubai-mall-2.jpg'],
    rating: 4.6,
    priceRange: '$$',
    openingHours: {
      'Monday': '10:00 AM - 12:00 AM',
      'Tuesday': '10:00 AM - 12:00 AM',
      'Wednesday': '10:00 AM - 12:00 AM',
      'Thursday': '10:00 AM - 12:00 AM',
      'Friday': '10:00 AM - 12:00 AM',
      'Saturday': '10:00 AM - 12:00 AM',
      'Sunday': '10:00 AM - 12:00 AM'
    },
    contactInfo: {
      phone: '+971 4 362 7500',
      website: 'https://thedubaimall.com'
    },
    additionalInfo: 'Wheelchair rental available. Sensory-friendly shopping hours on Sundays. Multiple quiet areas throughout the mall.',
    verified: true
  },
  {
    id: 'dubai-aquarium',
    name: 'Dubai Aquarium & Underwater Zoo',
    description: 'Accessible aquarium experience with tactile exhibits and audio descriptions',
    address: 'The Dubai Mall, Downtown Dubai',
    coordinates: { lat: 25.1975, lng: 55.2796 },
    category: 'attraction',
    accessibilityFeatures: [
      accessibilityFeatures[0], // wheelchair access
      accessibilityFeatures[1], // braille signage
      accessibilityFeatures[2], // audio guides
      accessibilityFeatures[3], // sign language
      accessibilityFeatures[6], // large text
      accessibilityFeatures[9]  // trained staff
    ],
    images: ['aquarium-1.jpg', 'aquarium-2.jpg'],
    rating: 4.4,
    priceRange: '$$',
    openingHours: {
      'Monday': '10:00 AM - 10:00 PM',
      'Tuesday': '10:00 AM - 10:00 PM',
      'Wednesday': '10:00 AM - 10:00 PM',
      'Thursday': '10:00 AM - 10:00 PM',
      'Friday': '10:00 AM - 10:00 PM',
      'Saturday': '10:00 AM - 10:00 PM',
      'Sunday': '10:00 AM - 10:00 PM'
    },
    contactInfo: {
      phone: '+971 4 448 5200',
      website: 'https://www.dubaiaquarium.com'
    },
    additionalInfo: 'Tactile exhibits for visually impaired visitors. Sign language tours available with advance booking.',
    verified: true
  },
  {
    id: 'burj-al-arab',
    name: 'Burj Al Arab',
    description: 'Luxury hotel with world-class accessibility services and facilities',
    address: 'Jumeirah Beach Road, Jumeirah',
    coordinates: { lat: 25.1413, lng: 55.1853 },
    category: 'hotel',
    accessibilityFeatures: [
      accessibilityFeatures[0], // wheelchair access
      accessibilityFeatures[1], // braille signage
      accessibilityFeatures[2], // audio guides
      accessibilityFeatures[3], // sign language
      accessibilityFeatures[4], // quiet spaces
      accessibilityFeatures[6], // large text
      accessibilityFeatures[8], // assistive technology
      accessibilityFeatures[9]  // trained staff
    ],
    images: ['burj-al-arab-1.jpg', 'burj-al-arab-2.jpg'],
    rating: 4.9,
    priceRange: '$$$$',
    openingHours: {
      'Monday': '24/7',
      'Tuesday': '24/7',
      'Wednesday': '24/7',
      'Thursday': '24/7',
      'Friday': '24/7',
      'Saturday': '24/7',
      'Sunday': '24/7'
    },
    contactInfo: {
      phone: '+971 4 301 7777',
      website: 'https://www.jumeirah.com/en/stay/dubai/burj-al-arab'
    },
    additionalInfo: 'Accessible rooms with roll-in showers. Personal accessibility concierge service. Assistive technology available upon request.',
    verified: true
  },
  {
    id: 'dubai-miracle-garden',
    name: 'Dubai Miracle Garden',
    description: 'Beautiful flower garden with accessible pathways and sensory experiences',
    address: 'Al Barsha South 3, Dubailand',
    coordinates: { lat: 25.0589, lng: 55.1719 },
    category: 'attraction',
    accessibilityFeatures: [
      accessibilityFeatures[0], // wheelchair access
      accessibilityFeatures[1], // braille signage
      accessibilityFeatures[2], // audio guides
      accessibilityFeatures[4], // quiet spaces
      accessibilityFeatures[5], // color contrast
      accessibilityFeatures[6], // large text
      accessibilityFeatures[9]  // trained staff
    ],
    images: ['miracle-garden-1.jpg', 'miracle-garden-2.jpg'],
    rating: 4.3,
    priceRange: '$',
    openingHours: {
      'Monday': '9:00 AM - 9:00 PM',
      'Tuesday': '9:00 AM - 9:00 PM',
      'Wednesday': '9:00 AM - 9:00 PM',
      'Thursday': '9:00 AM - 9:00 PM',
      'Friday': '9:00 AM - 9:00 PM',
      'Saturday': '9:00 AM - 9:00 PM',
      'Sunday': '9:00 AM - 9:00 PM'
    },
    contactInfo: {
      phone: '+971 4 422 8902',
      website: 'https://www.dubaimiraclegarden.com'
    },
    additionalInfo: 'Wheelchair accessible pathways throughout. Sensory garden section with tactile plants. Audio descriptions of flower arrangements.',
    verified: true
  },
  {
    id: 'atlantis-palm',
    name: 'Atlantis, The Palm',
    description: 'Resort with accessible water park and marine exhibits',
    address: 'Crescent Road, Palm Jumeirah',
    coordinates: { lat: 25.1306, lng: 55.1158 },
    category: 'hotel',
    accessibilityFeatures: [
      accessibilityFeatures[0], // wheelchair access
      accessibilityFeatures[1], // braille signage
      accessibilityFeatures[2], // audio guides
      accessibilityFeatures[3], // sign language
      accessibilityFeatures[4], // quiet spaces
      accessibilityFeatures[6], // large text
      accessibilityFeatures[9]  // trained staff
    ],
    images: ['atlantis-1.jpg', 'atlantis-2.jpg'],
    rating: 4.7,
    priceRange: '$$$',
    openingHours: {
      'Monday': '24/7',
      'Tuesday': '24/7',
      'Wednesday': '24/7',
      'Thursday': '24/7',
      'Friday': '24/7',
      'Saturday': '24/7',
      'Sunday': '24/7'
    },
    contactInfo: {
      phone: '+971 4 426 2000',
      website: 'https://www.atlantisthepalm.com'
    },
    additionalInfo: 'Accessible water park with pool lifts. Marine exhibits with audio descriptions. Quiet areas for sensory breaks.',
    verified: true
  },
  {
    id: 'dubai-museum',
    name: 'Dubai Museum',
    description: 'Historical museum with accessible exhibits and cultural experiences',
    address: 'Al Fahidi Fort, Bur Dubai',
    coordinates: { lat: 25.2622, lng: 55.2972 },
    category: 'attraction',
    accessibilityFeatures: [
      accessibilityFeatures[0], // wheelchair access
      accessibilityFeatures[1], // braille signage
      accessibilityFeatures[2], // audio guides
      accessibilityFeatures[3], // sign language
      accessibilityFeatures[6], // large text
      accessibilityFeatures[7], // tactile maps
      accessibilityFeatures[9]  // trained staff
    ],
    images: ['dubai-museum-1.jpg', 'dubai-museum-2.jpg'],
    rating: 4.2,
    priceRange: '$',
    openingHours: {
      'Monday': '8:30 AM - 8:30 PM',
      'Tuesday': '8:30 AM - 8:30 PM',
      'Wednesday': '8:30 AM - 8:30 PM',
      'Thursday': '8:30 AM - 8:30 PM',
      'Friday': '2:30 PM - 8:30 PM',
      'Saturday': '8:30 AM - 8:30 PM',
      'Sunday': '8:30 AM - 8:30 PM'
    },
    contactInfo: {
      phone: '+971 4 353 1862',
      website: 'https://www.dubaiculture.gov.ae'
    },
    additionalInfo: 'Tactile exhibits and artifacts. Sign language tours available. Audio guides in multiple languages including Arabic and English.',
    verified: true
  },
  {
    id: 'dubai-frame',
    name: 'Dubai Frame',
    description: 'Iconic landmark with accessible viewing platform and museum',
    address: 'Zabeel Park, Zabeel',
    coordinates: { lat: 25.2356, lng: 55.3008 },
    category: 'attraction',
    accessibilityFeatures: [
      accessibilityFeatures[0], // wheelchair access
      accessibilityFeatures[1], // braille signage
      accessibilityFeatures[2], // audio guides
      accessibilityFeatures[6], // large text
      accessibilityFeatures[9]  // trained staff
    ],
    images: ['dubai-frame-1.jpg', 'dubai-frame-2.jpg'],
    rating: 4.1,
    priceRange: '$$',
    openingHours: {
      'Monday': '9:00 AM - 9:00 PM',
      'Tuesday': '9:00 AM - 9:00 PM',
      'Wednesday': '9:00 AM - 9:00 PM',
      'Thursday': '9:00 AM - 9:00 PM',
      'Friday': '9:00 AM - 9:00 PM',
      'Saturday': '9:00 AM - 9:00 PM',
      'Sunday': '9:00 AM - 9:00 PM'
    },
    contactInfo: {
      phone: '+971 4 232 2222',
      website: 'https://www.dubaiframe.ae'
    },
    additionalInfo: 'Elevator access to viewing platform. Audio guides with city history. Wheelchair accessible restrooms.',
    verified: true
  }
];
