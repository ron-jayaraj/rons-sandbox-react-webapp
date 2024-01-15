// Home.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Rons.css';

const Home = () => {

  return (
    <div >
      <h3>Rons React Webapp & Spring Boot RESTful Backend Services - Sandbox</h3>
      <ol>
        
        <li className="rons-href">
        <Link to="/Intro">Intro </Link>
        </li>

        <li className="rons-href">
        <Link to="/Security"> Protecting Api Endpoint</Link>
        </li>
         
        <li className="rons-href">
        <Link to="/UserProfile"> User End Point</Link>
        </li>

      </ol>

    </div>
  );
};

export default Home;
