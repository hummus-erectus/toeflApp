import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo_transparent from '../assets/logo_transparent.png' 

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }


  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <div className="logo">
          <Link to='/'>
            <img className='logo-img' src={logo_transparent} alt='TOEFL Speaking Logo'/>
          </Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <FontAwesomeIcon className='' icon={faBars} />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li><Link to='/' onClick={() => setShowNavbar(false)}>Home</Link></li>
            <li><Link to='/guide' onClick={() => setShowNavbar(false)}>How To Use</Link></li>
            <li><Link to='/tips' onClick={() => setShowNavbar(false)}>TOEFL Tips</Link></li>
            <li><Link to='/about' onClick={() => setShowNavbar(false)}>About</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar