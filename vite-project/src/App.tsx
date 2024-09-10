import React from 'react';
import RecipeMatcher from './containers/RecipeMatcher';
import './index.scss'; // Ensure this file exists

const App: React.FC = () => {
  return (
    <div className="app">
      <RecipeMatcher />
    </div>
  );
};

export default App;
