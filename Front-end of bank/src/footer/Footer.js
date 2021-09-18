import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from "react-router-dom"
import "./Footer.css"
import logo from "../images/logo.png"

const Footer = () => {
    return (
        <footer className="footer">
            <Row>
            <Col sm={12} md={6} lg={4} className="footer-left">
                <Row>
                    <p className="about">
                        <span>BANK OF ANATOLIA</span><br/>
                         Historical Banking Experience with modern technogical trends

                    </p>
                </Row>

                <Row className="icons">
                    <Link to="/">
                        <i className="fa fa-facebook"></i>
                    </Link>
                    <Link to="/">
                        <i className="fa fa-twitter"></i>
                    </Link>
                    <Link to="/">
                        <i className="fa fa-linkedin"></i>
                    </Link>
                    <Link to="/">
                        <i className="fa fa-google-plus"></i>
                    </Link>
                    <Link to="/">
                        <i className="fa fa-instagram"></i>
                    </Link>
                    

                
                </Row>
                
            </Col>
            
            <Col sm={12} md={6} lg={4} className="footer-center mt-5 ">
                
                    <div className="d-flex align-items-center">
                      
                    <i className="fa fa-map-marker "></i>
                       
                    <p>
                        <span>Street name and number</span> <br/>City, Country 
                    </p>
                    </div>
                

                <div className="d-flex align-items-center">
                    <i className="fa fa-phone"></i>
                    <p>
                        (+00) 0000 000 000 
                    </p>
                </div>

                <div className="d-flex align-items-center">
                    <i className="fa fa-envelope"></i>
                    <p>
                      email@bankofanatolia.com 
                    </p>
                </div>
                
            </Col>
            
                <Col  md={6} lg={4} className="footer-right d-none d-md-block">
                    
                    <img src={logo} alt="logo" style={{ height: "100px" }} />
                    
                    <p className="menu">
                        <Link to="/">Home</Link> | <Link to="/about"> About</Link> | <Link to="/package"> Package</Link> | <Link to="/location"> Location</Link> |  <Link to="/contact"> Contact</Link> 
                    </p>
                    <br />
                    <p className="name">
                        Bank of Anatolia © Copyright: { new Date().getFullYear() }
                    </p>
                
               </Col>
           </Row>
        </footer>
    )
}

export default Footer
