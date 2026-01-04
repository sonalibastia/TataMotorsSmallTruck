// SupportBanner.jsx
import React from "react";
import "./SupportBanner.css";
import { FaPhone } from "react-icons/fa6";

const SupportBanner = () => {
  return (
    <div className="support-banner">
      <div className="left-section">
        <h2>For any assistance, call now</h2>
        <p>
          Get assistance on Sales / Service / Product related issues. We ensure spare parts availability to all our customers in India.
        </p>
      </div>
      <div className="right-section">
        <p className="top-text"> ALL TOLL FREE NUMBER</p>
        <p className="phone-number" style={{display:"flex", gap:"18px",fontSize:"40px"}}> <FaPhone size={50} style={{paddingTop:"11px"}} /> 18002097979</p>
      </div>
    </div>
  );
};

export default SupportBanner;
