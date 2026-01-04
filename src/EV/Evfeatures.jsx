import React from 'react';
import './Evfeatures.css';
import ev1 from '../assets/images/evfeature-img1.png' // Replace with actual image path
import ev2 from '../assets/images/evfeature-img2.png'
import ev3 from '../assets/images/evfeature-img3.png'
import ev4 from '../assets/images/evfeature-img4.png'
import ev5 from '../assets/images/evfeature-img5.png'

function Evfeatures() {
  return (
    <div className="ev-page">
        <div className='corner-div'></div>
        <div className='black-div'></div>
        <div className='ev-border'>
      <div className="ev-header">
        <h1>Tata Ace EV Features</h1>
        <p>Features designed for planning and profit.</p>
      </div>

      <div className="ev-grid-container">
        <div className="ev-image">
          <img src={ev1} alt="Tata Ace EV" />
        </div>
        <div className="ev-info">
          <h2>Futuristic performance</h2>
          <ul >
            <li >0 to 30 kmph in 7<sup>*</sup> secs</li>
            <li>IP67 waterproofing standards</li>
          </ul>
        {/* <p style={{fontSize:"30px",lineHeight:"-2px"}}><b style={{fontSize:"100px",color:"#0056b3"}}>.</b > &nbsp; &nbsp; 0 to 30 kmph in 7<sup>*</sup> secs</p>
        <p style={{fontSize:"30px"}}><b style={{fontSize:"100px",color:"#0056b3"}}>.</b> &nbsp; &nbsp; IP67 waterproofing standards</p> */}
        </div>
      </div>



          <div className="ev-grid-container">
        
        <div className="ev-info" style={{marginLeft:"150px"}}>
          <h2>Smart Connectivity</h2>
          <ul >
            <li >Navigation</li>
            <li>Vehicle tracking</li>
            <li >Flet telematics </li>
            <li>Geo fencing</li>
           
            
          </ul>
        
        </div>
        <div className="ev-image" >
          <img src={ev2} alt="Tata Ace EV"  style={{marginRight:"100px"}}/>
        </div>
      </div>


      <div className="ev-grid-container">
        <div className="ev-image">
          <img src={ev3} alt="Tata Ace EV" />
        </div>
        <div className="ev-info">
          <h2>Charged for the future</h2>
          <ul >
            <li >Battery Charges while braking</li>
            <li>First charging in 105<sup>*</sup>mins</li>
          </ul>
        
        </div>
      </div>



       <div className="ev-grid-container">
        
        <div className="ev-info"style={{marginLeft:"150px"}}>
          <h2>Futuristic performance</h2>
          <ul >
            <li >0 to 30 kmph in 7<sup>*</sup> secs</li>
            <li>IP67 waterproofing standards</li>
          </ul>
        </div>
        <div className="ev-image">
          <img src={ev4} alt="Tata Ace EV" />
        </div>
      </div>


        <div className="ev-grid-container">
        <div className="ev-image">
          <img src={ev5} alt="Tata Ace EV" />
        </div>
        <div className="ev-info" style={{marginLeft:"120px"}}>
          <h2>Smart Connectivity</h2>
          <ul >
            <li >Navigation</li>
            <li>Vehicle tracking</li>
            <li >Flet telematics </li>
            <li>Geo fencing</li>
           </ul>

        </div>
      </div>

        </div>
    </div>
  );
}

export default Evfeatures;
