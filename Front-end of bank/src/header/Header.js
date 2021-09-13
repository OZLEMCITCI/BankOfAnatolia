import React from 'react'
import {useState} from "react"
import { Container, Nav,Navbar,Row,Col } from 'react-bootstrap'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png"
import "./Header.css"
import {Icon} from "semantic-ui-react"


const Header = () => {
    return (
        <div className="nav-container">
            
            <Container fluid className="nav-top-fluid">
                <Container className="nav-top">
                    <Row>
                        <Col className="d-none d-md-block">
                            <TapNav />
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container className="nav-middle ">
                
                
                <Row >  
                    <Col>
                        <Link to="/">
                             <img src={logo} alt="logo" className="nav-logo"/>
                    </Link>

                        
                        
                    </Col>
                    <Col className="d-flex justify-content-end align-items-center">
                    <MiddleNav/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <BottomNav/>
                        
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
};



const TapNav = () => {

    const history = useHistory();

    const handleNavClick = (eventKey) => {
        history.push(`/${eventKey}`)



    };

    return (
        <div>
            <Nav variant="tabs" defaultActiveKey="advantage"
                onSelect={handleNavClick}>
                <Nav.Item>
                    <Nav.Link  eventKey="advantage">Advantage</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="mobile">Mobile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="signin">Sign In</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                    <Nav.Link eventKey="register">Register</Nav.Link>
                </Nav.Item>

            </Nav>
        </div>
    )
};



const MiddleNav = () => {
    return (
        <div>
            <Nav className="d-flex justify-content-end mb-2">
                
                <Nav.Item className="me-3">
            <Nav.Link bsPrefix="middle-navbar"  to="/login">
              <Icon
                name="user"
                circular
                size="large"
                className="d-block mb-2"
              ></Icon>
              Sign In
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link bsPrefix="middle-navbar"  to="/register">
              <Icon
                name="unlock alternate"
                circular
                size="large"
                className="d-block mb-2 ms-2"
              ></Icon>
              Register
            </Nav.Link>
          </Nav.Item>             
            </Nav>
            
        </div>
    )
}



const BottomNav = () => {

    const history = useHistory();
    const [activeKey, setactiveKey] = useState("home")

    const handleItemcLICK = (eventKey) => {
        eventKey === "home" ? history.push(`/`) : history.push(`/${eventKey}`)
        setactiveKey(eventKey)
    }
    return (
       <Navbar expand="md">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav toggler" />
    <Navbar.Collapse id="basic-navbar-nav navbar-collapse">
                    <Nav className="mr-auto" activeKey={activeKey} onSelect={handleItemcLICK}>
                        <Nav.Link className="nav-bottom-links" eventKey="home">Home</Nav.Link>
                        <Nav.Link className="nav-bottom-links"  eventKey="about">About</Nav.Link>
                        <Nav.Link className="nav-bottom-links"  eventKey="location">Location</Nav.Link>
                        <Nav.Link className="nav-bottom-links"  eventKey="contact">Contact</Nav.Link>
                        <Nav.Link className="nav-bottom-links"  eventKey="package">Package</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}









export default Header
