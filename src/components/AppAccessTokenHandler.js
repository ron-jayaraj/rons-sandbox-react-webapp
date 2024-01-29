import axios from 'axios';

class AppAccessTokenHandler{
 
    async setAppAccessToken () {
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
        //  setAccessToken(accessToken);
        localStorage.setItem("applicationAccessToken",accessToken)
    
        } catch (error) {
          alert('Error fetching app access token data');
        }
      };
}

export default new AppAccessTokenHandler();