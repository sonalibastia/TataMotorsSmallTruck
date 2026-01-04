import React from "react";
import "./Pickupcarry.css";
import pickupImage from "../assets/images/Pickupcarry.jpg"; // Replace with your image path

const Pickupcarry = () => {
  return (
    <>
    <div id="carry-container">
    <section className="pickup-container">
      <div className="pickup-text" >
        <h1>Carry everything, everywhere with ease</h1>
        <p>
          Tata Motors Pickups are ready to take up any challenge and carry all
          kinds of load across the toughest terrain to fulfil people’s needs and
          drive success with an unstoppable spirit. Check this video out to see
          the incredible range of applications supported by the powerful Tata
          Motors Pickups.
        </p>
      </div>
      <div className="pickup-image" >
        <img src={pickupImage} alt="Pickup carrying load" style={{marginBottom:"-130px"}}/>
      </div>
    </section>
    </div>
    </>
  );
};

export default Pickupcarry;
