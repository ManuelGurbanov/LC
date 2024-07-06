import React, { useState } from 'react';
import team0 from '../img/teams/0.webp';
import team1 from '../img/teams/1.webp';
import team2 from '../img/teams/2.webp';
import team3 from '../img/teams/3.webp';
import team4 from '../img/teams/4.webp';
import team5 from '../img/teams/5.webp';
import team6 from '../img/teams/6.webp';

import ArrowLeft from '../img/arrows/ArrowLeft.svg';
import ArrowRight from '../img/arrows/ArrowRight.svg';

import Social from './Social';

const images = [
    team0,
    team1,
    team2,
    team3,
    team4,
    team5,
    team6
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <main className='flex flex-col items-center justify-start min-h-screen gap-2 p-4 mb-10 rounded-2xl'>
      <h1 className='mt-24 text-4xl font-bold text-center text-black'>Equipos de clientes</h1>

      <div className="relative flex items-center justify-center w-full mx-auto mt-10 sm:w-3/5">
        <button
          onClick={prevSlide}
          className="absolute left-[-30px] p-2 transform -translate-y-1/2 bg-zinc-700 bg-opacity-75 rounded-full top-1/2 hover:bg-opacity-25"
        >
          <img src={ArrowLeft} alt='ArrowLeft' className='w-6' />
        </button>

        <div className="w-auto mb-4 max-h-[70vh]">
          <img src={images[currentIndex]} alt="slider" className="w-auto max-h-[70vh] object-full rounded-xl sm:object-cover" />
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-[-30px] p-2 transform -translate-y-1/2 bg-zinc-700 bg-opacity-75 rounded-full top-1/2 hover:bg-opacity-25"
        >
          <img src={ArrowRight} alt='ArrowRight' className='w-6' />
        </button>
      </div>

      <p className='w-3/4 mt-4 mb-4 text-3xl text-center text-black sm:w-1/2'>
        Aca les dejamos los equipos de nuestros clientes. A muchos los ayudamos con nuestra asesoria.
      </p>
      <p className='w-3/4 mb-10 text-3xl font-bold text-center text-black'>
        Todos confiaron en nosotros y nos compraron monedas para poder lograrlos. Pedinos las tuyas y proba alguno de estos jugadorazos!!!
      </p>

      <Social/>
    </main>

  );
};

export default Slider;