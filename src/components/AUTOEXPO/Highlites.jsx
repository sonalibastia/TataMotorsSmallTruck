// import React from 'react'
// import "./Highlites.css"
// import introducingtata from "../../assets/images/introducingtata.jpg"
// function Highlites() {
//   return (
//     <>
//       <div id="mainDiv">
//         <div id="submainDiv">
//             <h1>Highlights from Auto Expo 2025</h1>
//            <div className="gridDiv">
//            <span><a href="https://youtu.be/jIX-lybMSdU?si=fkPszBg-6dHN9SVR"><img src={introducingtata} alt=""  style={{height:"250px",width:"250px"}}/></a></span>
//            <span><a href="https://youtu.be/6dS-wnri1C4?si=45ioWJt3sxDbd9EY"><img src={introducingtata} alt="" style={{height:"250px",width:"250px"}}/></a></span>
//            <span><a href="https://youtu.be/50E2Ba5XxSk?si=cdEOhLWuhFbpYomB"><img src={introducingtata} alt="" style={{height:"250px",width:"250px"}}/></a></span>
//            <span><a href="https://youtu.be/jIX-lybMSdU?si=Uzbbd7s86wa7lqti"><img src={introducingtata} alt="" style={{height:"250px",width:"250px"}}/></a></span>
           
//            </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Highlites
import React from 'react';
import "./Highlites.css";
import highlightData from "./HighlightData";

function Highlites() {
  return (
    <div id="mainDiv">
      <div id="submainDiv">
        <h1>Highlights from Auto Expo 2025</h1>
        <div className="gridDiv">
          {highlightData.map((item, index) => (
            <span key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.img} alt={`highlight-${index}`} style={{ height: "250px", width: "250px" }} />
              </a>
              
             
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Highlites;
