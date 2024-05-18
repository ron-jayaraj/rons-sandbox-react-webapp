// UserProfile.js
import { useEffect, useRef,useState} from 'react';
import axios from 'axios';
import Auth0Login from './Auth0Login';
import AppAccessTokenHandler from './AppAccessTokenHandler';

const UserProfile =   () => {

  const jsonDataRef = useRef(null);
  const [previousJsonData, setPreviousJsonData] = useState(null);

  const [, forceUpdate] = useState();

   const fetchData =  async () => {
    try {
    
     //  const response =  axios.get('http://localhost:8080/sell-online-api/user/authenticated/profile');
    //   const userProfileUrl = 'http://localhost:8080/sell-online-api/api/private';
       const userProfileUrl = 'http://localhost:8080/sell-online-api/user/authenticated/profile';

       const response = await axios.get(userProfileUrl,
          {
              headers: {
                  'Authorization': `Bearer ${applicationAccessToken}`,
                  'Ron-X-user-identity': `${idToken}`,
                  'Content-Type': 'application/json'
              },
          });
     

          const newJsonData = JSON.stringify(response.data);

          if(newJsonData!==previousJsonData){
            jsonDataRef.current = newJsonData;
            setPreviousJsonData(newJsonData);
            forceUpdate({});
          }

         // alert("json data "+jsonDataRef.current);

    } catch (error) {
    //  return <div> some unknown error </div>
    
    }

  };

 // alert("local storage is "+localStorage);
  const applicationAccessToken = localStorage.getItem("applicationAccessToken");
  const idToken = localStorage.getItem("idToken");

  if(applicationAccessToken){
    //alert("found app acces token")
   //alert(applicationAccessToken);
//   fetchData();
  } else{
    
 //   alert('no app access token ..calling')
    AppAccessTokenHandler.setAppAccessToken();
    
  }

  if(idToken){
    alert("found id token");
    alert (idToken);
    fetchData();
  }else{
    alert('user has not logged in ask user to log in');
    Auth0Login();
  }
  return <div>Good you have logged in. Here is your email got from autho. (if email does not show up try new private/incongnito window) <br></br>
  <pre>{jsonDataRef.current}</pre>
   </div>


};

export default UserProfile;
