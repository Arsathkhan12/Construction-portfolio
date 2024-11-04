import React from 'react';

function About() {
  return (
    <section 
      id="about" 
      className="relative flex flex-col md:flex-row items-center md:justify-between py-20 px-6 md:px-16"
    >
      <div className="md:w-1/2 flex justify-center z-10">
        <img src="path/to/image.jpg" alt="About me" className="rounded-lg shadow-lg w-3/4" />
      </div>
      <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0 space-y-4 z-10">
        <h2 
          className="text-4xl font-bold text-[#FFBF00]" 
          style={{ textShadow: '2px 2px 4px black' }} // Added text shadow
        >
          Who Are We
        </h2>
        <p className="text-lg leading-relaxed text-white">
          Hello! I'm a passionate developer...
        </p>
        <button className="mt-6 px-8 py-3 text-lg font-semibold bg-[#FFBF00] rounded-full hover:bg-opacity-80 transition-all">
          Contact Us
        </button>
      </div>
    </section>
  );
}

export default About;
