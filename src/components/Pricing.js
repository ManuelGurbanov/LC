import React, { useState } from 'react';
import { RadioGroup, Radio } from '@headlessui/react';
import Coins from '../img/coins.png';

const Pricing = () => {
  const [frequency, setFrequency] = useState('arg');

  const hrefOptions = [
    'https://wa.me/message/OWAU65Z5WGWMI1',
    'https://wa.me/message/OWAU65Z5WGWMI1',
  ];

  //precio de las 100k, después se calculan solos
  const basePrices = {
    arg: 3500,
    chi: 1805,
    col: 15640,
    eurusd: 4,
  };

  const tiers = [
    {
      name: '100K',
      mainFeatures: ['Entrega rápida', 'Sin riesgo de Baneo'],
    },
    {
      name: '200K',
      mainFeatures: ['Entrega rápida', 'Sin riesgo de Baneo'],
    },
    {
      name: '300K',
      mainFeatures: ['Entrega rápida', 'Sin riesgo de Baneo'],
    },
    {
      name: '400K',
      mainFeatures: ['Entrega rápida', 'Sin riesgo de Baneo'],
    },
    {
      name: '500K',
      mainFeatures: ['Entrega rápida', 'Sin riesgo de Baneo'],
    },
    {
      name: '600K',
      mainFeatures: ['Entrega rápida', 'Sin riesgo de Baneo'],
    },
    {
      name: '700K',
      mainFeatures: ['Entrega rápida', 'Sin riesgo de Baneo'],
    },
    {
      name: '800K',
      mainFeatures: ['Entrega rápida', 'Sin riesgo de Baneo'],
    },
    {
      name: '900K',
      mainFeatures: ['Entrega rápida', 'Sin riesgo de Baneo'],
    },
    {
      name: '1M',
      mainFeatures: ['Mejora TOP para tu equipo', 'Entrega rápida', 'Sin riesgo de Baneo'],
    },
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
        return `${price} USD/EUR`;
      default:
        return `${price}`;
    }
  };

  const handleFrequencyChange = (value) => {
    setFrequency(value);
  };

  return (
    <div className="flex flex-col items-center w-full h-auto px-4 py-8 sm:px-8 sm:py-16">
      <h1 data-aos="fade-up" data-aos-delay="100" className="max-w-4xl mx-auto text-5xl font-bold tracking-tight text-center text-black">
        Precios de Monedas
      </h1>
      <p data-aos="fade-up" data-aos-delay="200" className="max-w-2xl mx-auto mt-4 text-lg leading-8 text-center text-gray-800">
        Precios para cada región
      </p>
      <div data-aos="fade-up" data-aos-delay="300" className="flex justify-center mt-10">
        <fieldset aria-label="Frecuencia de pago">
          <RadioGroup
            value={frequency}
            onChange={handleFrequencyChange}
            className="grid grid-cols-4 p-1 text-xs font-semibold leading-5 text-center text-black rounded-full gap-x-1"
          >
            {['arg', 'chi', 'col', 'eurusd'].map((option) => (
              <Radio
                key={option}
                value={option}
                className={({ checked }) =>
                  checked
                    ? 'bg-cardGreen cursor-pointer rounded-full px-2.5 py-1 transition-colors duration-150 overflow-hidden text-black'
                    : 'bg-transparent cursor-pointer rounded-full px-2.5 py-1 transition-colors duration-150 overflow-hidden text-black'
                }
              >
                {option.toUpperCase()}
              </Radio>
            ))}
          </RadioGroup>
        </fieldset>
      </div>
      <div className="relative grid w-full max-w-screen-lg grid-cols-1 mx-auto mt-2 gap-y-2 lg:mx-0 lg:-mb-14 lg:grid-cols-3">
        
  <div className="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl bg-gray-800/80 ring-1 ring-white/10" aria-hidden="true" />

  {tiers.map((tier, index) => {
    const tierPrice = basePrices[frequency] * (index + 1);
    const randomHref = hrefOptions[Math.floor(Math.random() * hrefOptions.length)];
    return (
      <div
        key={index}
        className='bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0 relative rounded-2xl w-full max-w-[300px] mx-auto'
      >
        <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
          <div className="flex items-center justify-start gap-2">
            <h2 id={tier.name} className="text-2xl font-semibold leading-6 text-cardGreen">
              {tier.name}
            </h2>
            <img className="w-8 h-auto" src={Coins} alt="Coins" />
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
            <div className="flex items-center mt-2 gap-x-4">
              <p className="text-3xl font-bold tracking-tight text-white">
                ${getPriceWithSymbol(tierPrice, frequency)}
              </p>
            </div>
            <a
              href={randomHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-describedby={tier.name}
              className="px-3 py-2 text-sm font-semibold leading-6 text-center text-white rounded-md shadow-sm bg-cardGreen hover:bg-gray-800 focus-visible:outline-cardGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Comprar
            </a>
          </div>
          <div className="flow-root mt-8 sm:mt-10">
            <ul
              role="list"
              className="-my-2 text-sm leading-6 text-gray-900 border-t divide-y divide-gray-900/5 border-gray-900/5"
            >
              {tier.mainFeatures.map((mainFeature, idx) => (
                <li key={idx} className="flex py-2 text-white gap-x-3">
                  <svg
                    className="flex-none w-5 h-6 text-cardGreen"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
</div>;

    </div>
  );
};

export default Pricing;
