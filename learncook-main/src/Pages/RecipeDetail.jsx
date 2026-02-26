import React from 'react';
import { useParams, Link } from 'react-router-dom';
import recipesData from '../data/Recipes.json';

function RecipeDetail() {
  const { recipeId } = useParams();
  const recipe = recipesData.find((item) => item.id.toString() === recipeId);

  if (!recipe) {
    return (
      <div className="px-[8%] lg:px-[12%] pt-32 pb-16 text-center">
        <div className="text-6xl mb-4">🍽️</div>
        <h2 className="text-2xl font-bold mb-2">Recipe not found</h2>
        <p className="text-gray-500 mb-6">The recipe you're looking for doesn't exist.</p>
        <Link to="/cuisines" className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition">
          Browse Recipes
        </Link>
      </div>
    );
  }

  // Related recipes (same cuisine, excluding current)
  const related = recipesData
    .filter((r) => r.cuisine === recipe.cuisine && r.id !== recipe.id)
    .slice(0, 3);

  return (
    <div className="px-[8%] lg:px-[12%] pt-32 pb-16">
      {/* Back */}
      <Link
        to={`/cuisines/${recipe.cuisine}`}
        className="text-yellow-600 text-sm hover:underline inline-flex items-center gap-1 mb-8"
      >
        <i className="bi bi-arrow-left"></i>
        Back to {recipe.cuisine.charAt(0).toUpperCase() + recipe.cuisine.slice(1)} Cuisine
      </Link>

      <div className="max-w-4xl mx-auto">
        {/* Tags */}
        <div className="flex gap-2 flex-wrap mb-4">
          {recipe.tags?.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-yellow-100 dark:bg-gray-700 text-yellow-700 dark:text-yellow-400 px-3 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl font-bold mb-3">{recipe.title}</h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-6">{recipe.description}</p>

        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8">
          <span className="font-medium">By {recipe.author}</span>
          <span>·</span>
          <span>{recipe.date}</span>
        </div>

        {recipe.image && (
          <img
            src={recipe.image}
            alt={recipe.title}
            className="rounded-2xl w-full max-h-[450px] object-cover mb-10"
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Ingredients */}
          <div className="bg-yellow-50 dark:bg-gray-800 rounded-2xl p-7">
            <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
              <span className="text-2xl">🛒</span> Ingredients
            </h2>
            <ul className="space-y-3">
              {recipe.ingredients?.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <span className="w-5 h-5 bg-yellow-400 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-bold">
                    ✓
                  </span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
              <span className="text-2xl">👨‍🍳</span> Instructions
            </h2>
            <ol className="space-y-4">
              {recipe.instructions?.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 font-bold">
                    {index + 1}
                  </span>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Related Recipes */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">More {recipe.cuisine.charAt(0).toUpperCase() + recipe.cuisine.slice(1)} Recipes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to={`/recipes/${r.id}`}
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
                >
                  <div className="overflow-hidden h-40">
                    <img
                      src={r.image}
                      alt={r.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm">{r.title}</h3>
                    <p className="text-xs text-gray-400 mt-1">By {r.author}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeDetail;
