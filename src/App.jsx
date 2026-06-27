import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryMenu from './components/CategoryMenu';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';
import './index.css';

function App() {
  useScrollReveal();

  return (
    <>
      <main>
        {/* Header Section (Full width, dark background header) */}
        <div className="header-section">
          <Navbar />
          <Hero />
        </div>

        {/* Categories Menu */}
        <div className="reveal">
          <CategoryMenu />
        </div>

        {/* About Section with divider */}
        <div className="section-divider reveal">
          <span>About Us</span>
        </div>
        <div className="reveal">
          <About />
        </div>

        {/* Menu Section with divider */}
        <div className="section-divider reveal">
          <span>Explore Our Menu</span>
        </div>
        <div className="reveal">
          <Menu />
        </div>

        {/* Gallery Section with divider */}
        <div className="section-divider reveal">
          <span>Our Creative Space</span>
        </div>
        <div className="reveal">
          <Gallery />
        </div>

        {/* Call to Action Message */}
        <div className="message2 reveal">
            <h2>Be The Part Of Our Family <br /> By Buying One </h2>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
