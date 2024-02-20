import React, { useRef, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const form = useRef();
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails, 
      [category]: value
    });
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    console.log(formDetails);

    
      
       emailjs.sendForm(
        'service_9vezg1g', // Replace with your Email.js service ID
        'template_owg5iem', // Replace with your Email.js template ID
        // {
        //   firstName: formDetails.firstName,
        //   lastName: formDetails.lastName,
        //   email: formDetails.email,
        //   phone: formDetails.phone,`
        //   message: formDetails.message
        // },
        form.current,
        'BRZo5VGhqKVGBNCyz',
        ) // Replace with your Email.js user ID
       .then(
        (result) => {
          console.log(result.text);
          setButtonText("Send");
          setFormDetails(formInitialDetails);
          setStatus({ success: true, message: 'Message sent successfully' });
        },
        (error) => {
          console.log(error.text);
          setButtonText("Send");
          setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        }
       )
    
      
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form ref={form} method="post" onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="firstName" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name = "lastName" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name = "email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" name = "phone" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" name = "message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
