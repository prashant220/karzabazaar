import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Navbar.css'

function Navigation() {
    return (
        <div>
            <Navbar  ml-auto expand="lg">
  <Navbar.Brand href="#home" style={{color:'#DC3DAA',marginLeft:'14%'}}>Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Loans</Nav.Link>
      <Nav.Link href="#link">Calculator</Nav.Link>
      <Nav.Link href="#link">Blogs</Nav.Link>
      <Nav.Link href="#link">Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Navigation
