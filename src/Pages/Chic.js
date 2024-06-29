import React from 'react';
import { useState, useEffect } from 'react';
import './Chic.css';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import AppNavbar from '../components/Navbar';
const Chic = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([
    { src: "Images/casuals/4.webp" },
    { src: "Images/casuals/5.jpg" },
    { src: "Images/casuals/6.webp" },
    { src: "Images/casuals/7.jpeg" },
    { src: "Images/casuals/8.jpg" },
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
    <><AppNavbar />
      <div className="chic-container">
        <header className="chic-header">
          <h1>Chic</h1>
        </header>
        <section className="chic-content">
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
          <div className="chic-banner">
            <h2>Summer Collection</h2>
            <button className="shop-button">Shop Men's</button>
          </div>
          <div className="chic-gallery">
            <img src="Images\casuals\4.webp" alt="Model 1" />
            <img src="Images\casuals\5.jpg" alt="Model 2" />
            <img src="Images\casuals\6.webp" alt="Model 3" />
            <img src="Images\casuals\7.jpeg" alt="Model 4" />
            <img src="Images\casuals\8.jpg" alt="Model 5" />
          </div>
          <div className="chic-theme">
            <h2>Chic theme</h2>
            <button className="apply-button" onClick={handleNext}>Apply</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Chic;
