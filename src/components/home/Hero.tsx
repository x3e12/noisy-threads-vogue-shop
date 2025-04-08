
import React from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=2000&q=80"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 md:py-40 flex flex-col items-center justify-center text-center">
        <p className="text-sm sm:text-base text-white font-medium tracking-widest mb-4">
          REFRESH YOUR WARDROBE WITH OUR LATEST COLLECTION
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8">
          STREET COLLECTION
        </h1>
        <Link
          to="/collections/street"
          className="inline-block bg-white text-noisy-black px-8 py-3 text-base font-medium hover:bg-gray-100 transition-colors"
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};
