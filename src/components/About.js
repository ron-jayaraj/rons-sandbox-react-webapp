// About.js
import React, { useState } from 'react';
import axios from 'axios';

const About = () => {
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/sell-online-api/api/public');
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error fetching data');
    }
  };

  return (
    <div>
      <h2>About</h2>
      <button onClick={fetchData}>Fetch Data</button>
      <p>{message}</p>
    </div>
  );
};

export default About;
