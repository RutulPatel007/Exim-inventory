import React from 'react';
import { Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from 'react-router-dom';
export const ProjectCard = ({id, title, description, imgUrl }) => {
  return (
    // <Router>
    <Col size={12} sm={6} md={4} style={{ minHeight: '300px' , minWidth: '450px'}} >
      <div className="proj-imgbx"  style={{ minHeight: '300px' , minWidth: '450px'}}>
        <img src={imgUrl}   />
        <div className="proj-txtx">
          <h4>{title}</h4>

          <span>{description}</span>
          <br></br>
          <Link to={`/products/product${id}`}>
          <button >Know More <ArrowRightCircle size={25} /></button>
          </Link>
        </div>
      </div>
    </Col>
    // {/* </Router> */}
  )
}
