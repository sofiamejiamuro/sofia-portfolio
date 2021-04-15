import React, { useState, useEffect } from 'react';
import './Home.css';

// Components
import HeroSection from '../../components/HeroSection/HeroSection';
import About from '../About/About';
import Projects from '../Projects/Projects';

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
          <Projects />
        </>
      }
    </>
  )
}

export default Home
