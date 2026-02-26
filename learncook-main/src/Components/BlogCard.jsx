import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ id, title, excerpt, description, date, image, readTime, tags }) {
  const text = excerpt || description || '';

  return (
    <Link
      to={`/blog/${id}`}
      className="group bg-white dark:bg-gray-700 rounded-xl shadow hover:shadow-lg transition block overflow-hidden"
    >
      {image && (
        <div className="overflow-hidden h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-4">
        {tags && tags.length > 0 && (
          <div className="flex gap-2 mb-2 flex-wrap">
            {tags.slice(0, 2).map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-yellow-100 dark:bg-gray-600 text-yellow-700 dark:text-yellow-300 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h3 className="text-base font-bold mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
          <span>{date}</span>
          {readTime && <span><i className="bi bi-clock mr-1"></i>{readTime}</span>}
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-300 line-clamp-3">{text}</p>
      </div>
    </Link>
  );
}

export default BlogCard;
