import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import BoostingPricing from './BoostingPricing';
import totw5 from '../img/totw5.jpg';
import all from '../img/cards/all_sbc.jpg';

const NoticiasEAFC25 = () => {
  const [selectedOption, setSelectedOption] = useState('SBC');
  const [sbcOption, setSbcOption] = useState('SBC Actuales');
  const [sbcData, setSbcData] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('expiringSoon'); // Estado para el criterio de ordenación

  useEffect(() => {
    const fetchSbcData = async () => {
      const db = getFirestore();
      const sbcCollection = collection(db, 'SBC');
      const sbcSnapshot = await getDocs(sbcCollection);
      const sbcList = sbcSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSbcData(sbcList);
    };

    fetchSbcData();
  }, []);

  const Countdown = ({ expirationDate }) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const now = new Date();
    const expiration = new Date(expirationDate);
    return expiration - now;
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1000);
    }, 1000);

    return () => clearInterval(intervalId); // Limpiar intervalo al desmontar
  }, []);

  const formatTime = (ms) => {
    const totalSeconds = Math.max(Math.floor(ms / 1000), 0);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return <div className='text-lg text-red-500'>Tiempo restante: {formatTime(timeLeft)}</div>;
};

  // Función para ordenar los SBC según el criterio seleccionado
  const sortedSbcData = [...sbcData].sort((a, b) => {
    switch (sortCriteria) {
      case 'newest':
        return new Date(b.expiration) - new Date(a.expiration); // Más nuevos
      case 'expiringSoon':
        return new Date(a.expiration) - new Date(b.expiration); // Más próximos a expirar
      case 'price':
        return b.precio_ps - a.precio_ps; // Más caros a más baratos
      default:
        return 0; // Sin ordenación
    }
  });

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
        {selectedOption === 'SBC' && (
          <div className='flex flex-col items-center w-full gap-2 mt-10'>
            {/* Botones para seleccionar el criterio de ordenación */}
            <div className='flex space-x-4 mb-4'>
              <button
                className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-150 ${
                  sortCriteria === 'expiringSoon' ? 'bg-cardGreen text-white' : 'bg-transparent text-white'
                }`}
                onClick={() => setSortCriteria('expiringSoon')}
              >
                Más próximos a expirar
              </button>
              <button
                className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-150 ${
                  sortCriteria === 'newest' ? 'bg-cardGreen text-white' : 'bg-transparent text-white'
                }`}
                onClick={() => setSortCriteria('newest')}
              >
                Más nuevos
              </button>
              <button
                className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-150 ${
                  sortCriteria === 'price' ? 'bg-cardGreen text-white' : 'bg-transparent text-white'
                }`}
                onClick={() => setSortCriteria('price')}
              >
                De más caros a más baratos
              </button>
            </div>

            {sbcOption === 'SBC Actuales' && (
              <div className='flex flex-col items-center gap-2'>
                {sortedSbcData.map((sbc) => (
                  <div key={sbc.id} className='flex flex-row items-center p-4 bg-white rounded-3xl text-black'>
                    <img className='w-36 rounded-3xl' src={sbc.cardimg} alt={sbc.cardimg} />

                    <div className='flex flex-col items-center gap-2 font-bold'> 
                      <p className='text-xl'>
                        <span className='font-extrabold text-blue-400'>PS</span>  {sbc.precio_ps}K
                      </p>
                      <p className='text-xl'>
                        <span className='font-extrabold text-green-400'>XB</span>  {sbc.precio_ps}K
                      </p>
                      <p className='text-xl'>
                        <span className='font-extrabold text-orange-400'>PC</span>  {sbc.precio_pc}K
                      </p>
                      <p className='text-lg tetxt-cener'>Finaliza el {new Date(sbc.expiration).toLocaleDateString()}</p>
                      <Countdown expirationDate={sbc.expiration} />
                    </div>
                  </div>
                ))}
              </div>
            )}
            {sbcOption === 'Todos los SBC' && (
              <div className='flex flex-col items-center gap-2'>
                <img className='w-2/3 rounded-3xl' src={all} alt="Todos los SBC" />
              </div>
            )}
          </div>
        )}
        {selectedOption === 'BOOSTING' && (
          <div className='flex flex-col items-center w-full mt-2'>
            <BoostingPricing />
            <h2 className='text-3xl font-bold'>Contáctanos para conseguir las mejores recompensas!</h2>
          </div>
        )}
      </div>
    </section>
  );
}

export default NoticiasEAFC25;
