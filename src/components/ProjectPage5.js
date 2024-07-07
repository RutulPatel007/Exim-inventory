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

export const ProjectPage5 = () => {
    const [text, setText] = useState('');
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const yOffset = -125; // Adjust this value as needed
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };


  const products = [
    { id: 1, name: 'Black RLI', ciNo: 'Solvent Black 29' },
    { id: 2, name: 'Black RE', ciNo: 'Solvent Black 27' },
    { id: 3, name: 'Black REH', ciNo: 'Solvent Black 27' },
    { id: 4, name: 'Black REV', ciNo: 'Solvent Black 27' },
    { id: 5, name: 'Black RLSN', ciNo: 'Solvent Black 45' },
    { id: 6, name: 'Brown 2RL', ciNo: 'Solvent Brown 43' },
    { id: 7, name: 'Brown GLS', ciNo: 'Mixture' },
    { id: 8, name: 'Fire Red GLS', ciNo: 'Solvent Red 89' },
    { id: 9, name: 'Red 3BLSE', ciNo: 'Solvent Red 91' },
    { id: 10, name: 'Red 2BLSE', ciNo: 'Solvent Red 122' },
    { id: 11, name: 'Red 2BLSE-YR', ciNo: 'Solvent Red 122' },
    { id: 12, name: 'Red G', ciNo: 'Solvent Red 125' },
    { id: 13, name: 'Red 2BL', ciNo: 'Solvent Red 132' },
    { id: 14, name: 'Fire Red BL', ciNo: 'Solvent Red 160' },
    { id: 15, name: 'Yellow R', ciNo: 'Solvent Yellow 82' },
    { id: 16, name: 'Yellow 2RLS', ciNo: 'Solvent Yellow 62' },
    { id: 17, name: 'Orange G', ciNo: 'Solvent Orange 11' },
    { id: 18, name: 'Orange RP', ciNo: 'Solvent Orange 54' },
    { id: 19, name: 'Orange RL', ciNo: 'Solvent Orange 62' },
    { id: 20, name: 'Orange R', ciNo: 'Solvent Orange 99' },
    { id: 21, name: 'Blue 2GLN', ciNo: 'Solvent Blue 48' },
    { id: 22, name: 'Blue GL', ciNo: 'Solvent Blue 70' },
    { id: 23, name: 'Dark Violet R', ciNo: '-' }
  ];


  const applications = [
"Printing Inks (Flexographic, Gravure and offset Inks)",
"Inkjet Inks (Certain Products)",
"Stationary Inks",
"Wood Stains",
"Paints – Industrial Paints, automotive and other solvent based paints",
"Printing on Aluminium Foils",
"Metallized Polyester Films",
"Leather Topcoats",
  ];

  const advantages = [
"In-house manufacturing of input raw materials gives us precise control over Quality and Delivery",
"Extensive range of products, which give brilliant colorations in inks and foils",
"Excellent solubility in solvents like – Ethanol, MEK, Butyl Cellosolve, Ethoxy / Methoxy – Propanol and other aromatic solvents",
"Low metal contents as per EN71 and no presence of banned amines as per 21CFR",
"No precipitation even after long storage",
"High Heat Stability",
  ];  



  return (
    <div className="project_page_margin">






<section className="project_page5">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1 >Solvent Dyes</h1>
               <br ></br>
                <p className='photo-content'>Our high quality reactive dyes are manufactured</p><p className='photo-content'>
& designed to permanently dye.</p>
              </div>}
            </TrackVisibility>  
          </Col>
          
        </Row>
      </Container>
    </section>







      <div className="project_page">
      
        <div className="menu"  style={{ position: "sticky", top: 0, zIndex: 100 }}>
          <ul  className="menuu">
          <li className='heading'>SOLVENT DYES</li>
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
            <h1>SOLVENT DYES</h1>
            
        </div>

        <div className="table_pp4">
      <h1>Product Table</h1>
      <table>
        <thead>
          <tr>
            <th>SR. NO.</th>
            <th>PRODUCT NAME</th>
            <th>C.I.NO.</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.ciNo}</td>
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
