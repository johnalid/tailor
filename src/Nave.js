import React from 'react'
import {Nav, Navbar,} from 'react-bootstrap'
import logo from './image/logo.jpg'
import {Link} from 'react-router-dom'


function Nave() {
    return (
        <div>

<>
  <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" id="Navbar">
    <Navbar.Brand href="#home" className="mr-5"><img src={logo} alt="logo" className="logo"/> <span className="Navbar">LASTOFA</span> </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" className=" border border-light" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-5">
      <Link to="/" className="text-white mx-3">Home</Link>
      <Link to="/Gallery" className="text-white mx-3">Gallery</Link>
      <Link to="/Contact" className="text-white mx-3">Contact</Link>
    </Nav>
  
    </Navbar.Collapse>
  </Navbar>
  </>
          


        </div>
    )
}

export default Nave
