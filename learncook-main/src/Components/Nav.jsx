import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import recipesData from '../data/Recipes.json';
import blogData from '../data/Blog.json';

function Nav({ isDark, toggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const navLinks = [
    { to: '/', label: 'Home', icon: 'house-door-fill' },
    { to: '/cuisines', label: 'Cuisines', icon: 'list-ul' },
    { to: '/latest', label: 'Latest Recipes', icon: 'clock-history' },
    { to: '/blog', label: 'Blog', icon: 'journal-text' },
  ];

  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim().length < 2) {
      setSearchResults([]);
      return;
    }
    const q = query.toLowerCase();
    const recipeMatches = recipesData
      .filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q)
      )
      .slice(0, 4)
      .map((r) => ({ ...r, type: 'recipe', link: `/recipes/${r.id}` }));

    const blogMatches = blogData
      .filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          (b.excerpt && b.excerpt.toLowerCase().includes(q))
      )
      .slice(0, 2)
      .map((b) => ({ ...b, type: 'blog', link: `/blog/${b.id}` }));

    setSearchResults([...recipeMatches, ...blogMatches]);
  };

  const handleResultClick = (link) => {
    navigate(link);
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <>
      <nav className="w-full px-[8%] lg:px-[12%] py-5 flex items-center justify-between bg-white dark:bg-gray-900 transition fixed top-0 left-0 z-[9999] shadow-sm">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-yellow-600 p-1 px-2 rounded-xl">
            <i className="bi bi-egg-fried text-4xl text-white"></i>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Learn <span className="text-yellow-600">Cook</span>
          </h1>
        </Link>

        <ul className="hidden lg:flex items-center space-x-9 text-lg font-medium text-gray-900 dark:text-white">
          {navLinks.map((link) => (
            <li key={link.to} className="hover:text-yellow-600 cursor-pointer">
              <Link to={link.to}>
                <i className={`bi bi-${link.icon} mr-1`}></i>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          {/* Search */}
          <div ref={searchRef} className="relative">
            <i
              className="bi bi-search text-lg cursor-pointer text-gray-900 dark:text-white hover:text-yellow-600"
              onClick={() => setIsSearchOpen((prev) => !prev)}
            ></i>

            {isSearchOpen && (
              <div className="absolute right-0 top-8 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 z-50">
                <div className="p-3 border-b border-gray-100 dark:border-gray-700">
                  <input
                    autoFocus
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search recipes, articles..."
                    className="w-full bg-gray-50 dark:bg-gray-700 rounded-lg px-4 py-2 text-sm outline-none text-gray-900 dark:text-white placeholder-gray-400"
                  />
                </div>
                {searchResults.length > 0 ? (
                  <ul className="py-2 max-h-72 overflow-y-auto">
                    {searchResults.map((result) => (
                      <li
                        key={`${result.type}-${result.id}`}
                        onClick={() => handleResultClick(result.link)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                      >
                        <span className="text-lg">
                          {result.type === 'recipe' ? '🍽️' : '📝'}
                        </span>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {result.title}
                          </p>
                          <p className="text-xs text-gray-400 capitalize">
                            {result.type}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : searchQuery.length >= 2 ? (
                  <div className="px-4 py-6 text-center text-sm text-gray-400">
                    No results found for "{searchQuery}"
                  </div>
                ) : (
                  <div className="px-4 py-4 text-xs text-gray-400 text-center">
                    Type to search recipes and articles...
                  </div>
                )}
              </div>
            )}
          </div>

          <div
            onClick={toggleTheme}
            className="bg-gray-900 dark:bg-gray-600 p-1 rounded-full cursor-pointer"
          >
            {isDark ? (
              <i className="bi bi-sun text-yellow-400 text-sm mx-1"></i>
            ) : (
              <i className="bi bi-moon text-white text-sm mx-1"></i>
            )}
          </div>

          <button
            className="text-2xl lg:hidden text-gray-900 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <ul className="lg:hidden w-full bg-white dark:bg-black text-black dark:text-white px-[8%] pt-[100px] pb-6 space-y-4 transition fixed top-0 left-0 z-[9998]">
          {navLinks.map((link) => (
            <li
              key={link.to}
              className="hover:text-yellow-600 text-lg cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link to={link.to}>
                <i className={`bi bi-${link.icon} mr-1`}></i>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Nav;
