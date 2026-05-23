import React from 'react';
// Import local photo assets from your assets folder
import cell1 from '../assets/cell-1.jpg';
import cell4 from '../assets/cell-4.jpg';
import cell3 from '../assets/cell-3.jpg';
import cell6 from '../assets/cell-6.jpg';

const Hero = () => {
  const mainPost = {
    category: "Accessories",
    title: "The Best Phone Accessories You Should Buy in 2022",
    author: "Rishi",
    date: "Feb 11, 2022",
    image: cell4, // Assigned cell-4.jpg here
  };

  const sidePosts = [
    {
      title: "Offers in Ailexpress: Grab this offer.",
      date: "Feb 11, 2022",
      image: cell1, // Assigned cell-1.jpg here
    },
    {
      title: "Best PC Speaker for Quality Audio",
      date: "Feb 11, 2022",
      image: cell3, // Assigned cell-3.jpg here
    },
    {
      title: "Best pre-build gaming PC available in amazon.",
      date: "Jan 31, 2022",
      image: cell6, // Assigned cell-6.jpg here
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 font-sans bg-white">
      {/* Main Grid Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto lg:h-[550px]">
        
        {/* 1. Large Left Post (Accessories Layout) */}
        <div className="relative group overflow-hidden bg-zinc-950 text-white h-[380px] lg:h-full shadow-md">
          <img 
            src={mainPost.image} 
            alt={mainPost.title} 
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/40 to-transparent">
            <span className="inline-block bg-[#1e73be] text-white text-xs font-semibold uppercase px-2.5 py-1 mb-3 w-max tracking-wider rounded-sm">
              {mainPost.category}
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4 cursor-pointer hover:text-gray-200 transition-colors drop-shadow-sm">
              {mainPost.title}
            </h1>
            <div className="flex items-center gap-4 text-xs md:text-sm opacity-90 font-medium">
              <span>BY {mainPost.author.toUpperCase()}</span>
              <span>—</span>
              <span>{mainPost.date}</span>
            </div>
          </div>
        </div>

        {/* Right Side Grid Wrapper */}
        <div className="flex flex-col gap-4 h-full">
          
          {/* Top Row: Split columns (Aliexpress Cards & Speaker) */}
          <div className="grid grid-cols-2 gap-4 h-1/2 min-h-[190px]">
            {sidePosts.slice(0, 2).map((post, idx) => (
              <div key={idx} className="relative group overflow-hidden bg-zinc-950 text-white h-full shadow-md">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/30 to-transparent">
                  <h2 className="text-sm md:text-base font-bold leading-snug mb-2 cursor-pointer hover:text-[#1cb7e3] transition-colors line-clamp-2 drop-shadow-sm">
                    {post.title}
                  </h2>
                  <span className="text-xs font-medium opacity-80">{post.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: Full width column (Gaming PC Case) */}
          <div className="relative group overflow-hidden bg-zinc-950 text-white h-1/2 min-h-[190px] shadow-md">
            <img 
              src={sidePosts[2].image} 
              alt={sidePosts[2].title} 
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/30 to-transparent">
              <h2 className="text-base md:text-xl font-bold leading-snug mb-2 cursor-pointer hover:text-[#1cb7e3] transition-colors drop-shadow-sm">
                {sidePosts[2].title}
              </h2>
              <span className="text-xs font-medium opacity-80">{sidePosts[2].date}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Hero;