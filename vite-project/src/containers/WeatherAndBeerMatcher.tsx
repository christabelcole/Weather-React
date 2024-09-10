import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import BeerList from '../components/BeerList';

const WeatherAndBeerMatcher: React.FC = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to fetch beer data from Punk API
  const fetchBeers = async () => {
    try {
      const response = await fetch('https://api.punkapi.com/v2/beers');
      const data = await response.json();
      setBeers(data);
    } catch (error) {
      console.error('Error fetching beers:', error);
    }
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="weather-beer-matcher">
      <h1>Global Weather and Beer Matcher</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <BeerList beers={filteredBeers} />
    </div>
  );
};

export default WeatherAndBeerMatcher;
