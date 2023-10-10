import React from 'react';
import img19 from './images/c1.jpg';
import img20 from './images/kalu.jpg';
import img21 from './images/gori.PNG';
import './Client.css';

const Client = () => {
  return (
    <div className="dell-container">
      <div className="s-text">
        <p className='bubble'>TESTIMONIALS</p>
        <p className='text'>WHAT OUR CLIENT SAY....?</p>
      </div>
      <section className="three-divs">
        <div className="content15">
          <div className="profile">
            <p>Lana Hawkin</p>
            <img src={img19} alt="Profile 1" className="profile-image" />
            <div className="profile-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
        <div className="content16">
          <div className="profile">
            <p>Kalu Prasad Baun</p>
            <img src={img20} alt="Profile 2" className="profile-image" />
            <div className="profile-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
        <div className="content17">
          <div className="profile">
            <p>Junmaya Gaule</p>
            <img src={img21} alt="Profile 3" className="profile-image" />
            <div className="profile-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Client;
