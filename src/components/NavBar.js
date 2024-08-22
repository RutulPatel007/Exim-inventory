import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import logo from '../assets/img/CHEMZONES.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const navigate = useNavigate();

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const redirectToProjects = (product) => {
    navigate(`/products/${product}`);
    setExpanded(false);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false);
    setDropdownOpen(false);
  };

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Navbar expand="md" expanded={expanded} className={`${scrolled ? 'scrolled' : ''} ${expanded ? 'navbar-collapse show' : 'navbar-collapse'}`}> 
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav"  className={expanded ? 'navbar-collapse show' : 'navbar-collapse'}>
          <Nav className="ms-auto" >
            <Nav.Link as={Link} to="/home" className={`${activeLink === 'home' ? 'active' : ''} navbar-link ${scrolled ? 'scrolled' : ''}`}  onClick={() => onUpdateActiveLink('home') }>
              Home
            </Nav.Link>

            <NavDropdown
              title={<span onClick={() => redirectToProjects('')} >Our Products</span>}
              id={`basic-nav-dropdown${scrolled ? '-scrolled' : ''}`}
              show={dropdownOpen}
              onClick={handleDropdownClick}
             
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              className={`${activeLink === 'products' ? 'active' : ''}nav-dropdown-menu ${scrolled ? 'scrolled' : ''}`}
              
            >
              <NavDropdown.Item onClick={() => redirectToProjects('product1')} style={{backgroundColor:'#ffffff' }}>Reactive Dyes</NavDropdown.Item>
              <NavDropdown.Item onClick={() => redirectToProjects('product2')} style={{backgroundColor:'#ffffff' }}>Direct Dyes</NavDropdown.Item>
              <NavDropdown.Item onClick={() => redirectToProjects('product3')} style={{backgroundColor:'#ffffff' }}>Acid Dyes</NavDropdown.Item>
              <NavDropdown.Item onClick={() => redirectToProjects('product4')} style={{backgroundColor:'#ffffff' }}>Dyes Intermediate</NavDropdown.Item>
              <NavDropdown.Item onClick={() => redirectToProjects('product5')} style={{backgroundColor:'#ffffff' }}>Solvent Dyes</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/quality" className={`${activeLink === 'quality' ? 'active' : ''} navbar-link ${scrolled ? 'scrolled' : ''}`} onClick={() => onUpdateActiveLink('quality')}>
              Quality
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className={`${activeLink === 'skills' ? 'active' : ''} navbar-link ${scrolled ? 'scrolled' : ''}`} onClick={() => onUpdateActiveLink('skills')}>
              About Us
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className={`social-icon ${scrolled ? 'scrolled' : ''}`}>
              <a href="www.linkedin.com/in/parimal-matholiya-72079b260">
                <img src={navIcon1} alt="" />
              </a>
           
              <a href="www.linkedin.com/in/parimal-matholiya-72079b260">
                <img src={navIcon2} alt="" />
              </a>
             
            </div>
            <HashLink to="/connect">
              <button className={`vvd ${scrolled ? 'scrolled' : ''}`} onClick={() => onUpdateActiveLink('connect')}>
                <span>Let’s Connect</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
