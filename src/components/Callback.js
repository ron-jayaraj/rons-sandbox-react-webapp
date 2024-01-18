// Callback.js
import React, { useEffect } from 'react';

const Callback = () => {

  useEffect(() => {

    const parseCodeFromURL = () => {
     const searchParams = new URLSearchParams(window.location.search);
     const authCode = searchParams.get('code');
     return authCode;
    };

    const exchangeToken = async (authCode) => {
      const clientId='OQjNwhGDGSWRqzN5e4uwuFopIpBMUFzd';
      const clientSecret ='9A_xe8wtuJIPt3CkutCNRiz7RrTHUskJdNGRKYQIjYD2Es3crU9xgE60IN0J6NdJ';
      const redirectUri ='http://localhost:3000/tokenHandlermmmm';

      try {
        const response =await fetch('https://dev-4bybm7c6skkix2ug.us.auth0.com/oauth/token',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            grant_type: 'authorization_code',
            code: authCode,
            client_id: clientId,
            client_secret: clientSecret,
            redirect_uri: redirectUri,
          }),
        });
        const data =await response.json();
        console.log('Token exchange response :',data);
        const idToken =data.id_token;

      }catch(error){
        console.error('Token exchnage error',error);
      }
     };

     const authCode = parseCodeFromURL();
     if(authCode){
      exchangeToken(authCode);
     }
  }, []);

  return (
    <div>
      <h2>callback 123 component</h2>
      <p>Callback Called yes</p>
    </div>
  );
};

export default Callback;
