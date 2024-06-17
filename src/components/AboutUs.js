import React from 'react';
import Payment from './Payment';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 500,
  once: true,
});

function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex flex-col items-center justify-start w-[100vw] flex-grow mt-12 text-black gap-1">
        <h1 className="text-4xl font-bold sm:text-7xl" data-aos="fade-up" data-aos-delay="100">Nosotros</h1>
        <p className="w-full p-4 mt-2 text-xl sm:w-auto font-regular" data-aos="fade-left" data-aos-delay="200">Vendemos monedas desde FIFA 20.</p>
        <p className="w-full p-4 text-xl sm:w-auto font-regular" data-aos="fade-right" data-aos-delay="400">Tenemos una gran base de clientes y proveedores y stock constante.</p>
        <p className="mt-2 text-lg font-thin">Comentarios de clientes.</p>
      </section>
        <Payment />
    </div>
  );
}

export default AboutUs;
