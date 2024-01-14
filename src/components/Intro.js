
import React from 'react';

const Intro = () => {
    
  return (
    <div align="center" >
        <br></br>
        <h2> Hello World! Hello React World! </h2>
  <p>
 The index.html has just an empty div with id as root. In the Headers.js file the menu items are defined. 
  When something is clicked on the menu for example 'Contact' then the contact component's html content is set in the root div replacing whatever was in the root div (which is nothing but this div itself where this content is being displayed right now)
</p>
  <p>

 For example, when the Contact menu is clicked the browser uses  our router defined in App.js and the router tells the browser 
  (by browser I mean the browser execution or javascript process) what component to load.

   The components are also javscripts so basically invokes the corresponding component script.  Now whatever menu  was clicked its corresponding java script component returns a block of html code and  html content replaces this content(the root div ). 
   </p>
   <p>
  Additionally if that html content has a javascript embedded for example button onClick and that calls a method for example fetchData and If you have an api call within that  method then  when you click on the button you can display  whatever content api call returned you.  This kind of dynamic data update is achieved by using technique useState. </p>
  
  <p>Refer to intro.js  file for sample code (commented out )  at the bottom of the  file. Once the message is retreived from third party api call and is set and ready the React Webapp would take care of it by monitoring the state of the message variable and refreshing the page automaticllay for you!.
  </p>
  </div>
);
};

export default Intro;


/*
// About.js
import React, { useState } from 'react';
import axios from 'axios';

const About = () => {
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/sell-online-api/api/public');

      console.log("response is "+response);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error fetching data');
    }
  };

  return (
    <div>
      <h2>About</h2>
      <button onClick={fetchData}>Click Here To Fetch Publicly avialable Data</button>
      <p>{message}</p>
    </div>
  );
};

export default About;
*/