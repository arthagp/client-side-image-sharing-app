import React from 'react';

const Navbar = () => {
  return (
    <nav className="py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-gray-900 text-2xl font-semibold">Splasher</h1>
        <div className="relative ml-6">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
          </span>
          <input
            type="search"
            className="placeholder:text-gray-500 placeholder:text-sm pl-8 py-1 px-2 w-[650px] rounded-full bg-gray-200 h-10 focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Discover a World of Captivating Photos and Images"
          />
        </div>
      </div>
      <ul className="flex space-x-4 mx-8"> 
        <li>
          <a href="#" className="text-[#7a7676] text-md font-semibold  hover:text-indigo-500">Explore</a>
        </li>
        <li>
          <a href="#" className="text-[#7a7676] text-md font-semibold  hover:text-indigo-500">Advertise</a>
        </li>
        <li>
          <a href="#" className="text-[#7a7676] text-md font-semibold  hover:text-indigo-500">Subscribe</a>
        </li>
      </ul>
      <div className="border-l border-gray-500 h-6 mx-6"></div>
      <a href='/login' className="text-[#7a7676] hover:text-indigo-500">Login</a>
      <button className="ml-4 py-1 px-4 border-[1px] text-[#7a7676] rounded-sm hover:bg-indigo-400">Submit Image</button>
    </nav>
  );
}

export default Navbar;
