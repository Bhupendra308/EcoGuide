// src/components/ActionDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { actionProcessData } from '../data/wasteData';

const ActionDetails = () => {
  const { subtype, action } = useParams();
  
  const key = `${subtype}-${action}`;
  const details = actionProcessData[key] || {
    products: ["Information coming soon"],
    procedure: "No procedure available for this specific combination yet."
  };

  const formattedAction = action ? action.replace(/-/g, ' ') : '';
  const formattedSubtype = subtype ? subtype.replace(/-/g, ' ') : '';

  return (
    <div className="action-details-container">
      <h2 className="page-title">Action Process: {formattedAction} for {formattedSubtype}</h2>

      <div className="detail-card">
        <h3>🌱 Products Built</h3>
        <ul>
          {details.products.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      </div>

      <div className="detail-card">
        <h3>⚙️ How It Is Built (Procedure)</h3>
        <p>{details.procedure}</p>
      </div>
    </div>
  );
};

export default ActionDetails;