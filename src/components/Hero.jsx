import React from 'react';

function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative">
      <div className="absolute inset-0 bg-white bg-opacity-60"></div>
      <div className="relative z-10 text-center">
        <h3 className="text-xl tracking-widest">WELCOME TO</h3>
        <h1 className="text-6xl md:text-8xl font-extrabold uppercase mt-4 mb-6">THE BUILDERS</h1>
        <button className="px-8 py-4 text-lg font-semibold bg-[#FFBF00] rounded-full hover:bg-[#FFBF00] transition-all">
          Explore More
        </button>
      </div>
    </section>
  );
}

export default Hero;
