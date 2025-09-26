import { AccessibilityFeature, DisabilityType } from '../types/accessibility';

export const accessibilityFeatures: AccessibilityFeature[] = [
  {
    id: 'wheelchair-access',
    name: 'Wheelchair Accessible',
    description: 'Full wheelchair accessibility with ramps, elevators, and accessible restrooms',
    disabilityTypes: ['mobility'],
    icon: '♿'
  },
  {
    id: 'braille-signage',
    name: 'Braille Signage',
    description: 'Signage available in Braille for navigation and information',
    disabilityTypes: ['visual'],
    icon: '⠠⠃'
  },
  {
    id: 'audio-guides',
    name: 'Audio Guides',
    description: 'Audio guides and descriptions available for tours and exhibits',
    disabilityTypes: ['visual'],
    icon: '🎧'
  },
  {
    id: 'sign-language',
    name: 'Sign Language Support',
    description: 'Staff trained in sign language or sign language interpreters available',
    disabilityTypes: ['hearing'],
    icon: '🤟'
  },
  {
    id: 'quiet-spaces',
    name: 'Quiet Spaces',
    description: 'Designated quiet areas for sensory breaks and relaxation',
    disabilityTypes: ['autism', 'cognitive'],
    icon: '🤫'
  },
  {
    id: 'color-contrast',
    name: 'High Color Contrast',
    description: 'High contrast colors and clear visual indicators',
    disabilityTypes: ['visual', 'colorblind'],
    icon: '🎨'
  },
  {
    id: 'large-text',
    name: 'Large Text Options',
    description: 'Large print materials and adjustable text sizes',
    disabilityTypes: ['visual'],
    icon: '🔍'
  },
  {
    id: 'tactile-maps',
    name: 'Tactile Maps',
    description: '3D tactile maps for navigation assistance',
    disabilityTypes: ['visual'],
    icon: '🗺️'
  },
  {
    id: 'assistive-technology',
    name: 'Assistive Technology',
    description: 'Screen readers, voice recognition, and other assistive devices supported',
    disabilityTypes: ['visual', 'mobility', 'cognitive'],
    icon: '💻'
  },
  {
    id: 'staff-training',
    name: 'Trained Staff',
    description: 'Staff trained in disability awareness and assistance',
    disabilityTypes: ['visual', 'hearing', 'mobility', 'cognitive', 'autism'],
    icon: '👥'
  }
];

export const disabilityTypeInfo: Record<DisabilityType, { name: string; description: string; icon: string }> = {
  visual: {
    name: 'Visual Impairment',
    description: 'Blind or visually impaired visitors',
    icon: '👁️'
  },
  hearing: {
    name: 'Hearing Impairment',
    description: 'Deaf or hard of hearing visitors',
    icon: '👂'
  },
  mobility: {
    name: 'Mobility Impairment',
    description: 'Visitors with mobility challenges',
    icon: '♿'
  },
  cognitive: {
    name: 'Cognitive Disability',
    description: 'Visitors with cognitive or learning disabilities',
    icon: '🧠'
  },
  colorblind: {
    name: 'Color Blindness',
    description: 'Visitors with color vision deficiencies',
    icon: '🌈'
  },
  autism: {
    name: 'Autism Spectrum',
    description: 'Visitors on the autism spectrum',
    icon: '🌟'
  }
};
