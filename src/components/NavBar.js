import React from 'react';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container,NavDropdown } from "react-bootstrap";
import logo from '../assets/img/logo_sub-removebg-preview.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-c791e9551fe4/github-mark/github-mark-white.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
// import {useHistory} from 'react-router-dom';

export const NavBar = () => {
  // const history = useHistory();

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const redirectToProjects = () => {
    window.location.href = "/products";
  }

  // const handleDropdownClick = () => {
  //   history.push('/projects');
  //   onUpdateActiveLink('projects');
  // };

  return (
    // <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="/aboutus" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>About Us</Nav.Link>
              <NavDropdown
              
        title="Our Products"
        id="basic-nav-dropdown"
        show={activeLink === 'projects'}
        onMouseEnter={() => onUpdateActiveLink('projects')}
        onMouseLeave={() => onUpdateActiveLink(null)}
        onClick={()=>redirectToProjects()}
      >
        {/* Your dropdown items */}
        <NavDropdown.Item href="/products/product1">Reactive Dyes</NavDropdown.Item>
        <NavDropdown.Item href="/products/product2">Direct Dyes</NavDropdown.Item>
        <NavDropdown.Item href="/products/product3">Acid Dyes</NavDropdown.Item>
        <NavDropdown.Item href="/products/product4">Dyes Intermediate</NavDropdown.Item>
        {/* Add more dropdown items as needed */}
      </NavDropdown>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/rutul-patel-17378024a/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/RutulPatel007"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/rutul_patel_007/"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='/connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    // </Router>
  )
}