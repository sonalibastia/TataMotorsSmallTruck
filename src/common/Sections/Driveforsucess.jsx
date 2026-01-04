
import React from "react";
import './Driveforsucess.css';



function Driveforsucess({ successData }) {
  return (
    <div className="drive-container">
      <div className="drive-heading">
        <h1>Find Your Drive For Success</h1>
      </div>

      <div className="drive-top-part">
        {successData.map((item, index) => (
          <div className="top-left-part" key={index}>
            <div className="drive-img-part" style={{ backgroundColor: "gray", width: "250px", height: "200px", marginBottom: "10px", marginTop: "20px" }}>
              <img src={item.image} alt="" />
            </div>
            <div className="tata-intra-evc">
              <h2>{item.title}</h2>
            </div>
            <div className="measure-part">
              <div className="measure1"><h2>{item.gwv}</h2><p>GWV</p></div>
              <div className="measure1"><h2>{item.fuel}</h2><p>Fuel Tank Capacity</p></div>
              <div className="measure1"><h2>{item.engine}</h2><p>Engine</p></div>
            </div>
            <div className="drive-button-part">
              <div className="knowmore">
                <button><a href={`/knowmore/${item.title.replace(/\s+/g, "").toLowerCase()}`} style={{ textDecoration: "none", color: "inherit" }}>
                  Know More</a></button>
              </div>
              <div className="pdfimg"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Driveforsucess;