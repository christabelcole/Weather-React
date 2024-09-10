import React from 'react';

interface WeatherDisplayProps {
  weather: { temperature: number; weathercode: number } | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
  if (!weather) {
    return <div>Loading weather...</div>;
  }

  const { temperature, weathercode } = weather;

  // Determine weather condition
  let condition = '';
  if (weathercode === 1) condition = 'Sunny';
  else if (weathercode === 2) condition = 'Cloudy';
  else if (weathercode === 3) condition = 'Rainy';
  // Add more conditions as needed

  // Define cocktails based on weather conditions
  const cocktailSuggestions: Record<string, string> = {
    Sunny: 'Margarita',
    Cloudy: 'Bloody Mary',
    Rainy: 'Hot Toddy',
    // Add more mappings as needed
  };

  const suggestedCocktail = cocktailSuggestions[condition] || 'Cocktail not found';

  return (
    <div className={`weather-display weather-${condition.toLowerCase()}`}>
      <h2>Current Weather</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Condition: {condition}</p>
      <p>Perfect weather for a {suggestedCocktail}!</p>
    </div>
  );
};

export default WeatherDisplay;
