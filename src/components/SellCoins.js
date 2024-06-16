import React from 'react';
import Payment from './Payment';
function SellCoins() {
  return (
    <>
    <section className="flex flex-col items-center justify-start w-[100vw] h-[70vh] mt-12 text-black gap-2">
      <h1 className="text-3xl font-bold sm:text-6xl">Vende tus Monedas</h1>
      <p className="p-4 mt-4 text-xl font-regular">Contactanos por WhatsApp para convertirte en proveedor y comenzar a vender tus monedas.</p>
      <p className="p-4 text-xl font-regular">Para saber los precios, por favor consultar al privado.</p>
      <Payment/>
    </section>

    </>
  );
}

export default SellCoins;
