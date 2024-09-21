import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import Stats from './Stats';
import Categories from './Categories';
import Courses from './Courses';
import Footer from '../Footer';

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Trigger content display after initial render
    const timer = setTimeout(() => setShowContent(true), 100); // Adjust the delay if needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">
      {/* Navbar will stay at the top */}
      <Navbar />

      {/* Apply transition classes based on state */}
      <div
        className={`transition-opacity duration-1000 ease-in-out ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Hero section for introduction */}
        <Hero />

        {/* Stats section */}
        <Stats />

        {/* Categories section */}
        <Categories />

        {/* Courses section */}
        <Courses />

        {/* Footer section */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
