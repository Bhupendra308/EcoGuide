// src/components/SpecificWaste.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { wasteActions } from '../data/wasteData';

const SpecificWaste = () => {
  const { subtype } = useParams();
  const actions = wasteActions[subtype] || [];

  return (
    <div className="action-grid">
      <h2>Actions for: {subtype.replace('-', ' ')}</h2>
      {actions.length > 0 ? (
        actions.map((action, index) => {
          const formattedAction = action.toLowerCase().replace(/\s+/g, '-');
          return (
            <div key={index} className="card">
              {/* Passes both subtype and action in the URL */}
              <Link to={`/action-details/${subtype}/${formattedAction}`}>
                <p>{action}</p>
              </Link>
            </div>
          );
        })
      ) : (
        <p>No actions available for this waste type.</p>
      )}
    </div>
  );
};

export default SpecificWaste;