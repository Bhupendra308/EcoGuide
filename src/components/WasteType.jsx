// src/components/WasteType.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { subTypesData } from '../data/wasteData';

// Import all images from the assets folder at once
const images = import.meta.glob('../assets/*.{jpg,png,jpeg}', { eager: true });

const WasteType = () => {
  const { wasteType } = useParams();
  
  // Look up subtypes array for the current category
  const subtypes = subTypesData[wasteType] || [];

  return (
    <div className="image-grid">
      {subtypes.map((sub, index) => {
        const formattedSubtype = sub.name.toLowerCase().replace(/\s+/g, '-');
        const imageSrc = images[`../assets/${sub.img}`]?.default;

        return (
          <div key={index} className="card">
            <Link to={`/specific-waste/${formattedSubtype}`}>
              <img src={imageSrc} alt={sub.name} />
              <p>{sub.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default WasteType;