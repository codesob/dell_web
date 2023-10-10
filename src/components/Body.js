// Body.js

import React,{useState,useEffect} from 'react';
import { FaDesktop, FaLaptop, FaServer } from 'react-icons/fa';
import { AiOutlineMessage } from 'react-icons/ai';
import './Body.css';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';
import img8 from './images/img8.jpg';
import img9 from './images/img9.jpg';
import img10 from './images/img10.jpg';
import img11 from './images/img11.jpg';
import img12 from './images/img12.jpg';
import img13 from './images/paper.png';
import img14 from './images/guyy.png';
import img15 from './images/deliv.png';
import img16 from './images/why2.png';
import img17 from './images/nomoni.png';
import img18 from './images/truck.png';


const Body = () => {
  const [style, setStyle] = useState({ opacity: 1 });

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = 500;

    if (scrollPosition >= threshold) {
      setStyle({ ...style, opacity: 0 });
    } else {
      setStyle({ ...style, opacity: 1 });
    }
  };

  useEffect(() => {
    const firstImageSection = document.querySelector('.products-container');
    const secondImageSection = document.querySelector('.s-container');
    window.addEventListener('scroll', handleScroll);

    const scrollHandler = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= 60 && scrollPosition < 1000) {
        firstImageSection.classList.add('scroll');
        secondImageSection.classList.add('scroll');
      } else {
        firstImageSection.classList.remove('scroll');
        secondImageSection.classList.remove('scroll');
      }

      if (scrollPosition >= 500) {
        setStyle({ ...style, opacity: 0 });
      } else {
        setStyle({ ...style, opacity: 1 });
      }
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [style]);

  return (
    <div className="body-container">
    <div className="body-item" id="rotateDiv1">
      <div className="icon-container">
        <FaLaptop className="icon" />
      </div>
      <div className="content-text">
        DELL ALL MODEL<br />
        LAPTOP REPAIR
      </div>
      <div className="additional-content">
        <p className='s-text'>Additional thing</p>
        <br />
        <button className="transparent-button">Enquire Now</button>
      </div>
    </div>

    <div className="body-item" id="rotateDiv2">
      <div className="icon-container">
        <FaDesktop className="icon" />
      </div>
      <div className="content-text">
        DELL ALL MODEL<br />
        DESKTOP REPAIR
      </div>
      <div className="additional-content">
        <p className='s-text'>Additional thing</p>
        <br />
        <button className="transparent-button">Enquire Now</button>
      </div>
    </div>

    <div className="body-item" id="rotateDiv3">
      <div className="icon-container">
        <FaServer className="icon" />
      </div>
      <div className="content-text">
        DELL ALL MODEL<br />
        SERVER REPAIR
      </div>
      <div className="additional-content">
        <p className='s-text'>Additional thing</p>
        <br />
        <button className="transparent-button">Enquire Now</button>
      </div>
    </div>


      <div className="services-container">
        <div className="services-text">
          <p className='bubble'>Services</p>
          <p>We serve you</p>
          <p className="small-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <section className="six-divs">
    
        <div className="content content1">
          <div className="icon-container">
            <FaLaptop className="icon" />
          </div>
          <div className="content-text">
            LAPTOP REPAIR
          </div>
          <p className="paragraph1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="content content2">
          <div className="icon-container">
            <FaDesktop className="icon" />
          </div>
          <div className="content-text">
            DESKTOP REPAIR
          </div>
          <p className="paragraph1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="content content3">
          <div className="icon-container">
            <FaServer className="icon" />
          </div>
          <div className="content-text">
            SERVER REPAIR
          </div>
          <p className="paragraph1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="transparent-button">Enquire Now</button>
        </div>
        <div className="content content4">
          <div className="icon-container">
            <FaLaptop className="icon" />
          </div>
          <div className="content-text">
            LAPTOP REPAIR
          </div>
          <p className="paragraph1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="content content5">
          <div className="icon-container">
            <FaDesktop className="icon" />
          </div>
          <div className="content-text">
            DESKTOP REPAIR
          </div>
          <p className="paragraph1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="content content6">
          <div className="icon-container">
            <FaServer className="icon" />
          </div>
          <div className="content-text">
            SERVER REPAIR
          </div>
          <p className="paragraph1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      <div className="products-container">
        <div className="p-text">
          <p className='bubble'>Products</p>
          <p>100% GENUINE PARTS WITH WARRANTY</p>
          <p className="small1-text">We are dealing with 100% Genuine parts with full 1 year Manufacturer warenty. <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod</p>
        </div>
      </div>

      <section className="eight-divs">
        <div className="content content7">
          <img src= {img5} alt="Processor" />
          <p>PROCESSOR(CPU)</p>
        </div>
        <div className="content content8">
          <img src= {img6} alt="Ram" />
          <p>RAM</p>
        </div>
        <div className="content content9">
          <img src= {img7} alt="Hard Drive" />
          <p>HARD DRIVE</p>
        </div>
        <div className="content content10">
          <img src= {img8} alt="Solid State Drive" />
          <p>SOLID STATE DRIVE</p>
        </div>
        <div className="content content11">
          <img src= {img9} alt="Internal Speaker" />
          <p>INTERNAL SPEAKER</p>
        </div>
        <div className="content content12">
          <img src= {img10} alt="Touchpad" />
          <p>TOUCHPAD</p>
        </div>
        <div className="content content13">
          <img src= {img11} alt="Battery" />
          <p>BATTERY</p>
        </div>
        <div className="content content14">
          <img src= {img12} alt="Screen" />
          <p>SCREEN</p>
        </div>
      </section>

      <div className='con'>
      <div className='quote'>
        <button className="get-quote-button">
          <AiOutlineMessage className= "icons" /> ENQUIRE FOR REQUIRED PARTS
        </button>
        </div>
      </div>

      <div className="s-container">
        <div className="products-text">
          <p>ABOUT DELL SERVICES NEPAL</p>
          <p className="small1-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod</p>
          <button className="transparent-button">Know More </button>
        </div>
      </div>

      <div className="dell-container">
        <div className="s-text">
          <p className='bubble'>WHY</p>
          <p className='text'>WHY DELL SERVICE NEPAL?</p>
        </div>

        <section className="new">
          <div className="new-div">
            <img src={img13} alt="Image 1" />
            <p>GENUINE PARTS</p>
          </div>
          <div className="new-div">
            <img src={img14} alt="Image 2" />
            <p>REPAIR BY SERVICE CENTER ENGINEER</p>
          </div>
        
          <div className="new-div">
            <img src={img15} alt="Image 3" />
            <p>FREE DOOR STEP DRIVE PICKUP</p>
          </div>
          <div className="new-div">
            <img src={img16} alt="Image 4" />
            <p>COST TO COST PRICE</p>
          </div>
          <div className="new-div">
            <img src={img17} alt="Image 5" />
            <p>NO FIX NO FEE</p>
          </div>
          <div className="new-div">
            <img src={img18} alt="Image 6" />
            <p>DELIVERY ALL OVER NEPAL</p>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Body;
