import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, handleSearchChange, handleSearchSubmit }) => {
  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Enter a location"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
