import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <Carousel
      className="bg-gray-100 p-4 rounded-lg shadow-md"
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
    >
      <div>
        <img src="/images/thor.jpg" alt="Thor" className="rounded-lg" />
        <p className="text-center mt-2 text-xl font-bold"></p>
      </div>
      <div>
        <img src="/images/expendables.jpg" alt="The Expendables" className="rounded-lg" />
        <p className="text-center mt-2 text-xl font-bold"></p>
      </div>
      <div>
        <img src="/images/mix.jpg" alt="Mixed" className="rounded-lg" />
        <p className="text-center mt-2 text-xl font-bold"></p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
