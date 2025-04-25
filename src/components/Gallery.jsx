// Task 3: Mapping Tours in a Gallery Component
// Copilot prompt: Create a gallery that maps over the tours array and renders TourCard for each

import React, { useState } from 'react'; // Importing React and useState hook
import TourCard from './TourCard'; // Importing the TourCard component

const Gallery = ({ tours }) => {
  // State to manage the list of tours
  const [tourList, setTourList] = useState(tours);

  // Function to remove a tour by its id
  const removeTour = (id) => {
    const updatedTours = tourList.filter((tour) => tour.id !== id); // Filter out the tour with the given id
    setTourList(updatedTours); // Update the state with the filtered list
  };

  // Render the list of tours or a message if no tours are left
  return (
    <div className="gallery">
      {tourList.length > 0 ? (
        tourList.map((tour) => (
          <TourCard
            key={tour.id}
            id={tour.id}
            name={tour.name}
            info={tour.info}
            image={tour.image}
            price={tour.price}
            onRemove={removeTour} // Pass the removeTour function as a prop
          />
        ))
      ) : (
        <h2>No tours left</h2> // Message displayed when all tours are removed
      )}
    </div>
  );
};

export default Gallery; // Exporting the Gallery component for use in other parts of the application