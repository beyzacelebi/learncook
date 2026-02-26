import React from 'react'
import { Link } from 'react-router-dom';


function Footer() {
  return (

  <>
    <div>
     
     <div className="newsletter py-20 flex items-center justify-center flex-col">

      <h2 className='text-5xl mb-3 font-bricolage'>subscribe to our newsletter</h2>
      <p className="text-center mb-6">subscribe to our email to get newsletter</p>
      <form className="w-[80%] md:w-[45%] flex items-center bg-[#1e1e1e] rounded-xl p-2 shadow-inner">
        <input type="email" placeholder='enter your email' className='flex-1 bg-transparent text-gray-100 placeholder-gray-400 px-4 py-2 outline-none'/>
        <button type='submit' className='font-semibold text-white bg-gray-50/10 hover:bg-gray-50/20 transition rounded-xl px-3 py-5 '>subscribe</button>

        
      </form>
     </div>

     {/* footer */}
     <div className="footer pt-[50px] border-t border-[#111111]">
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="flex flex-wrap pb-7">
          <div className="w-full lg:w-2/3">
          <div className="flex items-center space-x-2">
            <div className="bg-yellow-600/50 p-1 px-2 rounded-lg">
              <i className="bi bi-egg-fried text-3xl text-white">  
              </i>
            </div>
            <h1 className="text-3xl font-bricolage font-bold text-gray-900 dark:text-gray-100">
              Learn <span className="text-yellow-600">Cook</span>
            </h1>
            </div>

            <p className="mt-4 mb-5"> Learn cook, learn health, learn life</p>
            <div className="social-icons flex gap-4 md:mb-10">
              <i className="bi bi-twitter hover:text-blue-700 cursor-pointer transition text-xl"></i>
              <i className="bi bi-instagram hover:text-purple-400 cursor-pointer transition text-2xl"></i>
              <i className="bi bi-youtube hover:text-red-400 cursor-pointer transition text-2xl"></i>
              <i className="bi bi-facebook hover:text-blue-400 cursor-pointer transition text-xl"></i>
              <i className="bi bi-linkedin hover:text-yellow-400 cursor-pointer transition text-xl"></i>

            </div>
            </div>

            <div className="w-full lg:w-1/3 grid grid-cols-1 md:grid-cols-3 mt-5 lg:mt-0 lg:grid-cols-2 gap-3">
           

            
            <div>
            <h4 className="text-lg font-bold uppercase mb-3 ">Cuisines</h4>
            <ul className="space-y-2">
            <li><Link to="/cuisines/turkish" className="hover:text-yellow-400 transition">Turkish Cuisine</Link> </li>
            <li><Link to="/cuisines/italian" className="hover:text-yellow-400 transition">Italian Cuisine</Link></li>
            <li><Link to="/cuisines/japanese" className="hover:text-yellow-400 transition">Japan Cuisine</Link> </li>
            <li> <Link to="/cuisines/chinese" className="hover:text-yellow-400 transition">Chinese Cuisine </Link> </li>
            <li> <Link to="/cuisines/spanish" className="hover:text-yellow-400 transition">Spanish Cuisine </Link> </li>
            
            </ul>
            </div>

            <div>
            <h4 className="text-lg font-bold uppercase mb-3 ">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className='hover:text-yellow-400 transition'>About Us</Link></li>
              <li><Link to="/blog" className='hover:text-yellow-400 transition'>Blog</Link></li>

              </ul>
            </div>

            </div>

        </div>
        <p className="text-center border-t border-[#838380] p-5"> Copyright © 2025 All Rights Reserved by 
          <a href="#" className="text-light-green-800 font-bold"> beyzacelebi</a></p>
      </div>
     </div>
      </div>
  </>
  )
}

export default Footer