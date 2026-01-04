





// import React from 'react';
// import './Keyfeature.css';
// import icon1 from '../assets/images/Keyframe1.png';
// import icon2 from '../assets/images/Keyframe2.png';
// import icon3 from '../assets/images/Keyframe3.png';
// import icon4 from '../assets/images/Keyframe4.png';
// import icon5 from '../assets/images/Keyframe5.png';

// const row1 = [
//   { icon: icon1, text: 'Range of 154 km* on a single charge' },
//   { icon: icon2, text: 'Best in class GRADEABILITY 22%' },
//   { icon: icon3, text: 'Electronic Drive Mode (Clutch less Operation)' },
// ];

// const row2 = [
//   { icon: icon4, text: 'Suitable for all weather operations' },
//   { icon: icon5, text: 'Running Cost of ₹1/km* (Cost/km)' },
// ];

// const KeyFeatures = () => {
//   return (
//     <section className="features-section">
//       <h2 className="features-title">Key Features</h2>

//       {/* First Row with 3 items */}
//       <div className="features-grid three-items">
//         {row1.map((feature, index) => (
//           <div key={index} className="feature-item">
//             <div className="icon-circle">
//               <img src={feature.icon} alt="feature icon" />
//             </div>
//             <p >{feature.text}</p>
//           </div>
//         ))}
//       </div>

//       {/* Second Row with 2 items */}
//       <div className="features-grid two-items">
//         {row2.map((feature, index) => (
//           <div key={index} className="feature-item">
//             <div className="icon-circle">
//               <img src={feature.icon} alt="feature icon" />
//             </div>
//             <p>{feature.text}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default KeyFeatures;




import React from 'react';
import './Keyfeature.css';
import icon1 from '../assets/images/Keyframe1.png';
import icon2 from '../assets/images/Keyframe2.png';
import icon3 from '../assets/images/Keyframe3.png';
import icon4 from '../assets/images/Keyframe4.png';
import icon5 from '../assets/images/Keyframe5.png';

const row1 = [
  { icon: icon1, text: 'Range of 154 km* on a single charge' },
  { icon: icon2, text: 'Best in class  GRADEABILITY 22%' },
  { icon: icon3, text: 'Electronic Drive Mode (Clutch less Operation)' },
];

const row2 = [
  { icon: icon4, text: 'Suitable for all weather operations' },
  { icon: icon5, text: 'Running Cost of ₹1/km* (Cost/km)' },
];

const KeyFeatures = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Key Features</h2>

      {/* First Row with 3 items */}
      <div className="features-grid three-items">
        {row1.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="icon-circle">
              <img src={feature.icon} alt={feature.text} />
            </div>
            <p className="feature-text">{feature.text}</p>
          </div>
        ))}
      </div>

      {/* Second Row with 2 items */}
      <div className="features-grid two-items">
        {row2.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="icon-circle">
              <img src={feature.icon} alt={feature.text} />
            </div>
            <p className="feature-text">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;

