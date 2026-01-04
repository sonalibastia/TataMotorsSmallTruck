import React from "react";
import "./Vehicleapplication.css";

export default function Vehicleapplications({ items }) {
  return (
    <div className="vehicle-section">
      <h2 className="vehicle-title">Vehicles Across Applications</h2>
      <div className="vehicle-grid">
        {items.map((item, index) => (
          <div className="vehicle-item" key={index}>
            <div className="vehicle-icon-wrapper">
              <img src={item.image} alt={item.label} className="vehicle-icon" />
            </div>
            <span className="vehicle-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
