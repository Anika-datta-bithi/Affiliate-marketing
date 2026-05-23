import React from 'react';

const Game = () => {
  // Main featured post under Trending
  const trendingFeatured = {
    title: "The Best Gaming Headsets For Professional Gamers",
    author: "Anika",
    date: "Feb 11, 2022",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=90" // Crystal clear white headphones
  };

  // List posts under Trending
  const trendingList = [
    {
      title: "The Best USB Bluetooth Adapters for Your Wireless Devices",
      author: "Anika",
      date: "Feb 11, 2022",
    },
    {
      title: "Budget Friendly Laptop Coolers to Increase Performance and Longevity",
      author: "Anika",
      date: "Feb 11, 2022",
    },
    {
      title: "The Best Gaming Keyboards in 2022 to Level Up Your Gaming Experience",
      author: "Anika",
      date: "Feb 11, 2022",
    },
    {
      title: "The Best AMD Motherboard to Suit Any Computer Needs",
      author: "Anika",
      date: "Feb 11, 2022",
    }
  ];

  // Posts under Hot Deals section
  const hotDeals = [
    {
      category: "GADGET",
      title: "Offers in Ailexpress: Grab this offer.",
      author: "Anika",
      date: "Feb 11, 2022",
      image: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=600&q=90", // Card/Store interface
      isLarge: true
    },
    {
      category: "GADGET",
      title: "Budget Friendly Laptop Coolers to Increase Performance and Longevity",
      author: "Anika",
      date: "Feb 11, 2022",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=400&q=90", // Sleek laptop layout
      isLarge: false
    }
  ];

  return (
    <div className="max-w-7xl pt-90 mx-auto px-4 py-8 font-sans bg-white text-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* ================= TRENDING SECTION (Left & Center columns) ================= */}
        <div className="lg:col-span-2">
          {/* Section Heading */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-[4px] h-6 bg-blue-700 block"></span>
            <h2 className="text-2xl font-bold tracking-tight">Trending</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Large Featured Card */}
            <div className="relative group overflow-hidden bg-zinc-950 text-white rounded-sm h-[400px] md:h-[480px] shadow-sm">
              <img 
                src={trendingFeatured.image} 
                alt={trendingFeatured.title} 
                className="w-full h-full object-cover opacity-90 group-hover:scale-102 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/40 to-transparent">
                <h3 className="text-xl md:text-2xl font-bold leading-tight mb-4 cursor-pointer hover:underline drop-shadow-sm">
                  {trendingFeatured.title}
                </h3>
                <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-xs opacity-90 font-medium">
                  <span>👤 {trendingFeatured.author}</span>
                  <span>•</span>
                  <span>📅 {trendingFeatured.date}</span>
                  <span>•</span>
                  <span>⏱️ {trendingFeatured.readTime}</span>
                </div>
              </div>
            </div>

            {/* Right: Text List Items */}
            <div className="flex flex-col justify-between divide-y divide-dashed divide-zinc-200">
              {trendingList.map((item, index) => (
                <div key={index} className={`pb-4 ${index === 0 ? 'pt-0' : 'pt-4'} last:pb-0`}>
                  <h4 className="font-bold text-base text-zinc-900 leading-snug mb-2 cursor-pointer hover:text-blue-700 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-zinc-500">
                    <span className="flex items-center gap-1">👤 {item.author}</span>
                    <span className="flex items-center gap-1">📅 {item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= HOT DEALS SECTION (Right sidebar column) ================= */}
        <div className="lg:col-span-1">
          {/* Section Heading */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-[4px] h-6 bg-blue-700 block"></span>
            <h2 className="text-2xl font-bold tracking-tight">Hot Deals</h2>
          </div>

          <div className="space-y-8">
            {hotDeals.map((deal, idx) => {
              if (deal.isLarge) {
                return (
                  /* Top Large Deal Block */
                  <div key={idx} className="flex flex-col gap-3 group">
                    <div className="w-full h-[220px] bg-zinc-100 overflow-hidden shadow-sm">
                      <img 
                        src={deal.image} 
                        alt={deal.title} 
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-xs font-bold text-blue-600 tracking-wider uppercase mt-1">
                      {deal.category}
                    </span>
                    <h3 className="text-lg font-bold text-zinc-900 leading-snug cursor-pointer hover:text-blue-700 transition-colors">
                      {deal.title}
                    </h3>
                    <span className="text-xs text-zinc-500">
                      By {deal.author} — {deal.date}
                    </span>
                    <a href="#read" className="text-xs font-bold tracking-wider text-zinc-900 underline underline-offset-4 hover:text-blue-700 transition-colors w-max pt-1">
                      READ MORE
                    </a>
                  </div>
                );
              } else {
                return (
                  /* Bottom Compact Deal Block */
                  <div key={idx} className="border-t border-dashed border-zinc-200 pt-6 group">
                    <div className="flex gap-4 items-start">
                      <div className="w-24 h-24 bg-zinc-100 overflow-hidden flex-shrink-0 shadow-sm">
                        <img 
                          src={deal.image} 
                          alt={deal.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[11px] font-bold text-blue-600 tracking-wider uppercase">
                          {deal.category}
                        </span>
                        <h3 className="text-sm font-bold text-zinc-900 leading-snug cursor-pointer hover:text-blue-700 transition-colors line-clamp-3">
                          {deal.title}
                        </h3>
                        <span className="text-[11px] text-zinc-500">
                          By {deal.author} — {deal.date} {deal.readTime && `— ${deal.readTime}`}
                        </span>
                      </div>
                    </div>
                    <div className="pl-28 mt-2">
                      <a href="#read" className="text-xs font-bold tracking-wider text-zinc-900 underline underline-offset-4 hover:text-blue-700 transition-colors block w-max">
                        READ MORE
                      </a>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Game;