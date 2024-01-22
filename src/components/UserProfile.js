// UserProfile.js
import { useEffect, useRef} from 'react';
import axios from 'axios';
import Auth0Login from './Auth0Login';

const UserProfile = () => {

const fetchDataRef = useRef();

useEffect(() => {
   fetchDataRef.current =  async () => {
    try {

       const response =  axios.get('http://localhost:8080/sell-online-api/user/authenticated/profile');
    
      if(response.status===200){
        return <div> data</div>

      }else{
        Auth0Login();
          }

    } catch (error) {
      return <div> some unknown error </div>
    
    }

  };

  fetchDataRef.current();

},[]);


};


export default UserProfile;
