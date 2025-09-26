import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Palette, 
  MousePointer, 
  Keyboard,
  Settings,
  RotateCcw,
  Check
} from 'lucide-react';

interface AccessibilitySettingsState {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReaderMode: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  colorBlindMode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  textSize: 'small' | 'normal' | 'large' | 'extra-large';
  soundEnabled: boolean;
}

const AccessibilitySettings: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettingsState>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReaderMode: false,
    keyboardNavigation: true,
    focusIndicators: true,
    colorBlindMode: 'none',
    textSize: 'normal',
    soundEnabled: true
  });

  const [showSaved, setShowSaved] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Apply settings to document
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Text size
    root.classList.remove('text-small', 'text-normal', 'text-large', 'text-extra-large');
    root.classList.add(`text-${settings.textSize}`);

    // Color blind mode
    root.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (settings.colorBlindMode !== 'none') {
      root.classList.add(settings.colorBlindMode);
    }

    // Enhanced focus indicators
    if (settings.focusIndicators) {
      root.classList.add('enhanced-focus');
    } else {
      root.classList.remove('enhanced-focus');
    }

  }, [settings]);

  const updateSetting = <K extends keyof AccessibilitySettingsState>(
    key: K, 
    value: AccessibilitySettingsState[K]
  ) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem('accessibilitySettings', JSON.stringify(newSettings));
    
    // Show saved confirmation
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 2000);
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettingsState = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReaderMode: false,
      keyboardNavigation: true,
      focusIndicators: true,
      colorBlindMode: 'none',
      textSize: 'normal',
      soundEnabled: true
    };
    setSettings(defaultSettings);
    localStorage.setItem('accessibilitySettings', JSON.stringify(defaultSettings));
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center">
            <Settings className="mr-3 h-8 w-8" />
            Accessibility Settings
          </h1>
          <p className="text-muted-foreground">
            Customize your experience to meet your accessibility needs. All settings are saved automatically.
          </p>
          {showSaved && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg flex items-center">
              <Check className="mr-2 h-4 w-4" />
              Settings saved successfully!
            </div>
          )}
        </div>

        <div className="grid gap-6">
          {/* Visual Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="mr-2 h-5 w-5" />
                Visual Settings
              </CardTitle>
              <CardDescription>
                Adjust visual appearance for better visibility and comfort
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">High Contrast Mode</h3>
                  <p className="text-sm text-muted-foreground">
                    Increases contrast between text and background colors
                  </p>
                </div>
                <Button
                  variant={settings.highContrast ? "default" : "outline"}
                  onClick={() => updateSetting('highContrast', !settings.highContrast)}
                  className="ml-4"
                >
                  {settings.highContrast ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                  {settings.highContrast ? 'Enabled' : 'Disabled'}
                </Button>
              </div>

              {/* Text Size */}
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium mb-2">Text Size</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Choose the text size that's most comfortable for you
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {(['small', 'normal', 'large', 'extra-large'] as const).map((size) => (
                    <Button
                      key={size}
                      variant={settings.textSize === size ? "default" : "outline"}
                      onClick={() => updateSetting('textSize', size)}
                      className="capitalize"
                    >
                      <Type className="mr-2 h-4 w-4" />
                      {size === 'extra-large' ? 'Extra Large' : size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Color Blind Support */}
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium mb-2">Color Vision Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Adjust colors for different types of color vision
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[
                    { value: 'none', label: 'Normal' },
                    { value: 'protanopia', label: 'Protanopia' },
                    { value: 'deuteranopia', label: 'Deuteranopia' },
                    { value: 'tritanopia', label: 'Tritanopia' }
                  ].map((option) => (
                    <Button
                      key={option.value}
                      variant={settings.colorBlindMode === option.value ? "default" : "outline"}
                      onClick={() => updateSetting('colorBlindMode', option.value as any)}
                    >
                      <Palette className="mr-2 h-4 w-4" />
                      {option.label}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Motor Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MousePointer className="mr-2 h-5 w-5" />
                Motor & Navigation Settings
              </CardTitle>
              <CardDescription>
                Customize interaction and navigation preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Reduced Motion */}
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">Reduced Motion</h3>
                  <p className="text-sm text-muted-foreground">
                    Minimizes animations and transitions
                  </p>
                </div>
                <Button
                  variant={settings.reducedMotion ? "default" : "outline"}
                  onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                >
                  {settings.reducedMotion ? 'Enabled' : 'Disabled'}
                </Button>
              </div>

              {/* Enhanced Focus */}
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">Enhanced Focus Indicators</h3>
                  <p className="text-sm text-muted-foreground">
                    Makes keyboard focus more visible
                  </p>
                </div>
                <Button
                  variant={settings.focusIndicators ? "default" : "outline"}
                  onClick={() => updateSetting('focusIndicators', !settings.focusIndicators)}
                >
                  <Keyboard className="mr-2 h-4 w-4" />
                  {settings.focusIndicators ? 'Enabled' : 'Disabled'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Audio Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Volume2 className="mr-2 h-5 w-5" />
                Audio Settings
              </CardTitle>
              <CardDescription>
                Configure sound and audio feedback
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">Sound Feedback</h3>
                  <p className="text-sm text-muted-foreground">
                    Enable audio feedback for interactions
                  </p>
                </div>
                <Button
                  variant={settings.soundEnabled ? "default" : "outline"}
                  onClick={() => updateSetting('soundEnabled', !settings.soundEnabled)}
                >
                  {settings.soundEnabled ? 
                    <Volume2 className="mr-2 h-4 w-4" /> : 
                    <VolumeX className="mr-2 h-4 w-4" />
                  }
                  {settings.soundEnabled ? 'Enabled' : 'Disabled'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Current Settings Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Current Settings Summary</CardTitle>
              <CardDescription>
                Overview of your active accessibility preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {settings.highContrast && <Badge variant="secondary">High Contrast</Badge>}
                {settings.largeText && <Badge variant="secondary">Large Text</Badge>}
                {settings.reducedMotion && <Badge variant="secondary">Reduced Motion</Badge>}
                {settings.focusIndicators && <Badge variant="secondary">Enhanced Focus</Badge>}
                {settings.colorBlindMode !== 'none' && (
                  <Badge variant="secondary">Color Vision: {settings.colorBlindMode}</Badge>
                )}
                <Badge variant="secondary">Text Size: {settings.textSize}</Badge>
                {settings.soundEnabled && <Badge variant="secondary">Sound Enabled</Badge>}
              </div>
              
              <div className="mt-4">
                <Button 
                  variant="outline" 
                  onClick={resetSettings}
                  className="flex items-center"
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reset to Default
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AccessibilitySettings;
