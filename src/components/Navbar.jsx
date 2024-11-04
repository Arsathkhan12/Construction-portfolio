import React from 'react';
import logoImage from '../assets/Logo.png'; // Make sure this path is correct

function Navbar() {
  return (
    <header className="flex justify-between items-center p-6 bg-opacity-90 bg-white">
      <a href="#home" className="flex items-center gap-2">
        <img src={logoImage} alt="Logo" className="w-12 h-12" />
        <span className="text-2xl font-bold text-[#FFBF00]">THE BUILDERS</span>
      </a>
      <nav className="flex gap-6">
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
    </header>
  );
}

export default Navbar;
