import React from 'react';
import './Knowmoreprogress.css'
import { useNavigate } from 'react-router-dom';

const Knowmoreprogress = ({ setProgress }) => {
  const navigate = useNavigate();

  const handleClick = (page) => {
    if (page === 'specifications') {
      setProgress(50);
      navigate('/specifications');
    } else {
      setProgress(100);
      navigate('/gallery');
    }
  };

  return (
    <div className="container-pro">
      <div className="buttonbar">
        <button onClick={() => handleClick('specifications')}>Specifications</button>
        <button onClick={() => handleClick('gallery')}> <a href="/imagegallery">Gallery</a></button>
      </div>
      <div className="progressbar">
        <div className="progress" style={{ width: '0%' }}></div>
      </div>

      
    </div>
  );
};

export default Knowmoreprogress;