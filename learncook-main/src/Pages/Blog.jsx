import React, { useEffect, useState } from 'react';
import blogData from '../data/Blog.json';
import { Link } from 'react-router-dom';

function Blog() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    setBlog(blogData);
  }, []);

  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      <h2 className="text-3xl font-bold mb-6">All Blog Posts</h2>
      <div className="flex flex-col gap-6">
        {blog.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row items-center mb-10 gap-6">
            <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
              <Link to={`/blog/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-xl w-full object-cover h-[270px] transform transition-transform duration-500 hover:scale-105"
                />
              </Link>
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex gap-2 mb-3 flex-wrap">
                {item.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 dark:bg-gray-700 px-3 py-1 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">By {item.author}</p>
              <Link to={`/blog/${item.id}`}>
                <button className="bg-yellow-500 px-4 py-2 mt-3 rounded hover:bg-yellow-600 transition">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
