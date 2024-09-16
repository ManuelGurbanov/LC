import React, { useState } from 'react';

import totw1 from '../img/totw1.jpg';

const NoticiasEAFC25 = () => {
  const [selectedOption, setSelectedOption] = useState('contenido');
  
  return (
    <section className='flex flex-col items-center justify-start w-full min-h-dvh'>
      <h1 className='p-4 mt-24 text-4xl font-bold text-center'>FC25</h1>
      
      <div className='grid grid-cols-2 gap-4 mt-10 sm:flex sm:flex-row sm:space-x-4'>
        {['contenido', 'sbc', 'totw'].map((option) => (
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
        <div className='flex flex-col items-center w-full h-full mt-10'>
          <h2 className='text-3xl font-bold'>Contenido</h2>
            <p className=''>En esta sección subiremos el mejor contenido de FC25.</p>
        </div>
      )}
        {selectedOption === 'totw' && (
          <div className='flex flex-col items-center w-4/5 mt-10'>
            <img className='w-full' src={totw1}></img>
          </div>
        )}
        {selectedOption === 'sbc' && (
          <div className='flex flex-col items-center w-full mt-10'>
            <h2 className='text-3xl font-bold'>Squad Building Challenge</h2>
            <p className='text-xl '>Aquí subiremos los mejores SBC de FC25.</p>
          </div>
        )}
        
      </div> 
    </section>
  );
}

export default NoticiasEAFC25;
