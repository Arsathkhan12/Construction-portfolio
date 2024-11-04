import React from 'react';
import aboutImg from "../assets/image.jpg";

function About() {
  return (
    <section 
      id="about" 
      className="relative flex flex-col md:flex-row items-center py-20 px-6 md:px-16"
    >
      <div className="md:w-1/2 flex justify-center z-10">
        <img 
          className="rounded-2xl" 
          src={aboutImg} 
          alt="about" 
          style={{ transformOrigin: "center" }}
        />
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 space-y-4 z-10">
        <div className="bg-black bg-opacity-50 p-6 rounded-xl shadow-lg">
          <h2 
            className="text-4xl font-bold text-[#FFBF00]" 
            style={{ textShadow: '2px 2px 4px black' }}
          >
            Who Are We
          </h2>
          <p className="text-lg leading-relaxed text-white mt-4">
            Welcome to The Builders Construction Company, where we bring your dreams to life with precision, quality, and dedication. Based in Kalmunai, we specialize in a wide range of construction services, including residential, commercial, and industrial projects. With a team of experienced professionals, we are committed to building structures that stand the test of time while exceeding client expectations.

            Our company is driven by a passion for innovation, integrity, and customer satisfaction. We understand that each project is unique, and we work closely with our clients to ensure every detail reflects their vision. From concept to completion, we are your trusted partner in construction, delivering high-quality workmanship on time and within budget.

            Let us help you build a future you can be proud of.
          </p>
          <button className="mt-6 px-8 py-3 text-lg font-semibold bg-[#FFBF00] rounded-full hover:bg-opacity-80 transition-all">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
