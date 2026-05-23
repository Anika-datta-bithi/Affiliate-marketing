import React from 'react';

const Footer = () => {
  // Smooth scroll function to go back up to the top of the viewport
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const categories = ['Electronics', 'Accessories', 'Gadget', 'Technology'];
  const legalLinks = ['Privacy Policy', 'Terms of Service', 'FAQ', 'Code of Conduct'];
  const socials = ['Facebook', 'Instagram', 'Pinterest', 'Youtube'];

  return (
    <footer className="w-full bg-[#0b132a] text-white font-sans relative">
      {/* Upper Footer Links Section */}
      <div className="w-full max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Info */}
          <div className="flex flex-col space-y-5">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center bg-[#1cb7e3] text-[#0b132a] font-black italic p-2 rounded-md w-9 h-9 text-xl">
                A
              </div>
              <span className="text-2xl font-extrabold tracking-tight">Affiliate</span>
            </div>
            
            {/* Description Paragraph */}
            <p className="text-gray-400 text-[14px] leading-relaxed max-w-[280px]">
              Affiliate Blogger is a new addition to Rishi theme in mind of creating beautiful affiliate blogging website.
            </p>
            
            {/* Brand Minimal Social Icons (Inline SVGs) */}
            <div className="flex items-center space-x-5 text-gray-400 pt-2">
              {/* Facebook */}
              <a href="#" className="hover:text-white transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h4v-9h3l.5-3H13V6c0-.5.5-1 1-1h2V2h-3a4 4 0 00-4 4v2z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="hover:text-white transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="hover:text-white transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              {/* X (formerly Twitter) */}
              <a href="#" className="hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Category Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-base font-bold tracking-wide">Category</h4>
            <ul className="space-y-3.5 text-gray-400 text-[14px] font-medium">
              {categories.map((item) => (
                <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-base font-bold tracking-wide">Legal</h4>
            <ul className="space-y-3.5 text-gray-400 text-[14px] font-medium">
              {legalLinks.map((item) => (
                <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 4: Follow Us Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-base font-bold tracking-wide">Follow us</h4>
            <ul className="space-y-3.5 text-gray-400 text-[14px] font-medium">
              {socials.map((item) => (
                <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Thin separation line border */}
      <div className="w-full border-t border-gray-800/60" />

      {/* Bottom Footer Section */}
      <div className="w-full max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-[13px] font-medium">
        
        {/* Left Side: Copyright notice */}
        <p className="mb-4 md:mb-0">
          Copyright © 2026 Affiliate - Powered by Rishi Theme
        </p>

        {/* Right Side: Quick secondary legal list & Up Arrow */}
        <div className="flex items-center space-x-6 relative">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
          
          {/* Action Trigger Back To Top Button */}
          <button 
            onClick={scrollToTop}
            className="bg-[#1e73be] hover:bg-[#1a65a7] text-white p-2.5 rounded-sm shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center translate-y-[-4px]"
            title="Scroll to Top"
          >
            <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;