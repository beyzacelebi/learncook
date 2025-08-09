import React, { useEffect, useState } from "react";
import recipeData from "../data/Recipes.json";
import { Link } from "react-router-dom";

function Latest() {
  const [latestRecipes, setLatestRecipes] = useState([]);

  useEffect(() => {


    try {
      const validData = recipeData.filter(item => !!item.date && !isNaN(new Date(item.date)));
      const sorted = [...validData].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setLatestRecipes(sorted.slice(0, 10));
    } catch (e) {
      console.error("Error sorting blog data:", e);
      setLatestRecipes([]);
    }
  }, []);

  if (latestRecipes.length === 0) {
    return <div className="p-10 text-center">No latest recipes found.</div>;
  }

  return (
    <div className="p-36 grid gap-4">
      {latestRecipes.map((item) => (
        <Link
          to={`/recipes/${item.id}`}
          key={item.id}
          className="block p-6 bg-white dark:bg-gray-700 shadow rounded-lg hover:shadow-lg transition"
        >
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-300">{item.date}</p>
          <p className="text-sm mt-2">{item.description}</p>
        </Link>
      ))}
    </div>
  );
}

export default Latest;
