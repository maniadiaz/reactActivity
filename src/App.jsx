import React, { useEffect, useState } from "react";
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from "./components/Navbar";
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
      </Routes>
      </div>
    </>
  );
};

export default App;