import React, { useState, useEffect } from 'react';
import './Flex.css';
import Carousel from 'react-bootstrap/Carousel'; 
import { useNavigate } from 'react-router-dom';
import AppNavbar from '../components/Navbar';

const Flex = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([
    { src: "Images/flex/f1.webp" },
    { src: "Images/flex/f2.jpg"},
    { src: "Images/flex/f3.jpg" },
    { src: "Images/flex/f4.webp" },
    { src: "Images/flex/f6.jpeg" },
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
    <div className="flex-container">
      <header className="flex-header">
        <h1>Flex</h1>
      </header>
      <section className="flex-content">
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
        <div className="flex-banner">
          <h2>Flexible Collection</h2>
          <button className="shop-button">Products</button>
        </div>
        <div className="flex-gallery"> 
          <img src="Images/flex/f1.webp" alt="Model 1" />
          <img src="Images/flex/f2.jpg" alt="Model 2" />
          <img src="Images/flex/f3.jpg" alt="Model 3" />
          <img src="Images/flex/f4.webp" alt="Model 4" />
          <img src="Images/flex/f6.jpeg" alt="Model 5" />
        </div>
        <div className="flex-theme">
        <h2>Flex theme</h2>
        <button className="apply-button" onClick={handleNext}>Apply</button>
      </div>
      </section>
      
    
    </div>
    </>
  );
};

export default Flex;
