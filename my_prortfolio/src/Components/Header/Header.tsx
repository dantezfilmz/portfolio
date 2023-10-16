import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';

interface Iprops {
  linked: boolean;
}

const Header: React.FC<Iprops> = ({ linked }: Iprops) => {
  const location = useLocation();
  const activeLink = location.pathname;

  const navLinks = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/resume', text: 'Resume' },
    { path: '/services', text: 'Services' },
    { path: '/portfolio', text: 'Portfolio' },
    { path: '/contact', text: 'Contact' },
  ];

  return (
    <header id="header" className={linked ? 'header-top' : ''}>
      <div className="container">
        <h1><Link to="/">Daniel Mogaka</Link></h1>
        <a href="/" className="mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
        <h2>I am an <span>intrepid traveler</span>, an <span>adventurous filmmaker</span>, and a seeker of thrilling journeys. 🌍</h2>

        <nav id="navbar" className="navbar">
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className={`nav-link ${activeLink === link.path ? 'active' : ''}`}>
                  {link.text}
                </Link>
              </li>
            ))}
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
