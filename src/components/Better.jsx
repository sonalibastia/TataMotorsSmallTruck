import React from "react";
import './Better.css';
import img2 from '../assets/images/highway.jpeg';

function Better() {
   return (
      <div className="container">
         <div className="gray">
            {/* Left: Image */}
            <div className="img-part">
               <img src={img2} alt="Highway" />
            </div>

            {/* Right: Text */}
            <div className="text">

               <h1>Better Always: A New <br /> Era Unfolds</h1>
               <p>
                  Tata Motors is reimagining the future of mobility. With a relentless focus on
                  innovation, sustainability, and optimized ownership, our rebranding reflects our
                  promise to empower every journey. This transformation is more than a change; it’s our
                  commitment to deliver smarter, cleaner, and better solutions for all. To be better,
                  always.
               </p>
               <div id="btn">
                  <a href="#">Explore the Vision with Us &gt;</a>
               </div>

            </div>
         </div>
      </div>
   );
}

export default Better;
