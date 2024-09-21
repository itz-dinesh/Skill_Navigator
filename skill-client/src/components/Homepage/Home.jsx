import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import Stats from './Stats';
import Categories from './Categories';
import Courses from './Courses';
import Footer from '../Footer';

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const coursesRef = useRef(null); // Create a ref for the Courses section
  const footerRef = useRef(null); // Create a ref for the Footer section

  useEffect(() => {
    // Trigger content display after initial render
    const timer = setTimeout(() => setShowContent(true), 100); // Adjust the delay if needed
    return () => clearTimeout(timer);
  }, []);

  const scrollToCourses = () => {
    if (coursesRef.current) {
      coursesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      {/* Navbar will stay at the top */}
      <Navbar 
        onCoursesClick={scrollToCourses} 
        onHomeClick={scrollToTop} 
        onAboutClick={scrollToFooter} // Pass scrollToFooter function
      />

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
        <div ref={coursesRef}> {/* Attach the ref to this div */}
          <Courses />
        </div>

        {/* Footer section */}
        <div ref={footerRef}> {/* Attach the ref to this div */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
