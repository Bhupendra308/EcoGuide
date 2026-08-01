// src/components/Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { wasteTypes } from '../data/wasteData';

const images = import.meta.glob('../assets/*.{jpg,png,jpeg}', { eager: true });

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWasteTypes = wasteTypes.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-container">
      {/* Search Bar only on Home */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search waste category (e.g., Organic, E-Waste)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="image-grid">
        {filteredWasteTypes.length > 0 ? (
          filteredWasteTypes.map((item) => {
            const imageSrc = images[`../assets/${item.img}`]?.default;

            return (
              <div className="card" key={item.id}>
                <Link to={`/waste-type/${item.id}`}>
                  <img src={imageSrc} alt={item.name} />
                  <p>{item.name}</p>
                </Link>
              </div>
            );
          })
        ) : (
          <p className="no-results">No waste categories found matching "{searchQuery}".</p>
        )}
      </div>
    </div>
  );
};

export default Home;