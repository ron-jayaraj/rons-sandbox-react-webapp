// UserProfile.js
import { useEffect, useRef} from 'react';
import axios from 'axios';
import Auth0Login from './Auth0Login';

const UserProfile = () => {

  alert(" userprofile is called")
//const[data, setData] = useState(null);
//const[error,setError]= useState(null);
const fetchDataRef = useRef();

useEffect(() => {
   fetchDataRef.current =  async () => {
    try {

       const response =  axios.get('http://localhost:8080/sell-online-api/user/authenticated/profile');
    
      if(response.status===200){
        return <div> data</div>

      }else{
         const auth0LoginUrl = `https://dev-4bybm7c6skkix2ug.us.auth0.com/authorize?scope=openid%20profile%20email&audience=https://quickstarts/api&client_id=OQjNwhGDGSWRqzN5e4uwuFopIpBMUFzd&response_type=code&redirect_uri=http://localhost:3000/callback`;
        window.location.href = auth0LoginUrl;
      }
  
     // setData(response);


    } catch (error) {
     // setError(error);
      return <div> some unknown error </div>
    
    }

  };

  fetchDataRef.current();

},[]);


};


export default UserProfile;
