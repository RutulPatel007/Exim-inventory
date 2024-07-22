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

export const ProjectPage4_copy = () => {
    const [text, setText] = useState('');
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const yOffset = -125; // Adjust this value as needed
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };


  const data = [
    { productName: "1-Phenyl-3-Methyl-5-Pyrazolone", casNo: "89-25-8" },
    { productName: "Para Tolyl -3-Methyl-5-Pyrazolone", casNo: "86-92-0" },
    { productName: "1-(2-Chloro Phenyl)-3-Methyl-5-Pyrazolone", casNo: "14580-22-4" },
    { productName: "1(3-Chloro Phenyl)-3-Methyl-5-Pyrazolone", casNo: "90-31-3" },
    { productName: "1-Phenyl-3-Carexthoxy-5-Pyrazolone", casNo: "89-33-8" },
    { productName: "3-Methyl-5-Pyrazolone", casNo: "108-26-9" },
    { productName: "1-(3-Sulphophenyl)-3-Methyl-5-Pyrazolone", casNo: "119-17-5" },
    { productName: "1-(4-Sulphophenyl)-3-Methyl-5-Pyrazolone", casNo: "89-36-1" },
    { productName: "1-(4-Sulphophenyl)-3-Carboxy-5-Pyrazolone", casNo: "118-47-8" },
    { productName: "1-(2-Chloro-4-Sulphophenyl)-3-Methyl-5-Pyrazolone", casNo: "–" },
    { productName: "1-(2-Methyl-5-Sulphophenyl)-3-Methyl-5-Pyrazolone", casNo: "5466-86-4" },
    { productName: "1-(2-Methyl-4-Sulphophenyl)-3-Methyl-5-Pyrazolone", casNo: "118-07-0" },
    { productName: "1-(4-Sulphamido phenyl)-3-Methyl-5-Pyrazolone", casNo: "13269-73-3" },
    { productName: "1-(3-Sulphamodi phenyl)-3-Methyl-5-Pyrazolone", casNo: "89-29-2" },
    { productName: "1-(2:5 Disulphophenyl)-3-Methyl-5-Pyrazolone", casNo: "54817-63-9" },
    { productName: "1-(2-Chloro-5-Sulphophenyl)-3-Methyl-5-Pyrazolone", casNo: "88-76-6" },
    { productName: "3-Methyl-1-(3-Sulphophenyl)-5-Pyrazolimine", casNo: "68083-38-5" },
    { productName: "3-Methyl-1-Phenyl-5-Pyrazolimine", casNo: "1131-18-6" },
    { productName: "2-Chloro-5-Sulphophenyl-3-Methyl-5-Pyrazolimine", casNo: "68227-68-9" },
    { productName: "3 Methyl-1(4-Chloro Phenyl)-5-Pyrazolimine", casNo: "13024-90-3" },
  ];


  const applications = [
    "Raw material for Pigment manufacturing",
    "Raw material for Solvent Dye manufacturing",
    "Pharma intermediates",
    "Agro intermediates",
    "Raw material for making Hair dyes"
  ];

  const advantages = [
    "Largest Pyrazolone manufacturer in India",
    "More than 200 ton monthly capacity",
    "Capable of manufacturing 20 pyrazolone derivatives",
    "Only manufacturer offering HPLC purity of above 99.5%",
    "Pure products that can be used for pharmaceutical and agrochemicals manufacturing"
  ];  



  return (
    <div className="project_page_margin">






<section>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1 >Dyes Intermediate</h1>
               <br ></br>
                
              </div>}
            </TrackVisibility>  
          </Col>
          
        </Row>
      </Container>
    </section>







      <div className="project_page">
      
        <div className="menu"  style={{ position: "sticky", top: 0, zIndex: 100 }}>
          <ul  className="menuu">
          <li className='heading'>DYES INTERMEDIATE</li>
            {/* <li><button onClick={() => scrollToSection('C ACID')}>C ACID</button></li>
            <li><button onClick={() => scrollToSection('EUROPEAN K ACID')}>EUROPEAN K ACID</button></li>
            <li><button onClick={() => scrollToSection('AMIDO EPSILON ACID')}>AMIDO EPSILON ACID</button></li>
            <li><button onClick={() => scrollToSection('SULPHO C ACID')}>SULPHO C ACID</button></li>
            <li><button onClick={() => scrollToSection('K ACID')}>K ACID</button></li>
            <li><button onClick={() => scrollToSection('SCHAFFER ACID (SODIUM SALT)')}>SCHAFFER ACID (SODIUM SALT)</button></li>
            <li><button onClick={() => scrollToSection('GAMMA ACID')}>GAMMA ACID </button></li>
            <li><button onClick={() => scrollToSection('H ACID')}>H ACID</button></li>
            <li><button onClick={() => scrollToSection('G SALT')}>G SALT</button></li>
            <li><button onClick={() => scrollToSection('SULPHO GAMMA ACID')}>SULPHO GAMMA ACID</button></li>
            <li><button onClick={() => scrollToSection('SULPHO J ACID')}>SULPHO J ACID</button></li> */}


            
          </ul>
        </div>
        






        <div className="content">
        <div>
            <h1>DYES INTERMEDIATE</h1>
            
        </div>

        <div className="table_pp4">
      <h1>Product Table</h1>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>CAS No</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.productName}</td>
              <td>{item.casNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <h1>Applications of Dyes Intermediates</h1>
      <ul>
        {applications.map((application, index) => (
          <li key={index}>{application}</li>
        ))}
      </ul>
    
        
      <h1>Advantages of Dyes Intermediates</h1>
      <ul>
        {advantages.map((advantage, index) => (
          <li key={index}>{advantage}</li>
        ))}
      </ul>
          

          
          
        </div>
      </div>
    </div>
  );
};
