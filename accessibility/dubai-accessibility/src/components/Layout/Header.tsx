import React from 'react';
import { Search, Menu, Accessibility } from 'lucide-react';
import { Button } from '../ui/button';

interface HeaderProps {
  onMenuToggle: () => void;
  onSearchFocus: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, onSearchFocus }) => {
  return (
    <header 
      role="banner" 
      className="bg-primary text-primary-foreground shadow-lg"
      aria-label="Main header"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuToggle}
              className="text-primary-foreground hover:bg-primary/90"
              aria-label="Toggle navigation menu"
              aria-expanded="false"
            >
              <Menu size={24} aria-hidden="true" />
            </Button>
            <div className="flex items-center space-x-2">
              <Accessibility size={32} aria-hidden="true" />
              <h1 className="text-xl font-bold">
                Dubai Accessibility Guide
              </h1>
            </div>
          </div>

          {/* Search Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onSearchFocus}
            className="text-primary-foreground hover:bg-primary/90"
            aria-label="Open search"
          >
            <Search size={24} aria-hidden="true" />
          </Button>
        </div>

        {/* Subtitle */}
        <p className="mt-2 text-primary-foreground/80 text-sm">
          Discover accessible places and activities in Dubai for everyone
        </p>
      </div>
    </header>
  );
};

export default Header;
