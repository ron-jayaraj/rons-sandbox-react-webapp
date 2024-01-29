
// authologou.js
import React, { useState } from 'react';
import axios from 'axios';

const Auth0Logout = () => {
  alert("autho logout  is called ")
  localStorage.removeItem("accessToken");
  localStorage.removeItem("idToken");
  window.location.href = `https://dev-4bybm7c6skkix2ug.us.auth0.com/logout?return_uri=http://localhost:3000/home`;
  };


export default Auth0Logout;
