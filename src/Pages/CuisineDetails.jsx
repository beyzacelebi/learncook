import React from 'react';
import { useParams, Link } from 'react-router-dom';
import recipesData from '../data/Recipes.json';

function CuisineDetails() {
  const { cuisineId } = useParams();
  const filteredRecipes = recipesData.filter(
    recipe => recipe.cuisine === cuisineId
  );

  if (filteredRecipes.length === 0) {
    return <div className="p-10">Couldn't found any recipes.</div>;
  }

  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      <h2 className="text-3xl font-bold mb-6">
        {cuisineId.charAt(0).toUpperCase() + cuisineId.slice(1)} Recipes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredRecipes.map(recipe => (
          <div
            key={recipe.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <Link to={`/recipes/${recipe.id}`}>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                By {recipe.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CuisineDetails;
