import React from 'react';

type SearchBarProps = {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search for a beer..."
      value={searchTerm}
      onChange={onSearchChange}
      className="search-bar"
    />
  );
};

export default SearchBar;
