import React, { useState } from 'react';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';

interface Iprops {
  linked: boolean;
}

const Header: React.FC<Iprops> = (props: Iprops) => {
  const location = useLocation();
  const activeLink = location.pathname;

  return (
    <header id="header" className={props.linked ? "header-top" : ''}>
      <div className="container">
        <h1><a href="/">Daniel Mogaka</a></h1>
        <a href="/" className="mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
        <h2>I'm a passionate <span>graphic designer</span> from New York</h2>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
            <Link to="/" className={`nav-link ${activeLink === '/' ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            <li>
            <Link to="/about" className={`nav-link ${activeLink === '/about' ? 'active' : ''}`}>
                About
              </Link>
            </li>
            <li>
            <Link to="/resume" className={`nav-link ${activeLink === '/resume' ? 'active' : ''}`}>
                Resume
              </Link>
            </li>
            <li>
            <Link to="/services" className={`nav-link ${activeLink === '/services' ? 'active' : ''}`}>
                Services
              </Link>
            </li>
            <li>
            <Link to="/portfolio" className={`nav-link ${activeLink === '/portfolio' ? 'active' : ''}`}>
                Portfolio
              </Link>
            </li>
            <li>
            <Link to="/contact" className={`nav-link ${activeLink === '/contact' ? 'active' : ''}`}>
                Contact
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <div className="social-links">
          <a href="#" className="twitter"><FaTwitter /></a>
          <a href="#" className="facebook"><FaFacebookF /></a>
          <a href="#" className="instagram"><FaInstagram /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
