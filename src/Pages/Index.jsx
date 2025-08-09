import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Routes, Route } from 'react-router-dom';
import blogData from "../data/Blog.json";
import BlogCard from "../Components/BlogCard";

function Index() {
  
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <>

      {/* HERO SWIPER */}
      <div className="relative px-[8%] lg:px-[12%] pt-[5%]">
        {isReady && (
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000 }}
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
                  <h1 className="text-white font-bold font-bricolage text-7xl w-full lg:w-[80%] my-3">
                    Can You Freeze Cooked Rice? Yes, Here’s How
                  </h1>
                  <p className="text-lg my-3 w-full lg:w-[80%] text-white">
                    Can you freeze cooked rice? Absolutely, and you can still preserve the flavor and moisture and ensure it's safe to eat.
                  </p>
                  <button className="bg-white px-6 py-2 mt-5 rounded text-blue-gray-800 font-bold hover:bg-yellow-200 hover:text-black hover:shadow-lg transition duration-300">
                    Read More
                  </button>
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
                    <span className="px-3 font-bold">Ayla Clulee</span> May 15, 2020
                  </p>
                  <h1 className="text-white font-bold font-bricolage text-7xl w-full lg:w-[80%] my-3">
                    3 Store-Bought Salad Dressings You Should Always Have in Your Fridge
                  </h1>
                  <p className="text-lg my-3 w-full lg:w-[80%] text-white">
                    I am a lover of homemade salad dressings. 
                    I keep an assortment of oils, vinegars, mustards, herbs, and spices on hand to whisk together a dressing in minutes.                   </p>
                  <button className="bg-white px-6 py-2 mt-5 rounded text-blue-gray-800 font-bold hover:bg-yellow-200 hover:text-black hover:shadow-lg transition duration-300">
                    Read More
                  </button>
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
                    <span className="px-3 font-bold">Ayeh Manfre</span> Sep 5, 2024
                  </p>
                  <h1 className="text-white font-bold font-bricolage text-7xl w-full lg:w-[80%] my-3">
                    How a California Family of 4 Spends $354 a Week on Groceries (Mostly) Eating the Carnivore Diet
                  </h1>
                  <p className="text-lg my-3 w-full lg:w-[80%] text-white">
                    Stay-at-home mom, carnivore content creator and cookbook author; spouse is in finance 
                  </p>
                  <button className="bg-white px-6 py-2 mt-5 rounded text-blue-gray-800 font-bold hover:bg-yellow-200 hover:text-black hover:shadow-lg transition duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}

        {/* Custom Navigation Buttons */}
        <div
          ref={prevRef}
          className="swiper-button-prev absolute left-4 top-[50%] transform -translate-y-1/2 text-white text-3xl cursor-pointer z-10"
        >
          <i className="bi bi-swiper-button-prev"></i>
        </div>
        <div
          ref={nextRef}
          className="swiper-button-next absolute right-4 top-[50%] transform -translate-y-1/2 text-white text-3xl cursor-pointer z-10"
        >
          <i className="bi bi-swiper-button-t"></i>
        </div>
      </div>

      {/* ARTICLE SECTION */}
      <div className="px-[8%] lg:px-[12%] explore-topic py-10 flex flex-col justify-center items-center">
        <h2 className="text-sm uppercase text-center tracking-widest mb-6 font-bold">
          Explore Our Blog Articles
        </h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {blogData.slice(0, 4).map((item) => (
            <BlogCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              date={item.date}
              image={item.image}
            />
          ))}
        </div>



      </div>
    </>
  );
}

export default Index;
