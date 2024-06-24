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
      <section className="flex flex-col items-center justify-start w-[100vw]">
        <section className="flex flex-col items-center justify-start w-[90vw] min-h-[70vh] mt-12 text-black gap-2">
          <h1 className="text-3xl font-bold sm:text-6xl" data-aos="fade-up" data-aos-delay="100">Vende tus Monedas</h1>
          
          <p className="p-4 mt-4 text-xl font-regular" data-aos="fade-right" data-aos-delay="200">
            ¿Queres ganar dinero jugando Fifa?
          </p>
          <p className="p-4 text-xl font-regular" data-aos="fade-left" data-aos-delay="300">
            Contactate con nosotros, y sumate a nuestro equipo de trabajo siendo proveedor de Monedas de FC24.
          </p>

          <p className="p-4 text-xl font-regular" data-aos="fade-left" data-aos-delay="300">
            Pagos al instante, mejores precios para proveedores y transacción segura.  
          </p>
          <p className="p-4 text-xl font-regular" data-aos="fade-left" data-aos-delay="300">
            Hablanos al WhatsApp para consultar precios y método de venta. Aceptamos todas las consolas.
          </p>
          

          <Social phrase={"Contactanos por Instagram o WhatsApp para vender tus monedas al mejor precio del mercado."}/>
        </section>
      </section>
    </>
  );
}

export default SellCoins;
