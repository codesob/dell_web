// Header.js

import React, { useState } from 'react';
import { FaMapMarker, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Header.css';
import dell from './images/dell.png';
import telegramLogo from './images/tele.png'; 

const Header = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleGetQuoteClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleLogoClick = () => {
    alert('Thank you for the conversation!');
  };

  return (
    <header className="header">
      <div className="header-logo" onClick={handleLogoClick}>
        <img src={dell} alt="Logo" />
      </div>
      <div className="header-contact">
        <div className="contact-item">
          <FaMapMarker />
          <span>
            Visit Us <br />
            <span className="small-text">Baneshwor, KTM</span>
          </span>
        </div>
        <div className="contact-item">
          <FaPhone />
          <span>
            Call Us
            <br />
            <span className="small-text">+977 01-45367283</span>
          </span>
        </div>
        <div className="contact-item">
          <FaEnvelope />
          <span>
            Email Us
            <br />
            <span className="small-text">biz@dellservicenepal.com</span>
          </span>
        </div>
        <button className="get-quote-button" onClick={handleGetQuoteClick}>
          Get Quote
        </button>
      </div>

      {isFormVisible && <QuoteForm onCloseForm={() => setIsFormVisible(false)} />}
    </header>
  );
};

const QuoteForm = ({ onCloseForm }) => {
  const handleClose = () => {
    onCloseForm();
  };

  return (
    <div className="quote-form-container">
      <div className="quote-form">
        <button className="close-button" onClick={handleClose}>
          X
        </button>
        <h2>Let's Talk</h2>
        <p>Lorem Ipsum</p>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Contact Phone" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Contact Email" />
          </div>
          <div className="form-group">
            <select>
              <option value="">Select Service</option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 2</option>
            </select>
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="3"></textarea>
          </div>
        </form>
        <a href="https://t.me/yourtelegramlink" target="_blank" rel="noopener noreferrer">
          <img src={telegramLogo} alt="Telegram Logo" className="telegram-logo" />
        </a>
      </div>
    </div>
  );
};

export default Header;
