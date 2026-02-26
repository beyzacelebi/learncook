import React, { useEffect, useState } from "react";
import recipeData from "../data/Recipes.json";
import { Link } from "react-router-dom";

function Latest() {
  const [latestRecipes, setLatestRecipes] = useState([]);

  useEffect(() => {
    try {
      const validData = recipeData.filter(
        (item) => !!item.date && !isNaN(new Date(item.date))
      );
      const sorted = [...validData].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setLatestRecipes(sorted.slice(0, 10));
    } catch (e) {
      console.error("Error sorting recipe data:", e);
      setLatestRecipes([]);
    }
  }, []);

  if (latestRecipes.length === 0) {
    return <div className="p-10 text-center">No latest recipes found.</div>;
  }

  const [featured, ...rest] = latestRecipes;

  return (
    <div className="px-[8%] lg:px-[12%] pt-32 pb-16">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-yellow-600 font-bold">
          Fresh & New
        </span>
        <h1 className="text-4xl font-bold mt-2">Latest Recipes</h1>
        <p className="text-gray-500 dark:text-gray-300 mt-3">
          The most recently added recipes to our collection.
        </p>
      </div>

      {/* Featured (first) recipe */}
      <Link
        to={`/recipes/${featured.id}`}
        className="group flex flex-col md:flex-row gap-8 mb-14 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
      >
        <div className="w-full md:w-1/2 overflow-hidden h-64 md:h-auto">
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-1/2">
          <div className="flex gap-2 flex-wrap mb-3">
            {featured.tags?.map((tag, i) => (
              <span
                key={i}
                className="bg-yellow-100 dark:bg-gray-700 text-yellow-700 dark:text-yellow-400 px-3 py-1 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-xs bg-yellow-500 text-white px-3 py-1 rounded-full font-bold w-fit mb-3">
            ⭐ Latest
          </span>
          <h2 className="text-2xl font-bold mb-3">{featured.title}</h2>
          <p className="text-gray-500 dark:text-gray-300 text-sm mb-4 leading-relaxed">
            {featured.description}
          </p>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span>By {featured.author}</span>
            <span>·</span>
            <span>{featured.date}</span>
          </div>
        </div>
      </Link>

      {/* Rest of recipes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rest.map((item) => (
          <Link
            key={item.id}
            to={`/recipes/${item.id}`}
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <div className="overflow-hidden h-48">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex gap-2 flex-wrap mb-2">
                {item.tags?.slice(0, 2).map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 line-clamp-2">
                {item.description}
              </p>
              <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
                <span>By {item.author}</span>
                <span>{item.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Latest;
