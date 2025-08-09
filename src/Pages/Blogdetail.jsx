import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../data/Blog.json';

function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id.toString() === id);

  if (!blog) {
    return <div className="p-10">Article doesn't exist.</div>;
  }

  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="rounded-xl w-full max-h-[400px] object-cover mb-6" />
      <p className="text-gray-700 dark:text-gray-300 mb-4">By {blog.author}</p>
      <div className="space-y-4 text-lg leading-relaxed">
        <p>{blog.content}</p>
      </div>
    </div>
  );
}

export default BlogDetail;
