import React from 'react';
import './Pickupready.css';
import pickupImage from '../assets/images/pickupready.png'; // replace with actual image path
import playbtn from '../assets/images/playbtn.png';

const Pickupready = () => {
  return (
    <>
    
    <section className="pickup-section">
       
      <div className="video-box">
        <img src={pickupImage} alt="Pickup" className="pickup-img" />
        <div className="play-button">
            <a href="https://youtu.be/eEMw4f_pH5I">
                <img src={playbtn} alt="" />
            </a>
        </div>
      </div>
      <div className="text-box">
        <h1>Ready for any challenges</h1>
        <p>
          Driving progress by delivering in remote locations and challenging environments is not for the faint of heart. 
          No matter how difficult the roads are, it takes an indomitable winning spirit to go the extra mile. 
          Watch this video to see why Tata Motors pickups are designed with such heroes in mind.
        </p>
      </div>
    </section>
    
    </>
  );
};

export default Pickupready;



