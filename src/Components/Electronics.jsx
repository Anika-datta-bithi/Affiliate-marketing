import React from 'react';
import game1 from '../assets/game-1.jfif';
import game2 from '../assets/game-2.jfif';
import game3 from '../assets/game-3.jfif';

const Electronics = () => {
  // Array updated with your imported local assets
  const articles = [
    {
      id: 1,
      category: 'Electronics',
      title: 'Portal Storage Devices: The Best in the Market',
      author: 'RISHI',
      date: 'FEB 11, 2022',
      image: game1,
    },
    {
      id: 2,
      category: 'Electronics',
      title: 'Best Tablets for All Your Multitasking Needs',
      author: 'RISHI',
      date: 'FEB 11, 2022',
      image: game2,
    },
    {
      id: 3,
      category: 'Electronics',
      title: 'Best Monitor for Designers under $1500',
      author: 'RISHI',
      date: 'FEB 11, 2022',
      image: game3,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {articles.map((article) => (
          <div 
            key={article.id} 
            className="relative h-[450px] w-full overflow-hidden group cursor-pointer"
          >
            {/* Dark tint overlay */}
            <div className="absolute inset-0 bg-black/20 z-10 transition-colors duration-300 group-hover:bg-black/30" />
            
            <img
              src={article.image}
              alt={article.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Content card overlay */}
            <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col items-start justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-24">
              
              <span className="bg-[#1e73be] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm mb-4">
                {article.category}
              </span>

              <h3 className="text-white text-2xl font-bold leading-snug mb-3 hover:text-gray-200 transition-colors duration-200">
                {article.title}
              </h3>

              <div className="flex items-center text-[11px] font-semibold tracking-wider text-gray-300 uppercase space-x-1">
                <span>BY {article.author}</span>
                <span className="text-gray-400">—</span>
                <span>{article.date}</span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;