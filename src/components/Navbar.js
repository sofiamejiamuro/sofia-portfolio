import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// Components
import Button from './Button';

function Navbar() {
  
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return(
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            SOFIA <i class="far fa-comment"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                ABOUT ME
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                PROJECTS
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                RESUME
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                CONTACT ME
              </Link>
            </li>
          </ul>
          <Button></Button>
        </div>
      </nav>
    </>
  )
}

export default Navbar