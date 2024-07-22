import React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import { Link } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

export const Quality_copy = () => {
    const [text, setText] = useState('');
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const yOffset = -125; // Adjust this value as needed
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };




  
  





  return (
    <div className="project_page_margin">








    <div className="quality">
      <h1>QUALITY CONTROL APPROVED</h1>
      <div className="content">
        <p>The manufacturing process unfolds under the watchful eyes of the experts. The whole process is synchronized into different divisions. Each for a distinct purpose. For moving from one division to another the products require to fulfills the prescribed norms of the one in question. It's only when a set of products has gone through all of them that a cycle is considered over. The cycle encompasses the whole spectrum from reception of raw materials to final delivery.</p>
      </div>
    
    <br></br>
      <h2>QUALITY ASSURANCE</h2>
      <div className="content">
        <p>It has been our practice since inception to ensure that each batch of production goes through strict quality checking and we aim at providing to our valued customers quality products and consistency thereof. We make sure that the right product reaches the right customer – no compromise on quality.</p>
        <p>This has been possible with the help of most sophisticated testing instruments like spectrophotometer and other equipments installed in our Laboratory. Experienced Chemists with hands on experienced in Dyestuff industry take care of the quality parameters, thereby helping the organization gain the loyalty of the large number of customers.</p>
        <p>We retain sample undergoes testing against the approved samples, under strict supervision of our qualified chemists. This is one reason why all overseas buyers consider us as long-term partners and look up to as reliable source for quality Dyestuffs.</p>    
      </div>
    </div>

    

</div>





      
  );
};
