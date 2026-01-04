import React from 'react';
import './Knowmorebtn.css';
import { useParams } from 'react-router-dom';
import ImageData from './ImageData';

function Knowmorebtn() {
  const { title } = useParams();
  
  const selectedVehicle = ImageData.vehicleData?.find(item => item.title === title);
  
  if (!selectedVehicle) return <h2 style={{ color: 'white' }}>Vehicle not found</h2>;

  return (
    <div className="knowcontainer">
      <header className="boldpart">
        <h2 style={{ color: 'white' }}>{title.replace(/-/g, " ")}</h2>
      </header>

      <div className="paragraphpart">
        <div className="leftparent">
          <div className="left-column">
            <img src={selectedVehicle.mainImage} alt="Main" className="truck-image" style={{ height: '300px', width: '400px' }} />
            <div className="mediapart">
              {selectedVehicle.mediapart.map((src, idx) => (
                <img key={idx} src={src} alt={`Thumb ${idx}`} className="mediapart-box" />
              ))}
            </div>
          </div>
        </div>

        <div className="rightcolumn">
          <p className="description" style={{ color: 'white' }}>{selectedVehicle.description.label}</p>

          <div className="specs">
            {selectedVehicle.specs.map((spec, idx) => (
              <React.Fragment key={idx}>
                <div className="spec-box">
                  <strong>{spec.value}</strong><br />
                  {spec.label}
                </div>
                {idx < selectedVehicle.specs.length - 1 && <div className="vertical-divider"></div>}
              </React.Fragment>
            ))}
          </div>

          <div className="tumbbtn">
            {selectedVehicle.buttons.map((btn, idx) => (
              <a key={idx} href="">
                <button
                  className={btn.className}
                  style={btn.className === 'book'
                    ? { backgroundColor: 'transparent', color: 'rgb(45, 106, 236)', border: '1px solid rgb(45, 106, 236)' }
                    : {}
                  }
                >
                  {btn.label}
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Knowmorebtn;
