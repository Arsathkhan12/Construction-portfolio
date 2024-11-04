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
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="JoinUs"><JoinUs /></section>
      <Footer />
    </div>
  );
}

export default App;
