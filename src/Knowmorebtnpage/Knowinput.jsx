// Knowinput.jsx
import React from 'react';
import './Knowinput.css';
import ImageData from './ImageData';
import { useParams } from 'react-router-dom';

export default function Knowinput (){
  const { title } = useParams();
  
  const selectedVehicle = ImageData.vehicleData?.find(item => item.title === title);
  
  if (!selectedVehicle) return <h2 style={{ color: 'white' }}>Vehicle not found</h2>;
  console.log(selectedVehicle);
  return (
    <div className="spec-container">
      {selectedVehicle.knowinputData.map((section, idx) => (
        <div key={idx} className="spec-section">
          <div className="spec-title">{section.title}</div>
          <div className="spec-table">
            {section.specs.map((item, i) => (
              <div key={i} className="spec-row">
                <div className="spec-label">{item.label}</div>
                <div className="spec-value">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
