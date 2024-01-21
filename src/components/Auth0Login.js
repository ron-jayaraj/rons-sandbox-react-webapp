import React from 'react';
 const Auth0Login = () =>
  { 
    // Ron ====== we are not using this
    // Use domain and clientId to construct the Auth0 login URL 
    alert("auth0login is called");
    const auth0LoginUrl = `https://dev-4bybm7c6skkix2ug.us.auth0.com/authorize?client_id=OQjNwhGDGSWRqzN5e4uwuFopIpBMUFzd&response_type=token&redirect_uri=http://localhost:3000/callback`;
     // Trigger Auth0 login flow 
     window.location.href = auth0LoginUrl;
     
     return (
        <div>
    Redirecting to Auth0 login..
    </div>
    

    );
 };
     export default Auth0Login;