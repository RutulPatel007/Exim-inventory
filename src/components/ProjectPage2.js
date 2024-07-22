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

export const ProjectPage2 = () => {
    const [text, setText] = useState('');
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const yOffset = -125; // Adjust this value as needed
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };




  const dyeData = [
    { name: 'Direct Dyes Yellow 3GX', code: 'Direct Dyes Yellow - 6', light: '3', washing: '2', perspiration: '4', hypochlorite: '4', dischargeability: 'F', color: '#dfb300' },
    { name: 'Direct Dyes Paper Yellow T', code: 'Direct Dyes Yellow - 11', light: '4', washing: '2-3', perspiration: '4', hypochlorite: '4-5', dischargeability: 'P', color: '#bb4a00' },
    { name: 'Direct Dyes Crysophinine', code: 'Direct Dyes Yellow - 12', light: '4-5', washing: '2', perspiration: '5', hypochlorite: '2', dischargeability: 'F', color: '#cc8e00' },
    { name: 'Direct Dyes Yellow 5GLL H/C', code: 'Direct Dyes Yellow - 44', light: '3', washing: '3', perspiration: '1', hypochlorite: '1', dischargeability: 'G', color: '#ffff62' },
    { name: 'Direct Dyes Yellow 5GLL', code: 'Direct Dyes Yellow - 44', light: '3', washing: '3', perspiration: '1', hypochlorite: '1', dischargeability: 'P', color: '#ffc820' },
    { name: 'Direct Dyes Yellow RSLW', code: 'Direct Dyes Yellow - 50', light: '6', washing: '4', perspiration: '5', hypochlorite: '5', dischargeability: 'G', color: '#dd9500' },
    { name: 'Direct Dyes Yellow RL', code: 'Direct Dyes Yellow - 86', light: '6', washing: '4', perspiration: '5', hypochlorite: '5', dischargeability: 'G', color: '#ce7b00' },
    { name: 'Direct Dyes Sunfast Yellow RCH', code: 'Direct Dyes Yellow - 99', light: '4', washing: '2-3', perspiration: '4', hypochlorite: '2-3', dischargeability: 'F', color: '#c47500' },
    { name: 'Direct Dyes Orange SE 200%', code: 'Direct Dyes Orange - 26', light: '4', washing: '4', perspiration: '4-5', hypochlorite: '4-5', dischargeability: 'F', color: '#b02300' },
    { name: 'Direct Dyes Orange TGLL', code: 'Direct Dyes Orange - 39', light: '6-7', washing: '3', perspiration: '5', hypochlorite: '2', dischargeability: 'F', color: '#b04600' },
    { name: 'Direct Dyes Orange TGLL 200%', code: 'Direct Dyes Orange - 39', light: '6-7', washing: '3', perspiration: '5', hypochlorite: '2', dischargeability: 'F', color: '#cc3300' },
    { name: 'Direct Dyes Viscose Orange BRO', code: 'Direct Dyes Orange - 108', light: '2', washing: '2', perspiration: '5', hypochlorite: '5', dischargeability: 'G', color: '#cc0000' },
    { name: 'Direct Dyes Scarlet 4BS', code: 'Direct Dyes Red - 23', light: '3', washing: '3-4', perspiration: '4', hypochlorite: '4', dischargeability: 'F', color: '#800000' },
    { name: 'Direct Dyes Red 12B', code: 'Direct Dyes Red - 31', light: '1-2', washing: '3', perspiration: '3', hypochlorite: '3', dischargeability: 'F', color: '#6c0000' },
    { name: 'Direct Dyes Light Red BLN', code: 'Direct Dyes Red - 80', light: '6', washing: '3', perspiration: '5', hypochlorite: '5', dischargeability: 'F', color: '#530000' },
    { name: 'Direct Dyes Red 5B', code: 'Direct Dyes Red - 81', light: '4-5', washing: '3', perspiration: '4', hypochlorite: '4', dischargeability: 'G', color: '#8a0000' },
    { name: 'Direct Dyes Red 5B 200%', code: 'Direct Dyes Red - 81', light: '4-5', washing: '3', perspiration: '4', hypochlorite: '4', dischargeability: 'G', color: '#640000' },
    { name: 'Direct Dyes Violet MB', code: 'Direct Dyes Violet - 9', light: '2-3', washing: '2', perspiration: '5', hypochlorite: '5', dischargeability: 'G', color: '#00002f' },
    { name: 'Direct Dyes Brill Violet HELIO B', code: 'Direct Dyes Violet - 51', light: '2-3', washing: '2', perspiration: '5', hypochlorite: '5', dischargeability: 'G', color: '#25004a' },
    { name: 'Direct Dyes Sky Blue FBC', code: 'Direct Dyes Blue - 1', light: '2', washing: '3-4', perspiration: '5', hypochlorite: '5', dischargeability: 'F', color: '#00294a' },
    { name: 'Direct Dyes Sky Blue FFH', code: 'Direct Dyes Blue - 15', light: '2', washing: '3-4', perspiration: '5', hypochlorite: '5', dischargeability: 'F', color: '#002466' },
    { name: 'Direct Dyes Blue JJR', code: 'Direct Dyes Blue - 67', light: '4', washing: '3', perspiration: '4', hypochlorite: '4', dischargeability: 'P', color: '#000048' },
    { name: 'Direct Dyes Blue GLL', code: 'Direct Dyes Blue - 71', light: '5', washing: '3-4', perspiration: '5', hypochlorite: '5', dischargeability: 'F', color: '#002b00' },
    { name: 'Direct Dyes Blue GLL 200%', code: 'Direct Dyes Blue - 71', light: '5', washing: '3-4', perspiration: '5', hypochlorite: '5', dischargeability: 'F', color: '#00002f' },
    { name: 'Direct Dyes Fast Blue RLL', code: 'Direct Dyes Blue - 80', light: '6', washing: '3', perspiration: '5', hypochlorite: '5', dischargeability: 'G', color: '#2f0062' },
    { name: 'Direct Dyes Tur. Blue SBL', code: 'Direct Dyes Blue - 86', light: '6-7', washing: '4', perspiration: '5', hypochlorite: '1', dischargeability: 'F', color: '#009ec6' },
    { name: 'Direct Dyes Fast Tur. Blue FBL', code: 'Direct Dyes Blue - 199', light: '4', washing: '3-4', perspiration: '4', hypochlorite: '4', dischargeability: 'F', color: '#0066ff' },
    { name: 'Direct Dyes Green JJR', code: 'Direct Dyes Green - 26', light: '5', washing: '3-4', perspiration: '5', hypochlorite: '5', dischargeability: 'F', color: '#004a00' },
    { name: 'Direct Dyes Green NB', code: 'Direct Dyes Green - 96', light: '5', washing: '3-4', perspiration: '5', hypochlorite: '5', dischargeability: 'F', color: '#30382e' },
    { name: 'Direct Dyes Black GR', code: 'Direct Dyes Black - 22', light: '2', washing: '3', perspiration: '4', hypochlorite: '4', dischargeability: 'G', color: '#333333' },
    { name: 'Direct Dyes Diazo Black OB', code: 'Direct Dyes Black - 80', light: '2', washing: '3', perspiration: '3', hypochlorite: '4', dischargeability: 'G', color: '#363636' },
    { name: 'Direct Dyes Diazo Black BF', code: 'Direct Dyes Black - 155', light: '2', washing: '3-4', perspiration: '4', hypochlorite: '4', dischargeability: 'G', color: '#161616' },
    { name: 'Direct Dyes Gray 2RL', code: '', light: '4', washing: '3', perspiration: '4-5', hypochlorite: '4-5', dischargeability: 'F', color: '#400040' },
    { name: 'Direct Dyes Brown 2GL', code: '', light: '5-6', washing: '3', perspiration: '3', hypochlorite: '3', dischargeability: 'F', color: '#8a0000' },
  ];


  const dyeData2 = [
    { name: 'Direct Dyes Black E', code: 'Direct Dyes Black - 38', light: '2-3', washing: '2-3', perspiration: '3-4', hypochlorite: '3', dischargeability: 'F', color: '#404040' },
    { name: 'Direct Dyes Brown MR', code: 'Direct Dyes Brown - 2', light: '3-4', washing: '2', perspiration: '3-4', hypochlorite: '3', dischargeability: 'F', color: '#370000' },
    { name: 'Direct Dyes Congo Red', code: 'Direct Dyes Red - 28', light: '2', washing: '2', perspiration: '4', hypochlorite: '4', dischargeability: 'G', color: '#5e001f' },
    { name: 'Direct Dyes Blue 2B', code: 'Direct Dyes Blue - 6', light: '2', washing: '3', perspiration: '5', hypochlorite: '4', dischargeability: 'G', color: '#000055' },
    { name: 'Direct Dyes Green PLS', code: 'Direct Dyes Green - 1', light: '2', washing: '3', perspiration: '4-5', hypochlorite: '3-4', dischargeability: 'G', color: '#005e00' },
    { name: 'Direct Dyes Green B', code: 'Direct Dyes Green - 6', light: '2', washing: '3', perspiration: '4-5', hypochlorite: '3-4', dischargeability: 'G', color: '#004a00' },
    { name: 'Direct Dyes Boxdex BW', code: 'Direct Dyes Red - 13', light: '2', washing: '2', perspiration: '3-4', hypochlorite: '3-4', dischargeability: 'F', color: '#510000' },
    { name: 'Direct Dyes Black BT', code: 'Direct Dyes Black - 2', light: '3', washing: '3', perspiration: '5', hypochlorite: '4', dischargeability: 'F', color: '#333333' },
    { name: 'Direct Dyes Orange GR', code: 'Direct Dyes Orange - 1', light: '3-4', washing: '3', perspiration: '4-5', hypochlorite: '3', dischargeability: 'F', color: '#e15a00' },
    { name: 'Direct Dyes Brown BRLL', code: '', light: '3-4', washing: '2', perspiration: '4-5', hypochlorite: '4-5', dischargeability: 'P', color: '#8c0000' },
  ];
  
  





  return (
    <div className="project_page_margin">






<section className="project_page2">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1 >Direct Dyes</h1>
               <br ></br>
                <p className='photo-content'>Our high quality direct dyes are manufactured</p><p className='photo-content'>
& designed to permanently dye.</p>
              </div>}
            </TrackVisibility>  
          </Col>
          
        </Row>
      </Container>
    </section>







      <div className="project_page">
      
        <div className="menu"  style={{ position: "sticky", top: 0, zIndex: 100 }}>
          <ul className="menuu">
          <li className='heading'>DIRECT DYES</li>
            <li><button onClick={() => scrollToSection('SUNFAST & NON BENZIDINE DIRECT DYES')}>SUNFAST & NON BENZIDINE DIRECT DYES</button></li>
            <li><button onClick={() => scrollToSection('NON BENZIDINE DIRECT DYES')}>NON BENZIDINE DIRECT DYES</button></li>
            
          </ul>
        </div>
        






        <div className="content">
        <div>
            <h1>DIRECT DYES</h1>
            <p>Direct dyes are another class of dyes, one of the two types of dyes that are mixed in 'all purpose' dyes such as Rit. (The other type in the mixture is an acid dye, which will not stay in any cellulose fiber for long.) The colours of direct dyes are duller than those provided by fiber reactive dyes, and the washfastness is poor - expect anything dyed with them to 'bleed' forever. The one advantage is that direct dyes may be more lightfast, that is, resistant to fading in the light, than fiber reactive dyes. The "direct dye" classification in the Colour Index system refers to various planar, highly conjugated molecular structures that also contain one or more anionic sulfonate group. It is because of these sulfonate groups that the molecules are soluble in water. Though most direct dyes still can be obtained in powder form, it is increasingly popular to receive them as liquid concentrates. The advantage of concentrates is that they are easy to handle and meter. The disadvantage is that the surfactants and co-solvents needed to keep the dye concentrates stable may interfere with retention and sizing in the case of very deeply coloured grades.</p>
            <br></br>
            <p>Direct dyes are used on cellulose fibers such as cotton, rayon, and linen. They lack the permanence of the cold water fiber reactive dyes which most serious dyers prefer for use on cellulose fibers, but in some cases they have advantages that make their use worthwhile. For example, while many of the direct dyes are not very lightfast, there are some dyes in the class that may be more lightfast than similar shades of fiber reactive dyes. All direct dyes perform rather poorly with respect to washfastness. Without an appropriate after-treatment, direct dyes bleed a little with every washing, losing their brightness and endangering other clothes washed in the same load. However, there are special after-treatments which may be used to solve this problem. (Vinegar is not among them! In spite of claims you may see to the contrary, you cannot use vinegar to set any dye on cotton or other cellulose materials.) A product called Retayne, which is an ionic bulking agent which essentially "glues" the dye into the fiber, works very well to make fabric dyed with direct dyes washable without bleeding of the dye.</p>
            <br></br>
            <p>The name 'direct dye' alludes to the fact that these dyes do not require any form of 'fixing'. They are almost always azo dyes, with some similarities to acid dyes. They also have sulphonate functionality, but in this case, it is only to improve solubility, as the negative charges on dye and fibre will repel each other. Their flat shape and their length enable them to lie along-side cellulose fibres and maximize the Van-der-Waals, dipole and hydrogen bonds. Below is a diagram of a typical direct dye. Note that the sulphonate groups are spread evenly along the molecule on the opposite side to the hydrogen bonding -OH groups, to minimize any repulsive effects.</p>

        </div>

          <div id="SUNFAST & NON BENZIDINE DIRECT DYES" style={{ overflowX: 'auto' }}>
            <h1>SUNFAST & NON BENZIDINE DIRECT DYES</h1>
           
      <table style={{ overflowX: 'auto' }}>
        <thead>
          <tr>
            <th >Dye Name</th>
            <th>Code</th>
            <th>Color</th>
            {/* <th>Light</th>
            <th>Washing</th>
            <th>Perspiration</th>
            <th>Hypochlorite</th>
            <th>Dischargeability</th> */}
          </tr>
        </thead>
        <tbody>
          {dyeData.map((dye, index) => (
            <tr key={index}>
              <td>{dye.name}</td>
              <td>{dye.code}</td>
              <td>
                <div
                  style={{
                    width: '100px',
                    height: '60px',
                    backgroundColor: dye.color,
                    margin: '3px auto',
                    borderRadius: '4px',
              
                  }}
                ></div>
              </td>
              
       
            </tr>
          ))}
        </tbody>
      </table>


          </div>
          <div id="NON BENZIDINE DIRECT DYES" style={{ overflowX: 'auto' }}>
            <h1>NON BENZIDINE DIRECT DYES</h1>
            
        
      <table style={{ overflowX: 'auto' }}>
        <thead>
          <tr>
            <th>Dye Name</th>
            <th>Code</th>
            <th>Color</th>
            {/* <th>Light</th>
            <th>Washing</th>
            <th>Perspiration</th>
            <th>Hypochlorite</th>
            <th>Dischargeability</th> */}
          </tr>
        </thead>
        <tbody>
          {dyeData2.map((dye, index) => (
            <tr key={index}>
              <td>{dye.name}</td>
              <td>{dye.code}</td>
              <td className="color-cell">
                <div
                  style={{
                    width: '100px',
                    height: '60px',
                    backgroundColor: dye.color,
                    margin: '3px auto',
                    borderRadius: '4px',
                  }}
                ></div>
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};
