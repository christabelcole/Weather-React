import React from 'react';
import WeatherAndCocktailMatcher from '../containers/WeatherAndCocktailMatcher';
import './index.scss'; // Import the SCSS file for styling

const App: React.FC = () => {
  return (
    <div className="app">
      <WeatherAndCocktailMatcher />
    </div>
  );
};

export default App;
