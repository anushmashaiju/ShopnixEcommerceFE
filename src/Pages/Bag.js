import React, { useState, useEffect } from 'react';
import './Bag.css';
import Carousel from 'react-bootstrap/Carousel'; 
import { useNavigate } from 'react-router-dom';
import AppNavbar from '../components/Navbar';

const Bag = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([
    { src: "Images/bags/b2.jpeg" },
    { src: "Images/bags/b3.jpeg"},
    { src: "Images/bags/b5.avif" },
    { src: "Images/bags/b6.webp" },
  ]);

  useEffect(() => {
    const handleImageError = (event) => {
      event.target.src = 'fallback-image.png'; 
      console.error('Error loading image:', event.target.src);
    };

    images.forEach((image) => {
      const img = new Image();
      img.src = image.src;
      img.onerror = handleImageError;
    });
  }, [images]);

  const handleNext = () => {
    navigate('/category');
  };
  return (
    <><AppNavbar/>
    <div className="bag-container">
      <header className="bag-header">
        <h1>Bag</h1>
      </header>
      <section className="bag-content">
        <Carousel>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100" 
                src={image.src}
                alt={image.alt}
              />
              <Carousel.Caption>
                <h3>{image.alt}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="bag-banner">
          <h2>Bag Collection</h2>
          <button className="shop-button">Shop Women's</button>
        </div>
        <div className="bag-gallery"> 
          <img src="Images\bags\b2.jpeg" alt="Model 1" />
          <img src="Images\bags\b3.jpeg" alt="Model 2" />
          <img src="Images\bags\b5.avif" alt="Model 3" />
          <img src="Images\bags\b6.webp" alt="Model 4" />
          <img src="Images\bags\b7.webp" alt="Model 5" />
        </div>
        <div className="bag-theme">
        <h2>Bag theme</h2>
        <button className="apply-button" onClick={handleNext}>Apply</button>   
    </div>
      </section>  
    </div>
    </>
  );
};

export default Bag;
