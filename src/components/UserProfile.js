// UserProfile.js
import React, { useState } from 'react';
import axios from 'axios';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const UserProfile = () => {
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/sell-online-api/user/authenticated/profile');

      console.log("response is "+response);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error fetching data');
    }
  };

  return (
    <div>
      <h2>User Profile </h2>
      <button onClick={fetchData}>Click Here To Access User Authenticated Endpoint Publicly avialable Data</button>
      <p>{message}</p>
    </div>
  );
};

export default withAuthenticationRequired(UserProfile);
