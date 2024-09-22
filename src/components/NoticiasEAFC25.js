import React, { useState } from 'react';

import totw1 from '../img/totw1.jpg';

import range1 from '../img/rangos/1.png';
import range2 from '../img/rangos/2.png';
import range3 from '../img/rangos/3.png';
import range4 from '../img/rangos/4.png';
import range5 from '../img/rangos/5.png';
import range6 from '../img/rangos/6.png';
import range7 from '../img/rangos/7.png';
import range8 from '../img/rangos/8.png';
import range9 from '../img/rangos/9.png';
import range10 from '../img/rangos/10.png';


import sosa from '../img/cards/sosa.jpg';

import evo1 from '../img/cards/evo1.jpg';
import evo2 from '../img/cards/evo2.jpg';
import evo3 from '../img/cards/evo3.jpg';

import danjuma from '../img/cards/danjuma.jpg';
import alaba from '../img/cards/alaba.jpg';

import haaland from '../img/cards/haaland.jpg';
import navarro from '../img/cards/navarro.jpg';

const NoticiasEAFC25 = () => {
  const [selectedOption, setSelectedOption] = useState('contenido');
  
  return (
    <section className='flex flex-col items-center justify-start w-full min-h-dvh'>
      <h1 className='p-4 mt-24 text-4xl font-bold text-center'>FC25</h1>
      
      <div className='grid grid-cols-2 gap-4 mt-10 sm:flex sm:flex-row sm:space-x-4'>
        {['contenido', 'SBC', 'TOTW', 'BOOSTING'].map((option) => (
          <button
            key={option}
            className={`cursor-pointer rounded-full px-4 py-2 transition-all duration-150 text-white ${
              selectedOption === option ? 'bg-cardGreen' : 'bg-transparent hover:scale-110'
            }`}
            onClick={() => setSelectedOption(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      <div className='flex flex-col items-center w-10/12 text-center sm:w-1/2'>
      {selectedOption === 'contenido' && (
        <div className='flex flex-col items-center w-full h-full gap-2 mt-10'>
          <img className='w-2/3' src={evo1}></img>
          <img className='w-2/3' src={evo2}></img>
          <img className='w-2/3' src={evo3}></img>
        </div>
      )}
        {selectedOption === 'TOTW' && (
          <div className='flex flex-col items-center w-4/5 mt-10'>
            <img className='w-full' src={totw1}></img>
          </div>
        )}
        {selectedOption === 'SBC' && (
          <div className='flex flex-col items-center w-full gap-2 mt-10'>
            <img className='w-2/3 rounded-3xl' src={navarro}></img>
            <img className='w-2/3 rounded-3xl' src={haaland}></img>
            <img className='w-2/3 rounded-3xl' src={alaba}></img>
            <img className='w-2/3 rounded-3xl' src={danjuma}></img>
            <img className='w-2/3 rounded-3xl' src={sosa}></img>
          </div>
        )}
        {selectedOption === 'BOOSTING' && (
          <div className='flex flex-col items-center w-full mt-10'>
            <h2 className='text-3xl font-bold'>Contactanos para conseguir las mejores recompensas!</h2>
            <p className='mb-4 text-xl'>Rangos en FC25:</p>
            <div className='flex flex-col gap-2 sm:grid sm:grid-cols-2'>
              <img className='w-full rounded-3xl' src={range10}></img>
              <img className='w-full rounded-3xl' src={range9}></img>
              <img className='w-full rounded-3xl' src={range8}></img>
              <img className='w-full rounded-3xl' src={range7}></img>
              <img className='w-full rounded-3xl' src={range6}></img>
              <img className='w-full rounded-3xl' src={range5}></img>
              <img className='w-full rounded-3xl' src={range4}></img>
              <img className='w-full rounded-3xl' src={range3}></img>
              <img className='w-full rounded-3xl' src={range2}></img>
              <img className='w-full rounded-3xl' src={range1}></img>
            </div>
          </div>
        )}
        
      </div> 
    </section>
  );
}

export default NoticiasEAFC25;
