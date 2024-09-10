import React from 'react';
import WeatherAndCocktailMatcher from './containers/WeatherAndCocktailMatcher'; // Ensure path is correct
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <WeatherAndCocktailMatcher />
    </div>
  );
};

export default App;

