// Footer.js

import React, { useState } from 'react';
import './Footer.css';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
import dellb from './images/dellb.png'
import { Link } from 'react-router-dom';
import img50 from './images/c2.jpg'
import img51 from "./images/c3.jpg";



const Footer = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }; 

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={dellb} alt="Logo" />
          <p className="small1-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="footer-links">
        <h3>Quick Link</h3>
        <ul>
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
      </div>

        
      <div className="footer-news">
  <h3>Recent News</h3>
  <ul>
    <li>
      <div className="news-item">
        <img src={img50} alt="News Item 1" />
        <p>News Item 1 text description goes here.</p>
      </div>
    </li>
    <li>
      <div className="news-item">
        <img src={img51} alt="News Item 2" />
        <p>News Item 2 text description goes here.</p>
      </div>
    </li>
  </ul>
</div>

        <div className="footer-contact">
          <h3>Contact Info</h3>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
          <div className='social-icons'>
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
          </div>
          <div/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
