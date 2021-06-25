import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Banner.css'
import Image1 from '../images/banner.png'

function Banner() {
    return (
        <div className="banner">
           <Container>
  <Row>
    <Col sm={6}>
        <img className="banner-image" src={Image1} alt="" />
    </Col>
    <Col ><p className="banner-para">  
  Better loans for a better world
    
    
    </p>
    <p className="sub-para">Helping in Achieving the life you want</p>
    <button className="banner-button">quick find</button>
    </Col>
  </Row>
  </Container> 
        </div>
    )
}

export default Banner
