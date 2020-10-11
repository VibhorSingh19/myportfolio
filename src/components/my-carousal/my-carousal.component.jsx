import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../../assets/img/carousal/slide1.webp'
import Slide2 from '../../assets/img/carousal/slide2.webp'
import Slide3 from '../../assets/img/carousal/slide3.webp'


import './my-carousal.style.css'

const MyCarousal = () => {
  return (
    < >
      
         <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </>
  );
}

export default MyCarousal;
