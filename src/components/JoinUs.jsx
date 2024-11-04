import React from 'react';

function JoinUs() {
  return (
    <section id="join-us" className="py-20 px-6 md:px-16 bg-gray-900 text-center">
      <h2 className="text-4xl font-bold text-[#FFBF00] mb-8">Join Us</h2>
      <form className="space-y-6">
        <input type="text" placeholder="Your Name" className="w-full max-w-md p-3 rounded-full bg-gray-700 text-white" />
        <input type="email" placeholder="Your Email" className="w-full max-w-md p-3 rounded-full bg-gray-700 text-white" />
        <button type="submit" className="px-8 py-3 bg-[#FFBF00] text-lg font-semibold rounded-full hover:bg-[#FFBF00] transition-all">
          Join Now
        </button>
      </form>
    </section>
  );
}

export default JoinUs;
