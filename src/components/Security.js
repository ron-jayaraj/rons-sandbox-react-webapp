// Security.js
import React, { useState } from 'react';
import axios from 'axios';
import './Rons.css';


const About = () => {
  const [message, setMessage] = useState('');
  const[accessToken, setAccessToken]=useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/sell-online-api/api/public');
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error fetching data');
    }
  };

  const fetchData_private = async () => {
    try {
        if(accessToken){
        const privateUrl = 'http://localhost:8080/sell-online-api/api/private';
         const response = await axios.get(privateUrl,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
            });
        setMessage(response.data.message);
        }else{
            setMessage('click get access token first');
 
        }
    } catch (error) {
      setMessage('Error fetching data');
    }
  };

  const getAccessToken = async () => {
    try {
        const clientId= 'KfVpe1GD9eRyhmNI0EbzF0Lo0MNwP0rf';
        const clientSecret='zyoTze_K4hRuN4RzLgQ4fDWo3vd4RY-XRAwofCJ2GzkrbcfmLvWRI0aD7Ot3slJ-';
        const auth0Url='https://dev-4bybm7c6skkix2ug.us.auth0.com/oauth/token';
        const audience='https://quickstarts/api';
        const grantType='client_credentials';

      const response = await axios.post(auth0Url,{
        client_id: clientId,
        client_secret: clientSecret,
        audience: audience,
        grant_type: grantType,
      });
     
      const accessToken = response.data.access_token;
      setAccessToken(accessToken);

    } catch (error) {
      setMessage('Error fetching data');
    }
  };

  return (
    <> 
    
    {message && (
         <div className="rons-rect-box">{message}</div>
    )}
  
      <div>
          <h2>Security - Protecting Endpoint</h2>
        <hr></hr>
          <h4> Public Endpoint: GET  http://localhost:8080/sell-online-api/api/public </h4>
          <button className="rons-button" onClick={fetchData}> Call Public Endpoint  </button>
        </div>
        <hr></hr>
        <div>
          <h4> Private Endpoint: GET  http://localhost:8080/sell-online-api/api/private <b style={{"color":"red"}}>(Machine to Machine)</b> </h4>
          <button className="rons-button" onClick={fetchData_private}> Call Private Endpoint  </button>
         
          <p> Need Bearer token to call private  api endpoints  </p>
          <button className="rons-button" onClick={getAccessToken}> Get Access Token</button>
        <p> The react web app client should first get an access token from Auth0 
            and pass that as bearer token to our backend private endpoint. To get access token,
            the react web app will first call autho POST endpoint passing client_id, client_secret, 
            audience and grant_type in the request body 
            <p>
             <b>Base URL:</b>
               First create an app in auth0 for example MyApp (machine to machin app) When you create an app it will provide you a domain 
                something like dev-rasdfl4yadfdrf.us.auth0.com and now that is the BASE url you will use.
                To get the access token the endpoint is baseUrl/oauth/token 
                Example:  https://dev-rasdfl4yadfdrf.us.auth0.com/oauth/token 
            </p>

            <p>
              <b>Client Id and Client Secret:</b>
              Also when the MyApp is created not only you get the url but also the client_id, client_secret. Copy them from autho.
            </p>

            <p>
             <b>audience:</b>
                Now the audience is the api you are going to target for. So create an API in autho. For example, 
                create an api quickstarts (a custom api). Now in your MyApp add the permission to allow the MyApp 
                to call quickstartsApi. (In MyApp click the APIs tab and enable Authorized). Meaning the MyApp can 
                call quickstartsApi. <b>Bottom line </b> we are creating corresponding client app and backend api app in auth0.
                MyApp represents our react web app and quickstartsApi represents our backed SprintBoot server app. 
                Now when you created the quickstartsApi in auth0 you get the audience. Copy that API audience. 
            </p>

            <p>
              <b>grant_type:</b>
              Just hard code grant_type to client_credentials.
            </p>

            <p>After getting access token the token is saved in react web app and used to call private 
                endpoints of our API
            </p>
        </p>

        <p><b>How does it work?</b></p>
        <p>Our backend API is configured with auth0.In api side, it all starts with the auth0 config . See  SecurityConfig.java code in backend SpringBoot server. 
The @Value in that class is set runtime by spring by reading application.yml file available under
resources dir. See application.yml. The application.yml file has audience and issuer uri. Your access token
contains this in it. (the audience and the url where it fetched the token from). Autho libray decodes the
bearer token using some jwt decoder and verfies the token and its expiry and etc and then it allows the endpoint to 
be reached. Also refer to the filter chain how these private urls are configured to go through authentication process.
       <pre>
         <code>
        public SecurityFilterChain filterChain(HttpSecurity http) throws Exception <br></br>
        http.authorizeRequests()   <br></br>
                .mvcMatchers("/api/public").permitAll()  <br></br>
                .mvcMatchers("/api/private").authenticated()  <br></br>
                .and().cors()  <br></br>
                .and().oauth2ResourceServer().jwt();  <br></br>
        return http.build();  <br></br>
    </code>
    </pre>
 </p>

        <p><span style={{"color": "red"}}> Remember: This is Machine to Machine Security. Why? Because 
        the client id and client secret are exposed in browser when the access token is received from autho
        and you can see the access token also in web tools so once you get the access token you can 
        call the private endpoints. So this is not suitable security for browser based client apps. However 
        you can use this from machine to machine. For example there is backend API cryto currency api and your 
        API again a backend API needs to call this crypto api now you can use this mechanism. Your apiwill 
        save the client id and secrets and use them to get access token and then use the access token 
        to call the crypto api. The client id and secret is not exposed anywhere. Thats why it is 
        sutiable only for Machine To Machine authentication.  </span></p>

         </div>
      
    </>
  );
};

export default About;
