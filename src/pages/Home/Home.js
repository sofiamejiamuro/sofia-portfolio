import React from 'react';
import './Home.css';

// Components
import HeroSection from '../../components/HeroSection/HeroSection';
import About from '../About/About';
import Projects from '../Projects/Projects';

const Home = () => {
  return (
    <>
      <HeroSection/>
      <About />
      <Projects />
    </>
  )
}

export default Home
