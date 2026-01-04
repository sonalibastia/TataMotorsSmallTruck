import React, { useState } from "react";
import "./SlidingCards.css";
import car from '../assets/images/car.png';
import fuel from '../assets/images/Fuel.png';

const cardsData = [
  { id: 1, img: car, title: "Unmatched Load Carrying Capacity & All-Terrain Performance", content: "Designed to handel the highest loads in their class,Tata Motors small trucks excel in first and last-mile delivery, offering exceptional performance across urban,rural,and off-road condition" },
  { id: 2, img: fuel, title: "Versatile Fuel Options & Sustainability", content: "With multi-fuel options including diesel, CNG, and electric, our trucks offer flexible solutions to meet diverse business needs while promoting sustainability through eco-friendly alternatives." },
  { id: 3, img: car, title: "Unmatched Load Carrying Capacity & All-Terrain Performance", content: "Designed to handel the highest loads in their class,Tata Motors small trucks excel in first and last-mile delivery, offering exceptional performance across urban,rural,and off-road condition" },
  { id: 4, img: fuel, title: "Versatile Fuel Options & Sustainability", content: "With multi-fuel options including diesel, CNG, and electric, our trucks offer flexible solutions to meet diverse business needs while promoting sustainability through eco-friendly alternatives." },
  { id: 5, img: car, title: "Unmatched Load Carrying Capacity & All-Terrain Performance", content: "Designed to handel the highest loads in their class,Tata Motors small trucks excel in first and last-mile delivery, offering exceptional performance across urban,rural,and off-road condition" },
  { id: 6, img: fuel, title: "Versatile Fuel Options & Sustainability", content: "With multi-fuel options including diesel, CNG, and electric, our trucks offer flexible solutions to meet diverse business needs while promoting sustainability through eco-friendly alternatives." },
  { id: 7, img: car, title: "Unmatched Load Carrying Capacity & All-Terrain Performance", content: "Designed to handel the highest loads in their class,Tata Motors small trucks excel in first and last-mile delivery, offering exceptional performance across urban,rural,and off-road condition" },
  { id: 8, img: fuel, title: "Versatile Fuel Options & Sustainability", content: "With multi-fuel options including diesel, CNG, and electric, our trucks offer flexible solutions to meet diverse business needs while promoting sustainability through eco-friendly alternatives." },
  { id: 9, img: car, title: "Unmatched Load Carrying Capacity & All-Terrain Performance", content: "Designed to handel the highest loads in their class,Tata Motors small trucks excel in first and last-mile delivery, offering exceptional performance across urban,rural,and off-road condition" },
  { id: 10, img: fuel, title: "Versatile Fuel Options & Sustainability", content: "With multi-fuel options including diesel, CNG, and electric, our trucks offer flexible solutions to meet diverse business needs while promoting sustainability through eco-friendly alternatives." },
  
];

const SlidingCards = () => {
  const cardsToShow = 2;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? cardsData.length - cardsToShow : currentIndex - cardsToShow;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex + cardsToShow >= cardsData.length ? 0 : currentIndex + cardsToShow;
    setCurrentIndex(newIndex);
  };

  const progress = ((currentIndex + cardsToShow) / cardsData.length) * 100;

  return (
    <div className="outer">
      <div className="inner">
        <div className="left">
          <div>
            <h2>Success ka Mantra</h2>
            <p>
              Tata Motors small trucks are designed to drive growth and efficiency in your business. With cutting-edge technology, unparalleled support, and a focus on sustainability, we provide solutions that go beyond transportation – helping you scale, save, and succeed in an evolving market.
            </p>
          </div>
          <button>Explore our Range &gt;</button>
        </div>

        <div className="gap"></div>

        <div className="right">
          <div className="cards-wrapper">
            <div
              className="cards"
              style={{
                transform: `translateX(-${(currentIndex / cardsData.length) * 100}%)`,
              }}
            >
              {cardsData.map((card) => (
                <div className="card" key={card.id}>
                  <div className="card-img" >
                    <img src={card.img} alt="icon" />
                  </div>
                  <h3>{card.title}</h3>
                  <p >{card.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="controls">
            <div className="arrows">
              <button onClick={handlePrev}>&lt;</button>
              <button onClick={handleNext}>&gt;</button>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingCards;
