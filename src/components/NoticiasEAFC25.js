import React, { useState } from 'react';

import totw2 from '../img/totw2.jpg';

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

import marquesinas from '../img/marquesinas.jpg';
import sosa from '../img/cards/sosa.jpg';

import lorenzo from '../img/cards/lorenzo.jpg';

import evo1 from '../img/cards/evo1.jpg';
import evo2 from '../img/cards/evo2.jpg';
import evo3 from '../img/cards/evo3.jpg';

import danjuma from '../img/cards/danjuma.jpg';
import alaba from '../img/cards/alaba.jpg';

import all from '../img/cards/all_sbc.jpg';

import haaland from '../img/cards/haaland.jpg';
import navarro from '../img/cards/navarro.jpg';
import aleix from '../img/cards/aleix.jpg';

import locelso from '../img/cards/locelso.jpg';
import maxi from '../img/cards/maxi.jpg';

import ajibade from '../img/cards/ajibade.jpg';

import totw3 from '../img/cards/totw3.jpg';

import rttk from '../img/cards/rttk.jpg';

import nico from '../img/cards/nico.jpg';
import yamal from '../img/cards/yamal.jpg';
import BoostingPricing from './BoostingPricing';

import icon from '../img/icon.jpg';
import sterling from '../img/sterling.jpg';
import gomes from '../img/gomes.jpg';

const NoticiasEAFC25 = () => {
  const [selectedOption, setSelectedOption] = useState('BOOSTING');
  const [sbcOption, setSbcOption] = useState('SBC Actuales'); // Nuevo estado para alternar entre SBC actuales y todos los SBC

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
          <img className='w-2/3' src={rttk}></img>
          <img className='w-2/3' src={evo1}></img>
          <img className='w-2/3' src={evo2}></img>
          <img className='w-2/3' src={evo3}></img>
        </div>
      )}
        {selectedOption === 'TOTW' && (
          <div className='flex flex-col items-center w-4/5 mt-10'>
            <img className='w-full' src={totw3}></img>
          </div>
        )}
        {selectedOption === 'SBC' && (
          <div className='flex flex-col items-center w-full gap-2 mt-10'>
            {/* Botones para alternar entre SBC Actuales y Todos los SBC */}
            <div className='flex space-x-4 mb-4'>
              {['SBC Actuales', 'Todos los SBC'].map((option) => (
                <button
                  key={option}
                  className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-150 ${
                    sbcOption === option ? 'bg-cardGreen text-white' : 'bg-transparent text-white'
                  }`}
                  onClick={() => setSbcOption(option)}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Condicionales para mostrar SBC Actuales o Todos los SBC */}
            {sbcOption === 'SBC Actuales' && (
              <div className='flex flex-col items-center gap-2'>
                <img className='w-2/3 rounded-3xl' src={lorenzo}></img>
                <img className='w-2/3 rounded-3xl' src={icon}></img>
                <img className='w-2/3 rounded-3xl' src={gomes}></img>
                <img className='w-2/3 rounded-3xl' src={sterling}></img>
                <img className='w-2/3 rounded-3xl' src={ajibade}></img>
                <img className='w-2/3 rounded-3xl' src={nico}></img>
                <img className='w-2/3 rounded-3xl' src={yamal}></img>
              </div>
            )}
            {sbcOption === 'Todos los SBC' && (
              <div className='flex flex-col items-center gap-2'>
                <img className='w-2/3 rounded-3xl' src={all}></img>
              </div>
            )}
          </div>
        )}
        {selectedOption === 'BOOSTING' && (
          <div className='flex flex-col items-center w-full mt-10'>
            <BoostingPricing/>
            <h2 className='text-3xl font-bold'>Contactanos para conseguir las mejores recompensas!</h2>
          </div>
        )}
        
      </div> 
    </section>
  );
}

export default NoticiasEAFC25;
