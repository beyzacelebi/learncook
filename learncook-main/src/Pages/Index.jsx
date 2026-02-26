import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import blogData from "../data/Blog.json";
import BlogCard from "../Components/BlogCard";
import recipesData from "../data/Recipes.json";

function Index() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const latestRecipes = [...recipesData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <>
      {/* HERO SWIPER */}
      <div className="relative px-[8%] lg:px-[12%] pt-[8%]">
        {isReady && (
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 4000 }}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="mt-10 rounded-xl"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="hero-1 p-[70px] flex-col justify-between">
                <div className="hero-top flex justify-between items-center gap-4">
                  <div className="flex items-center gap-5">
                    <span className="bg-yellow-200/50 px-5 py-1 rounded-full font-bold hover:bg-gray-200/50 cursor-pointer text-white">
                      Frozen Foods
                    </span>
                    <span className="bg-yellow-200/50 px-5 py-1 rounded-full font-bold hover:bg-gray-200/50 cursor-pointer text-white">
                      Toxification
                    </span>
                  </div>
                  <span className="bg-gray-900/30 px-5 py-1 rounded-full font-bold hover:bg-gray-200/30 cursor-pointer text-white">
                    <i className="bi bi-clock-history mr-1"></i> 6 min read
                  </span>
                </div>
                <div className="hero-bottom">
                  <p className="py-5 text-white">
                    <span className="px-3 font-bold">Kelsey Dimberg</span> Sep. 26, 2024
                  </p>
                  <h1 className="text-white font-bold text-5xl lg:text-7xl w-full lg:w-[80%] my-3">
                    Can You Freeze Cooked Rice? Yes, Here's How
                  </h1>
                  <p className="text-lg my-3 w-full lg:w-[80%] text-white">
                    Can you freeze cooked rice? Absolutely, and you can still preserve the flavor and moisture.
                  </p>
                  <Link
                    to="/blog/1"
                    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-bold transition mt-2"
                  >
                    Read Article →
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="hero-2 p-[70px] flex-col justify-between">
                <div className="hero-top flex justify-between items-center gap-4">
                  <div className="flex items-center gap-5">
                    <span className="bg-yellow-200/50 px-5 py-1 rounded-full font-bold hover:bg-gray-200/50 cursor-pointer text-white">
                      Appetizers
                    </span>
                    <span className="bg-yellow-200/50 px-5 py-1 rounded-full font-bold hover:bg-gray-200/50 cursor-pointer text-white">
                      Turkish Cuisine
                    </span>
                  </div>
                  <span className="bg-gray-900/30 px-5 py-1 rounded-full font-bold hover:bg-gray-200/30 cursor-pointer text-white">
                    <i className="bi bi-clock-history mr-1"></i> 3 min read
                  </span>
                </div>
                <div className="hero-bottom">
                  <p className="py-5 text-white">
                    <span className="px-3 font-bold">Ayla Clulee</span> May. 15, 2020
                  </p>
                  <h1 className="text-white font-bold text-5xl lg:text-7xl w-full lg:w-[80%] my-3">
                    3 Store-Bought Salad Dressings You Should Always Have
                  </h1>
                  <p className="text-lg my-3 w-full lg:w-[80%] text-white">
                    I keep an assortment of oils, vinegars, mustards, herbs, and spices on hand at all times.
                  </p>
                  <Link
                    to="/blog/2"
                    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-bold transition mt-2"
                  >
                    Read Article →
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="hero-3 p-[70px] flex-col justify-between">
                <div className="hero-top flex justify-between items-center gap-4">
                  <div className="flex items-center gap-5">
                    <span className="bg-yellow-200/50 px-5 py-1 rounded-full font-bold hover:bg-gray-200/50 cursor-pointer text-white">
                      East Asia
                    </span>
                    <span className="bg-yellow-200/50 px-5 py-1 rounded-full font-bold hover:bg-gray-200/50 cursor-pointer text-white">
                      Trend Recipes
                    </span>
                  </div>
                  <span className="bg-gray-900/30 px-5 py-1 rounded-full font-bold hover:bg-gray-200/30 cursor-pointer text-white">
                    <i className="bi bi-clock-history mr-1"></i> 5 min read
                  </span>
                </div>
                <div className="hero-bottom">
                  <p className="py-5 text-white">
                    <span className="px-3 font-bold">Ayeh Manfre</span> Sep. 5, 2024
                  </p>
                  <h1 className="text-white font-bold text-5xl lg:text-7xl w-full lg:w-[80%] my-3">
                    How a Family of 4 Spends $354 a Week on Groceries
                  </h1>
                  <p className="text-lg my-3 w-full lg:w-[80%] text-white">
                    A deep dive into a family's weekly grocery budget and meal planning habits.
                  </p>
                  <Link
                    to="/blog/3"
                    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-bold transition mt-2"
                  >
                    Read Article →
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}

        <div
          ref={prevRef}
          className="swiper-button-prev absolute left-[9%] top-[50%] transform -translate-y-1/2 text-white text-3xl cursor-pointer z-10"
        ></div>
        <div
          ref={nextRef}
          className="swiper-button-next absolute right-[9%] top-[50%] transform -translate-y-1/2 text-white text-3xl cursor-pointer z-10"
        ></div>
      </div>

      {/* CUISINES QUICK LINKS */}
      <div className="px-[8%] lg:px-[12%] py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold uppercase tracking-widest">Browse by Cuisine</h2>
          <Link to="/cuisines" className="text-yellow-600 text-sm font-semibold hover:underline">
            View All →
          </Link>
        </div>
        <div className="flex gap-4 flex-wrap">
          {[
            { id: 'turkish', emoji: '🇹🇷', label: 'Turkish' },
            { id: 'italian', emoji: '🇮🇹', label: 'Italian' },
            { id: 'japanese', emoji: '🇯🇵', label: 'Japanese' },
            { id: 'chinese', emoji: '🇨🇳', label: 'Chinese' },
            { id: 'spanish', emoji: '🇪🇸', label: 'Spanish' },
          ].map((c) => (
            <Link
              key={c.id}
              to={`/cuisines/${c.id}`}
              className="flex items-center gap-2 bg-white dark:bg-gray-700 px-5 py-3 rounded-full shadow hover:shadow-md hover:bg-yellow-50 dark:hover:bg-gray-600 transition font-medium text-sm"
            >
              <span className="text-xl">{c.emoji}</span> {c.label}
            </Link>
          ))}
        </div>
      </div>

      {/* LATEST RECIPES SECTION */}
      <div className="px-[8%] lg:px-[12%] py-10 bg-gray-50 dark:bg-gray-900">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-yellow-600 font-bold">Fresh off the stove</span>
            <h2 className="text-2xl font-bold mt-1">Latest Recipes</h2>
          </div>
          <Link to="/latest" className="text-yellow-600 text-sm font-semibold hover:underline">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestRecipes.map((item) => (
            <Link
              key={item.id}
              to={`/recipes/${item.id}`}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="overflow-hidden h-44">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex gap-1 mb-2 flex-wrap">
                  {item.tags?.slice(0, 2).map((tag, i) => (
                    <span key={i} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-sm line-clamp-2">{item.title}</h3>
                <p className="text-xs text-gray-400 mt-1">By {item.author}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* BLOG ARTICLES SECTION */}
      <div className="px-[8%] lg:px-[12%] py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-yellow-600 font-bold">From the blog</span>
            <h2 className="text-2xl font-bold mt-1">Explore Our Blog Articles</h2>
          </div>
          <Link to="/blog" className="text-yellow-600 text-sm font-semibold hover:underline">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {blogData.slice(0, 4).map((item) => (
            <BlogCard
              key={item.id}
              id={item.id}
              title={item.title}
              excerpt={item.excerpt}
              date={item.date}
              image={item.image}
              readTime={item.readTime}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Index;
