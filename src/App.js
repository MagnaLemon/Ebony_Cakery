import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import AboutMe from './aboutme/AboutMe';
import Cakes from './cakes/Cakes';
import Cupcakes from './cupcakes/Cupcakes';
import BottomNav from './bottomnav/BottomNav';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutMe />} />
        <Route path="cakes" element={<Cakes />} />
        <Route path="cupcakes" element={<Cupcakes />} />
        
        </Routes>
        <BottomNav/>

      </div>
    </div>
    </Router>
  );
}

export default App;
