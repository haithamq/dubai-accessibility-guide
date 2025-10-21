import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  Accessibility, 
  Eye, 
  Type, 
  Keyboard,
  Settings,
  X,
  Palette
} from 'lucide-react';

interface AccessibilityButtonProps {
  onNavigateToSettings: () => void;
}

const AccessibilityButton: React.FC<AccessibilityButtonProps> = ({ onNavigateToSettings }) => {
  const [showQuickPanel, setShowQuickPanel] = useState(false);
  const [settings, setSettings] = useState({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    enhancedFocus: true
  });

  const toggleSetting = (setting: keyof typeof settings) => {
    const newSettings = { ...settings, [setting]: !settings[setting] };
    setSettings(newSettings);
    
    // Apply the setting immediately
    const root = document.documentElement;
    if (setting === 'highContrast') {
      if (newSettings.highContrast) {
        root.classList.add('high-contrast');
      } else {
        root.classList.remove('high-contrast');
      }
    } else if (setting === 'largeText') {
      if (newSettings.largeText) {
        root.classList.add('large-text');
      } else {
        root.classList.remove('large-text');
      }
    } else if (setting === 'reducedMotion') {
      if (newSettings.reducedMotion) {
        root.classList.add('reduced-motion');
      } else {
        root.classList.remove('reduced-motion');
      }
    } else if (setting === 'enhancedFocus') {
      if (newSettings.enhancedFocus) {
        root.classList.add('enhanced-focus');
      } else {
        root.classList.remove('enhanced-focus');
      }
    }
  };

  return (
    <>
      {/* Floating Accessibility Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setShowQuickPanel(!showQuickPanel)}
          className="rounded-full w-14 h-14 shadow-lg bg-primary hover:bg-primary/90"
          aria-label="Open accessibility options"
        >
          <Accessibility className="h-6 w-6" />
        </Button>
      </div>

      {/* Quick Accessibility Panel */}
      {showQuickPanel && (
        <div className="fixed bottom-20 right-4 z-50 w-80">
          <Card className="shadow-2xl border-2">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center">
                  <Accessibility className="mr-2 h-5 w-5" />
                  Quick Accessibility
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowQuickPanel(false)}
                  aria-label="Close accessibility panel"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* Quick Settings */}
              <div className="space-y-2">
                <Button
                  variant={settings.highContrast ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleSetting('highContrast')}
                  className="w-full justify-start"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  High Contrast
                  {settings.highContrast && <Badge className="ml-auto">ON</Badge>}
                </Button>

                <Button
                  variant={settings.largeText ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleSetting('largeText')}
                  className="w-full justify-start"
                >
                  <Type className="mr-2 h-4 w-4" />
                  Large Text
                  {settings.largeText && <Badge className="ml-auto">ON</Badge>}
                </Button>

                <Button
                  variant={settings.reducedMotion ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleSetting('reducedMotion')}
                  className="w-full justify-start"
                >
                  <Palette className="mr-2 h-4 w-4" />
                  Reduced Motion
                  {settings.reducedMotion && <Badge className="ml-auto">ON</Badge>}
                </Button>

                <Button
                  variant={settings.enhancedFocus ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleSetting('enhancedFocus')}
                  className="w-full justify-start"
                >
                  <Keyboard className="mr-2 h-4 w-4" />
                  Enhanced Focus
                  {settings.enhancedFocus && <Badge className="ml-auto">ON</Badge>}
                </Button>
              </div>

              {/* Divider */}
              <div className="border-t pt-3">
                <Button
                  onClick={() => {
                    onNavigateToSettings();
                    setShowQuickPanel(false);
                  }}
                  className="w-full"
                >
                  <Settings className="mr-2 h-4 w-4" />
                  All Settings
                </Button>
              </div>

              {/* Keyboard Shortcuts Info */}
              <div className="text-xs text-muted-foreground p-2 bg-muted rounded">
                <p className="font-medium mb-1">Keyboard Shortcuts:</p>
                <p>• Tab: Navigate • Enter: Activate</p>
                <p>• Escape: Close panels</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Overlay */}
      {showQuickPanel && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setShowQuickPanel(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default AccessibilityButton;
