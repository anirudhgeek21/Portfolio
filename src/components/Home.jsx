import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Navbar from './Navbar';
import Services from './Service';
import Banner from './Landing_banner/Banner';
import Aniflix from './Projects/Aniflix/Aniflix';
import Airbnb from './Projects/Airbnb/Airbnb';
import GetInTouch from './GetInTouch';
import Contact from './Contact';
import About from './About';
import Guess from './Projects/Guess_Number/Guess'

function Home() {
  return (
    <div className="App">
      
      <Navbar />
        <Routes>
          <Route path="/about" element={<About />} /> 
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Banner />
        <Aniflix />
        <Airbnb />
        <Guess />
        <GetInTouch />
      
    </div>
  );
}

export default Home;
