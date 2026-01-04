import React, { useState, useEffect } from 'react';
import './GallerySection.css';
import image1 from "../assets/images/tataac.jpeg"
import image2 from "../assets/images/tataintra.jpeg"
import image3 from "../assets/images/tatgold.jpeg"
import image4 from "../assets/images/tata20ev.jpeg"
const GallerySection = () => {
  const images = [image1,image2,image3,image4 ];
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % images.length);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const visibleImages = [
    images[startIndex],
    images[(startIndex + 1) % images.length],
    images[(startIndex + 2) % images.length],
  ];

  return (
    <div className="gallery-container">
      <div className="galleryborder">
        <h2 className="gallery-heading" style={{ color: "white", fontFamily: "sans-serif", fontSize: "32px" }}>
          Gallery
        </h2>

        <div className="gallery-slider" style={{ height: "50vh" }}>
          {visibleImages.map((img, idx) => (
            <img key={idx} src={img} alt={`Slide ${idx}`} className="slider-image" />
          ))}
        </div>

        <div className="gallery-controls">
          <div className="arrowbtn" style={{ display: "flex", gap: "10px", marginLeft: "20px" }}>
            <button onClick={handlePrev} className="arrow-btn">&lt;</button>
            <button onClick={handleNext} className="arrow-btn">&gt;</button>
          </div>
        </div>

        <hr style={{ width: "30%", position: "absolute", left: "290px", bottom: "220px" }} />

        <button className="view-all-btn">View All &gt;</button>
      </div>
    </div>
  );
};

export default GallerySection;
