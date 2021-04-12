import React from 'react';
import '../App.css';

// Components
import HeroSection from '../components/HeroSection';
import About from './About';
import Projects from './Projects';

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
