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
import {ProjectPage5} from "./components/ProjectPage5";
import { ProjectPage_copy } from './components/ProjectPage copy';
import { ProjectPage2_copy } from './components/ProjectPage2 copy';
import { ProjectPage3_copy } from './components/ProjectPage3 copy';
import { ProjectPage4_copy } from './components/ProjectPage4 copy';
import { ProjectPage5_copy } from './components/ProjectPage5 copy';
import { Skills_copy } from './components/Skills copy';
import { Quality_copy } from './components/Quality copy';
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
          <Route exact path="/" element={<div><Banner/> <Projects/> <Quality_copy/><Skills_copy/></div>} />
            <Route path="/home" element={<div><Banner/> <Projects/> <Quality_copy/><Skills_copy/></div>} />
            <Route path="/aboutus" element={<Skills />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/products" element={<div>  <Projects /> <ProjectPage_copy /> <ProjectPage2_copy /> <ProjectPage3_copy /> <ProjectPage4_copy /> <ProjectPage5_copy /></div>} />
            <Route path="/connect" element={<></>} />
            <Route path="/products/product1" element={<ProjectPage/>}/>
            <Route path="/products/product2" element={<ProjectPage2/>}/>
           <Route path="/products/product3" element={<ProjectPage3/>}/>
           <Route path="/products/product4" element={<ProjectPage4/>}/>
           <Route path="/products/product5" element={<ProjectPage5/>}/>
           <Route path="/products/product6" element={<ProjectPage/>}/>

            <Route component={<div><Banner/> <Projects/> <Quality_copy/><Skills_copy/></div>} />
           


          </Routes>
        </div>
        <Contact/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
