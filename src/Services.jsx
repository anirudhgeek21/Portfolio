import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Navbar from './components/Navbar';
import Service from './components/Service';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About'

function Services() {
  return (
    <div className="App">
      
      <Navbar />
        <Routes>
        <Route path="/home" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Service />
      
    </div>
  );
}

export default Services;
