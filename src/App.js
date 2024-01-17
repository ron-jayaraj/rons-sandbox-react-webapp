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

const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);

export default App;
