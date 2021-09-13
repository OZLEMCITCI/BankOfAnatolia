import React from 'react'

import { Carousel } from 'react-bootstrap'
import Banner1 from "../images/carousel/1.jpg"
import Banner2 from "../images/carousel/2.jpg"
import Banner3 from "../images/carousel/3.jpg"
import Banner4 from "../images/carousel/4.jpg"
import "./Banner.css"

const images = [
    {
      id: 1,
      image: Banner1,
      btnLabel: "Find out more",
      description: "Smarter Internet Banking",
      interval: 10000,
    },
    {
      id: 2,
      image: Banner2,
      btnLabel: "Find out more",
      description: "To Add value for your money",
      interval: 5000,
    },
    {
      id: 3,
      image: Banner3,
      btnLabel: "Find out more",
      description: "More Secure Services",
      interval: 15000,
    },
  ];

const Banner = () => {
    return (
        
    <Carousel nextLabel=" " prevLabel=" ">
    {images.map((item) => {
    const { image, btnLabel, description } = item;
    return (
    <Carousel.Item>
       <img className="d-block w-100" src={image} alt="slide"/>
            <Carousel.Caption>
         <div className="text-center">
        <button className="btn btn-danger">{btnLabel}</button>
        </div>
        <p className="text-dark crausel-desc">{ description}</p>
    </Carousel.Caption>
  </Carousel.Item>)
            })}

</Carousel> 
        
    )
}

export default Banner
