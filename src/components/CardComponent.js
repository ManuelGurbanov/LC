import React from 'react';
import Card_1 from '../img/card_1.png';
import Card_2 from '../img/card_2.png';
import Card_3 from '../img/card_3.png';

export default function CardComponent() {
  return (
    <div className="relative w-[90vw] lg:w-[30vw] h-[30vh] lg:h-[50vh] lg:mt-0 mt-20">
      <div className="absolute top-0 z-10 flex flex-col items-start justify-start w-6/12 transform -translate-x-1/2 left-1/2 lg:left-0 lg:transform-none">
        <img
          className="object-cover w-[90%] h-auto"
          src={Card_1}
          alt="Card 1"
        />
      </div>
      <div className="absolute top-[10%] left-[calc(50%-30%)] transform -translate-x-1/2 lg:left-[-4%] flex flex-col items-center justify-start w-6/12">
        <img
          className="object-cover w-[90%] h-auto"
          src={Card_2}
          alt="Card 2"
        />
      </div>
      <div className="absolute top-[10%] left-[calc(50%+24%)] transform -translate-x-1/2 lg:left-[24%] lg:transform-none flex flex-col items-center justify-start w-6/12">
        <img
          className="object-cover w-[90%] h-auto"
          src={Card_3}
          alt="Card 3"
        />
      </div>
    </div>
  );
}
