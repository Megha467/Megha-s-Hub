import logo from './EMS1-logo-16.png';
import React from 'react';
import './Navb.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,Container, Nav } from 'react-bootstrap';
function Navb()
{
return (
    <div  >  
        <Navbar collapseOnSelect data-target="#navbarCollapse" bg="dark" expand="lg" variant="dark" sticky = "top">
        <Container>
        <Navbar.Brand >
      <img
        src= {logo}
        width="70"
        height="50"
        className="d-inline-block align-top ml-3"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
    <Nav  className="navbar navbar-expand-md">
      <Nav.Link href="#home" className="text-white">Users</Nav.Link>
      <Nav.Link href="#features" className="text-white">Events</Nav.Link>
      <Nav.Link href="#pricing" className="text-white">Setting</Nav.Link>
      <Nav.Link href="#pricing" className="text-white">Login</Nav.Link>
    </Nav>
    </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
)
}
export default Navb;