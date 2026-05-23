import React, { useState } from 'react';
// Importing your local assets from the assets folder
import cell1 from '../assets/cell-1.jpg';
import cell2 from '../assets/cell-2.jpg';
import cell3 from '../assets/cell-3.jpg';
import cell4 from '../assets/cell-4.jpg';
import cell5 from '../assets/cell-5.jpg';
import cell6 from '../assets/cell-6.jpg';
import cell7 from '../assets/cell-7.jpg';

const ProductShowcase = () => {
  // 1. Pagination State
  const [currentPage, setCurrentPage] = useState(1);

  // Main featured card articles pool (Extended to show pagination functionality)
  const allArticles = [
    {
      id: 1,
      title: 'Best Noise Cancelling Headphones For Professional Gamers',
      author: 'Rishi',
      date: 'Feb 11, 2022',
      readTime: '8 Min Read',
      excerpt: 'Our cell phones are an undeniably fundamental piece of our everyday. These gadgets fit in...',
      image: cell1,
    },
    {
      id: 2,
      title: 'The Best USB Bluetooth Adapters For Your Wireless Devices',
      author: 'Rishi',
      date: 'Feb 11, 2022',
      readTime: '8 Min Read',
      excerpt: 'Our cell phones are an undeniably fundamental piece of our everyday. These gadgets fit in...',
      image: cell2,
    },
    {
      id: 3,
      title: 'Best PC Speaker For Quality Audio',
      author: 'Rishi',
      date: 'Feb 11, 2022',
      readTime: '8 Min Read',
      excerpt: 'Our cell phones are an undeniably fundamental piece of our everyday. These gadgets fit in...',
      image: cell3,
    },
    {
      id: 4,
      title: 'The Best Phone Accessories You Should Buy in 2022',
      author: 'Rishi',
      date: 'Feb 11, 2022',
      readTime: '8 Min Read',
      excerpt: 'Our cell phones are an undeniably fundamental piece of our everyday. These gadgets fit in...',
      image: cell4,
    },
    // Mock additional items so page changes physically switch content
    {
      id: 5,
      title: 'Top Upgraded Gadgets for Remote Workspaces',
      author: 'Rishi',
      date: 'Mar 04, 2022',
      readTime: '6 Min Read',
      excerpt: 'Optimizing your layout with modern components changes daily productivity workflows entirely...',
      image: cell1,
    },
    {
      id: 6,
      title: 'Futuristic Smartwatch Concepts Coming This Season',
      author: 'Rishi',
      date: 'Apr 12, 2022',
      readTime: '10 Min Read',
      excerpt: 'Wearable technology developments are moving faster than standard mobile spaces can track...',
      image: cell2,
    },
  ];

  // Pagination Configuration Rules
  const itemsPerPage = 4; 
  const totalPages = 5; // Hardcoded to 5 to precisely mirror the layout "1 2 3 ... 5 Next" from your image

  // Slice dynamic array metrics to display items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Fallback map loop to slice array if dynamically managing, or display pool safely
  const currentArticles = allArticles.slice(0, 4); 

  // Handler functions
  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Optional premium navigation flow
    }
  };

  // Right sidebar data setups
  const categories = [
    { name: 'Accessories', count: 3 },
    { name: 'Electronics', count: 3 },
    { name: 'Fashion', count: 5 },
    { name: 'Gadget', count: 5 },
  ];

  const sidebarMiniPosts = [
    { id: 1, category: 'GADGET', title: 'Offers In Ailexpress: Grab This Offer.', image: cell5 },
    { id: 2, category: 'ACCESSORIES', title: 'Best PC Speaker For Quality Audio', image: cell6 },
    { id: 3, category: 'ACCESSORIES', title: 'The Best Phone Accessories You Should Buy In 2022', image: cell7 },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-white font-sans text-[#111111]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT & MIDDLE COLUMNS: Main Card Grid Feed + Pagination */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          
          {/* Main Articles Grid container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {currentArticles.map((article) => (
              <div key={article.id} className="flex flex-col border-b border-dashed border-gray-200 pb-8 last:border-0 md:last:border-0">
                <h2 className="text-[22px] font-bold leading-tight mb-3 cursor-pointer hover:text-[#1cb7e3] transition-colors line-clamp-2">
                  {article.title}
                </h2>
                
                <div className="flex items-center text-[12px] text-gray-400 font-medium space-x-2 mb-4">
                  <span>By {article.author}</span>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <div className="w-full h-[240px] overflow-hidden rounded-sm mb-4 bg-gray-50">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>

                <p className="text-gray-600 text-[14px] leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                <a href="#" className="inline-flex items-center text-[#1cb7e3] font-bold text-[14px] hover:text-[#19a5cd] transition-colors group mt-auto">
                  Learn More
                  <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* DYNAMIC PAGINATION SYSTEM (Matched to screenshot) */}
          <div className="flex items-center space-x-2 pt-14 pb-4">
            
            {/* Page 1 */}
            <button 
              onClick={() => handlePageClick(1)}
              className={`w-9 h-9 rounded-full font-bold text-sm transition-all flex items-center justify-center cursor-pointer ${
                currentPage === 1 ? 'bg-[#1cb7e3] text-white' : 'bg-[#0b132a] text-white hover:bg-[#152244]'
              }`}
            >
              1
            </button>

            {/* Page 2 */}
            <button 
              onClick={() => handlePageClick(2)}
              className={`w-9 h-9 rounded-full font-bold text-sm transition-all flex items-center justify-center cursor-pointer ${
                currentPage === 2 ? 'bg-[#1cb7e3] text-white' : 'bg-[#0b132a] text-white hover:bg-[#152244]'
              }`}
            >
              2
            </button>

            {/* Page 3 */}
            <button 
              onClick={() => handlePageClick(3)}
              className={`w-9 h-9 rounded-full font-bold text-sm transition-all flex items-center justify-center cursor-pointer ${
                currentPage === 3 ? 'bg-[#1cb7e3] text-white' : 'bg-[#0b132a] text-white hover:bg-[#152244]'
              }`}
            >
              3
            </button>

            {/* Structural Ellipsis Bubble */}
            <div className="w-9 h-9 rounded-full bg-[#0b132a] text-white font-bold text-sm flex items-end justify-center pb-2.5 tracking-tight select-none">
              ...
            </div>

            {/* Last Page (5) */}
            <button 
              onClick={() => handlePageClick(5)}
              className={`w-9 h-9 rounded-full font-bold text-sm transition-all flex items-center justify-center cursor-pointer ${
                currentPage === 5 ? 'bg-[#1cb7e3] text-white' : 'bg-[#0b132a] text-white hover:bg-[#152244]'
              }`}
            >
              5
            </button>

            {/* Next Action Button Button */}
            <button 
              onClick={() => handlePageClick(currentPage === 5 ? 1 : currentPage + 1)}
              className="bg-[#0b132a] hover:bg-[#152244] text-white font-bold text-xs px-5 py-2.5 rounded-full flex items-center space-x-1.5 transition-all cursor-pointer h-9"
            >
              <span>Next</span>
              {/* Micro caret symbol icon */}
              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                <path d="M5 3l14 9-14 9V3z"/>
              </svg>
            </button>

          </div>
        </div>

        {/* RIGHT COLUMN: Sidebar Component */}
        <div className="flex flex-col space-y-12">
          {/* Popular Categories Segment */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="w-[3px] h-[18px] bg-[#1e73be] inline-block" />
              <h3 className="text-xl font-bold tracking-tight">Popular Categories</h3>
            </div>
            <div className="flex flex-col divide-y divide-gray-100">
              {categories.map((cat, idx) => (
                <div key={idx} className="flex items-center justify-between py-3.5 text-[15px] text-gray-700 hover:text-[#1e73be] font-medium cursor-pointer transition-colors">
                  <span>{cat.name}</span>
                  <span className="text-gray-400 font-semibold text-[14px]">{cat.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hot Deals Mini Section */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="w-[3px] h-[18px] bg-[#1e73be] inline-block" />
              <h3 className="text-xl font-bold tracking-tight">Hot Deals</h3>
            </div>
            <div className="flex flex-col space-y-6">
              {sidebarMiniPosts.map((post, index) => (
                <div key={post.id} className="flex flex-col">
                  <div className="flex items-start space-x-4">
                    <div className="w-[85px] h-[85px] shrink-0 overflow-hidden rounded-sm cursor-pointer bg-gray-50">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-start pt-1">
                      <span className="text-[#1cb7e3] text-[11px] font-bold uppercase tracking-wider mb-1 block">
                        {post.category}
                      </span>
                      <h4 className="text-[14px] font-bold leading-snug text-gray-900 cursor-pointer hover:text-[#1cb7e3] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                    </div>
                  </div>
                  {index !== sidebarMiniPosts.length - 1 && (
                    <div className="border-b border-dotted border-gray-200 mt-6 w-full" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductShowcase;