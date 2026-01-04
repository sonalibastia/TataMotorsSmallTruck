import React from "react";

export default function Fuelapplication({ items }) {
  return (
    <div className="fuel-section">
      <h2 className="fuel-title">Fuel Type</h2>
      <div className="fuel-grid">
        {items.map((item, index) => (
          <div className="fuel-item" key={index}>
            <div className="fuel-icon-wrapper">
              <img src={item.image} alt={item.label} className="fuel-icon" />
            </div>
            <span className="fuel-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
