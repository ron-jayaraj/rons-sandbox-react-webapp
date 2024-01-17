// UserProfile.js
import {
 useState, useEffect, useRef} from 'react';
import axios from 'axios';
//import  Auth0Login from './Auth0Login';
//import {createRoot} from 'react-dom';


const UserProfile = () => {

const[data, setData] = useState(null);
const[error,setError]= useState(null);
const fetchDataRef = useRef();

useEffect(() => {
   fetchDataRef.current =  async () => {
    try {

     //  const response  = await axios.get('http://localhost:8080/sell-online-api/api/public');
       const response =  axios.get('http://localhost:8080/sell-online-api/user/authenticated/profile');
    
    //  const responseData = response.data();
      alert("response is "+response);
      if(response.status===200){
        return <div> data</div>

      }else{

        const auth0LoginUrl = `https://dev-4bybm7c6skkix2ug.us.auth0.com/authorize?scope=openid&audience=https://quickstarts/api&client_id=OQjNwhGDGSWRqzN5e4uwuFopIpBMUFzd&response_type=token&redirect_uri=http://localhost:3000/callback`;
        // Trigger Auth0 login flow 
       
       
        window.location.href = auth0LoginUrl;
   
      }
    
      setData(response);


    } catch (error) {
      setError(error);
      return <div> some unknown error </div>
    
    }

  };

  fetchDataRef.current();

},[]);


};


export default UserProfile;
