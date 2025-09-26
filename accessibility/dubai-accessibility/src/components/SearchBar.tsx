import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = "Search places, activities, or accessibility features...",
  className = ""
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onSearch(query);
  };

  const handleClear = () => {
    setSearchQuery('');
    onSearch('');
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClear();
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
        </div>
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="pl-10 pr-10 py-3 text-base"
          aria-label="Search for places and activities"
          aria-describedby="search-help"
        />
        {searchQuery && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClear}
              className="h-auto p-1 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        )}
      </div>
      <p id="search-help" className="mt-2 text-sm text-muted-foreground">
        Press Escape to clear search. Use keywords like "wheelchair", "audio guide", or place names.
      </p>
    </div>
  );
};

export default SearchBar;
