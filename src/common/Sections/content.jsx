
import React, { useState, useEffect, useRef } from 'react';
import './content.css'


function Content({contentData}){
  
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);


  const scrollToIndex = (index) => {
  const container = scrollRef.current;
  const child = container.children[index];
  if (child) {
    container.scrollTo({
      left: child.offsetLeft,
      behavior: 'smooth'
    });
  }
}; 

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % contentData.slides.length; // Loop back to 0
    setCurrentIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + contentData.slides.length) % contentData.slides.length;
    setCurrentIndex(prevIndex);
    scrollToIndex(prevIndex);
  };

  const scrollBy = (offset) => {
    const container = scrollRef.current;
    container.scrollBy({ left: offset, behavior: 'smooth' });
  };


  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % contentData.slides.length;
      scrollToIndex(nextIndex);
      return nextIndex;
    });
  }, 4000);

  return () => clearInterval(interval);
}, [contentData.slides.length]);


  const progressPercent = ((currentIndex + 1) / contentData.slides.length) * 100;

    return(
       <>
       <div id="container">
        <div id="color-box"></div>
        <div id="black-clr-box"></div>
        <div id="cnt-border">
          <div id='top-part'>
            <div id="heading-part">
              <h1>{contentData.tittle}</h1>
            </div>
            <div id="content-part">
              <p>{contentData.content}</p>
              <p>{contentData?.content2}</p>
              <p>{contentData?.content3}</p>
            </div>
          </div>

          <div className="slider-container">
            <div className="slider-scroll" ref={scrollRef}>
              {contentData.slides.map((slide, index) => (
                <div className="slide" key={index}>
                  <img src={slide.image} alt={`slide-${index}`} className="slide-image" />
                  <div className="slide-text">{slide.text}
                    <div className='color-box'></div>
                    <div className='black-c-box'></div>
                  </div>
                </div>
              ))}
            </div>            
          </div>

          <div className='slider-progress-bottom'>
            <div className="slider-controls">
                <button onClick={prevSlide}>&lt;</button>
                <button onClick={nextSlide}>&gt;</button>
            </div>
            {/* Custom Progress Bar */}
            <div className="custom-progress-bar">
              <div className="progress-indicator" style={{ width: `${progressPercent}%` }}></div>
            </div>
          </div>  
          <div className='end-button'>
            <a href="" style={{height:"50px",width:"280px",backgroundColor:"#0056b3",alignItems:"center"}}>View Product &gt;</a>
            <a href="" style={{height:"50px",width:"450px",backgroundColor:"black",border:"2px solid white"}}>Charging Section Locator &gt;</a>
          </div>
        </div>
       </div>
       </>
    );
}
export default Content