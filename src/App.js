import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route}from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
function App(){
  return(
    <div>
      <Router>
        <Navbar/>
        <h1>codebrainexecution</h1>
        <Routes>
          <Route path="/home"element={<Home/>}></Route>
          <Route path="/about"element={<About/>}></Route>
          <Route path="/contact"element={<Contact/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}
export default App;