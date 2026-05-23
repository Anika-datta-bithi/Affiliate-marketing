import React from 'react';
// Assuming the banner image is also saved in your assets folder
import bannerBg from '../assets/game-1.jfif'; 

const Crumb = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      {/* Banner Container */}
      <div className="relative w-full h-[220px] rounded-sm overflow-hidden flex items-center justify-between px-12 bg-black">
        
        {/* Background Image */}
        <img 
          src={bannerBg} 
          alt="New iPhone 13 Banner" 
          className="absolute inset-0 w-full h-full object-cover object-left opacity-90"
        />
        
        {/* Dark overlay to ensure text contrast if the image is too bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/20 pointer-events-none" />

        {/* Left Side Content */}
        <div className="relative z-10 flex flex-col justify-center text-white">
          <h2 className="text-3xl font-extrabold tracking-tight mb-3">
            New Iphone 13
          </h2>
          <p className="text-gray-200 text-base font-medium tracking-wide">
            Coming Soon
          </p>
        </div>

        {/* Right Side Button */}
        <div className="relative z-10">
          <button className="bg-[#1cb7e3] hover:bg-[#19a5cd] text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-md transition-colors duration-200 cursor-pointer">
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
};

export default Crumb;