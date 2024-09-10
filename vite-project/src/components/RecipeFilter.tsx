import React, { ChangeEvent } from 'react';

interface RecipeFilterProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setFilter: React.Dispatch<React.SetStateAction<string | null>>;
}

const RecipeFilter: React.FC<RecipeFilterProps> = ({ setSearchQuery, setFilter }) => {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value === 'All' ? null : e.target.value);
  };

  return (
    <div className="recipe-filter">
      <input
        type="text"
        placeholder="Search for recipes..."
        onChange={handleSearchChange}
      />
      <select onChange={handleFilterChange}>
        <option value="All">All Ingredients</option>
        <option value="chicken">Chicken</option>
        <option value="beef">Beef</option>
        <option value="vegetarian">Vegetarian</option>
      </select>
    </div>
  );
};

export default RecipeFilter;
