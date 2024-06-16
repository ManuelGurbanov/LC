import React from 'react';
import Payment from './Payment';
function AboutUs() {
  return (
    <>
    <section className="flex flex-col items-center justify-start w-[100vw] h-[70vh] mt-20 text-black gap-1">
      <h1 className="text-4xl font-bold sm:text-7xl">Nosotros</h1>
      <p className="w-full p-4 mt-2 text-xl sm:w-auto font-regular">Vendemos monedas desde FIFA 20.</p>
      <p className="w-full p-4 text-xl sm:w-auto font-regular">Tenemos una gran base de clientes y proveedores y stock constante.</p>
      <Payment/>
      <p className="mt-2 text-lg font-thin">Comentarios de clientes.</p>
    </section>
    </>
  );
}

export default AboutUs;
