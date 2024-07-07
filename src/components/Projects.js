import React from 'react';
import { Container, Row, Col, Tab, Nav ,Carousel} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/pp1crop.png";
import projImg3 from "../assets/img/pp3crop.png";
import projImg2 from "../assets/img/pp2crop.png";
import projImg4 from "../assets/img/pp4crop.png";
import projImg5 from "../assets/img/pp5crop.png";
import projImg6 from "../assets/img/Screenshot (18).png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      id:1,
      title: "Reactive Dyes",
      description: "",
      imgUrl: projImg1,
      link:""
    },
    {
      id:2,
      title: "Direct Dyes",
      description: "",
      imgUrl: projImg2,
      link:""
    },
    {
      id:3,
      title: "Acid Dyes",
      description: "",
      imgUrl: projImg3,
      link:""
    },
    {
    id:4,
      title: "Dyes Intermediate",
      description: " ",
      imgUrl: projImg4,
      link:""
    },
    {
      id:5,
        title: "Solvent Dyes",
        description: " ",
        imgUrl: projImg5,
        link:""
      },
      {
        id:6,
        title: "Reactive Dyes",
        description: "",
        imgUrl: projImg1,
        link:""
        },
      
  
  ];

  const pairedProjects = [];
  for (let i = 0; i < projects.length; i += 2) {
    pairedProjects.push([projects[i], projects[i + 1]]);
  }


  return (
    <section className="project" id="projects">
      <div className="project_margin">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Our Products</h2>
                <br></br>
                <Carousel>
                  {pairedProjects.map((pair, index) => (
                    <Carousel.Item key={index}>
                      <Row className="justify-content-center">
                        {pair.map((project) => (
                          <Col key={project.id} className="d-flex justify-content-center" style={{ minHeight: '300px' , minWidth: '450px'}}  >
                            <ProjectCard {...project}  />
                          </Col>
                        ))}
                      </Row>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
      </div>
    </section>
  )
}
