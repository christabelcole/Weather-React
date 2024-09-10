// src/components/CocktailList.tsx
import React from 'react';

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

interface CocktailListProps {
  cocktails: Cocktail[];
}

const CocktailList: React.FC<CocktailListProps> = ({ cocktails }) => {
  return (
    <div className="cocktail-list">
      {cocktails.length ? (
        cocktails.map((cocktail) => (
          <div key={cocktail.idDrink} className="cocktail-card">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <h3>{cocktail.strDrink}</h3>
          </div>
        ))
      ) : (
        <p>No cocktails found.</p>
      )}
    </div>
  );
};

export default CocktailList;
