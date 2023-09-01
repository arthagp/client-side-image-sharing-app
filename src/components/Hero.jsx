import React from 'react';

const Hero = () => {
  return (
    <div className="hero-section h-[645px] text-white py-20 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-3xl mx-auto text-center mt-28">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">Splasher</h1>
        <h2 className="text-lg md:text-xl lg:text-xl mb-4">The internet’s source for visuals.</h2>
        <h2 className="text-lg md:text-xl lg:text-xl mb-8">Powered by creators everywhere.</h2>
        <div className="relative mx-auto w-full max-w-md">
          <input
            type="search"
            className="w-full px-4 py-2 rounded-full bg-gray-200 text-gray-800 focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Search for images"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute top-2 right-3 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M15.854 14.646a8 8 0 111.415-1.415l4.243 4.243a1 1 0 11-1.414 1.414l-4.243-4.243zm-7.853 0a5 5 0 100-10 5 5 0 000 10z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="text-sm text-gray-200 mt-2">
          Trending: flower, wallpapers, backgrounds, happy, love
        </p>
      </div>
    </div>
  );
};

export default Hero;
