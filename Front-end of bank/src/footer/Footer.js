import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <Col sm={12} md={6} lg={4} className="footer-left">
                <Row>
                    <p className="about">
                        <span>BANK OF ANATOLIA</span>
                        Historical Banking Experience with modern technogical trendsHistorical Banking Experience with modern technogical trendsHistorical Banking Experience with modern technogical trendsHistorical Banking Experience with modern technogical trendsHistorical Banking Experience with modern technogical trends

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
            
            <Col className="footer-center">
                
            </Col>
            
            <Col className="footer-right">
                
           </Col>
        </footer>
    )
}

export default Footer
