import React from "react";
import './Betterbanner.css'
import bgimg from '../assets/images/desk.jpg'

function Betterbanner() {
    return(
        <>
        <div id="betterbag" style={{backgroundImage:`url(${bgimg})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",}}>
              <div id="betterborder">
               
              </div>
        </div>
        </>
    )
   
}
 export default Betterbanner