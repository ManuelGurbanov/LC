import React, { useState } from 'react';
import team0 from '../img/teams/0.jpg';
import team1 from '../img/teams/1.jpg';
import team2 from '../img/teams/2.jpg';


import ArrowLeft from '../img/arrows/ArrowLeft.svg';
import ArrowRight from '../img/arrows/ArrowRight.svg';

const images = [
    team0,
    team1,
    team2
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
    <main className='flex flex-col h-screen gap-2 p-4 mb-10 rounded-2xl'>
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
    </main>
  );
};

export default Slider;