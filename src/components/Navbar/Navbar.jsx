import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import './Navbar.css';
import Button from '../Button/Button';
import logo from '../../assets/resumebuilder.png';

const links = [
  { to: '/builder', label: 'Builder' },
  { to: '/templates', label: 'Templates' },
  { to: '/features', label: 'Features' },
  { to: '/pricing', label: 'Pricing' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Snap Resume logo" className="logoimg" />
        </Link>

        {/* Desktop Menu */}
        <nav className="nav-links">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={isActive(to) ? 'active-link' : ''}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="auth-buttons">
          <Link to="/signin">
            <Button className="Signin">Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button className="get-started-btn">Get Started</Button>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={isActive(to) ? 'active-link' : ''}
            >
              {label}
            </Link>
          ))}
          <Link to="/signin" onClick={() => setMenuOpen(false)}>
            <Button className="Signin">Sign In</Button>
          </Link>
          <Link to="/signup" onClick={() => setMenuOpen(false)}>
            <Button className="get-started-btn">Get Started</Button>
          </Link>
        </div>
      )}
    </header>
);
};

export default Navbar;
