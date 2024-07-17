import React from 'react';

const imgURL = "https://www.latercera.com/resizer/bJ6VARSl_BfWZ6NMwW3iRO2hpEE=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/RNLKOCNLB5DMFMGANXKPN6B4CQ.jpg";
const img2URL = "https://pbs.twimg.com/media/GSsSHX7WIAABjXv?format=jpg&name=medium";

const leaguesURL = "https://pbs.twimg.com/media/GStBJBhXEAAM-Ru?format=jpg&name=medium";

const NoticiasEAFC25 = () => {
  return (
    <section className='flex flex-col items-center justify-start w-full min-h-dvh'>
      <h1 className='p-4 mt-24 text-4xl font-bold text-center'>Noticias, Filtraciones y Predicciones de EAFC 25</h1>

      <div className='flex flex-col items-center w-4/5 text-center sm:flex-row'>
        <div className='flex flex-col items-center w-full h-full'>
          <h2 className='mt-10 text-3xl font-bold'>Edición Estándar</h2>
          <h3 className='mt-2 text-3xl font-regular'>$69,99 USD</h3>
          <img className='w-full p-2 mt-5 sm:w-3/5' src={img2URL} alt='EAFC 25' />
        </div>
        <div className='flex flex-col items-center w-full h-full'>
          <h2 className='mt-10 text-3xl font-bold'>Edición Ultimate</h2>
          <h3 className='mt-2 text-3xl font-regular'>$99,99 USD</h3>
          <img className='w-full p-2 mt-5 sm:w-3/5' src={imgURL} alt='EAFC 25' />
        </div>
      </div>

      <div className='flex flex-col items-center w-4/5 mt-10'>
        <h2 className='text-3xl font-bold'>Ligas Disponibles</h2>
        <img className='w-full p-2 mt-5 sm:w-3/5' src={leaguesURL} alt='EAFC 25' />
      </div> 
    </section>
  );
}

export default NoticiasEAFC25;
