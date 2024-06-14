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

export const ProjectPage3 = () => {
    const [text, setText] = useState('');
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const yOffset = -125; // Adjust this value as needed
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };





  const acidDyesData = [
    { productName: 'ACID QUINOLONE YELLOW 3GX', ciGenericName: 'ACID YELLOW 3' },
    { productName: 'ACID YELLOW 5GN', ciGenericName: 'ACID YELLOW 110' },
    { productName: 'ACID LIGHT YELLOW 2GX', ciGenericName: 'ACID YELLOW 1' },
    { productName: 'ACID YELLOW GLX', ciGenericName: 'ACID YELLOW 114' },
    { productName: 'ACID TARTARZINE ARX', ciGenericName: 'ACID YELLOW 23' },
    { productName: 'ACID YELLOW NWX', ciGenericName: 'ACID YELLOW 151' },
    { productName: 'ACID YELLOW 3GL', ciGenericName: 'ACID YELLOW 34' },
    { productName: 'ACID YELLOW PGR', ciGenericName: 'ACID YELLOW 186' },
    { productName: 'ACID METANIL YELLOW MS', ciGenericName: 'ACID YELLOW 36' },
    { productName: 'ACID YELLOW M3RL', ciGenericName: 'ACID YELLOW 194' },
    { productName: 'ACID MILING FAST YELLOW MR', ciGenericName: 'ACID YELLOW 42' },
    { productName: 'ACID YELLOW A4R', ciGenericName: 'ACID YELLOW 199' },
    { productName: 'ACID YELLOW FGX', ciGenericName: 'ACID YELLOW 4' },
    { productName: 'ACID YELLOW M5RL', ciGenericName: 'ACID YELLOW 204' },
    { productName: 'ACID FLORCSCEINE URANINE', ciGenericName: 'ACID YELLOW 73' },
    { productName: 'ACID YELLOW 2RX', ciGenericName: 'ACID YELLOW 220' },
    { productName: 'ACID YELLOW GR', ciGenericName: 'ACID YELLOW 99' },
  ];

  const acidDyesData2 = [
    { productName: 'ACID FUR YELLOW AEX', ciGenericName: 'ACID ORANGE 3' },
    { productName: 'ACID ORANGE N3RL', ciGenericName: 'ACID ORANGE 67' },
    { productName: 'ACID ORANGE 11', ciGenericName: 'ACID ORANGE 7' },
    { productName: 'ACID ORANGE', ciGenericName: 'ACID ORANGE 7' },
    { productName: 'ACID ORANGE GRX', ciGenericName: 'ACID ORANGE 10' },
    { productName: 'ACID YELLOW RL', ciGenericName: 'ACID ORANGE 80' },
    { productName: 'ACID ORANGE RGN', ciGenericName: 'ACID ORANGE 24' },
    { productName: 'ACID ORANGE RL', ciGenericName: 'ACID ORANGE 86' },
    { productName: 'ACID ORANGE 2R', ciGenericName: 'ACID ORANGE 33' },
    { productName: 'ACID ORANGE MRL', ciGenericName: 'ACID ORANGE 142' },
    { productName: 'ACID ORANGE SG', ciGenericName: 'ACID ORANGE 56' },
    { productName: 'ACID ORANGE 3GX', ciGenericName: 'ACID ORANGE 156' },
    { productName: 'ACID ORANGE 2RL', ciGenericName: 'ACID ORANGE 60' }
  ];

  const acidDyesData3 = [
    { productName: 'ACID VIOLET RLX', ciGenericName: 'ACID VIOLET 1' },
    { productName: 'ACID VIOLET CARMINE 4B', ciGenericName: 'ACID VIOLET 1' },
    { productName: 'ACID VIOLET 4BS', ciGenericName: 'ACID VIOLET 17' },
    { productName: 'ACID VIOLET 6B', ciGenericName: 'ACID VIOLET 49' },
    { productName: 'ACID BRILLIANT RED 10', ciGenericName: 'ACID VIOLET 54' },
    { productName: 'ACID BORDEAUX MB', ciGenericName: 'ACID VIOLET 90' },
    { productName: 'ACID VIOLET RL', ciGenericName: 'ACID VIOLET 9' },
    { productName: 'LETHER VIOLET R', ciGenericName: 'ACID VIOLET 131' }
  ];
  

  const acidDyesData4 = [
    { productName: 'ACID ROSE RED 2G', ciGenericName: 'ACID RED 1' },
    { productName: 'ACID CARMOISINE APX', ciGenericName: 'ACID RED 14' },
    { productName: 'ACID SCARLET 3R', ciGenericName: 'ACID RED 18' },
    { productName: 'ACID FUCHSINE SX', ciGenericName: 'ACID RED 33' },
    { productName: 'ACID RED NB', ciGenericName: 'ACID RED 34' },
    { productName: 'ACID RUBINE 3GX', ciGenericName: 'ACID RED 57' },
    { productName: 'ACID FAST RED A', ciGenericName: 'ACID RED 88' },
    { productName: 'ACID MILLING SCARLET G', ciGenericName: 'ACID RED 97' },
    { productName: 'ACID BRILLIANT RED BL', ciGenericName: 'ACID RED 106' },
    { productName: 'ACID MILLING RED RSNB', ciGenericName: 'ACID RED 114' },
    { productName: 'ACID MAROON V', ciGenericName: 'ACID RED 119' },
    { productName: 'ACID MILLING RED 3BN', ciGenericName: 'ACID RED 131' },
    { productName: 'ACID RED RS', ciGenericName: 'ACID RED 141' },
    { productName: 'ACID RED F2R', ciGenericName: 'ACID RED 151' },
    { productName: 'ACID BORDEAUX RLX', ciGenericName: 'ACID RED 182' },
    { productName: 'ACID RED GR', ciGenericName: 'ACID RED 183' },
    { productName: 'ACID RED BROWN NS', ciGenericName: 'ACID RED 184' },
    { productName: 'ACID PINK B', ciGenericName: 'ACID RED 186' },
    { productName: 'ACID BRILLIANT RED 2B', ciGenericName: 'ACID RED 249' },
    { productName: 'ACID RED GN', ciGenericName: 'ACID RED 337' },
    { productName: 'ACID RED 3GX', ciGenericName: 'ACID RED 357' },
    { productName: 'ACID RED C5R', ciGenericName: 'ACID RED 359' },
    { productName: 'ACID RED BRX', ciGenericName: 'ACID RED 362' },
    { productName: 'ACID RED 2BX', ciGenericName: 'ACID RED 410' },
    { productName: 'ACID RED BRX', ciGenericName: 'ACID RED 426' },
    { productName: 'ACID BRILLIANT RED 4G', ciGenericName: 'ACID RED 441' }
  ];

  const acidDyesData5 = [
    { productName: 'ACID PETANT BLUE VS', ciGenericName: 'ACID BLUE 1' },
    { productName: 'ACID PETANT BLU AS', ciGenericName: 'ACID BLUE 7' },
    { productName: 'ACID BRILLIANT BLUE FCF', ciGenericName: 'ACID BLUE 9' },
    { productName: 'ACID BRILLIANT BLUE FF', ciGenericName: 'ACID BLUE 15' },
    { productName: 'ACID BLUE ANX', ciGenericName: 'ACID BLUE 25' },
    { productName: 'ACID BLUE A2GX', ciGenericName: 'ACID BLUE 40' },
    { productName: 'ACID NAVY BLUE R', ciGenericName: 'ACID BLUE 92' },
    { productName: 'ACID FAST BLUE S5R', ciGenericName: 'ACID BLUE 113' },
    { productName: 'ACID BLUE 2G', ciGenericName: 'ACID BLUE 158' },
    { productName: 'ACID TURQ BLUE 3GX', ciGenericName: 'ACID BLUE 185' },
    { productName: 'ACID BLUE MTR', ciGenericName: 'ACID BLUE 193' },
    { productName: 'ACID BLUE BRLL', ciGenericName: 'ACID BLUE 324' },
    { productName: 'ACID BLUE NBL', ciGenericName: 'ACID BLUE 80' }
  ];


  const acidDyesData6 = [
    { productName: 'ACID VAPORID GREEN PX', ciGenericName: 'ACID GREEN 1' },
    { productName: 'ACID LEATHER GREEN NX', ciGenericName: 'ACID GREEN 68' },
    { productName: 'ACID MILLING GREEN 6B', ciGenericName: 'ACID GREEN' },
    { productName: 'ACID GREEN UG', ciGenericName: 'ACID GREEN 73' },
    { productName: 'ACID GREEN BLN', ciGenericName: 'ACID GREEN 12' },
    { productName: 'ACID OLIVE GREEN BGL', ciGenericName: 'ACID GREEN 104' },
    { productName: 'ACID DARK GREEN B', ciGenericName: 'ACID GREEN 20' },
    { productName: 'ACID GREEN BS', ciGenericName: 'ACID GREEN 111' },
    { productName: 'ACID CYANINE GREEN G', ciGenericName: 'ACID GREEN 25' },
    { productName: 'ACID LEATHER GREEN WEG', ciGenericName: 'ACID GREEN 114' }
  ];
  


  const acidDyesData7 = [
    { productName: 'ACID BLACK 10BX', ciGenericName: 'ACID BLACK 1' },
    { productName: 'ACID GREY APX', ciGenericName: 'ACID BLACK 84' },
    { productName: 'ACID FAST BLACK 2BX', ciGenericName: 'ACID BLACK 24' },
    { productName: 'ACID BLACK BGLX', ciGenericName: 'ACID BLACK 107' },
    { productName: 'ACID MILLING BLACK NB', ciGenericName: 'ACID BLACK 26' },
    { productName: 'ACID BLACK LDN', ciGenericName: 'ACID BLACK 172' },
    { productName: 'ACID BLACK WA', ciGenericName: 'ACID BLACK 52' },
    { productName: 'ACID BLACK MSRL', ciGenericName: 'ACID BLACK 194' },
    { productName: 'ACID GREY GLA', ciGenericName: 'ACID BLACK 58' },
    { productName: 'ACID BLACK MT', ciGenericName: 'ACID BLACK 210' },
    { productName: 'ACID GREY RL', ciGenericName: 'ACID BLACK 63' },
    { productName: 'ACID LEATHER BLACK CB', ciGenericName: 'ACID BLACK 234' },
    { productName: 'ACID GREY AWW', ciGenericName: 'ACID BLACK 71' },
    { productName: 'ACID BLACK SBX', ciGenericName: 'ACID BLACK 235' },
    { productName: 'ACID GREY CG', ciGenericName: 'ACID BLACK 82' }
  ];


  const acidDyesData8 = [
    { productName: 'ACID BROWN RX', ciGenericName: 'ACID BROWN 4' },
    { productName: 'ACID BROWN GRX', ciGenericName: 'ACID BROWN 282' },
    { productName: 'ACID BROWN 2', ciGenericName: 'ACID BROWN' },
    { productName: 'ACID BROWN TP', ciGenericName: 'ACID BROWN 28' },
    { productName: 'ACID BROWN RD', ciGenericName: 'ACID BROWN 14' },
    { productName: 'ACID BROWN SC', ciGenericName: 'ACID BROWN 32' },
    { productName: 'ACID BROWN 2R', ciGenericName: 'ACID BROWN 15' },
    { productName: 'ACID DARK BROWN JBX', ciGenericName: 'ACID BROWN 342' },
    { productName: 'ACID BROWN 2RL', ciGenericName: 'ACID BROWN 45' },
    { productName: 'ACID BROWN SRX', ciGenericName: 'ACID BROWN 348' },
    { productName: 'ACID DARK BROWN 5R', ciGenericName: 'ACID BROWN 48' },
    { productName: 'ACID BROWN GSX', ciGenericName: 'ACID BROWN 349' },
    { productName: 'ACID BROWN DS', ciGenericName: 'ACID BROWN 58' },
    { productName: 'ACID BROWN S3RX', ciGenericName: 'ACID BROWN 354' },
    { productName: 'ACID BROWN CR', ciGenericName: 'ACID BROWN 75' },
    { productName: 'ACID BROWN MBLX', ciGenericName: 'ACID BROWN 355' },
    { productName: 'ACID BROWN 4BX', ciGenericName: 'ACID BROWN 78' },
    { productName: 'ACID BROWN P3', ciGenericName: 'ACID BROWN 36' },
    { productName: 'ACID BROWN M2RL', ciGenericName: 'ACID BROWN 365' },
    { productName: 'ACID BROWN CTX', ciGenericName: 'ACID BROWN 85' },
    { productName: 'ACID OLIVE BROWN', ciGenericName: 'ACID BROWN 36' },
    { productName: 'ACID BROWN MFX', ciGenericName: 'ACID BROWN 97' },
    { productName: 'ACID BROWN SGL', ciGenericName: 'ACID BROWN 402' },
    { productName: 'ACID BROWN 5GX', ciGenericName: 'ACID BROWN 98' },
    { productName: 'ACID BROWN SRL', ciGenericName: 'ACID BROWN 41' },
    { productName: 'ACID BROWN LN2R', ciGenericName: 'ACID BROWN 41' },
    { productName: 'ACID BROWN PH', ciGenericName: 'ACID BROWN 418' },
    { productName: 'ACID BROWN RL', ciGenericName: 'ACID BROWN 420' },
    { productName: 'ACID CAMEL BROWN APX', ciGenericName: 'ACID BROWN 422' },
    { productName: 'ACID HAVANA BROWN 2RLX', ciGenericName: 'ACID BROWN 425' },
    { productName: 'ACID BROWN WG', ciGenericName: 'ACID BROWN 432' },
    { productName: 'ACID BROWN PRG', ciGenericName: 'ACID BROWN 434' },
    { productName: 'ACID DARK BROWN', ciGenericName: 'ACID BROWN 44' },
    { productName: 'ACID BROWN RGX', ciGenericName: 'ACID BROWN 214' },
    { productName: 'ACID BROWN 5GX', ciGenericName: 'ACID BROWN 452' },
    { productName: 'ACID BROWN XN', ciGenericName: 'ACID BROWN 23' },
    { productName: 'ACID BEIGE AP', ciGenericName: 'ACID BEIGE' },
    { productName: 'ACID BROWN GN', ciGenericName: 'ACID BROWN 264' },
    { productName: 'ACID BEIGE AP', ciGenericName: 'ACID BEIGE O' }
  ];
  
  
  


  



  





  return (
    <div className="project_page_margin">






<section className="project_page3">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1 >Acid Dyes Manufacturer</h1>
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
          <li className='heading'>ACID DYES</li>
            <li><button onClick={() => scrollToSection('ACID YELLOW DYES')}>ACID YELLOW DYES</button></li>
            <li><button onClick={() => scrollToSection('ACID ORANGE DYES')}>ACID ORANGE DYES</button></li>
            <li><button onClick={() => scrollToSection('ACID VIOLET DYES')}>ACID VIOLET DYES</button></li>  
            <li><button onClick={() => scrollToSection('ACID RED DYES')}>ACID RED DYES</button></li>  
            <li><button onClick={() => scrollToSection('ACID BLUE DYES')}>ACID BLUE DYES</button></li>  
            <li><button onClick={() => scrollToSection('ACID GREEN DYES')}>ACID GREEN DYES</button></li>  
            <li><button onClick={() => scrollToSection('ACID BLACK DYES')}>ACID BLACK DYES</button></li>  
            <li><button onClick={() => scrollToSection('ACID BROWN DYES')}>ACID BROWN DYES</button></li>  

            
          </ul>
        </div>
        






        <div className="content">
        <div>
            <h1>ACID DYES</h1>
            <p>Acid dyes are water soluble anionic dyes that are applied to fibres such as silk, wool, nylon and modified acrylic fibres from neutral to acid dye baths. Attachment to the fibre is attributed, at least partly, to salt formation between anionic groups in the dyes and cationic groups in the fibre. Water soluable Acid dyes are not substantive to cellulosic fibres. Acid dyes are used both commercially and by the studio dyer to dye protein/animal fibers such as wool, silk, mohair, angora, alpaca and some nylons and synthetics. Acid dyes require the use of an acid such as vinegar, acetic or sulphuric acid to set the colour.</p>
            <br></br>
            <p>Acid dyes sound scary to some novices, who imagine that the dyes themselves are caustic strong acids. In fact, the dyes are non-caustic, are in many cases non-toxic, and are named for the mild acid (such as vinegar) used in the dyeing process, and for the types of bonds they form to the fiber. Some of them are significantly more toxic than fiber reactive dyes, while others are even safe enough to eat, and are sold as food coloring.</p>
            <br></br>
        </div>

        <div>
            <h1>ACID DYES FALL INTO SEVERAL CLASSES</h1>
            <p>1. Leveling acid or strong acid dye,</p>
            <p>2. Milling or weak acid dyes, and</p>
            <p>3. Super milling or fast acid or neutral acid dyes.</p>
            <br></br>
            <p>They are also the acid dye component of all-purpose or union dyes such as Rit and Tintex, says Knutson. It's difficult now to find out which specific acid dyes fall into which of these dye classes, however. At least part of the reason is that the information is not particularly useful to the dyer.</p>
            <br></br>
            <p>Most histologic dyes are classified either as acid or as basic dyes. An acid dye exists as an anion (negatively charged) in solution, while a basic dye exists as a cation (positive charge). For instance, in the hematoxylin-eosin stain (H&E), the hematoxylin-metal complex acts as a basic dye. The eosin acts as an acid dye. A very large class of dyes containing acidic groups, such as the sodium salts of sulfonic acids or phenolic groups. They are more soluble and have less tinctorial value than basic dyes but they also have greater light fastness. They do not form lakes with tannin. Acid dyes are used in dyeing leather, paper, etc., and their particular value lies in their ability to produce brighter, more uniform colours. They are normally applied from an acid dye liquor (acetic, formic, or sulphuric acid); however, unless applied from a neutral or only slightly acid dyebath, i.e., pH of 6.0 to 7.0, their use is likely to result in acid degradation of the material dyed.</p>
            <br></br>
        </div>

        <div style={{ overflowX: 'auto' }} id='ACID YELLOW DYES'>
            <h1>ACID YELLOW DYES</h1>
      <table className='pp3_table'>
        <thead>
          <tr>
            <th>PRODUCT NAME</th>
            <th>C.I. GENERIC NAME</th>
            <th>PRODUCT NAME</th>
            <th>C.I. GENERIC NAME</th>
          </tr>
        </thead>
        <tbody>
          {acidDyesData.map((dye, index) => (
            <tr key={index}>
              <td>{dye.productName}</td>
              <td>{dye.ciGenericName}</td>
              {index + 1 < acidDyesData.length ? (
                <>
                  <td>{acidDyesData[index + 1].productName}</td>
                  <td>{acidDyesData[index + 1].ciGenericName}</td>
                </>
              ) : (
                <>
                  <td></td>
                  <td></td>
                </>
              )}
            </tr>
          )).filter((_, index) => index % 2 === 0)}
        </tbody>
      </table>
    </div>


    
    <div style={{ overflowX: 'auto' }} id='ACID ORANGE DYES'>
            <h1>ACID ORANGE DYES</h1>
      <table className='pp3_table'>
        <thead>
          <tr>
            <th>PRODUCT NAME</th>
            <th>C.I. GENERIC NAME</th>
            <th>PRODUCT NAME</th>
            <th>C.I. GENERIC NAME</th>
          </tr>
        </thead>
        <tbody>
          {acidDyesData2.map((dye, index) => (
            <tr key={index}>
              <td>{dye.productName}</td>
              <td>{dye.ciGenericName}</td>
              {index + 1 < acidDyesData2.length ? (
                <>
                  <td>{acidDyesData2[index + 1].productName}</td>
                  <td>{acidDyesData2[index + 1].ciGenericName}</td>
                </>
              ) : (
                <>
                  <td></td>
                  <td></td>
                </>
              )}
            </tr>
          )).filter((_, index) => index % 2 === 0)}
        </tbody>
      </table>
    </div>
          


    <div style={{ overflowX: 'auto' }} id='ACID VIOLET DYES'>
            <h1>ACID VIOLET DYES</h1>
      <table className='pp3_table'>
        <thead>
          <tr>
            <th>PRODUCT NAME</th>
            <th>C.I. GENERIC NAME</th>
            <th>PRODUCT NAME</th>
            <th>C.I. GENERIC NAME</th>
          </tr>
        </thead>
        <tbody>
          {acidDyesData3.map((dye, index) => (
            <tr key={index}>
              <td>{dye.productName}</td>
              <td>{dye.ciGenericName}</td>
              {index + 1 < acidDyesData3.length ? (
                <>
                  <td>{acidDyesData3[index + 1].productName}</td>
                  <td>{acidDyesData3[index + 1].ciGenericName}</td>
                </>
              ) : (
                <>
                  <td></td>
                  <td></td>
                </>
              )}
            </tr>
          )).filter((_, index) => index % 2 === 0)}
        </tbody>
      </table>
    </div>


    <div style={{ overflowX: 'auto' }} id='ACID RED DYES'>
            <h1>ACID RED DYES</h1>
      <table className='pp3_table'>
        <thead>
          <tr>
            <th>PRODUCT NAME</th>
            <th>C.I. GENERIC NAME</th>
            <th>PRODUCT NAME</th>
            <th>C.I. GENERIC NAME</th>
          </tr>
        </thead>
        <tbody>
          {acidDyesData4.map((dye, index) => (
            <tr key={index}>
              <td>{dye.productName}</td>
              <td>{dye.ciGenericName}</td>
              {index + 1 < acidDyesData4.length ? (
                <>
                  <td>{acidDyesData4[index + 1].productName}</td>
                  <td>{acidDyesData4[index + 1].ciGenericName}</td>
                </>
              ) : (
                <>
                  <td></td>
                  <td></td>
                </>
              )}
            </tr>
          )).filter((_, index) => index % 2 === 0)}
        </tbody>
      </table>
    </div>







    <div style={{ overflowX: 'auto' }} id='ACID BLUE DYES'>
            <h1>ACID BLUE DYES</h1>
      <table className='pp3_table'>
        <thead>
          <tr>
            <th>PRODUCT NAME</th>
            <th>C.I. GENERIC NAME</th>
            <th>PRODUCT NAME</th>
            <th>C.I. GENERIC NAME</th>
          </tr>
        </thead>
        <tbody>
          {acidDyesData5.map((dye, index) => (
            <tr key={index}>
              <td>{dye.productName}</td>
              <td>{dye.ciGenericName}</td>
              {index + 1 < acidDyesData5.length ? (
                <>
                  <td>{acidDyesData5[index + 1].productName}</td>
                  <td>{acidDyesData5[index + 1].ciGenericName}</td>
                </>
              ) : (
                <>
                  <td></td>
                  <td></td>
                </>
              )}
            </tr>
          )).filter((_, index) => index % 2 === 0)}
        </tbody>
      </table>
    </div>



    <div style={{ overflowX: 'auto' }} id='ACID RED DYES'>
            <h1>ACID RED DYES</h1>
      <table className='pp3_table'>
        <thead>
          <tr>
            <th>PRODUCT NAME</th>
            <th>C.I. GENERIC NAME</th>
            <th>PRODUCT NAME</th>
            <th>C.I. GENERIC NAME</th>
          </tr>
        </thead>
        <tbody>
          {acidDyesData4.map((dye, index) => (
            <tr key={index}>
              <td>{dye.productName}</td>
              <td>{dye.ciGenericName}</td>
              {index + 1 < acidDyesData4.length ? (
                <>
                  <td>{acidDyesData4[index + 1].productName}</td>
                  <td>{acidDyesData4[index + 1].ciGenericName}</td>
                </>
              ) : (
                <>
                  <td></td>
                  <td></td>
                </>
              )}
            </tr>
          )).filter((_, index) => index % 2 === 0)}
        </tbody>
      </table>
    </div>




    <div style={{ overflowX: 'auto' }} id='ACID GREEN DYES'>
            <h1>ACID GREEN DYES</h1>
      <table className='pp3_table'>
        <thead>
          <tr>
            <th>PRODUCT NAME</th>
            <th>C.I. GENERIC NAME</th>
            <th>PRODUCT NAME</th>
            <th>C.I. GENERIC NAME</th>
          </tr>
        </thead>
        <tbody>
          {acidDyesData6.map((dye, index) => (
            <tr key={index}>
              <td>{dye.productName}</td>
              <td>{dye.ciGenericName}</td>
              {index + 1 < acidDyesData6.length ? (
                <>
                  <td>{acidDyesData6[index + 1].productName}</td>
                  <td>{acidDyesData6[index + 1].ciGenericName}</td>
                </>
              ) : (
                <>
                  <td></td>
                  <td></td>
                </>
              )}
            </tr>
          )).filter((_, index) => index % 2 === 0)}
        </tbody>
      </table>
    </div>





    <div style={{ overflowX: 'auto' }} id='ACID BLACK DYES'>
            <h1>ACID BLACK DYES</h1>
      <table className='pp3_table'>
        <thead>
          <tr>
            <th>PRODUCT NAME</th>
            <th>C.I. GENERIC NAME</th>
            <th>PRODUCT NAME</th>
            <th>C.I. GENERIC NAME</th>
          </tr>
        </thead>
        <tbody>
          {acidDyesData7.map((dye, index) => (
            <tr key={index}>
              <td>{dye.productName}</td>
              <td>{dye.ciGenericName}</td>
              {index + 1 < acidDyesData7.length ? (
                <>
                  <td>{acidDyesData7[index + 1].productName}</td>
                  <td>{acidDyesData7[index + 1].ciGenericName}</td>
                </>
              ) : (
                <>
                  <td></td>
                  <td></td>
                </>
              )}
            </tr>
          )).filter((_, index) => index % 2 === 0)}
        </tbody>
      </table>
    </div>







    <div style={{ overflowX: 'auto' }} id='ACID BROWN DYES'>
            <h1>ACID BROWN DYES</h1>
      <table className='pp3_table'>
        <thead>
          <tr>
            <th>PRODUCT NAME</th>
            <th>C.I. GENERIC NAME</th>
            <th>PRODUCT NAME</th>
            <th>C.I. GENERIC NAME</th>
          </tr>
        </thead>
        <tbody>
          {acidDyesData8.map((dye, index) => (
            <tr key={index}>
              <td>{dye.productName}</td>
              <td>{dye.ciGenericName}</td>
              {index + 1 < acidDyesData8.length ? (
                <>
                  <td>{acidDyesData8[index + 1].productName}</td>
                  <td>{acidDyesData8[index + 1].ciGenericName}</td>
                </>
              ) : (
                <>
                  <td></td>
                  <td></td>
                </>
              )}
            </tr>
          )).filter((_, index) => index % 2 === 0)}
        </tbody>
      </table>
    </div>




          
        </div>
      </div>
    </div>
  );
};
