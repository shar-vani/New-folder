import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/hello')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(err => {
        console.error('API error:', err);
      });
  }, []);

  return (
    <div>
      <h1>React Frontend</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
