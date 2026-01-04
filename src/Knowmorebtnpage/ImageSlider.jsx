// ImageSlider.jsx
import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="slider-container">
      <img src={images[current]} alt={`Slide ${current + 1}`} className="main-img" />
      <div className="thumbnail-wrapper">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`thumbnail ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
            alt={`Thumb ${index + 1}`}
          />
        ))}
      </div>
      <button className="nav prev" onClick={prev}>‹</button>
      <button className="nav next" onClick={next}>›</button>
    </div>
  );
};

export default ImageSlider;
