import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import { Link } from 'react-router-dom';
import img1 from './images/slide1.jpg';
import img2 from './images/repair.jpg';
import img3 from './images/hware.jpg';

const imagesData = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [opacity, setOpacity] = useState(0.3);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = 500;

    if (scrollPosition >= threshold) {
      setOpacity(0);
    } else {
      setOpacity(1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const imageChangeInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === imagesData.length - 1 ? 0 : prevIndex + 1));
    }, 50000); 

    return () => clearInterval(imageChangeInterval);
  }, [currentImageIndex]);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imagesData.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === imagesData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="image-slider" style={{ opacity }}>
      <div className="image-container">
        <img src={imagesData[currentImageIndex].src} alt={`Slide ${currentImageIndex}`} />
        <div className="image-overlay">
          <span className="s-text"><b>Computer repair service</b></span>
          <span className="image-text"><b>Repair Your Desktop <br/> & laptop Computer</b></span>
          <Link to="/contact">
            <button className="talk-button">Talk to Us</button>
          </Link>
        </div>
      </div>
      <div className="slider-arrows">
        <button onClick={prevImage}>&#8249;</button>
        <button onClick={nextImage}>&#8250;</button>
      </div>
    </div>
  );
};

export default ImageSlider;
