// import React from 'react';
// import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/CHEMZONES.png";
// import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";

// export const Footer = () => {
//   return (
//     <footer className="footer">
//       <Container>
//         <Row className="align-items-center">
//           {/* <MailchimpForm /> */}
//           <Col size={12} sm={6}>
//             <img src={logo} alt="Logo" />
//           </Col>
//           <Col size={12} sm={6} className="text-center text-sm-end">
//             <div className="social-icon">
//               <a href="#"><img src={navIcon1} alt="Icon" /></a>
//               <a href="#"><img src={navIcon2} alt="Icon" /></a>
//               <a href="#"><img src={navIcon3} alt="Icon" /></a>
//             </div>
//             <p>Copyright 2022. All Rights Reserved</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   )
// }

import React from 'react';
// import './Footer.css';
import logo from '../assets/img/CHEMZONES.png'; // Adjust the path to your logo
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className='footer-logo'><img src={logo} alt="Company Logo" className="footer-logo" /></div>
        <div className="footer-address">
          
          <div className="footer-addresss">
            <p >28, Shiv Estate,</p><p>B/h Hotel Chatako,</p>
            
            <p>National Highway No.8,</p>
            <p>Ahmedabad -380026,</p>
            <p>Gujarat (India)</p>
            <br></br>
            <p>Phone: +91 8160516112</p>
            <p>Email: sales@chemzones.com</p>
          </div>
        </div>
        
        <div className="footer-products">
          <h4>Our Products</h4>
          <ul>
            <li><Link to="/products/product1">Reactive Dyes</Link></li>
            <li><Link to="/products/product2">Direct Dyes</Link></li>
            <li><Link to="/products/product3">Acid Dyes</Link></li>
            <li><Link to="/products/product4">Dyes Intermediate</Link></li>
          </ul>
        </div>
        <div className="footer-quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/products">Our Products</Link></li>
            <li><Link to="/quality">Quality</Link></li>
            <li><Link to="/Aboutus">About Us</Link></li>
            
            <li><Link to="/connect">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

// export default Footer;

