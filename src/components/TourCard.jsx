// Task 2: Building the TourCard Component
// Copiltop prompt: Create a card component to display a tour's name, info, image, and price; and include a "Not Interested" button that removes this tour when clicked

import React from 'react'; // Importing React

const TourCard = ({ id, name, info, image, price, onRemove }) => {
  return (
    <div className="tour-card">
      {/* Display the tour image */}
      <img src={image} alt={name} className="tour-image" />

      {/* Display the tour name, price, and info */}
      <div className="tour-details">
        <h2>{name}</h2>
        <h4>${price}</h4>
        <p>{info}</p>
      </div>

      {/* Button to remove the tour */}
      <button onClick={() => onRemove(id)} className="not-interested-button">
        Not Interested
      </button>
    </div>
  );
};

export default TourCard; // Exporting the TourCard component for use in other parts of the application