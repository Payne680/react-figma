import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Gallery from "./Pages/Gallery/Gallery";

function App() {
  return  <div>
    <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home />}/>
      <Route  path="/about" element={<About />}/>
      <Route  path="/gallery" element={<Gallery />}/>
    </Routes>
    </BrowserRouter>
  </div>
}

export default App;
