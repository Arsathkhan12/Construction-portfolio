import React from 'react';

function Footer() {
  return (
    <footer className="py-10 px-6 md:px-16 bg-gray-800 text-center">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-[#FFBF00]">Connect with Us</h3>
        <div className="flex justify-center gap-6 text-xl">
          <a href="#linkedin" className="hover:[#FFBF00]">LinkedIn</a>
          <a href="#github" className="hover:text-[#FFBF00]">GitHub</a>
          <a href="#instagram" className="hover:text-[#FFBF00]">Instagram</a>
        </div>
      </div>
      <p className="mt-8 text-gray-400">&copy; 2024 THE BUILDERS COMPANY . All rights reserved.</p>
    </footer>
  );
}

export default Footer;
