import React from 'react';

const imgURL = "https://media.cospanama.com/p/1893ef2477059704be23af1bf8a9f258/adjuntos/324/imagenes/018/688/0018688543/855x0/smart/fc-25-disclaimers-page-featured-thumbnailjpgadaptcrop16x91023wjpg.jpg";

const NoticiasEAFC25 = () => {
  return (
    <section className='flex flex-col items-center justify-start w-full min-h-dvh'>
      <h1 className='p-4 mt-24 text-4xl font-bold text-center'>Noticias, Filtraciones y Predicciones de EAFC 25</h1>

      <div className='flex flex-col items-center w-full text-center'>
        <h2 className='mt-10 text-3xl font-bold'>¡Nueva Portada Oficial!</h2>
        <p className='mt-5 text-2xl'>A la espera de la imagen de la edicion estándar, esta es la portada oficial de la Ultimate.</p>
        <img className='w-full p-2 mt-5 sm:w-3/5' src={imgURL} alt='EAFC 25' />
      </div> 
    </section>
  );
}

export default NoticiasEAFC25;
