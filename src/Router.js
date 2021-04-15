import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';

// Sections
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';

// Projects
import PlanetaPeligro from './pages/Projects/projectsPages/PlanetaPeligro';
import QuienSabeMas from './pages/Projects/projectsPages/QuienSabeMas';
import PokemonGo from './pages/Projects/projectsPages/PokemonGo';
import CielitoQuerido from './pages/Projects/projectsPages/CielitoQueridoBot';
import BenAndFrank from './pages/Projects/projectsPages/BenAndFrank';

const Routes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/projects" exact component={Projects}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/planeta-peligro" exact component={PlanetaPeligro}/>
        <Route path="/quien-sabe-mas" exact component={QuienSabeMas}/>
        <Route path="/pokemon-go" exact component={PokemonGo}/>
        <Route path="/cielito-querido" exact component={CielitoQuerido}/>
        <Route path="/ben-and-frank" exact component={BenAndFrank}/>
      </Switch>
    </>
  )
}

export default Routes;