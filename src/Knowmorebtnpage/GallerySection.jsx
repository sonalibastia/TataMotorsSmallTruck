// GallerySection.jsx
import React, { useState } from 'react';
import ImageSlider from './ImageSlider';
import './GallerySection.css'; // Your custom styles
import Into1 from '../assets/images/interior1.jpg';
import Into2 from '../assets/images/interior2.jpg';
import Into3 from '../assets/images/interior3.jpg';
import Into4 from '../assets/images/interior4.jpg';
import Photo1 from '../assets/images/photo1.jpg';
import Photo2 from '../assets/images/photo2.jpg';
import Photo3 from '../assets/images/photo3.jpg';
import Photo4 from '../assets/images/photo4.jpg';

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState('Gallery');
  const [subTab, setSubTab] = useState('Interior');

  const interiorImages = [Into1, Into2, Into3, Into4];
  const exteriorImages = [Photo1, Photo2, Photo3, Photo4];

  return (
    <div className="gallery-wrapper">
      <div className="main-tabs">
        <button className={activeTab === 'Specifications' ? 'active' : ''} onClick={() => setActiveTab('Specifications')}>Specifications</button>
        <button className={activeTab === 'Gallery' ? 'active' : ''} onClick={() => setActiveTab('Gallery')}>Gallery</button>
      </div>

      {activeTab === 'Gallery' && (
        <>
          <div className="sub-tabs">
            <button className={subTab === 'Interior' ? 'active' : ''} onClick={() => setSubTab('Interior')}>Interior</button>
            <button className={subTab === 'Exterior' ? 'active' : ''} onClick={() => setSubTab('Exterior')}>Exterior</button>
          </div>
          <ImageSlider images={subTab === 'Interior' ? interiorImages : exteriorImages} />
        </>
      )}

      {activeTab === 'Specifications' && (
        <div className="specs">
          <h2>Specifications Coming Soon</h2>
        </div>
      )}
    </div>
  );
};

export default GallerySection;
