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

export const Skills = () => {
    const [text, setText] = useState('');
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const yOffset = -125; // Adjust this value as needed
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };




  
  





  return (
    <div className="project_page_margin">






<section className="about-us">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1 ></h1>
               <br ></br>
                <p></p>
              </div>}
            </TrackVisibility>  
          </Col>
          
        </Row>
      </Container>
    </section>

    <div className="about-uss">
      <h1>About Us</h1>
      <div className="content">
        <p>All our efforts are directed towards manufacturing and supplying quality dyestuffs to all our national and international customers, at competitive rates.

</p><p>At Chemzone, we are committed to developing and offering customer-friendly products through unconventional routes.

</p><p>We believe in adopting innovative, cost-reduction practices and passing on the benefit to our customers.

</p><p>Caring for our customers and attending to their problems, is our top priority.</p>
        <h2>Our Mission</h2>

        
        <ul className='mission'>
          <li>To Achieve Excellence In Quality, Reliability, Sustainability And Technical Services</li>
          <li>To Continuously Pursue New Opportunity In New Markets</li>
          <li>Provide One Stop Solution For All Textile Needs</li>
          <li>To Promote A Work Culture That Fosters Learning, Individual Growth, Team Spirit And Creativity</li>
          <li> To Uphold Guiding Principle Of Trust, Integrity And Transparency In All The Silo Of The Company</li>
          <li>Using Deep Customer Insight To Develop Innovation And Acceptance New Challenges</li>
          {/* Add more team members as needed */}
        </ul>
        
      </div>
    </div>

    </div>







      
  );
};
