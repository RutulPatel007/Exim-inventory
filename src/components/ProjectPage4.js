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

export const ProjectPage4 = () => {
    const [text, setText] = useState('');
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const yOffset = -125; // Adjust this value as needed
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };







  return (
    <div className="project_page_margin">






<section className="project_page4">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1 >Dyes Intermediate</h1>
               <br ></br>
                <p>Our high quality reactive dyes are manufactured</p><p>
& designed to permanently dye.</p>
              </div>}
            </TrackVisibility>  
          </Col>
          
        </Row>
      </Container>
    </section>







      <div className="project_page">
      
        <div className="menu"  style={{ position: "sticky", top: 0, zIndex: 100 }}>
          <ul>
          <li className='heading'>DYES INTERMEDIATE</li>
            <li><button onClick={() => scrollToSection('C ACID')}>C ACID</button></li>
            <li><button onClick={() => scrollToSection('EUROPEAN K ACID')}>EUROPEAN K ACID</button></li>
            <li><button onClick={() => scrollToSection('AMIDO EPSILON ACID')}>AMIDO EPSILON ACID</button></li>
            <li><button onClick={() => scrollToSection('SULPHO C ACID')}>SULPHO C ACID</button></li>
            <li><button onClick={() => scrollToSection('K ACID')}>K ACID</button></li>
            <li><button onClick={() => scrollToSection('SCHAFFER ACID (SODIUM SALT)')}>SCHAFFER ACID (SODIUM SALT)</button></li>
            <li><button onClick={() => scrollToSection('GAMMA ACID')}>GAMMA ACID </button></li>
            <li><button onClick={() => scrollToSection('H ACID')}>H ACID</button></li>
            <li><button onClick={() => scrollToSection('G SALT')}>G SALT</button></li>
            <li><button onClick={() => scrollToSection('SULPHO GAMMA ACID')}>SULPHO GAMMA ACID</button></li>
            <li><button onClick={() => scrollToSection('SULPHO J ACID')}>SULPHO J ACID</button></li>


            
          </ul>
        </div>
        






        <div className="content">
        <div>
            <h1>DYES INTERMEDIATE</h1>
            
        </div>

          <div id="C ACID">
            <h1>C ACID</h1>
           
      
            <div>
      <h2>Product Specification</h2>
      <table className='table_pp4'>
        <thead>
          <tr>
            <th>Specification</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product Name</td>
            <td>C ACID (CASSELLA’S ACID)</td>
          </tr>
          <tr>
            <td>Chemical Name</td>
            <td>2-NAPHTHYLAMINE 4,8 DISULFONIC ACID</td>
          </tr>
          <tr>
            <td>CAS No.</td>
            <td>131-27-1</td>
          </tr>
          <tr>
            <td>Empirical Formula</td>
            <td>C<sub>10</sub>H<sub>9</sub>NO<sub>6</sub>S<sub>2</sub></td>
          </tr>
          <tr>
            <td>Molecular Weight</td>
            <td>303</td>
          </tr>
          <tr>
            <td>Form Supplied</td>
            <td>DRY POWDER</td>
          </tr>
          <tr>
            <td>Physical Appearance</td>
            <td>LIGHT PINKISH</td>
          </tr>
          <tr>
            <td>Sales Basis</td>
            <td>ON 100 % BASIS</td>
          </tr>
          <tr>
            <td>Packing</td>
            <td>HDPE BAG WITH PE LINER</td>
          </tr>
          <tr>
            <td>Assay</td>
            <td>70 % MIN.(ON MOL WT : 303)</td>
          </tr>
          <tr>
            <td>Insolubles</td>
            <td>0.2 % MAX.</td>
          </tr>
          <tr>
            <td>Solubility</td>
            <td>CLEAR SOLUTION IN DILUTE ALKALI</td>
          </tr>
        </tbody>
      </table>
    </div>


          </div>
          <div id="EUROPEAN K ACID">
            <h1>EUROPEAN K ACID</h1>
            
        
            <div>
      <h2>Product Specification</h2>
      <table className='table_pp4'>
        <thead>
          <tr>
            <th>Specification</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product Name</td>
            <td>EUROPEAN K ACID</td>
          </tr>
          <tr>
            <td>Chemical Name</td>
            <td>1-AMINO-8-NAPHTHOL,4,6 DISULPHONIC ACID 8-AMINO 1 NAPHTHOL 3,5 DISULPHONIC ACID</td>
          </tr>
          <tr>
            <td>CAS No.</td>
            <td>40130-23-4-FREE ACID, 40492-14-6-MONO SOD.SALT</td>
          </tr>
          <tr>
            <td>Empirical Formula</td>
            <td>C<sub>10</sub>H<sub>9</sub>NO<sub>7</sub>S<sub>2</sub></td>
          </tr>
          <tr>
            <td>Form Supplied</td>
            <td>DRIED POWDER</td>
          </tr>
          <tr>
            <td>Physical Appearance</td>
            <td>GREYISH OFF WHITE COLOUR</td>
          </tr>
          <tr>
            <td>Sales Basis</td>
            <td>ON 100 % BASIS</td>
          </tr>
          <tr>
            <td>Packing</td>
            <td>HDPE BAG WITH PE LINER & JUMBO BAG</td>
          </tr>
          <tr>
            <td>Assay</td>
            <td>75 % MIN.</td>
          </tr>
          <tr>
            <td>Insolubles</td>
            <td>0.2 % MAX.</td>
          </tr>
          <tr>
            <td>Solubility</td>
            <td>SOLUBLE IN WATER</td>
          </tr>
        </tbody>
      </table>
    </div>
          </div>





          <div id="AMIDO EPSILON ACID">
            <h1>AMIDO EPSILON ACID</h1>
            
        
            <div>
      <h2>Product Specification</h2>
      <table className='table_pp4'>
        <thead>
          <tr>
            <th>Specification</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product Name</td>
            <td>AMIDO EPSILON ACID</td>
          </tr>
          <tr>
            <td>Chemical Name</td>
            <td>1 NAPHTHOL 3,8 DISULPHONIC ACID</td>
          </tr>
          <tr>
            <td>Molecular Weight</td>
            <td>303</td>
          </tr>
          <tr>
            <td>Structural Formula</td>
            <td></td>
          </tr>
          <tr>
            <td>Insolubles</td>
            <td>0.2 %</td>
          </tr>
          <tr>
            <td>Solubility</td>
            <td>SOLUBLE IN WATER</td>
          </tr>
          <tr>
            <td>Purity</td>
            <td>80 %</td>
          </tr>
        </tbody>
      </table>
    </div>
          </div>





          <div id="SULPHO C ACID">
            <h1>SULPHO C ACID</h1>
            
            <div>
      <h2>Product Specification</h2>
      <table className='table_pp4'>
        <thead>
          <tr>
            <th>Specification</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product Name</td>
            <td>SULPHO C ACID</td>
          </tr>
          <tr>
            <td>Chemical Name</td>
            <td>2-NAPHTHYLAMINE,4,6,8-TRI SULPHONIC ACID</td>
          </tr>
          <tr>
            <td>Empirical Formula</td>
            <td>C10H10NO9S2</td>
          </tr>
          <tr>
            <td>Structural Formula</td>
            <td></td>
          </tr>
          <tr>
            <td>Insoluble</td>
            <td>0.25 % MAX.</td>
          </tr>
          <tr>
            <td>Purity</td>
            <td>55 % MIN. SEMI. DRY</td>
          </tr>
          <tr>
            <td>Unreacted C Acid</td>
            <td>0.25 %</td>
          </tr>
        </tbody>
      </table>
    </div>
          </div>





          <div id="K ACID">
            <h1>K ACID</h1>
            
            <div>
      <h2>Product Specification</h2>
      <table className='table_pp4'>
        <thead>
          <tr>
            <th>Specification</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product Name</td>
            <td>K ACID</td>
          </tr>
          <tr>
            <td>Chemical Name</td>
            <td>2-NAPHTHYLAMINE-3,6,8-TRISULFONIC ACID</td>
          </tr>
          <tr>
            <td>Molecular Weight</td>
            <td>383</td>
          </tr>
          <tr>
            <td>Physical Appearance</td>
            <td>YELLOWWISH WHITE COLOUR MOIST MATERIAL</td>
          </tr>
          <tr>
            <td>Solubility</td>
            <td>SOLUBLE IN HOT WATER</td>
          </tr>
          <tr>
            <td>CAS No.</td>
            <td>118-03-6</td>
          </tr>
          <tr>
            <td>Empirical Formula</td>
            <td>C10-H9-N-09-S3</td>
          </tr>
          <tr>
            <td>EINECS No.</td>
            <td>204-229-9</td>
          </tr>
          <tr>
            <td>Purity by N.V.</td>
            <td>65 % MINI.</td>
          </tr>
          <tr>
            <td>2-Naphthylamine-6, 8-Disulfonic Acid</td>
            <td>0.3 % MAX.</td>
          </tr>
          <tr>
            <td>Sulfuric Acid, 2-Naphthylamine</td>
            <td>0.4 % MAX.</td>
          </tr>
          <tr>
            <td>Fe</td>
            <td>300 PPM MAX.</td>
          </tr>
        </tbody>
      </table>
    </div>
          </div>








          <div id="SCHAFFER ACID (SODIUM SALT)">
            <h1>SCHAFFER ACID (SODIUM SALT)</h1>
            
        
            <div>
      <h2>Product Specification</h2>
      <table className='table_pp4'>
        <thead>
          <tr>
            <th>Specification</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product Name</td>
            <td>SCHAEFFER’S ACID</td>
          </tr>
          <tr>
            <td>Chemical Name</td>
            <td>2-NAPHTHOL 6-SULFONIC ACID</td>
          </tr>
          <tr>
            <td>Empirical Formula</td>
            <td>C13H2O4S</td>
          </tr>
          <tr>
            <td>CAS No.</td>
            <td>93-01-6</td>
          </tr>
          <tr>
            <td>Molecular Weight</td>
            <td>224</td>
          </tr>
          <tr>
            <td>Assay (Wet)</td>
            <td>65 % MIN.</td>
          </tr>
          <tr>
            <td>Physical Appearance</td>
            <td>OFF WHITE TO BROWN COLOUR</td>
          </tr>
        </tbody>
      </table>
    </div>
          </div>









          <div id="GAMMA ACID">
            <h1>GAMMA ACID</h1>
            
        
            <div>
      <h2>Product Specification</h2>
      <table className='table_pp4'>
        <thead>
          <tr>
            <th>Specification</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product Name</td>
            <td>Gamma Acid</td>
          </tr>
          <tr>
            <td>Chemical Name</td>
            <td>6-AMINO-4-HYDROXY-2NAPHTHALENE SULFONIC ACID <br /> 2-AMINO-6-SULFONIC ACID-8-NAPHTHOL</td>
          </tr>
          <tr>
            <td>CAS No.</td>
            <td>90-51-7</td>
          </tr>
          <tr>
            <td>Molecular Weight</td>
            <td>239 grams/mole</td>
          </tr>
          <tr>
            <td>Empirical Formula</td>
            <td>C10 H9 N O4 S</td>
          </tr>
          <tr>
            <td>Purity</td>
            <td>Min. 90% by CV</td>
          </tr>
          <tr>
            <td>Amido G Acid Content</td>
            <td>Min. 0.30%</td>
          </tr>
          <tr>
            <td>Dioxy G Acid Content</td>
            <td>Min. 0.30%</td>
          </tr>
          <tr>
            <td>Broenner’s Acid Content</td>
            <td>Min. 1.00%</td>
          </tr>
          <tr>
            <td>Insoluble Matters</td>
            <td>Min. 0.20%</td>
          </tr>
          <tr>
            <td>Solubility</td>
            <td>Solubility in dilute alkali</td>
          </tr>
          <tr>
            <td>Physical Appearance</td>
            <td>Light gray dry powder</td>
          </tr>
          <tr>
            <td>Basis of Sales</td>
            <td>On 100% real basis</td>
          </tr>
          <tr>
            <td>Packing</td>
            <td>25/50KGS HDPE bags with double PE liners inside</td>
          </tr>
        </tbody>
      </table>
    </div>
          </div>





          <div id="H ACID">
            <h1>H ACID</h1>
            
        
            <div>
      <h2>Product Specification</h2>
      <table className='table_pp4'>
        <thead>
          <tr>
            <th>Specification</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product Name</td>
            <td>H ACID</td>
          </tr>
          <tr>
            <td>Chemical Name</td>
            <td>1 AMINO-8 NAPHTHOL 3-6 DISULPHONIC ACID</td>
          </tr>
          <tr>
            <td>CAS No.</td>
            <td>9-3-5460</td>
          </tr>
          <tr>
            <td>Empirical Formula</td>
            <td>C10H9O7NS2</td>
          </tr>
          <tr>
            <td>Molecular Weight</td>
            <td>319</td>
          </tr>
          <tr>
            <td>Physical Appearance</td>
            <td>Greyish White</td>
          </tr>
          <tr>
            <td>Insoluble</td>
            <td>0.2% max.</td>
          </tr>
        </tbody>
      </table>
    </div>
          </div>








          <div id="G SALT">
            <h1>G SALT</h1>
            
        
            <div>
      <h2>Product Specification</h2>
      <table className='table_pp4'>
        <thead>
          <tr>
            <th>Specification</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product Name</td>
            <td>G SALT</td>
          </tr>
          <tr>
            <td>Chemical Name</td>
            <td>2-NAPHTHOL 6-8-DISULFONIC ACID</td>
          </tr>
          <tr>
            <td>Empirical Formula</td>
            <td>C14H8O7N2O2S</td>
          </tr>
          <tr>
            <td>CAS No.</td>
            <td>118-32-1</td>
          </tr>
          <tr>
            <td>EINECS No.</td>
            <td>204-254-6</td>
          </tr>
          <tr>
            <td>Molecular Weight</td>
            <td>304</td>
          </tr>
          <tr>
            <td>Assay (Wet)</td>
            <td>65% min.</td>
          </tr>
          <tr>
            <td>Physical Appearance</td>
            <td>White to Off White Powder</td>
          </tr>
        </tbody>
      </table>
    </div>
          </div>






          <div id="SULPHO GAMMA ACID">
            <h1>SULPHO GAMMA ACID</h1>
            
        
            <div>
      <h2>Product Specification</h2>
      <table className='table_pp4'>
        <thead>
          <tr>
            <th>Specification</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product Name</td>
            <td>SULPHO GAMMA ACID</td>
          </tr>
          <tr>
            <td>Chemical Name</td>
            <td>1-NAPHTHOL-3,6-DISULFONIC ACID</td>
          </tr>
          <tr>
            <td>Structural Formula</td>
            <td> </td>
          </tr>
          <tr>
            <td>Empirical Formula</td>
            <td>C10H9NO7S2</td>
          </tr>
          <tr>
            <td>CAS No.</td>
            <td>90-40-4</td>
          </tr>
          <tr>
            <td>Molecular Weight</td>
            <td>319.31096</td>
          </tr>
        </tbody>
      </table>
    </div>
          </div>













          <div id="SULPHO J ACID">
            <h1>SULPHO J ACID</h1>
            
        
            <div>
      <h2>Product Specification</h2>
      <table className='table_pp4'>
        <thead>
          <tr>
            <th>Specification</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product Name</td>
            <td>SULPHO J ACID</td>
          </tr>
          <tr>
            <td>Chemical Name</td>
            <td>2-AMINO-5-NAPHTHOL-1,7-DISULFONIC ACID</td>
          </tr>
          <tr>
            <td>Molecular Weight</td>
            <td>319</td>
          </tr>
          <tr>
            <td>Structural Formula</td>
            <td> </td>
          </tr>
          <tr>
            <td>Purity</td>
            <td>70% & above</td>
          </tr>
          <tr>
            <td>Isomer</td>
            <td>Max. 3% Unreacted J Acid</td>
          </tr>
          <tr>
            <td>Insoluble</td>
            <td>Max. 0.5%</td>
          </tr>
          <tr>
            <td>H.P.L.C.</td>
            <td>98% & above H.P.L.C. by area</td>
          </tr>
        </tbody>
      </table>
    </div>
          </div>












          
          
        </div>
      </div>
    </div>
  );
};
