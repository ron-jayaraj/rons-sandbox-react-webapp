
// authologou.js
import React, { useState } from 'react';
import axios from 'axios';

const Auth0Logout = () => {
  alert("autho logout  is called ")
  window.location.href = `https://dev-4bybm7c6skkix2ug.us.auth0.com/logout?returnTo=https://www.google.com/`;
  };


export default Auth0Logout;
