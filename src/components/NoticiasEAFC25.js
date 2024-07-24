import React, { useState } from 'react';

const imgURL = "https://www.latercera.com/resizer/bJ6VARSl_BfWZ6NMwW3iRO2hpEE=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/RNLKOCNLB5DMFMGANXKPN6B4CQ.jpg";
const img2URL = "https://pbs.twimg.com/media/GSsSHX7WIAABjXv?format=jpg&name=medium";
const leaguesURL = "https://pbs.twimg.com/media/GStBJBhXEAAM-Ru?format=jpg&name=medium";

const evolucionesURL = "img/evolution.png";
const almacenamientoDuplicadosURL = "img/duplicates.jpeg";

const rivalsURL = "/img/rivals.jpeg";
const seasonPassURL = "/img/seassonpass.jpeg";

const maiconURL = '/img/maicon.webp';
const gutiURL = '/img/guti.webp';

const NoticiasEAFC25 = () => {
  const [selectedOption, setSelectedOption] = useState('noticias');
  
  return (
    <section className='flex flex-col items-center justify-start w-full min-h-dvh'>
      <h1 className='p-4 mt-24 text-4xl font-bold text-center'>Noticias, Filtraciones y Predicciones de EAFC 25</h1>
      
      <div className='grid grid-cols-2 gap-4 mt-10 sm:flex sm:flex-row sm:space-x-4'>
        {['noticias', 'ediciones', 'ligas', 'pase de temporada', 'almacenamiento', 'rivals', 'evoluciones', 'cartas'].map((option) => (
          <button
            key={option}
            className={`cursor-pointer rounded-full px-4 py-2 transition-all duration-150 text-black ${
              selectedOption === option ? 'bg-cardGreen' : 'bg-transparent hover:scale-110'
            }`}
            onClick={() => setSelectedOption(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      <div className='flex flex-col items-center w-10/12 text-center sm:w-1/2'>
        {selectedOption === 'noticias' && (
          <div className='flex flex-col items-center w-full h-full mt-10'>
            <h2 className='text-3xl font-bold text-center'>Noticias</h2>
            <ul className='mt-5 space-y-4 text-left list-none'>
              <li>
                <h3 className='text-2xl font-semibold text-center'>▶️ Nuevo Modo de juego "RUSH" 5 vs. 5:</h3>
                <ul className='ml-5 list-disc'>
                  <li>Estará en Ultimate Team, Kick-Off, Modo Carrera y Clubes Pro.</li>
                  <li>Estarán los Puntos Rush que son como EXP. y servirán para ganar recompensas semanales.</li>
                </ul>
              </li>
              <li>
                <h3 className='text-2xl font-semibold text-center'>▶️ Evolutions:</h3>
                <ul className='ml-5 list-disc'>
                  <li>Tendremos más opciones para evolucionar en cada EVO que saquen.</li>
                  <li>Vas a poder evolucionar al mismo jugador varias veces en el calendario de Ultimate Team.</li>
                  <li>Tendremos requisitos más flexibles.</li>
                  <li>Tendremos más evolucionar comparado a FC 24.</li>
                  <li>Podrás evolucionar 1 jugador a la vez (se está testeando).</li>
                  <li>Vas a poder hacer las EVO en Squad Battles, Rivals, Rush y UT Champions.</li>
                  <li>Vas a poder personalizar la carta EVO (color, fondo y hasta efectos).</li>
                </ul>
              </li>
              <li>
                <h3 className='text-2xl font-semibold text-center'>▶️ Almacenamiento de duplicados:</h3>
                <ul className='ml-5 list-disc'>
                  <li>Parecido al de FIFA18 World Cup.</li>
                  <li>Se va a poder almacenar hasta 100 duplicados.</li>
                </ul>
              </li>
              <li>
                <h3 className='text-2xl font-semibold text-center'>▶️ Divisions Rivals:</h3>
                <ul className='ml-5 list-disc'>
                  <li>Vuelven los descensos.</li>
                  <li>Sistema de puntos.</li>
                  <li>Cambian las recompensas semanales.</li>
                  <li>1 victoria son 3 puntos, empate 1 punto.</li>
                </ul>
              </li>
              <li>
                <h3 className='text-2xl font-semibold text-center'>▶️ FC IQ (Roles de jugadores):</h3>
                <ul className='ml-5 list-disc'>
                  <li>Cada jugador tendrá entre 3 y 5 roles.</li>
                  <li>Por ejemplo, Jude Bellingham puede jugar como mediocampista central o mediocampista ofensivo central, pero al configurar las tácticas del equipo, puedes seleccionarlo en el rol de jugador en el que jugará.</li>
                </ul>
              </li>
              <li>
                <h3 className='text-2xl font-semibold text-center'>▶️ Tácticas dependiendo del entrenador:</h3>
                <ul className='ml-5 list-disc'>
                  <li>Algunos DT tendrán tácticas preestablecidas.</li>
                  <li>Por ejemplo, Pep Guardiola como tu DT, puedes cargar sus tácticas preestablecidas que incluyen la formación 4-2-1-3, estilo de construcción de pases cortos y enfoque defensivo de línea alta para jugar como el Manchester City.</li>
                </ul>
              </li>
              <li>
                <h3 className='text-2xl font-semibold text-center'>▶️ Pase de temporada:</h3>
                <ul className='ml-5 list-disc'>
                  <li>Se agrega un nuevo pase de temporada donde puedes ganar XP en Ultimate Team, Clubes Pro y Modo Carrera.</li>
                  <li>Se agrega un pase de temporada Premium.</li>
                </ul>
              </li>
              <li>
                <h3 className='text-2xl font-semibold text-center'>▶️ Tácticas:</h3>
                <ul className='ml-5 list-disc'>
                  <li>Se podrá copiar las tácticas de otro jugador mediante un código.</li>
                  <li>Se podrá tener 2 tácticas a la vez.</li>
                </ul>
              </li>
            </ul>
          </div>
        )}
        {selectedOption === 'ediciones' && (
          <div className='flex flex-col items-center w-full h-full mt-10'>
            <h2 className='text-3xl font-bold'>Edición Estándar</h2>
            <img className='w-full mt-5 sm:p-2 sm:w-3/5' src={img2URL} alt='EAFC 25' />
            <h2 className='mt-10 text-3xl font-bold'>Edición Ultimate</h2>
            <h3 className='mt-2 text-3xl font-regular'>$99,99 USD</h3>
            <img className='w-full mt-5 sm:p-2p-2 sm:w-3/5' src={imgURL} alt='EAFC 25' />
          </div>
        )}
        {selectedOption === 'ligas' && (
          <div className='flex flex-col items-center w-4/5 mt-10'>
            <h2 className='text-3xl font-bold'>Ligas Disponibles</h2>
            <img className='w-full mt-5 sm:p-2' src={leaguesURL} alt='EAFC 25' />
          </div>
        )}
        {selectedOption === 'pase de temporada' && (
          <div className='flex flex-col items-center w-full mt-10'>
            <h2 className='text-3xl font-bold'>Pase de Temporada</h2>
            <img className='w-full mt-5 sm:p-2' src={seasonPassURL} alt='EAFC 25 Evoluciones' />
          </div>
        )}
        {selectedOption === 'almacenamiento' && (
          <div className='flex flex-col items-center w-4/5 mt-10'>
            <h2 className='text-3xl font-bold'>Almacenamiento Duplicados</h2>
            <img className='w-full p-2 mt-5' src={almacenamientoDuplicadosURL} alt='EAFC 25 Almacenamiento Duplicados' />
          </div>
        )}
        {selectedOption === 'rivals' && (
          <div className='flex flex-col items-center w-4/5 mt-10'>
            <h2 className='text-3xl font-bold'>Rivals</h2>
            <img className='w-full mt-5 sm:p-2' src={rivalsURL} alt='EAFC 25 Rivals' />
          </div>
        )}
        {selectedOption === 'evoluciones' && (
          <div className='flex flex-col items-center w-4/5 mt-10'>
            <h2 className='text-3xl font-bold'>Evoluciones</h2>
            <img className='w-full p-2 mt-5 sm:w-3/5' src={evolucionesURL} alt='EAFC 25 Evoluciones' />
          </div>
        )}
        
        {selectedOption === 'cartas' && (
          <div className='flex flex-col items-center justify-center sm:flex-row'>
              <img className='w-full p-2 mt-5 sm:w-1/4' src={maiconURL} alt='EAFC 25 Evoluciones' />
              <img className='w-full p-2 mt-5 sm:w-1/4' src={gutiURL} alt='EAFC 25 Evoluciones' />
          </div>
        )}
      </div> 
    </section>
  );
}

export default NoticiasEAFC25;
