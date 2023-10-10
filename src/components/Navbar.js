import React, { useState } from 'react';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <nav className='nav'>
      <div className="container">
        
        <ul className="navbar-list">
          <li onClick={() => handlePageChange('Home')}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => handlePageChange('AboutUs')}>
            <Link to="/about">About Us</Link>
          </li>
          <li onClick={() => handlePageChange('Services')}>
            <Link to="/services">Services</Link>
          </li>
          <li onClick={() => handlePageChange('Support')}>
            <Link to="/support">Support</Link>
          </li>
          <li onClick={() => handlePageChange('News')}>
            <Link to="/news">News</Link>
          </li>
        </ul>
        
        <div className="social-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a>
          <FaSearch onClick={toggleSearch} />
          </a>
          {isSearchVisible && (
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
