import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaFacebookF, 
  FaPinterestP, 
  FaInstagram, 
  FaLinkedinIn, 
  FaRegEnvelope, 
  FaSearch, 
  FaBars, 
  FaTimes, 
  FaChevronDown 
} from 'react-icons/fa';

// Custom X (formerly Twitter) Icon to match the design
const XIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'Technology', href: '#' },
    { name: 'Gadget', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'Electronics', href: '#' },
  ];

  return (
    <header className="w-full font-sans bg-white shadow-sm">
      {/* --- Top Bar --- */}
      <div className="bg-[#f8faff] border-b border-gray-100 py-2.5 px-4 md:px-8 lg:px-16 flex justify-between items-center text-sm text-[#3b4352]">
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="text-[#3b5998] hover:opacity-80 transition-opacity"><FaFacebookF className="w-3.5 h-3.5" /></a>
          <a href="#" className="text-[#cb2027] hover:opacity-80 transition-opacity"><FaPinterestP className="w-3.5 h-3.5" /></a>
          <a href="#" className="text-[#e1306c] hover:opacity-80 transition-opacity"><FaInstagram className="w-3.5 h-3.5" /></a>
          <a href="#" className="text-[#0077b5] hover:opacity-80 transition-opacity"><FaLinkedinIn className="w-3.5 h-3.5" /></a>
          <a href="#" className="text-[#000000] hover:opacity-80 transition-opacity"><XIcon /></a>
        </div>

        {/* Contact Email */}
        <div className="flex items-center gap-2 font-medium tracking-wide">
          <FaRegEnvelope className="w-4 h-4 text-[#0f172a]" />
          <a href="mailto:contact@yourwebsite.com" className="hover:underline">contact@yourwebsite.com</a>
        </div>
      </div>

      {/* --- Main Navigation Bar --- */}
      <nav className="py-5 px-4 md:px-8 lg:px-16 flex justify-between items-center relative">
        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="relative w-9 h-9 flex items-center justify-center">
            {/* Double chevron custom shape layer styling */}
            <div className="absolute inset-0 bg-[#00d2ff] opacity-80 transform -skew-x-12 rounded-sm"></div>
            <div className="absolute inset-0 bg-[#2563eb] transform scale-75 -skew-x-12 rounded-sm translate-x-1"></div>
          </div>
          <span className="text-2xl font-bold tracking-tight text-[#0f172a]">Affiliate</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 font-medium">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`transition-colors duration-200 text-[15px] ${
                link.active 
                  ? 'text-[#2563eb] font-semibold' 
                  : 'text-[#1e293b] hover:text-[#2563eb]'
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Dropdown Menu Item */}
          <div className="relative group cursor-pointer flex items-center gap-1 text-[15px] text-[#1e293b] hover:text-[#2563eb] transition-colors duration-200">
            <span>More</span>
            <FaChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
            
            {/* Placeholder Dropdown Box */}
            <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md border border-gray-100 py-2 hidden group-hover:block z-50">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">About Us</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Contact</a>
            </div>
          </div>
        </div>

        {/* Desktop Search & Mobile Menu Button */}
        <div className="flex items-center gap-5">
          <button className="text-[#0f172a] hover:text-[#2563eb] transition-colors duration-200 focus:outline-none">
            <FaSearch className="w-4 h-4 stroke-[1.5]" />
          </button>
          
          {/* Mobile Toggle Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-[#0f172a] hover:text-[#2563eb] transition-colors duration-200 focus:outline-none"
          >
            {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>

        {/* --- Mobile Slide-out Menu --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-md py-4 px-6 flex flex-col gap-4 lg:hidden z-50"
            >
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-[15px] font-medium py-1 ${
                    link.active ? 'text-[#2563eb]' : 'text-[#1e293b]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center justify-between py-1 text-[15px] font-medium text-[#1e293b]">
                <span>More</span>
                <FaChevronDown className="w-3 h-3" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;