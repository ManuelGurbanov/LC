import React, { useState, useEffect } from 'react';
import { RadioGroup, Radio } from '@headlessui/react';
import Coins from '../img/coins.webp';

import flagArg from '../img/flags/arg.webp';
import flagChi from '../img/flags/chi.webp';
import flagCol from '../img/flags/col.webp';
import flagEur from '../img/flags/eur.webp';
import flagEeuu from '../img/flags/eurusd.webp';

import PS from '../img/platforms/ps.webp';
import XB from '../img/platforms/xb.webp';
import PC from '../img/platforms/pc.webp';

import { db } from '../firebase'; // Asegúrate de que esta ruta sea correcta
import { collection, getDocs } from 'firebase/firestore'; // Importa las funciones necesarias

const currencyFlags = {
  arg: flagArg,
  chi: flagChi,
  col: flagCol,
  eurusd: flagEur,
  eeuu: flagEeuu,
};

const platforms = {
  ps: PS,
  xb: XB,
  pc: PC,
};

const Pricing = () => {
  const [frequency, setFrequency] = useState('arg');
  const [platform, setPlatform] = useState('ps');
  const [prices, setPrices] = useState({}); // Para almacenar precios obtenidos de Firebase

  const hrefOptions = [
    'https://wa.me/message/BCJSJE3WA5BDE1',
    'https://wa.me/message/OWAU65Z5WGWMI1',
  ];

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const pricesCollection = collection(db, 'prices'); // Reemplaza 'prices' con el nombre de tu colección en Firestore
        const pricesSnapshot = await getDocs(pricesCollection);
        const pricesData = {};
        pricesSnapshot.forEach((doc) => {
          pricesData[doc.id] = doc.data(); // Almacena cada documento por su ID
        });
        setPrices(pricesData);
      } catch (error) {
        console.error('Error al obtener precios:', error);
      }
    };

    fetchPrices(); // Llama a la función para obtener precios al montar el componente
  }, []);

  const mainFeatures = ['Transacción segura', 'Entrega rápida y confiable.', 'Asesoría gratuita para tu equipo.'];

  // Incluye 50K en la lista de tiers
  const tiers = ['50K', '100K', '200K', '300K', '400K', '500K', '600K', '700K', '800K', '900K', '1M'];

  const getPriceWithSymbol = (price, currency) => {
    switch (currency) {
      case 'arg':
        return `${price} ARS`;
      case 'chi':
        return `${price} CLP`;
      case 'col':
        return `${price} COP`;
      case 'eurusd':
        return `${price} EUR`;
      case 'eeuu':
        return `${price} USD`;
      default:
        return `${price}`;
    }
  };

  const handleFrequencyChange = (value) => {
    setFrequency(value);
  };

  const handlePlatformChange = (value) => {
    setPlatform(value);
  };

  return (
    <div className="flex flex-col items-center w-full h-auto px-4 py-8 sm:px-8 sm:py-16">
      <h1 data-aos="fade-up" data-aos-delay="100" className="max-w-4xl mx-auto text-5xl font-bold tracking-tight text-center text-white">
        Precios de Monedas
      </h1>
      <p data-aos="fade-up" data-aos-delay="200" className="max-w-2xl mx-auto mt-4 text-lg leading-8 text-center text-gray-200">
        Precios para cada región
      </p>
      <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col justify-center gap-4 mt-10">
        <fieldset aria-label="platforms">
          <RadioGroup
            value={platform}
            onChange={handlePlatformChange}
            className="flex justify-center text-center text-white rounded-full gap-x-1"
          >
            {['ps', 'xb', 'pc'].map((option) => (
              <Radio
                key={option}
                value={option}
                className={({ checked }) =>
                  checked
                    ? 'bg-cardGreen cursor-pointer rounded-full px-2 py-2 transition-colors duration-150 overflow-hidden text-white w-16 h-16 flex items-center justify-center'
                    : 'bg-transparent cursor-pointer rounded-full px-2 py-2 transition-all duration-150 overflow-hidden text-white w-16 h-16 flex items-center justify-center hover:scale-110'
                }
              >
                <img src={platforms[option]} alt={`${option}`} className="w-8 h-8" />
              </Radio>
            ))}
          </RadioGroup>
        </fieldset>

        <fieldset aria-label="Frecuencia de pago">
          <RadioGroup
            value={frequency}
            onChange={handleFrequencyChange}
            className="grid grid-cols-5 p-1 text-xs font-semibold leading-5 text-center text-white rounded-full gap-x-1"
          >
            {['arg', 'chi', 'col', 'eeuu', 'eurusd'].map((option) => (
              <Radio
                key={option}
                value={option}
                className={({ checked }) =>
                  checked
                    ? 'bg-cardGreen cursor-pointer rounded-full px-4.5 py-3 transition-colors duration-150 overflow-hidden text-white w-16 h-8 flex items-center justify-center'
                    : 'bg-transparent cursor-pointer rounded-full px-4.5 py-3 transition-all duration-150 overflow-hidden text-white w-16 h-8 flex items-center justify-center hover:scale-110'
                }
              >
                <img src={currencyFlags[option]} alt={`${option} flag`} className="w-8" />
              </Radio>
            ))}
          </RadioGroup>
        </fieldset>
      </div>

      {/* Grid de tiers */}
      <div className="relative grid w-4/5 max-w-screen-lg grid-cols-1 mx-auto mt-2 gap-y-2 md:grid-cols-3 sm:grid-cols-2 sm:gap-x-3 lg:mx-0 lg:-mb-14">
        <div className="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl bg-gray-800/80 ring-1 ring-white/10" aria-hidden="true" />

        {tiers.map((tier, index) => {
          const tierPrice = prices[frequency]?.[tier] || "Cargando"; // Obtén el precio del tier correspondiente
          const randomHref = hrefOptions[Math.round(Math.random())];
          return (
            <div
              key={index}
              className="bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0 relative rounded-2xl w-full max-w-[300px] mx-auto"
            >
              <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                <div className="flex items-center justify-start gap-2">
                  <h2 id={tier} className="text-2xl font-semibold leading-6 text-white">
                    {tier}
                  </h2>
                  <img className="w-8 h-auto" src={Coins} alt="Coins" />
                </div>
                <div className="flex flex-col gap-6 sm:justify-between lg:flex-col lg:items-stretch">
                  <div className="flex items-center mt-2 gap-x-4">
                    <p className="text-3xl font-bold tracking-tight text-white">
                      {getPriceWithSymbol(tierPrice, frequency)}
                    </p>
                  </div>
                  <a
                    href={randomHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center py-3 text-sm font-semibold text-center text-gray-100 transition-all duration-150 rounded-lg shadow-sm bg-cardGreen hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cardGreen"
                  >
                    Comprar ahora
                  </a>
                </div>
              </div>
              <div className="relative p-8 bg-gray-900 lg:rounded-t-none lg:rounded-b-2xl lg:bg-transparent sm:pt-8 lg:pt-4 lg:px-6 xl:px-8 xl:pt-6">
                <ul role="list" className="space-y-3 text-sm leading-6 text-gray-300 lg:gap-2">
                  {mainFeatures.map((feature, idx) => (
                    <li key={idx} className="flex gap-3">
                      <svg
                        className="flex-none w-5 h-5 text-cardGreen"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.707-6.707a1 1 0 011.414 0L10 11.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;



