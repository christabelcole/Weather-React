import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import CocktailList from '../components/CocktailList';

const WeatherAndCocktailMatcher: React.FC = () => {
  const [cocktails, setCocktails] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [weather, setWeather] = useState<any>({});
  const [city, setCity] = useState('New York'); // Default city
  const [suggestedCocktail, setSuggestedCocktail] = useState<string | null>(null);

  // Function to fetch cocktail data from TheCocktailDB API
  const fetchCocktails = async () => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await response.json();
      setCocktails(data.drinks || []);
    } catch (error) {
      console.error('Error fetching cocktails:', error);
    }
  };

  // Function to fetch weather data from Open-Meteo API
  const fetchWeather = async () => {
    try {
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true`);
      const data = await response.json();
      setWeather(data.current_weather);
      suggestCocktail(data.current_weather.weathercode);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  // Function to suggest cocktail based on weather code
  const suggestCocktail = (weatherCode: number) => {
    let suggestion = '';
    switch (weatherCode) {
      case 1: // Sunny
        suggestion = 'Piña Colada';
        break;
      case 2: // Partly Cloudy
        suggestion = 'Mojito';
        break;
      case 3: // Cloudy
        suggestion = 'Old Fashioned';
        break;
      case 4: // Rainy
        suggestion = 'Hot Toddy';
        break;
      case 5: // Snowy
        suggestion = 'Irish Coffee';
        break;
      default:
        suggestion = 'Cocktail of the Day';
    }
    setSuggestedCocktail(suggestion);
  };

  useEffect(() => {
    fetchWeather();
    fetchCocktails();
  }, [searchTerm, city]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  return (
    <div className="weather-cocktail-matcher">
      <h1>Weather and Cocktail Matcher</h1>
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter city..."
      />
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <p>Suggested Cocktail for Current Weather: {suggestedCocktail}</p>
      <CocktailList cocktails={cocktails} />
    </div>
  );
};

export default WeatherAndCocktailMatcher;
