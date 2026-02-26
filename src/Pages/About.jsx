import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  const team = [
    { name: 'Beyza Celebi', role: 'Founder & Head Chef', emoji: '👩‍🍳' },
    { name: 'Ayşe Kaya', role: 'Recipe Developer', emoji: '🧑‍🍳' },
    { name: 'Mehmet Demir', role: 'Food Photographer', emoji: '📸' },
  ];

  return (
    <div className="px-[8%] lg:px-[12%] pt-32 pb-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest text-yellow-600 font-bold">Our Story</span>
        <h1 className="text-5xl font-bold mt-3 mb-6">About Learn Cook</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Learn Cook is a food blog dedicated to bringing world cuisines to your kitchen.
          From traditional Turkish dishes to modern fusion recipes, we believe that cooking
          is a journey worth exploring.
        </p>
      </div>

      {/* Mission */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-yellow-50 dark:bg-gray-700 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-4">🌍</div>
          <h3 className="text-xl font-bold mb-3">World Cuisines</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Explore authentic recipes from Turkish, Italian, Japanese, Chinese, and Spanish cuisines — all in one place.
          </p>
        </div>
        <div className="bg-yellow-50 dark:bg-gray-700 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-4">📖</div>
          <h3 className="text-xl font-bold mb-3">Easy to Follow</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Every recipe is written with clear, step-by-step instructions so even beginners can cook with confidence.
          </p>
        </div>
        <div className="bg-yellow-50 dark:bg-gray-700 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-4">❤️</div>
          <h3 className="text-xl font-bold mb-3">Made with Love</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Each recipe is tested and perfected in a real kitchen, ensuring delicious results every time.
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="w-full md:w-1/2">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl h-72 flex items-center justify-center text-8xl shadow-lg">
            🍳
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <span className="text-xs uppercase tracking-widest text-yellow-600 font-bold">How It Started</span>
          <h2 className="text-3xl font-bold mt-2 mb-5">A Passion for Cooking</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Learn Cook started in 2024 as a small personal project to document family recipes 
            passed down through generations. What began as a digital recipe book quickly grew 
            into a full-fledged food blog with thousands of readers.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Today, we publish new recipes every week, covering everything from quick weeknight 
            dinners to elaborate weekend feasts. Our mission is simple: make great food accessible to everyone.
          </p>
        </div>
      </div>

      {/* Team */}
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-widest text-yellow-600 font-bold">The People</span>
        <h2 className="text-3xl font-bold mt-2 mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-md text-center">
              <div className="text-6xl mb-4">{member.emoji}</div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-yellow-600 text-sm font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-12 text-center text-white mt-16">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Cooking?</h2>
        <p className="text-lg mb-8 opacity-90">Browse our collection of recipes and find your next favorite dish.</p>
        <Link
          to="/cuisines"
          className="bg-white text-yellow-600 font-bold px-8 py-3 rounded-full hover:bg-yellow-50 transition"
        >
          Explore Cuisines
        </Link>
      </div>
    </div>
  );
}

export default About;
