// src/containers/WeatherAndCocktailMatcher.tsx
import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import CocktailList from '../components/CocktailList';

const WeatherAndCocktailMatcher: React.FC = () => {
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to fetch cocktail data from TheCocktailDB API
  const fetchCocktails = async () => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      console.log('Fetched cocktails:', data);
      setCocktails(data.drinks || []);
    } catch (error) {
      console.error('Error fetching cocktails:', error);
    }
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredCocktails = cocktails.filter((cocktail: any) =>
    cocktail.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="weather-cocktail-matcher">
      <h1>Global Weather and Cocktail Matcher</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <CocktailList cocktails={filteredCocktails} />
    </div>
  );
};

export default WeatherAndCocktailMatcher;
