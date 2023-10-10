import React, { useState } from 'react';
import Map from './Map';
import './Contact.css';

const Contact = () => {
  const [location, setLocation] = useState(null);

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  return (
    <div>
      <div className="map-container">
        <Map onChange={handleLocationChange} location={location} />
      </div>
      <div className="contact-form">
        <form>
          <h2>Contact Us</h2>
          <div>
            <label>Name:</label>
            <input type="text" />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" />
          </div>
          <div>
            <label>Number:</label>
            <textarea />
          </div>
          <div>
            <label>Message:</label>
            <textarea />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
