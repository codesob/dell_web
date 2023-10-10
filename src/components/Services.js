import React, {useEffect, useState} from 'react';
import './Services.css';
import { FaDesktop, FaLaptop, FaClock, FaBatteryFull, FaServer, FaFan, FaMicrochip, FaDeskpro } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { BiSolidBank } from 'react-icons/bi';
import img31 from './images/rating.png'
import img32 from './images/4.5.jpg'

const Services = () => {
  const iconStyle = {
    color: '#94C44C',  
    fontSize: '2em'  
  };
  const [rating, setRating] = useState(null);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  useEffect(() => {
    const handleScroll = () => {
      const imageSection = document.querySelector('.div1');
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
    <div className="main-container">
      <div className="div1">
        <h2>Services</h2>
        <p>We serve you</p>
      </div>
     
  
      <div className="div2">
        <div className="left-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris ultrices eros in cursus. Aliquet nec ullamcorper sit amet risus. Urna cursus eget nunc scelerisque viverra. Integer vitae justo eget magna fermentum iaculis. Quisque sagittis purus sit amet volutpat consequat. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Lacinia at quis risus sed vulputate odio ut. Amet aliquam id diam maecenas ultricies. Erat velit scelerisque in dictum. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Elit pellentesque habitant morbi tristique senectus. Tristique magna sit amet purus gravida quis. Et tortor at risus viverra adipiscing at in.
            <br />Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Ornare quam viverra orci sagittis. Duis at consectetur lorem donec. Pharetra et ultrices neque ornare aenean euismod. Libero enim sed faucibus turpis. Eget aliquet nibh praesent tristique magna sit amet. Volutpat ac tincidunt vitae semper quis. Amet nisl suscipit adipiscing bibendum est. Massa vitae tortor condimentum lacinia quis. Vulputate odio ut enim blandit volutpat maecenas volutpat. Ac tortor vitae purus faucibus ornare suspendisse sed.</p>
          <li>Lorem ipsum dolor sit amet, .</li>
          <li>Lorem ipsum dolor sit amet, .</li>
          <li>Lorem ipsum dolor sit amet, .</li>
          <li>Lorem ipsum dolor sit amet, .</li>
          <li>Lorem ipsum dolor sit amet, .</li>
          <li>Lorem ipsum dolor sit amet, .</li>
          <li>Lorem ipsum dolor sit amet, .</li>
          <li>Lorem ipsum dolor sit amet, .</li>
          <li>Lorem ipsum dolor sit amet, .</li>
          <li>Lorem ipsum dolor sit amet, .</li>
          <li>Lorem ipsum dolor sit amet, .</li>
          <li>Lorem ipsum dolor sit amet, .</li>
        </div>
       
        <div className="right-content">
          <div className="rating-card">
            <h3>Rating Card</h3>
            <img src={img31}></img>
            <form className="rating-form">
              <div className="text-section">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" />
              </div>
           

              <div className="text-section">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="3"></textarea>
              </div>

              <div className="bar-graphs">
     
      <div className="rating">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => handleRatingChange(ratingValue)}
              />
              <span className={ratingValue <= rating ? 'checked' : ''}></span>
            </label>
          );
        })}
      </div>
      <p>Your rating: {rating}</p>
    </div>

              <button type="submit">Submit</button>
              
            </form>
            <img src={img32}></img>
          </div>
        </div>
     

      <div className="div3">
        <div className="v-text">
          <p className='bubble'>PROCESSES</p>
          <p className='text'>THREE STEPS SOLUTTION</p>
          <p>LOREM IPSUM</p>
        </div>
        </div>

        <div className="small-item">
          <FaLaptop style={iconStyle} />
          <p>BRING DAMAGE DEVICES</p>
        </div>
        <div className="small-item">
          <AiFillSetting style={iconStyle} />
          <p>DIAGNOSIS & SOLVE ISSUES</p>
        </div>
        <div className="small-item">
          <FaClock style={iconStyle} />
          <p>RETURN PERFECT DEVICES</p>
        </div>
   

      <div className="div3">
        <div className="v-text">
          <p className='bubble'>SERVICES</p>
          <p className='text'>OUR REPAIR SERVICES</p>
        </div>
        </div>

        <div className="small-item">
          <FaLaptop style={iconStyle} />
          <p>FREE DIAGNOSIS</p>
        </div>
        <div className="small-item">
          <FaBatteryFull style={iconStyle} />
          <p>BATTERY ISSUES</p>
        </div>
        <div className="small-item">
          <FaServer style={iconStyle} />
          <p>DATA RECOVERY</p>
        </div>
        <div className="small-item">
          <FaFan style={iconStyle} />
          <p>FAN ISSUES</p>
        </div>
        <div className="small-item">
          <FaMicrochip style={iconStyle} />
          <p>CPU ISSUES</p>
        </div>
     
      <div className="div3">
        <div className="v-text">
          <p className='bubble'>WHY</p>
          <p className='text'>WHY CHOOSE ..?</p>
        </div>
        </div>

        <div className="small-item" >
          <BiSolidBank style={iconStyle} />
          <p>BULK DISCOUNT</p>
        </div>
        <div className="small-item">
          <BiSolidBank style={iconStyle} />
          <p>BULK DISCOUNT</p>
        </div>
        <div className="small-item">
          <BiSolidBank style={iconStyle} />
          <p>BULK DISCOUNT</p>
        </div>
        <div className="small-item">
          <BiSolidBank style={iconStyle} />
          <p>BULK DISCOUNT</p>
        </div>
        <div className="small-item">
          <BiSolidBank style={iconStyle} />
          <p>BULK DISCOUNT</p>
        </div>
        <div className="small-item">
          <BiSolidBank style={iconStyle} />
          <p>BULK DISCOUNT</p>
        </div>
      </div>
      <div className="div3">
        <div className="v-text">
          <p className='bubble'>MORE</p>
          <p className='text'>RELATED REPAIRS</p>
        </div>
        </div>

        <div className="small-item">
          <FaLaptop style={iconStyle} />
          <p>LAPTOP REPAIR</p>
        </div>
        <div className="small-item">
          <FaDesktop style={iconStyle} />
          <p>DESKTOP REPAIR</p>
        </div>
        <div className="small-item">
          <FaServer style={iconStyle} />
          <p>SERVER REPAIR</p>
        </div>
        <div className="small-item">
          <FaClock style={iconStyle} />
          <p>LAPTOP</p>
        </div>
        <div className="small-item">
          <FaBatteryFull style={iconStyle} />
          <p>DESKTOP</p>
        </div>
        <div className="small-item">
          <FaServer style={iconStyle} />
          <p>SERVER</p>
        </div>
      </div>
 
  );
};

export default Services;
