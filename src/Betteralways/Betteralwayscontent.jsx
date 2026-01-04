// import React from 'react';
// import './Betteralwayscontent.css';
// import personImage from '../assets/images/girish.jpg'; // use correct image
// import playbtn from '../assets/images/playbtn.png';

// const Betteralwayscontent = () => {
//   const handlePlayClick = () => {
//     alert("Play video or open modal here");
//   };

//   return (
//     <section className="better-container">
//       <div className="image-section">
//         <div className="image-wrapper">
//           <img src={personImage} alt="Mr. Girish Wagh" className="profile-img" />
//           <img src={playbtn} alt="Play Button" className="play-icon" onClick={handlePlayClick} />
//         </div>
//       </div>
//       <div className="text-section">
//         <h2>Witness the Beginning<br />of a New Era</h2>
//         <p className="name">Mr. Girish Wagh</p>
//         <p className="title">Executive Director</p>
//       </div>
//     </section>
//   );
// };

// export default Betteralwayscontent;


import React from 'react';
import './Betteralwayscontent.css';
import pickupImage from '../assets/images/girish.jpg'; // replace with actual image path
import playbtn from '../assets/images/playbtn.png';

const Betteralwayscontent = () => {
  return (
    <>
    
    <div id='whitecontainer'>
                 <section className="pickup-section">
       
      <div className="video-box">
        <img src={pickupImage} alt="Pickup" className="pickup-img"  />
        <div className="play-button">
            <a href="https://youtu.be/wlwC1MJK7no">
                <img src={playbtn} alt="" />
            </a>
        </div>
      </div>
      <div className="text-box">
        <h1>Witness the Beginning of a New Era</h1>
        <p>
          Mr. Girish Wagh <br />
          Executive Directo
        </p>
      </div>
    </section>
    </div>
    
    </>
  );
};

export default Betteralwayscontent;





    