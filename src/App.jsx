// Task 1 copilot prompt: Fetch tours from https://course-api.com/react-tours-project using useEffect and store in state: tours, loading, error
// Task 4 copilot prompt: If loading is true, display "Loading...". If error, display an error message. Else, render Gallery with tour data
// Task 5 copilot prompt: If no tours are left, show a "Refresh" button to refetch the data

import React, { useState, useEffect } from 'react'; // Importing React and hooks
import Gallery from './components/Gallery'; // Importing the Gallery component

const App = () => {
  // State to store the list of tours
  const [tours, setTours] = useState([]);
  // State to manage the loading status
  const [loading, setLoading] = useState(true);
  // State to handle any errors during the fetch process
  const [error, setError] = useState(null);

  // Function to fetch tours data from the API
  const fetchTours = async () => {
    setLoading(true); // Set loading to true before starting the fetch
    try {
      // Fetch data from the API
      const response = await fetch('https://course-api.com/react-tours-project');
      if (!response.ok) {
        // Throw an error if the response is not successful
        throw new Error('Failed to fetch tours');
      }
      const data = await response.json();
      setTours(data); // Update the tours state with the fetched data
      setError(null); // Clear any previous errors
    } catch (err) {
      // Handle any errors that occur during the fetch
      setError(err.message);
    } finally {
      // Set loading to false after the fetch is complete
      setLoading(false);
    }
  };

  // useEffect to fetch tours data when the component mounts
  useEffect(() => {
    fetchTours(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Render a loading message while data is being fetched
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Render an error message if an error occurred during the fetch
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  // Render a "Refresh" button if no tours are left
  if (tours.length === 0) {
    return (
      <div>
        <h2>No tours left</h2>
        <button onClick={fetchTours}>Refresh</button> {/* Button to refetch the tours */}
      </div>
    );
  }

  // Render the Gallery component with the fetched tours data
  return (
    <div>
      <h1>Tours</h1>
      <Gallery tours={tours} /> {/* Pass the tours data to the Gallery component */}
    </div>
  );
};

export default App; // Exporting the App component for use in other parts of the application