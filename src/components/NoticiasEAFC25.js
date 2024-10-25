import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import BoostingPricing from './BoostingPricing';
import all from '../img/cards/all_sbc.jpg';

const Countdown = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(date));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);

    return () => clearInterval(timer); // Limpiar intervalo al desmontar el componente
  }, [date]);

  function calculateTimeLeft(targetDate) {
    const now = new Date().getTime();
    const distance = new Date(targetDate).getTime() - now;

    if (distance < 0) {
      return 'EXPIRADO';
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  return (
    <p className="text-lg text-center font-semibold text-red-500">
      {typeof timeLeft === 'string' ? timeLeft : `Expira en ${timeLeft}`}
    </p>
  );
};

const NoticiasEAFC25 = () => {
  const [selectedOption, setSelectedOption] = useState('SBC');
  const [sbcData, setSbcData] = useState([]);
  const [totwData, setTotwData] = useState([]);
  const [contenidoData, setContenidoData] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('expiringSoon');

  useEffect(() => {
    const fetchSbcData = async () => {
      const db = getFirestore();
      const sbcCollection = collection(db, 'SBC');
      const sbcSnapshot = await getDocs(sbcCollection);
      const sbcList = sbcSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSbcData(sbcList);
    };

    const fetchTotwData = async () => {
      const db = getFirestore();
      const totwCollection = collection(db, 'TOTW');
      const totwSnapshot = await getDocs(totwCollection);
      const totwList = totwSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTotwData(totwList);
    };

    const fetchContenidoData = async () => {
      const db = getFirestore();
      const contenidoCollection = collection(db, 'contenido');
      const contenidoSnapshot = await getDocs(contenidoCollection);
      const contenidoList = contenidoSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setContenidoData(contenidoList);
    };

    fetchSbcData();
    fetchTotwData();
    fetchContenidoData();
  }, []);

  const sortedSbcData = [...sbcData].sort((a, b) => {
    switch (sortCriteria) {
      case 'newest':
        const dateA = a.date ? new Date(a.date.split('/').reverse().join('-')) : new Date(0);
        const dateB = b.date ? new Date(b.date.split('/').reverse().join('-')) : new Date(0);
        return dateB - dateA;
      case 'expiringSoon':
        return new Date(a.expiration) - new Date(b.expiration);
      case 'price':
        return b.precio_ps - a.precio_ps;
      default:
        return 0;
    }
  });

  // Ordenar TOTW por fecha de publicación (suponiendo que tienen una propiedad 'fecha')
  const sortedTotwData = [...totwData].sort((a, b) => {
    return new Date(b.fecha) - new Date(a.fecha); // Más nuevos primero
  });

  // Ordenar contenido por fecha de publicación (suponiendo que tienen una propiedad 'fecha')
  const sortedContenidoData = [...contenidoData].sort((a, b) => {
    return new Date(b.fecha) - new Date(a.fecha); // Más nuevos primero
  });

  return (
    <section className='flex flex-col items-center justify-start w-full min-h-dvh'>
      <h1 className='p-4 mt-24 text-4xl font-bold text-center'>FC25</h1>

      <div className='grid grid-cols-2 gap-4 mt-10 sm:flex sm:flex-row sm:space-x-4'>
        {['contenido', 'SBC', 'TOTW', 'BOOSTING'].map((option) => (
          <button
            key={option}
            className={`cursor-pointer rounded-full px-4 py-2 transition-all duration-150 text-white ${selectedOption === option ? 'bg-cardGreen' : 'bg-transparent hover:scale-110'}`}
            onClick={() => setSelectedOption(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      <div className='flex flex-col items-center w-10/12 text-center sm:w-1/2'>
        {selectedOption === 'SBC' && (
          <div className='flex flex-col items-center w-full gap-2 mt-10'>
            <h2>Ordenar por</h2>
            <div className='flex space-x-4 mb-4'>
              <button
                className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-150 ${sortCriteria === 'expiringSoon' ? 'bg-cardGreen text-white' : 'bg-transparent text-white'}`}
                onClick={() => setSortCriteria('expiringSoon')}
              >
                Más próximos a expirar
              </button>
              <button
                className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-150 ${sortCriteria === 'newest' ? 'bg-cardGreen text-white' : 'bg-transparent text-white'}`}
                onClick={() => setSortCriteria('newest')}
              >
                Más nuevos
              </button>
              <button
                className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-150 ${sortCriteria === 'price' ? 'bg-cardGreen text-white' : 'bg-transparent text-white'}`}
                onClick={() => setSortCriteria('price')}
              >
                Mas caros
              </button>
            </div>

            <div className='flex flex-col items-center gap-2 lg:grid lg:grid-cols-2 lg:gap-x-6'>
              {sortedSbcData.map((sbc) => (
                <div key={sbc.id} className='flex flex-row items-center p-4 bg-cardGreen rounded-3xl text-white ring-4 mb-2 ring-cardGreen2'>
                  <img className='w-36 rounded-3xl' src={sbc.cardimg} alt={sbc.cardimg} />

                  <div className='flex flex-col items-center gap-0 font-bold'>
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
                    <Countdown date={new Date(sbc.expiration)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedOption === 'BOOSTING' && (
          <div className='flex flex-col items-center w-full mt-2'>
            <BoostingPricing />
            <h2 className='text-3xl font-bold'>Contáctanos para conseguir las mejores recompensas!</h2>
          </div>
        )}

        {selectedOption === 'TOTW' && (
          <div className='flex flex-col items-center w-full mt-2'>
            <div className='flex flex-col items-center gap-2'>
              {sortedTotwData.map((totw) => (
                <div key={totw.id} className='flex flex-col items-center p-4 bg-white rounded-3xl text-black mt-4'>
                  <img className='w-full rounded-3xl' src={totw.imagen} alt={totw.titulo} />
                  <p className='text-4xl font-bold p-4'>{totw.titulo}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedOption === 'contenido' && (
          <div className='flex flex-col items-center w-full mt-2'>
            <div className='flex flex-col items-center gap-2 w-full'>
              {sortedContenidoData.map((contenido) => (
                <div key={contenido.id} className='flex flex-col items-center p-4 bg-white rounded-3xl text-black mt-4'>
                  <img className='w-full rounded-3xl' src={contenido.imagen} alt={contenido.titulo} />
                  <p className='text-xl font-bold'>{contenido.titulo}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NoticiasEAFC25;
