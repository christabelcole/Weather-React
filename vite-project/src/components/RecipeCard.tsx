import React from 'react';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <h2>{recipe.title}</h2>
      <a href={recipe.href} target="_blank" rel="noopener noreferrer">
        <img src={`https://www.recipepuppy.com/img/${recipe.title}.jpg`} alt={recipe.title} />
      </a>
      <p>{recipe.ingredients}</p>
    </div>
  );
};

export default RecipeCard;
