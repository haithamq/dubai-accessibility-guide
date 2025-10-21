import React from 'react';
import { Search, Menu, Accessibility, Heart } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface HeaderProps {
  onMenuToggle: () => void;
  onSearchFocus: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, onSearchFocus }) => {
  return (
    <header 
      role="banner" 
      className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white shadow-xl border-b-4 border-gradient-to-r from-teal-400 to-sky-400"
      aria-label="Main header"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuToggle}
              className="text-white hover:bg-white/20 transition-all duration-300 rounded-full"
              aria-label="Toggle navigation menu"
              aria-expanded="false"
            >
              <Menu size={24} aria-hidden="true" />
            </Button>
            <div className="flex items-center space-x-3">
              <div className="relative p-2 bg-white/10 rounded-full backdrop-blur-sm">
                <Accessibility size={32} className="text-white" aria-hidden="true" />
                <div className="absolute -top-1 -right-1">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Dubai Accessibility Guide
                </h1>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    <Heart size={12} className="mr-1 text-red-400" />
                    Inclusive Design
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    ✨ Premium Experience
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={onSearchFocus}
              className="text-white hover:bg-white/20 transition-all duration-300 rounded-full"
              aria-label="Open search"
            >
              <Search size={24} aria-hidden="true" />
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="hidden md:flex bg-white/90 text-cyan-600 hover:bg-white shadow-lg backdrop-blur-sm"
            >
              🌟 Discover
            </Button>
          </div>
        </div>

        {/* Elegant Subtitle */}
        <div className="mt-4 text-center">
          <p className="text-white/90 text-lg font-medium">
            ✨ Discover accessible places and activities in Dubai designed for everyone ✨
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
