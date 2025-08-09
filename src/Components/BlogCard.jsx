import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ id, title, description, date, image }) {
  return (
    <Link
      to={`/blog/${id}`}
      className="bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition block"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-300">{date}</p>
        <p className="text-sm mt-2 line-clamp-3">{description}</p>
      </div>
    </Link>
  );
}

export default BlogCard;
