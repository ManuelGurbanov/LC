import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Social from './Social';
import Coins from '../img/coins.webp';


AOS.init({
  duration: 500,
  once: true,
});

function SellCoins() {
  return (
    <>
      <section className="flex flex-col items-center justify-start w-[100vw] ">
        <section className="flex flex-col items-center justify-start w-[90vw] min-h-[70vh] mt-28 lg:mt-28 text-white gap-2">
          <div className="flex items-center justify-center w-full gap-5">

            <img src={Coins} className='w-12 mt-3 sm:w-14' data-aos="fade-up"></img>

            <h1 className="mt-5 text-2xl italic font-black text-center sm:text-6xl sm:mt-0" data-aos="fade-up" data-aos-delay="100">Vende tus Monedas</h1>
            
            <img src={Coins} className='w-12 mt-3 sm:w-14' data-aos="fade-up"></img>

          </div>
          <p className="p-4 mt-4 text-xl font-regular" data-aos="fade-right" data-aos-delay="200">
            ¿Queres ganar dinero jugando Fifa?
          </p>
          <p className="p-4 text-xl font-regular" data-aos="fade-left" data-aos-delay="300">
          <span className='text-2xl font-bold'>Contactate</span> con nosotros, y sumate a nuestro equipo de trabajo siendo proveedor de Monedas de FC24.
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
