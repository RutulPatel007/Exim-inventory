import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import {ProjectPage} from "./components/ProjectPage";
import {ProjectPage2} from "./components/ProjectPage2";
import {ProjectPage3} from "./components/ProjectPage3";
import {ProjectPage4} from "./components/ProjectPage4";
import { ScrollToTop } from './components/ScrollToTop';
import { Quality } from './components/Quality';

function App() {
  return (
    <Router basename="">
      <ScrollToTop />
      <div className="App">
        <NavBar />
  
        <div className="App-content">
          <Routes>
          <Route exact path="/" element={<div><Banner/> <Projects/></div>} />
            <Route path="/home" element={<div><Banner/> <Projects/></div>} />
            <Route path="/aboutus" element={<Skills />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/products" element={<Projects />} />
            <Route path="/connect" element={<></>} />
            <Route path="/products/product1" element={<ProjectPage/>}/>
            <Route path="/products/product2" element={<ProjectPage2/>}/>
           <Route path="/products/product3" element={<ProjectPage3/>}/>
           <Route path="/products/product4" element={<ProjectPage4/>}/>


          </Routes>
        </div>
        <Contact/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
