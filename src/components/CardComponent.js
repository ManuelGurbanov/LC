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
    <div className="relative w-[90vw] lg:w-[30vw] h-auto mt-20 lg:mt-0 flex flex-col items-center justify-center">
      {/* Contenedor de Cartas */}
      <div className="relative flex items-center justify-center w-full">
        {/* Carta 1 */}
        <img
          className="object-cover w-[70%] h-auto max-w-[300px] z-20"
          src={Card_1}
          alt="Card 1"
          data-aos="fade-down"
          data-aos-delay="400"
        />
        
        {/* Carta 2 */}
        <img
          className="object-cover w-[70%] h-auto max-w-[300px] z-10 ml-[-30%] lg:ml-0"
          src={Card_2}
          alt="Card 2"
          data-aos="fade-right"
          data-aos-delay="320"
        />
        
        {/* Carta 3 */}
        <img
          className="object-cover w-[70%] h-auto max-w-[300px] z-10 mr-[-30%] lg:mr-0"
          src={Card_3}
          alt="Card 3"
          data-aos="fade-left"
          data-aos-delay="300"
        />
      </div>
    </div>
  );
}
