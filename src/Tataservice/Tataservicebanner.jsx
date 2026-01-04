import React from 'react';
import './Tataservicebanner.css';
import backgroundImage from '../assets/images/servicebanner.png'; // replace with your image path

export default function Tataservicebanner() {
  return (
    <div
      className="services-hero"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="overlay-content">
        <h1>Unparalleled After Sales Services by Tata Motors</h1>
        <p>
          It is our constant endeavour to minimise downtime, decrease the cost of service and to address the concerns
          of our customers. We provide a variety of offerings like Suvidha Service Vans, Mobile Service Vans, Workshops
          of Dealers and TASSs in every nook and corner of the country.
        </p>
      </div>
    </div>
  );
}
