import React from 'react';
import { CocktailData } from '../containers/WeatherAndCocktailMatcher';

interface CocktailListProps {
  cocktails: CocktailData[];
}

const CocktailList: React.FC<CocktailListProps> = ({ cocktails }) => {
  return (
    <div className="cocktail-list">
      <h2>Cocktail Suggestions</h2>
      <ul>
        {cocktails.map((cocktail) => (
          <li key={cocktail.idDrink}>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            {cocktail.strDrink}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CocktailList;
