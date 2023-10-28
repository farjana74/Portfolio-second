import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navigation.css";
import logo from "../../images/navLogo.png"


const Navigation = () => {
    return (
    
      <Navbar  className="navbar-bg  c" >
        <Container>
          <Navbar.Brand href="#home">
          <img
              src={logo}
              width="192"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="ms-auto   navbar-size">
            <Nav.Link className='pe-3'  href="#home">Home</Nav.Link>
            <Nav.Link className='pe-3' href="#about">About</Nav.Link>
            <Nav.Link className='pe-3' href="#service">Service</Nav.Link>
            <Nav.Link className='pe-3' href="#appointment">Appointment</Nav.Link>
            <Nav.Link className='pe-3' href="#doctors">Doctors</Nav.Link>
            <Nav.Link className='pe-3' href="#department">Department</Nav.Link>
            <Nav.Link className='pe-3' href="#blog">Blog</Nav.Link>
            <Nav.Link className='pe-3' href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

     
    );
};

export default Navigation;