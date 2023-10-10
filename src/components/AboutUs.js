import React, { useEffect }  from 'react';
import './AboutUs.css';
import { FaViber, FaEnvelope, FaMapMarker } from 'react-icons/fa';
import img23 from './images/Group404.png';
import img24 from './images/icon1.png';
import img25 from './images/icon2.png';
import img26 from './images/icon3.png';
import img27 from './images/icon4.png';
import img28 from './images/extra1.png';
import img29 from './images/extra2.png';
import img30 from './images/extra3.png';
import img31 from './images/extra4.png';

const AboutUs = () => {
  useEffect(() => {
    const handleScroll = () => {
    const imageSection = document.querySelector('.image');
      const scrollPosition = window.scrollY;
      const threshold = 500;
    

      if (scrollPosition >= threshold) {
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
    <div>
      <div className="image">
        <h2>PROFESSIONAL COMPUTER <br /> REPAIR SERVICES</h2>
        <p>75% WORK FINISHED WITHIN 24 HOURS <br /> DEPENDING ON PARTS AVAILABILITY</p>
      </div>

      <div className="svg">
        <div className="cont">
          <h3>A FEW WORDS ABOUT US</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
          </p>
        </div>
        <img src={img23} alt="SVG Image" />
      </div>

      <div className="big-div">
        <h2>THE HIGH STANDARD TRUSTED & <br /> PROFESSIONAL SERVICE</h2>
      </div>

      <div className="main-contain">
        <div className="left-section">
          <div className="small-box">
            <div className="row">DO YOU NEED ANY HELP WITH COMPUTER MAINTENANCE?</div>
            <h5 className="h5">Contact Us - Our staff are ready to help solve that issue on time</h5>

            <div className="row">
              <FaViber className="icon" />
              <span className="icon-text">123-456-7890 (Viber)</span>
            </div>
            <div className="row">
              <FaEnvelope className="icon" />
              <span className="icon-text">example@example.com</span>
            </div>
            <div className="row">
              <FaMapMarker className="icon" />
              <span className="icon-text">Baneshwor, Kathmandu, Nepal</span>
            </div>
            <button className="contact-button">Contact Us</button>
          </div>
        </div>

        <div className="right-section">
          <div className="contain">
            <div className="smaller-box">
              <div className="small-item">
                <img src={img24} alt="Image 1" />
                <p>100% GENUINE PARTS SALES</p>
              </div>

              <div className="small-item">
                <img src={img25} alt="Image 2" />
                <p>ALL KINDS OF COMPUTERS REPAIR</p>
              </div>
            </div>

            <div className="smaller-box">
              <div className="small-item">
                <img src={img26} alt="Image 3" />
                <p>BEST SERVICE IN THE TWO</p>
              </div>

              <div className="small-item">
                <img src={img27} alt="Image 4" />
                <p>16/7 HOUR SUPPORT</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dell-container">
        <div className="s-text">
          <p className='bubble'>SOMETHING</p>
          <p className='text'>SMTH STH SMTH....?</p>
        </div>
      </div>

      <section className="die">
        <div className="conte">
          <img src={img28} alt="Processor" />
          <h2>500</h2>
          <p>Repaired</p>
        </div>
        <div className="conte">
          <img src={img29} alt="Ram" />
          <h2>8+</h2>
          <p>Experience</p>
        </div>
        <div className="conte">
          <img src={img30} alt="Hard Drive" />
          <h2>1500+</h2>
          <p>Client trust</p>
        </div>
        <div className="conte">
          <img src={img31} alt="Solid State Drive" />
          <h2>3000+</h2>
          <p>Products Fixed</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
