// Auth0LoginHandler.js
import React, { useEffect } from 'react';
import axios from 'axios';

const Auth0LoginHandler = () => {

  alert('auth0 llogin handler is called');
  useEffect(() => {

    const parseCodeFromURL = () => {
     const searchParams = new URLSearchParams(window.location.search);
     const authCode = searchParams.get('code');
     return authCode;
    };

    const exchangeToken = async (authCode) => {

    
      try {
        const clientId='OQjNwhGDGSWRqzN5e4uwuFopIpBMUFzd';
        const clientSecret ='9A_xe8wtuJIPt3CkutCNRiz7RrTHUskJdNGRKYQIjYD2Es3crU9xgE60IN0J6NdJ';
        const auth0Url='https://dev-4bybm7c6skkix2ug.us.auth0.com/oauth/token';
        const audience='https://quickstarts/api';
        //const grantType='client_credentials';
        const grantType = 'authorization_code';
        const redirect_uri='http://localhost:3000/home'


      const response=  await axios.post(auth0Url,{
        client_id: clientId,
        client_secret: clientSecret,
        audience: audience,
        grant_type: grantType,
        code: authCode,
        redirect_uri: redirect_uri,
      }
      );
   
      alert (' why this hell not showing up 1');

            alert (' why this hell not showing up 2');
            const data =await response.data;

      const accessToken =data.access_token;

      const idToken =data.id_token;
      alert(accessToken);
      alert(idToken);
     
     localStorage.setItem("idToken",idToken);

     alert("after adding access token to the local store trying to see "+localStorage.getItem("accessToken"));




      }catch(error){

        return <div> user could alreays exist</div>
      }
     };

     const authCode = parseCodeFromURL();
     alert("autho code is " +authCode)
     if(authCode){
      alert("exchange token.. ...")

      const response =exchangeToken(authCode);

    
      
     }
  }, []);

  return (
    <div>
      <h2>Now you are loggd in. Auth0 would prompt or not prompt the log in screen. It could
        use many different parameters to identify it is you...
        so no need to dig into that in our coding perspective...

        <br></br>
        The request was redirected to autho and autho called back this handler... where we got the authCode
        using the auth code we exchanged for token and it returned access token and id token ...


      </h2>
      <p></p>
    </div>
  );
};

export default Auth0LoginHandler;
