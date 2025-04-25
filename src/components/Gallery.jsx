// Task 3: Mapping Tours in a Gallery Component
// Copilot prompt: Create a gallery that maps over the tours array and renders TourCard for each

import React, { useState } from 'react'; // Importing React and useState hook
import TourCard from './TourCard'; // Importing the TourCard component

const Gallery = ({ tours, onRemoveTour }) => {
  // Render the list of tours or a message if no tours are left
  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard
          key={tour.id}
          id={tour.id}
          name={tour.name}
          info={tour.info}
          image={tour.image}
          price={tour.price}
          onRemove={onRemoveTour} // Pass the onRemoveTour function as a prop
        />
      ))}
    </div>
  );
};

export default Gallery; // Exporting the Gallery component for use in other parts of the application