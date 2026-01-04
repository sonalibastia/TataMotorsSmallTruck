// src/components/IntroducingVehicle.jsx
import React from 'react';
import './IntroducingVehicle.css';
import IntroducingVehicleData from '../../components/AUTOEXPO/IntroducingVehicleData'; 

function IntroducingVehicle() {
  return (
    <div id="mainDiv">
     
      {IntroducingVehicleData.map((vehicle) => (
        <div id="item1" key={vehicle.id}>
          <span>
            <img src={vehicle.image} alt={vehicle.name} />
            <p>{vehicle.name}</p>
            <button id='button'><a href={vehicle.link}>KnowMore</a></button>
          </span>
        </div>
      ))}
    </div>
  );
}

export default IntroducingVehicle;
