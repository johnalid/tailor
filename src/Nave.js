import React from 'react'
import {Nav, Navbar,} from 'react-bootstrap'
import logo from './image/logo.jpg'

function Nave() {
    return (
        <div>

<>
  <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
    <Navbar.Brand href="#home" className="mr-5"><img src={logo} alt="logo" className="logo"/> <span className="Navbar">LASTOFA</span> </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" className=" border border-light" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-5">
      <Nav.Link href="#home" className="text-white">Home</Nav.Link>
      <Nav.Link href="#features" className="text-white">Features</Nav.Link>
      <Nav.Link href="#pricing" className="text-white">Pricing</Nav.Link>
    </Nav>
  
    </Navbar.Collapse>
  </Navbar>
  </>
          


        </div>
    )
}

export default Nave
