import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';  // Add this in index.js or App.js
import './index.css';  // Import the index.css file


const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Events />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
