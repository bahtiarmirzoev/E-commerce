import React, { useState } from 'react';
import '../Carousel.css';

const images = [
  'https://i.imgur.com/LBLnvy5.jpeg',
  'https://i.imgur.com/pWCWyFC.jpg',
  'https://i.imgur.com/pWCWyFC.jpg',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={image} alt={`Slide ${index}`} className="w-full object-cover" />
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-2 bg-black bg-opacity-50">
        Prev
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-2 bg-black bg-opacity-50">
        Next
      </button>
    </div>
  );
};

export default Carousel;
