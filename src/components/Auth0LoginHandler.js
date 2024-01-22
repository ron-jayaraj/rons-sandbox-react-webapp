// Auth0LoginHandler.js
import React, { useEffect } from 'react';

const Auth0LoginHandler = () => {

  alert('auth0 login handler is called');
  useEffect(() => {

    const parseCodeFromURL = () => {
     const searchParams = new URLSearchParams(window.location.search);
     const authCode = searchParams.get('code');
     return authCode;
    };

    const exchangeToken = async (authCode) => {
      const clientId='OQjNwhGDGSWRqzN5e4uwuFopIpBMUFzd';
      const clientSecret ='9A_xe8wtuJIPt3CkutCNRiz7RrTHUskJdNGRKYQIjYD2Es3crU9xgE60IN0J6NdJ';

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
          }),
        });
        const data =await response.json();
        console.log('Token exchange response :',data);
       // const idToken =data.id_token;

      }catch(error){
        return <div> user could alreays exist</div>
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
      <h2>Now you are loggd in. Auth0 would prompt or not prompt the log in screen. It could
        use many different parameters to identify it is you...so no need to dig into that in our coding perspective...

      </h2>
      <p></p>
    </div>
  );
};

export default Auth0LoginHandler;
