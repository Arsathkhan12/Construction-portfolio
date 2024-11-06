import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoImage from '../assets/Logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // Disable scrolling when the menu is open
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center p-6 bg-opacity-60 bg-white shadow-md z-50">
      <a href="#home" className="flex items-center gap-2">
        <img src={logoImage} alt="Logo" className="w-32 sm:w-40" />
      </a>

      {/* Desktop Menu */}
      <nav className="hidden sm:flex gap-6">
        {['Home', 'About', 'Projects', 'Join Us', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="text-lg font-medium hover:text-[#FFBF00] transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu - Shows as a vertical list when menuOpen is true */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white flex flex-col items-center gap-4 py-4 shadow-lg sm:hidden">
          {['Home', 'About', 'Projects', 'Join Us', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-lg font-bold hover:text-[#FFBF00] transition-colors"
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
