import React, { useState } from 'react';
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

  const hrefOptions = [
    'https://wa.me/message/BCJSJE3WA5BDE1',
    'https://wa.me/message/OWAU65Z5WGWMI1',
  ];

  // Precios por región y cantidad
  const prices = {
    arg: {
      '50K': 9000,
      '75K': 13500,
      '100K': 18000,
      '200K': 34000, // ¡OFERTA!
      '300K': 54000,
      '400K': 72000,
      '500K': 87000, // ¡OFERTA!
      '600K': 108000,
      '700K': 126000,
      '800K': 144000,
      '900K': 162000,
      '1M': 175000, // ¡OFERTA!
    },
    eeuu: {
      '50K': 9.50,
      '75K': 14.25,
      '100K': 19,
      '200K': 36, // ¡OFERTA!
      '300K': 57,
      '400K': 76,
      '500K': 90, // ¡OFERTA!
      '600K': 114,
      '700K': 133,
      '800K': 152,
      '900K': 171,
      '1M': 180, // ¡OFERTA!
    },
    eurusd: {
      '50K': 8.50,
      '75K': 12.75,
      '100K': 17,
      '200K': 32, // ¡OFERTA!
      '300K': 51,
      '400K': 68,
      '500K': 80, // ¡OFERTA!
      '600K': 102,
      '700K': 119,
      '800K': 136,
      '900K': 153,
      '1M': 160, // ¡OFERTA!
    },
    chi: {
      '50K': 8810,
      '75K': 13215,
      '100K': 17620,
      '200K': 35000, // ¡OFERTA!
      '300K': 52860,
      '400K': 70480,
      '500K': 88000, // ¡OFERTA!
      '600K': 105720,
      '700K': 123340,
      '800K': 140960,
      '900K': 158580,
      '1M': 176000, // ¡OFERTA!
    },
    col: {
      '50K': 39390,
      '75K': 59085,
      '100K': 78780,
      '200K': 157000, // ¡OFERTA!
      '300K': 236340,
      '400K': 315120,
      '500K': 393900, // ¡OFERTA!
      '600K': 472680,
      '700K': 551460,
      '800K': 630240,
      '900K': 709020,
      '1M': 787800, // ¡OFERTA!
    },
  };

  const mainFeatures = ['Transacción segura', 'Entrega rápida y confiable.', 'Asesoría gratuita para tu equipo.'];

  const tiers = [
    '50K',
    '75K',
    '100K',
    '200K',
    '300K',
    '400K',
    '500K',
    '600K',
    '700K',
    '800K',
    '900K',
    '1M',
  ];

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
                <img 
                  src={platforms[option]} 
                  alt={`${option}`} 
                  className="w-8 h-8"
                />
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
                <img 
                  src={currencyFlags[option]} 
                  alt={`${option} flag`} 
                  className="w-8"
                />
              </Radio>
            ))}
          </RadioGroup>
        </fieldset>
      </div>

      {/* Grid de tiers */}
      <div className="relative grid w-4/5 max-w-screen-lg grid-cols-1 mx-auto mt-2 gap-y-2 md:grid-cols-3 sm:grid-cols-2 sm:gap-x-3 lg:mx-0 lg:-mb-14">
        
        <div className="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl bg-gray-800/80 ring-1 ring-white/10" aria-hidden="true" />

        {tiers.map((tier, index) => {
          const tierPrice = prices[frequency][tier];
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
                      ${getPriceWithSymbol(tierPrice, frequency)}
                    </p>
                  </div>
                  <a
                    href={randomHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-describedby={tier}
                    className="px-3 py-2 text-sm font-semibold leading-6 text-center text-white rounded-md shadow-sm bg-cardGreen2 hover:bg-gray-800 focus-visible:outline-cardGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Comprar
                  </a>
                </div>
                <div className="flow-root mt-8 sm:mt-10">
                  <ul
                    role="list"
                    className="-my-2 text-sm leading-6 text-gray-900 border-t divide-y divide-gray-900/5 border-gray-900/5"
                  >
                    {mainFeatures.map((mainFeature, idx) => (
                      <li key={idx} className="flex py-2 text-white gap-x-3">
                        <svg
                          className="flex-none w-5 h-6 text-cardGreen"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {mainFeature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
