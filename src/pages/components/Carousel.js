import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <Carousel>
      <div>
        <img src="/images/thor.jpg"/>
        <p className="legend">Thor</p>
      </div>
      <div>
        <img src="/images/expendables.jpg" alt="Slide 2" />
        <p className="legend">The Expendables</p>
      </div>
      <div>
        <img src="/images/mix.jpg" alt="Slide 3" />
        <p className="legend">Mixed</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
