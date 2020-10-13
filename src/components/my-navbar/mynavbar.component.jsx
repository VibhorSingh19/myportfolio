import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/icons/logow.png';
import './mynavbar.style.css';
const MyNavbar = () => {
  return (
    <>

     <Navbar fixed="top" collapseOnSelect expand="md"  variant="dark" className="animate-navbar nav-theme justify-content-between">
  <Navbar.Brand href="#home">
   <img className="logo" src={logo} alt='my portfolio logo'/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#About">About</Nav.Link>
      <Nav.Link href="#Skills">Skills</Nav.Link>
      <Nav.Link href="#Exp">Experience</Nav.Link>
      <Nav.Link href="#prp">Projects</Nav.Link>
      <Nav.Link href="#cont">Contact</Nav.Link>
    
    </Nav>
  </Navbar.Collapse>
</Navbar>

    </>
  );
}

export default MyNavbar;
