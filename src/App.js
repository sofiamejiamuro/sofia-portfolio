import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

// Components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import PlanetaPeligro from './pages/projects/PlanetaPeligro';
import QuienSabeMas from './pages/projects/QuienSabeMas';
import Pokedex from './pages/projects/Pokedex';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/projects" exact component={Projects}/>
          <Route path="/resume" exact component={Resume}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/planeta-peligro" exact component={PlanetaPeligro}/>
          <Route path="/quien-sabe-mas" exact component={QuienSabeMas}/>
          <Route path="/pokedex" exact component={Pokedex}/>
        </Switch>
      </Router> 
    </>
  );
}

export default App;