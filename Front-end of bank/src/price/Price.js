import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import "./Price.css";
import price1 from "../images/price/money.jpeg";
import price2 from "../images/price/graph.jpeg";
import price3 from "../images/price/finance.jpeg";

const price = () => {
    return (
        <Container id="top" className="mt-1 mb-2">
            <Row>
                <p className="h2 fw-bold text-center">Price</p>
                <p className="h3 text-center my-xs-3 my-md-5 text-black-50">
                  The right banking package for you.Get the privilege of choose between
          our many banking Packages 'and enjory services that will reward you
          and fit your lifestyle.  
                </p>
            </Row>
            <Row>
                

            </Row>

        </Container>
    )
}

export default price
