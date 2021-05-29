import React, { useState, useEffect } from 'react';
import './Home.css';

// Components
import HeroSection from '../../components/HeroSection/HeroSection';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';

const Home = () => {

  const [sections, setSections] = useState(true);

  const showSections = () => {
    if(window.innerWidth <= 480){
      setSections(false)
    } else {
      setSections(true)
    }
  };

  useEffect(() => {
    showSections();
  },[])

  window.addEventListener('resize', showSections)
  return (
    <>
      <HeroSection/>
      {
        sections && 
        <>
          <About />
          <Contact />
        </>
      }
    </>
  )
}

export default Home
