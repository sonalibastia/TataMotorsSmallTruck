import React from 'react';
import './Bettertransforming.css';
import speakerImage from '../assets/images/transform.jpg';
import playIcon from '../assets/images/playbtn.png';    

const Bettertransforming = () => {
  return (
   <>
   <div id="bgwhite">
     <section className="better-always-container">
      <div className="video-section">
        <img src={speakerImage} alt="Speaker" className="video-image" />
        <div className="playbutton">
              <button>
                  <a href="https://youtu.be/jdkmFuPH5xE">
                     <img src={playIcon} alt="Play" />
                  </a>
              </button>
        </div>
      </div>
      <div className="text-section">
        <h2>Transforming Towards<br />The Future of Mobility</h2>
        <p>
          We are committed to delivering the best for what matters the most.
          Hear from Mr. Girish Wagh, Executive Director, Tata Motors, as he
          shares insights that drive us towards being Better Always.
        </p>
      </div>
    </section>
   </div>
   </>
  );
};

export default Bettertransforming;
