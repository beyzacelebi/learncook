import React from 'react';
import { Link } from 'react-router-dom';


function Cuisines() {
  const cuisines = [
    { id: 'turkish', name: 'Turkish Cuisine' },
    { id: 'italian', name: 'Italian Cuisine' },
    { id: 'japanese', name: 'Japanese Cuisine' },
    { id: 'chinese', name: 'Chinese Cuisine' },
    { id: 'spanish', name: 'Spanish Cuisine' },
  ];

  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      <h2 className="text-3xl font-bold mb-6">Cuisines</h2>
      <ul className="space-y-4">
        {cuisines.map(c => (
          <li key={c.id}>
            <Link
              to={`/cuisines/${c.id}`}
              className="text-lg text-yellow-600 hover:underline"
            >
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cuisines;
