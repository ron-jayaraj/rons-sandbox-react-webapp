// App.js
import React from 'react';
import {createRoot} from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './components/Header.css'; // Import the Header.css file
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Security from './components/Security';
import Intro from './components/Intro';
import { Auth0Provider } from '@auth0/auth0-react';
import Callback from './components/Callback';


import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <Router>
      <div>
     
        <Header />
        
        <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Intro" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Security" element={<Security />} />
        <Route path="/UserProfile" element = {<UserProfile />} />
        <Route path="/callback" element = {<Callback />} />

        </Routes>
     
      </div>
    </Router>
  );
};

const Auth0ProviderWithHistory = 
({children}) => {
  return (
    <Auth0Provider domain='https://dev-4bybm7c6skkix2ug.us.auth0.com'
      clientId='OQjNwhGDGSWRqzN5e4uwuFopIpBMUFzd'
      redirectUri='http://localhost:3000/callback'
      >
  {children}
      </Auth0Provider>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(
<Auth0ProviderWithHistory>
  <App />
</Auth0ProviderWithHistory>
);

export default App;
