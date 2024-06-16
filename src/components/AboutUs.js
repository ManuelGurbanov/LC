import React from 'react';

function AboutUs() {
  return (
    <>
    <section className="flex flex-col items-center justify-start w-[100vw] h-[70vh] mt-24 text-black gap-4">
      <h1 className="text-4xl font-bold sm:text-7xl">Nosotros</h1>
      <p className="mt-4 text-xl font-regular">Info sobre nosotros.</p>
      <p className="mt-2 text-lg font-thin">Comentarios de clientes.</p>
    </section>
    </>
  );
}

export default AboutUs;
