import React, { useEffect, useState } from "react";
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from "./components/Navbar";
import Mapa from "./components/Mapa-google";
import MapaRuta from "./components/Mapa-ruta";
import MapaConClustering  from "./components/MarkerConClustering";
import MapDrawing from "./components/MapDrawing";
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
          <Route path="/mapaRuta" element={<MapaRuta />} />
          <Route path="/mapaConClustering" element={<MapaConClustering />} />
          <Route path="/MapDrawing" element={<MapDrawing/>} />
      </Routes>
      </div>
    </>
  );
};

export default App;