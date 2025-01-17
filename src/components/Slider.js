import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

import ArrowLeft from '../img/arrows/ArrowLeft.svg';
import ArrowRight from '../img/arrows/ArrowRight.svg';

import Social from './Social';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'clientTeams')); // Asegúrate de que la colección se llame 'clientTeams'
        const fetchedImages = querySnapshot.docs.map((doc) => doc.data().imageUrl); // Asegúrate de que los documentos tengan el campo 'imageUrl'
        setImages(fetchedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <main className='flex flex-col items-center justify-start min-h-screen gap-2 p-4 mb-10 rounded-2xl'>
      <h1 className='mt-24 text-4xl font-bold text-center text-white'>Equipos de clientes</h1>

      {loading ? (
        <p className="text-white text-2xl mt-10">Cargando imágenes...</p>
      ) : (
        <div className="relative flex items-center justify-center w-full mx-auto mt-10 sm:w-3/5">
          <button
            onClick={prevSlide}
            className="absolute left-[-30px] p-2 transform -translate-y-1/2 bg-zinc-700 bg-opacity-75 rounded-full top-1/2 hover:bg-opacity-25"
          >
            <img src={ArrowLeft} alt='ArrowLeft' className='w-6' />
          </button>

          {images.length > 0 ? (
            <div className="w-auto mb-4 max-h-[70vh]">
              <img
                src={images[currentIndex]}
                alt={`slider-${currentIndex}`}
                className="w-auto max-h-[70vh] object-full rounded-xl sm:object-cover"
              />
            </div>
          ) : (
            <p className="text-white text-2xl">No hay imágenes disponibles</p>
          )}

          <button
            onClick={nextSlide}
            className="absolute right-[-30px] p-2 transform -translate-y-1/2 bg-zinc-700 bg-opacity-75 rounded-full top-1/2 hover:bg-opacity-25"
          >
            <img src={ArrowRight} alt='ArrowRight' className='w-6' />
          </button>
        </div>
      )}

      <p className='w-3/4 mt-4 mb-4 text-3xl text-center text-white sm:w-1/2'>
        En este apartado irán los equipos de clientes que adquieran sus monedas.
      </p>
      <p className='w-3/4 mb-10 text-3xl font-bold text-center text-white'>
        Todos confian en nosotros y nos compraron monedas para poder lograrlos. Pedinos las tuyas y proba alguno de estos jugadorazos!!!
      </p>

      <Social />
    </main>
  );
};

export default Slider;
