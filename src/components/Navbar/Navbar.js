import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

//import PDF from '../../pages/Resume/SOFIA-MEJIA-CV-UX.pdf';

const Navbar = () => {
  
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false)
    } else {
      setButton(true)
    }
  };

  useEffect(() => {
    showButton();
  },[])

  window.addEventListener('resize', showButton)

  return(
    <>
      <nav className="navbar">
        <div className="navbar-container">
         {/*  <Link to="/" className="navbar-logo">
            SOFIA <i class="far fa-comment"></i>
          </Link> */}
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
         {/*  { button && <Button buttonStyle='btn--outline'>SING UP</Button> } */}
        </div>
      </nav>
    </>
  )
}

export default Navbar