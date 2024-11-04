import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-16 bg-white-800">
      <h2 
        className="text-center text-4xl font-bold text-[#FFBF00] mb-10" // Added margin-bottom
        style={{ textShadow: '2px 2px 4px black' }} 
      >
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array(6).fill(0).map((_, i) => (
          <div 
            key={i} // Added key prop for React list
            className="p-6 bg-gray-700 rounded-lg shadow-lg mb-6" // Added margin-bottom to project cards
          >
            <h3 className="text-2xl font-semibold mb-3 text-[#FFBF00]">Project {i + 1}</h3>
            <p className="text-lg">Project description goes here...</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
