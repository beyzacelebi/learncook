import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Latest from "./Pages/Latest";
import Cuisines from "./Pages/Cuisines";
import Index from "./Pages/Index";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import CuisineDetails from "./Pages/CuisineDetails";
import BlogDetail from "./Pages/Blogdetail";
import RecipeDetail from "./Pages/RecipeDetail";
import Blog from "./Pages/Blog";
import Recipes from "./Pages/Recipes";
import About from "./Pages/About";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen transition">
      <Nav isDark={isDark} toggleTheme={toggleTheme} />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cuisines" element={<Cuisines />} />
        <Route path="/cuisines/:cuisineId" element={<CuisineDetails />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
