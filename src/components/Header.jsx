import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Header () {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className='header'>
      <Link to='/' className='header-logo'>
        <img src='/Logos/logo.avif' alt='' className='header-icon' />
        <span className='header-name'>Tayrona Catering</span>
        <span className='header-tagline'>
          It is more than food, it is an experience.
        </span>
      </Link>

      {/* Hamburger Icon */}
      <button
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label='Toggle navigation menu'
        aria-expanded={isOpen}
      >
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </button>

      {/* Menu Links */}
      <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
        <button className='close-btn' onClick={closeMenu}>
          BACK
        </button>
        <img src='/Logos/logo.avif' alt='' className='dropdown-icon' />
        <ul>
          <li>
            <NavLink to='/' onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/charcuterie' onClick={closeMenu}>
              Charcuterie
            </NavLink>
          </li>
          <li>
            <NavLink to='/catering' onClick={closeMenu}>
              Catering
            </NavLink>
          </li>
          <li>
            <NavLink to='/foodtruck' onClick={closeMenu}>
              Food Truck
            </NavLink>
          </li>
          <li>
            <NavLink to='/contactus' onClick={closeMenu}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to='/cart' onClick={closeMenu}>
              <FontAwesomeIcon icon={faCartShopping} /> Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
