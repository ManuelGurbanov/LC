import React from 'react';
import Card_1 from '../img/card_1.png';
import Card_2 from '../img/card_2.png';
import Card_3 from '../img/card_3.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 500,
  once: true,
});
export default function CardComponent() {
  return (
    <div className="relative w-[90vw] lg:w-[30vw] h-[30vh] lg:h-[50vh] lg:mt-0 mt-20">
      <div className="absolute top-0 z-10 flex flex-col items-center justify-start w-6/12 transform -translate-x-1/2 lg:w-9/12 left-1/2">
        <img
          className="object-cover w-[90%] h-auto max-w-[340px]"
          src={Card_1}
          alt="Card 1"
          data-aos="fade-down"
          data-aos-delay="400"
        />
      </div>
      <div className="absolute top-[10%] left-[calc(50%-15%)] lg:left-[12%] transform -translate-x-1/2 flex flex-col items-center justify-start w-6/12 lg:w-9/12">
        <img
          className="object-cover w-[90%] h-auto max-w-[300px]"
          src={Card_2}
          alt="Card 2"
          data-aos="fade-right"
          data-aos-delay="320"
        />
      </div>
      <div className="absolute top-[10%] left-[calc(50%+15%)] lg:left-[88%] transform -translate-x-1/2 flex flex-col items-center justify-start w-6/12 lg:w-9/12">
        <img
          className="object-cover w-[90%] h-auto max-w-[300px]"
          src={Card_3}
          alt="Card 3"
          data-aos="fade-left"
          data-aos-delay="300"
        />
      </div>
    </div>
  );
}
