import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogData from '../data/Blog.json';

function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id.toString() === id);

  if (!blog) {
    return (
      <div className="px-[8%] lg:px-[12%] pt-32 pb-16 text-center">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="text-2xl font-bold mb-2">Article not found</h2>
        <p className="text-gray-500 mb-6">The article you're looking for doesn't exist.</p>
        <Link to="/blog" className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="px-[8%] lg:px-[12%] pt-32 pb-16">
      {/* Back */}
      <Link to="/blog" className="text-yellow-600 text-sm hover:underline inline-flex items-center gap-1 mb-8">
        <i className="bi bi-arrow-left"></i> Back to Blog
      </Link>

      {/* Header */}
      <div className="max-w-3xl mx-auto">
        {/* Tags */}
        {blog.tags && (
          <div className="flex gap-2 flex-wrap mb-4">
            {blog.tags.map((tag, i) => (
              <span key={i} className="text-xs bg-yellow-100 dark:bg-gray-700 text-yellow-700 dark:text-yellow-400 px-3 py-1 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-4xl font-bold mb-4 leading-tight">{blog.title}</h1>

        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8">
          <span className="font-medium">By {blog.author}</span>
          <span>·</span>
          <span>{blog.date}</span>
          {blog.readTime && (
            <>
              <span>·</span>
              <span><i className="bi bi-clock mr-1"></i>{blog.readTime}</span>
            </>
          )}
        </div>

        <img
          src={blog.image}
          alt={blog.title}
          className="rounded-2xl w-full max-h-[450px] object-cover mb-10"
        />

        {/* Content */}
        <div className="prose dark:prose-invert max-w-none">
          {blog.content.split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-5">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <Link to="/blog" className="text-yellow-600 hover:underline font-medium text-sm">
            ← Back to all articles
          </Link>
          <Link to="/cuisines" className="text-yellow-600 hover:underline font-medium text-sm">
            Explore Recipes →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
