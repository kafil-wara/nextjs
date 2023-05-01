import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

const CarouselComponent = () => {
  return (
    <Carousel
      className="bg-gray-100 p-4 rounded-lg shadow-md"
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
    >
      <div>
        <Image src="/images/thor.jpg" alt="Thor" className="rounded-lg" width={500} height={300} />
        <p className="text-center mt-2 text-xl font-bold"></p>
      </div>
      <div>
        <Image src="/images/expendables.jpg" alt="The Expendables" className="rounded-lg" width={500} height={300} />
        <p className="text-center mt-2 text-xl font-bold"></p>
      </div>
      <div>
        <Image src="/images/mix.jpg" alt="Mixed" className="rounded-lg" width={500} height={300} />
        <p className="text-center mt-2 text-xl font-bold"></p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
