import React from 'react';
 const Auth0Login = () =>
  { 
    var redirect_uri = 'http://localhost:3000/auth0LoginHandler';
    const auth0LoginUrl = `https://dev-4bybm7c6skkix2ug.us.auth0.com/authorize?client_id=OQjNwhGDGSWRqzN5e4uwuFopIpBMUFzd&response_type=code&scope=openid%20email&redirect_uri=`+redirect_uri;
     // Trigger Auth0 login flow 
     window.location.href = auth0LoginUrl;
     
     return (
        <div>
    Redirecting to Auth0 login..
    </div>
    

    );
 };
     export default Auth0Login;