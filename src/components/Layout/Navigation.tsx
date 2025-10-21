import React from 'react';
import { Home, MapPin, Heart, Settings, Info } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '../ui/sheet';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose, currentPage, onNavigate }) => {
  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'places', label: 'Places', icon: MapPin },
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'settings', label: 'Accessibility Settings', icon: Settings },
    { id: 'about', label: 'About', icon: Info }
  ];

  const handleNavigate = (itemId: string) => {
    onNavigate(itemId);
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-80">
        <SheetHeader>
          <SheetTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>Navigation</span>
          </SheetTitle>
          <SheetDescription>
            Navigate through the Dubai Accessibility Guide
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6">
          {/* Navigation Items */}
          <nav className="space-y-2" role="navigation" aria-label="Main navigation">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "secondary" : "ghost"}
                  className={`w-full justify-start ${isActive ? 'border-l-4 border-primary' : ''}`}
                  onClick={() => handleNavigate(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
                  {item.label}
                </Button>
              );
            })}
          </nav>

          {/* Accessibility Info */}
          <div className="mt-8 p-4 bg-muted rounded-lg">
            <h3 className="font-semibold text-foreground mb-3 flex items-center">
              <Settings className="mr-2 h-4 w-4" />
              Accessibility Features
            </h3>
            <div className="space-y-2">
              <Badge variant="secondary" className="mr-2 mb-2">Keyboard Navigation</Badge>
              <Badge variant="secondary" className="mr-2 mb-2">Screen Reader</Badge>
              <Badge variant="secondary" className="mr-2 mb-2">High Contrast</Badge>
              <Badge variant="secondary" className="mr-2 mb-2">Large Text</Badge>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Navigation;
