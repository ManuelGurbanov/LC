import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Social from './Social';

AOS.init({
  duration: 500,
  once: true,
});

function SellCoins() {
  return (
    <>
      <section className="flex flex-col items-center justify-start w-[100vw] min-h-[70vh] mt-12 text-black gap-2">
        <h1 className="text-3xl font-bold sm:text-6xl" data-aos="fade-up" data-aos-delay="100">Vende tus Monedas</h1>
        <p className="p-4 mt-4 text-xl font-regular" data-aos="fade-right" data-aos-delay="200">Contactanos por WhatsApp para convertirte en proveedor y comenzar a vender tus monedas.</p>
        <p className="p-4 text-xl font-regular" data-aos="fade-left" data-aos-delay="300">Para saber los precios, por favor consultar al privado.</p>

        <Social />
      </section>
    </>
  );
}

export default SellCoins;
