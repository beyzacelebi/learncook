import React from 'react';
import { Link } from 'react-router-dom';
import recipesData from '../data/Recipes.json';

function Cuisines() {
  const cuisines = [
    {
      id: 'turkish',
      name: 'Turkish Cuisine',
      emoji: '🇹🇷',
      description: 'Rich flavors from the heart of Anatolia — kebabs, mezes, and more.',
      color: 'from-red-500 to-red-700',
    },
    {
      id: 'italian',
      name: 'Italian Cuisine',
      emoji: '🇮🇹',
      description: 'Pasta, pizza, and timeless recipes from the Mediterranean.',
      color: 'from-green-500 to-green-700',
    },
    {
      id: 'japanese',
      name: 'Japanese Cuisine',
      emoji: '🇯🇵',
      description: 'Delicate, fresh, and artful — sushi, ramen, and beyond.',
      color: 'from-pink-500 to-rose-700',
    },
    {
      id: 'chinese',
      name: 'Chinese Cuisine',
      emoji: '🇨🇳',
      description: 'Bold, diverse, and aromatic dishes from across China.',
      color: 'from-orange-500 to-red-600',
    },
    {
      id: 'spanish',
      name: 'Spanish Cuisine',
      emoji: '🇪🇸',
      description: 'Vibrant paellas, tapas, and the best of Iberian cooking.',
      color: 'from-yellow-500 to-orange-600',
    },
  ];

  return (
    <div className="px-[8%] lg:px-[12%] pt-32 pb-16">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-yellow-600 font-bold">Explore</span>
        <h1 className="text-4xl font-bold mt-2">World Cuisines</h1>
        <p className="text-gray-500 dark:text-gray-300 mt-3 max-w-xl mx-auto">
          Discover authentic recipes from five incredible culinary traditions around the globe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cuisines.map((cuisine) => {
          const count = recipesData.filter((r) => r.cuisine === cuisine.id).length;
          return (
            <Link
              key={cuisine.id}
              to={`/cuisines/${cuisine.id}`}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              {/* Color banner */}
              <div className={`bg-gradient-to-r ${cuisine.color} h-32 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-300`}>
                {cuisine.emoji}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{cuisine.name}</h3>
                  <span className="text-xs bg-yellow-100 dark:bg-gray-700 text-yellow-700 dark:text-yellow-400 px-3 py-1 rounded-full font-medium">
                    {count} recipes
                  </span>
                </div>
                <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">
                  {cuisine.description}
                </p>
                <div className="mt-4 text-yellow-600 font-semibold text-sm group-hover:translate-x-1 transition-transform duration-200">
                  Explore recipes →
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Cuisines;
