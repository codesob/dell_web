import React, {useEffect} from 'react';
import './Support.css';  
import img40 from './images/help.png';
import img41 from './images/pro.jpg'
import {BiRun} from 'react-icons/bi'
import {MdOutlineSettingsSuggest} from 'react-icons/md'
import {GrUserWorker} from 'react-icons/gr'


const Support = () => {
  const icons = {
    color: 'skyblue',  
    fontSize: '2em'  
  };
  const supportContainerStyle = {
    backgroundImage: `url(${img41})`, 
    backgroundSize: 'cover',  
    backgroundRepeat: 'no-repeat',  
    backgroundPosition: 'center',  
    height: '20vh'  
  };

  useEffect(() => {
    const handleScroll = () => {
      const imageSection = document.querySelector('.contact-info');
      const scrollPosition = window.scrollY;

      if (scrollPosition >= 500) {
        imageSection.classList.add('scroll');
      } else {
        imageSection.classList.remove('scroll');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="support-container">
      <div className="contact-info" style={supportContainerStyle}>
        <div className="left-content">
          <h3>Have Computer Problems?</h3>
          <p>Get Help Right Now</p>
        </div>
        <div className="right-content">
          <h3>Contact Us</h3>
          <p>Contact Us -Out staff ready to help solve the issue on time</p>
          <form>
            <textarea placeholder="Enter your Name"></textarea>
            <textarea placeholder="Enter your Address"></textarea>
            <textarea placeholder="Enter your issue"></textarea>
            <textarea placeholder="Enter your feedback"></textarea>
            
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="image-section">
        <div className="left-content">
          <h3>HOW CAN WE HELP?</h3>
          <p>Some text on the left side of the second div.</p>
        </div>
        <div className="right-content">
          <img src= {img40} alt="Image" />
        </div>
      </div>

      <div className="icon-section">
        <div className="small-item">
          <MdOutlineSettingsSuggest style={icons} />
          <p>Qualifies Services</p>
        </div>
        <div className="small-item">
          <GrUserWorker style={icons} /> 
          <p>Always Available</p>
        </div>
        <div className="small-item">
          <BiRun style={icons} />
          <p>Quick Response</p>
        </div>
      </div>

      <div className="hover-section">
  <div className="left-content">
    <h3>Do you have any questions?</h3>
    <p>This is some text on the left side.</p>
    <div className="dropdown-container">
      <button className="hover-text sky-blue-btn">Hover for more info.</button>
      <div className="dropdown-content">
        <p>Dropdown content goes here.</p>
      </div>
    </div>
  </div>
       
        <div className="right-content">
          <div className="hexagon"></div>
          <div className="hexagon1"></div>
          <div className="hexagon2"></div>
        </div>
    </div>
    </div>
  );
};

export default Support;
