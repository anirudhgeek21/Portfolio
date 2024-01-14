import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Navbar from './components/Navbar';
import Service from './components/Service';
import Home from './components/Home';
import Contact from './components/Contact';

import About_in from './components/About-in/About_in.jsx';
import About_text from './components/About-in/About_text';

function About_route() {
  return (
    <div className="App">
      
      <Navbar homeColor="white"
  servicesColor="white"
  aboutColor="white"
  contactColor="white"
  bg2 = "black"
  navbarBackgroundColor="inherit" />
        <Routes>
        <Route path="/home" element={<Home />} /> 
        
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <About_text />
        <About_in />
      
    </div>
  );
}

export default About_route;
