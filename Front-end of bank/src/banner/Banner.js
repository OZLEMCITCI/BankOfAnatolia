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
      description: "Internet banking for banking transactions wherever you are",
      interval: 10000,
    },
    {
      id: 2,
      image: Banner2,
      btnLabel: "Find out more",
      description: "Summer is here vacation loan to see new places",
      interval: 5000,
    },
    {
      id: 3,
      image: Banner3,
      btnLabel: "Find out more",
      description: "Summer is here vacation loan to see new places",
      interval: 15000,
    },
  ];

const Banner = () => {
    return (
        
    <Carousel nextLabel=" " prevLabel=" ">
    {images.map((item) => {
    const { image, btnLabel, description} = item;
    return (
    <Carousel.Item  >
       <img className="d-block w-100" src={image} alt="slide"/>
            <Carousel.Caption>
         <div className="text-center w-50 ms-5">
            <button className="btn btn-danger">{btnLabel}</button>
            <p className="text-dark crausel-desc-text mt-2">{ description}</p>
        </div>
        
    </Carousel.Caption>
  </Carousel.Item>)
            })}

</Carousel> 
        
    )
}

export default Banner
