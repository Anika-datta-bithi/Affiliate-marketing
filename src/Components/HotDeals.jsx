import React from 'react';
// Reusing your assets naming convention
import game1 from '../assets/game-1.jfif'; 
import game2 from '../assets/game-2.jfif';
import game3 from '../assets/game-3.jfif';

const HotDeals = () => {
  // Left side large items
  const mainDeals = [
    {
      id: 1,
      title: 'Best pre-build gaming PC available in amazon.',
      author: 'Rishi',
      date: 'Jan 31, 2022',
      readTime: '8 Min Read',
      image: game1,
    },
    {
      id: 2,
      title: 'Offers in Ailexpress: Grab this offer.',
      author: 'Rishi',
      date: 'Feb 11, 2022',
      readTime: '8 Min Read',
      image: game2,
    },
  ];

  // Right side list items
  const sidebarDeals = [
    {
      id: 1,
      category: 'ACCESSORIES',
      title: 'The Best USB Bluetooth Adapters For Your Wireless Devices',
      date: 'Feb 16, 2022',
      image: game3,
    },
    {
      id: 2,
      category: 'ACCESSORIES',
      title: 'The Best IPhone Accessories You Should Buy',
      date: 'Feb 16, 2022',
      image: game1, // fallback layout using same pattern
    },
    {
      id: 3,
      category: 'GADGET',
      title: "Take A Look At 2022'S Best Deals",
      date: 'Feb 16, 2022',
      image: game2, // fallback layout using same pattern
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-white font-sans text-[#111111]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT & MIDDLE COLUMNS: Main Large Post Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainDeals.map((deal) => (
            <div key={deal.id} className="flex flex-col">
              {/* Blue accent indicator on title block */}
              <div className="flex items-center space-x-2 mb-4">
                <span className="w-[3px] h-[18px] bg-[#1e73be] inline-block" />
                <h2 className="text-xl font-bold tracking-tight">Hot Deals</h2>
              </div>
              
              {/* Meta information above image */}
              <h3 className="text-[22px] font-bold leading-tight mb-3 cursor-pointer hover:text-[#1e73be] transition-colors">
                {deal.title}
              </h3>
              
              <div className="flex items-center text-[12px] text-gray-500 font-medium space-x-2 mb-5">
                <span>By {deal.author}</span>
                <span>•</span>
                <span>{deal.date}</span>
                <span>•</span>
                <span>{deal.readTime}</span>
              </div>

              {/* Box Image container */}
              <div className="w-full h-[300px] overflow-hidden rounded-sm cursor-pointer group">
                <img 
                  src={deal.image} 
                  alt={deal.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                />
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN: Sidebar List Feed */}
        <div className="flex flex-col">
          {/* Sidebar Section Title */}
          <div className="flex items-center space-x-2 mb-6">
            <span className="w-[3px] h-[18px] bg-[#1e73be] inline-block" />
            <h2 className="text-xl font-bold tracking-tight">Hot Deals</h2>
          </div>

          {/* List Stack */}
          <div className="flex flex-col space-y-6">
            {sidebarDeals.map((item, index) => (
              <div key={item.id} className="flex flex-col">
                <div className="flex items-start space-x-4">
                  {/* Small Thumb Square image */}
                  <div className="w-[85px] h-[85px] shrink-0 overflow-hidden rounded-sm cursor-pointer">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text Details right of thumb */}
                  <div className="flex flex-col justify-start">
                    <span className="text-[#1cb7e3] text-[11px] font-bold uppercase tracking-wider mb-1.5 block">
                      {item.category}
                    </span>
                    <h4 className="text-[14px] font-bold leading-snug mb-1.5 cursor-pointer hover:text-[#1cb7e3] transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <div className="flex items-center text-[11px] text-gray-400 font-medium space-x-1">
                      {/* Representing the small icon block element from screenshot */}
                      <span className="w-2.5 h-2.5 bg-gray-400 inline-block rounded-xs mr-0.5" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
                
                {/* Dotted underline separating items matching the mockup */}
                {index !== sidebarDeals.length - 1 && (
                  <div className="border-b border-dotted border-gray-200 mt-6 w-full" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HotDeals;