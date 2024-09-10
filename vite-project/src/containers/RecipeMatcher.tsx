import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard'; // Ensure the path is correct
import RecipeFilter from '../components/RecipeFilter'; // Ensure the path is correct
import { Recipe } from '../types';

const RecipeMatcher: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://www.recipepuppy.com/api/')
      .then(response => response.json())
      .then(data => setRecipes(data.results));
  }, []);

  useEffect(() => {
    let results = recipes;

    if (searchQuery) {
      results = results.filter(recipe =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filter) {
      results = results.filter(recipe =>
        recipe.ingredients.toLowerCase().includes(filter.toLowerCase())
      );
    }

    setFilteredRecipes(results);
  }, [searchQuery, filter, recipes]);

  return (
    <div className="recipe-matcher">
      <RecipeFilter setSearchQuery={setSearchQuery} setFilter={setFilter} />
      <div className="recipe-list">
        {filteredRecipes.map(recipe => (
          <RecipeCard key={recipe.href} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeMatcher;
