import React, { useEffect, useState } from "react";
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from "./components/Navbar";
import Mapa from "./components/Mapa-google";
import './App.css'

function App() {
  return (
    <>
      <div>
        <Navbar /> {}
      </div>
      <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mapa" element={<Mapa />} />
      </Routes>
      </div>
    </>
  );
};

export default App;