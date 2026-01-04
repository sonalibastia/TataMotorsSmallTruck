import React from "react";
import Vehicleapplications from "./Vehicleapplication";
import Fuelapplication from "./Fuelapplication";

import "./Vehicleapplication.css";
import "./Fuelapplication.css";
import "./CombineApplication.css"; // Add this

export default function CombineApplication({ vehicles, fuels }) {
  return (
    <div className="combine-page">
      <div className="vehicle-side">
        <Vehicleapplications items={vehicles} />
      </div>
      <div className="fuel-side">
        <Fuelapplication items={fuels} />
      </div>
    </div>
  );
}
