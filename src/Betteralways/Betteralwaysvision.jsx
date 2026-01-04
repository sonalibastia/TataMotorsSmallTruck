import React from 'react';
import './Betteralwaysvision.css';
import thumbnail from '../assets/images/videothumbnail.jpg'; // Replace with actual image
import playIcon from '../assets/images/playbtn.png';     // Replace with actual icon

const Betteralwaysvision = () => {
  return (
     <div id='vision'>
         <section className="better-always">
      <div className="content">
        <h2>BETTER ALWAYS: A NEW VISION IN MOTION</h2>
        <p>
          Better Always<sup>™</sup>, the new mantra embodying our steadfast commitment to all stakeholders
          of continuous growth by fostering agility, challenging limits, striving for excellence, and embracing
          relentless improvement.
        </p>
      </div>
      <div className="video-wrapper">
        <img src={thumbnail} alt="Better Always" className="thumbnail" />
        <div className="play-btn-container">
          <button>
            <a href="https://youtu.be/bWr4i3ygX_M"><img src={playIcon} alt="Play" className="play-btn" /></a>
          </button>

        </div>
      </div>
    </section>
     </div>
  );
};

export default Betteralwaysvision;

