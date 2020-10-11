import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../../assets/img/carousal/slide1.webp'
import Slide2 from '../../assets/img/carousal/slide2.webp'
import Slide3 from '../../assets/img/carousal/slide3.webp'


import './my-carousal.style.css'

const MyCarousal = () => {
  return (
    < div id="home">
      
         <Carousel controls={false} indicators interval={2500} pauseOnHover={false}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide2}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide3}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>

    </div>
  );
}

export default MyCarousal;
