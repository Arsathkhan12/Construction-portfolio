import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';
import backgroundImage from './assets/asd.jpg';

function App() {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed', // Optional for parallax effect
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default App;
