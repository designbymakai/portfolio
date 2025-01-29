import React, { useState, useEffect } from 'react';
import './styles.css'; // Import the CSS file
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const magnifyContainers = document.querySelectorAll('.magnify-container');
    magnifyContainers.forEach(container => {
      const img = container.querySelector('.magnify-image');
      const glass = container.querySelector('.magnify-glass');

      const moveMagnifier = (e) => {
        if (!isZoomed) return;
        const { left, top, width, height } = img.getBoundingClientRect();
        const x = e.pageX - left - window.pageXOffset;
        const y = e.pageY - top - window.pageYOffset;

        glass.style.left = `${x - glass.offsetWidth / 2}px`;
        glass.style.top = `${y - glass.offsetHeight / 2}px`;
        glass.style.backgroundPosition = `-${x * 2}px -${y * 2}px`;
      };

      container.addEventListener('mousemove', moveMagnifier);
      container.addEventListener('touchmove', moveMagnifier);
    });
  }, [currentIndex, isZoomed]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="relative h-full mx-auto">
      <div className="overflow-hidden h-screen relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform transform ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="magnify-container" onClick={toggleZoom}>
              <img src={image} alt={`Slide ${index}`} className="w-full h-[90vh] object-contain magnify-image" />
              <div className={`magnify-glass ${isZoomed ? 'visible' : ''}`} style={{ backgroundImage: `url(${image})` }}></div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute md:top-1/2 bottom-0 left-5 transform -translate-y-1/2 md:bg-none bg-dbm-db-200 text-white p-2"
        onClick={prevSlide}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute md:top-1/2 bottom-0 right-5 transform -translate-y-1/2 md:bg-none bg-dbm-db-200 text-white p-2"
        onClick={nextSlide}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Carousel;