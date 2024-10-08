import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch the "Hello World!" message from the backend
    fetch('http://localhost:9000/') // Adjust the URL if necessary
      .then(response => response.text()) // Get the response as text
      .then(data => setMessage(data)) // Update the state with the fetched message
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>{message}</h1> {/* Display the fetched message */}
    </div>
  );
}

export default App;
