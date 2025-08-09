import React from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../data/Recipes.json';

function RecipeDetail() {
  const { recipeId } = useParams();
  const recipe = recipesData.find((item) => item.id.toString() === recipeId);

  if (!recipe) {
    return <div className="p-10">Recipe doesn't exist.</div>;
  }

  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.title}
          className="rounded-xl w-full max-h-[400px] object-cover mb-6"
        />
      )}
      <p className="text-gray-700 dark:text-gray-300 mb-4">By {recipe.author}</p>

      {/* Ingredients */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions?.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
