// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './components/Header.css'; // Import the Header.css file
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Security from './components/Security';
import Intro from './components/Intro';
import Auth0LoginHandler from './components/Auth0LoginHandler';
import Auth0Logout from './components/Auth0Logout';


import UserProfile from './components/UserProfile';
import PubSubPublisher from './components/PubSubPublisher';
import PubSubReceiver from './components/PubSubReceiver';


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
        <Route path="/PubSubPublisher" element = {<PubSubPublisher />} />
        <Route path="/PubSubReceiver" element = {<PubSubReceiver />} />
        <Route path="/Auth0Logout" element = {<Auth0Logout />} />
        <Route path="/Auth0LoginHandler" element = {<Auth0LoginHandler/>} />

        </Routes>
     
      </div>
    </Router>
  );
};


export default App;
