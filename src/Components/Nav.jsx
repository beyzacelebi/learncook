import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav({ isDark, toggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home', icon: 'house-door-fill' },
    { to: '/cuisines', label: 'Cuisines', icon: 'list-ul' },
    { to: '/latest', label: 'Latest Recipes', icon: 'clock-history' },
  ];

  return (
    <>
      <nav className="w-full px-[8%] lg:px-[12%] py-5 flex items-center justify-between bg-white dark:bg-gray-900 transition fixed top-0 left-0 z-[9999]">
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
              <Link to={link.to}><i className={`bi bi-${link.icon} mr-1`}></i>{link.label}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <i className="bi bi-search text-lg cursor-pointer text-gray-900 dark:text-white"></i>

          <div onClick={toggleTheme} className="bg-gray-900 p-1 rounded-full cursor-pointer">
            {isDark ? (
              <i className="bi bi-sun text-yellow-400 text-sm mx-1"></i>
            ) : (
              <i className="bi bi-moon text-white text-sm mx-1"></i>
            )}
          </div>



          <button className="text-2xl lg:hidden text-gray-900 dark:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <i className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <ul className="lg:hidden w-full bg-white dark:bg-black text-black dark:text-white px-[8%] pt-[100px] space-y-4 transition">
          {navLinks.map((link) => (
            <li key={link.to} className="hover:text-yellow-600 text-lg cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
              <Link to={link.to}><i className={`bi bi-${link.icon} mr-1`}></i>{link.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Nav;
