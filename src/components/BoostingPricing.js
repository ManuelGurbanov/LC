import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { RadioGroup, Radio } from '@headlessui/react';
import flagArg from '../img/flags/arg.webp';
import flagChi from '../img/flags/chi.webp';
import flagCol from '../img/flags/col.webp';
import flagEeuu from '../img/flags/eurusd.webp';
import flagEur from '../img/flags/eur.webp';

const currencyFlags = {
  arg: flagArg,
  chi: flagChi,
  col: flagCol,
  eeuu: flagEeuu,
  eur: flagEur,
};

const BoostingPricing = () => {
  const [frequency, setFrequency] = useState('arg');
  const [boostingType, setBoostingType] = useState('futChampions');
  const [boostingPrices, setBoostingPrices] = useState({});
  const [loading, setLoading] = useState(true);

  const mainFeatures = ['Transacción segura'];

  const hrefOptions = [
    'https://wa.me/message/BCJSJE3WA5BDE1',
    'https://wa.me/message/OWAU65Z5WGWMI1',
  ];
  const randomHref = hrefOptions[Math.round(Math.random())];
  const tiers =
    boostingType === 'futChampions'
      ? ['Rango 1', 'Rango 2', 'Rango 3', 'Rango 4', 'Rango 5', 'Rango 6']
      : ['Rango 1', 'Rango 2', 'Rango 3', 'Rango 4', 'Rango 5', 'Rango 6', 'Rango 7', 'Rango 8', 'Rango 9'];

  useEffect(() => {
    const fetchPrices = async () => {
      const db = getFirestore();
      const pricesCollection = collection(db, 'boostingPrices');
      const pricesSnapshot = await getDocs(pricesCollection);
      const pricesData = {};

      pricesSnapshot.forEach((doc) => {
        pricesData[doc.id] = doc.data();
      });

      setBoostingPrices(pricesData);
      setLoading(false);
    };

    fetchPrices();
  }, []);

  const getPriceWithSymbol = (price, currency) => {
    switch (currency) {
      case 'arg':
        return `${price} ARS`;
      case 'chi':
        return `${price} CLP`;
      case 'col':
        return `${price} COP`;
      case 'eeuu':
        return `${price} USD`;
      case 'eur':
        return `${price} EUR`;
      default:
        return `${price}`;
    }
  };

  if (loading) {
    return <p className="text-center text-white">Cargando precios...</p>;
  }

  return (
    <div className="flex flex-col items-center w-full h-auto px-4 py-8 mb-16 sm:px-8 sm:py-16">
      <h1 className="max-w-4xl mx-auto text-5xl font-bold tracking-tight text-center text-white">
        Precios de Boosting
      </h1>
      <p className="max-w-2xl mx-auto mt-4 text-lg leading-8 text-center text-gray-200">
        Precios para FUT Champions y Division Rivals por región
      </p>

      {/* Selección de región */}
      <fieldset aria-label="Frecuencia de pago" className="mt-10">
        <RadioGroup
          value={frequency}
          onChange={setFrequency}
          className="grid grid-cols-5 p-1 text-xs font-semibold leading-5 text-center text-white rounded-full gap-x-1"
        >
          {['arg', 'chi', 'col', 'eeuu', 'eur'].map((option) => (
            <Radio
              key={option}
              value={option}
              className={({ checked }) =>
                checked
                  ? 'bg-cardGreen cursor-pointer rounded-full px-4 py-3 transition-colors duration-150 text-white'
                  : 'bg-transparent cursor-pointer rounded-full px-4 py-3 transition-all duration-150 text-white hover:scale-110'
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

      {/* Selección de tipo de boosting */}
      <fieldset aria-label="Tipo de boosting" className="mt-10">
        <RadioGroup
          value={boostingType}
          onChange={setBoostingType}
          className="flex justify-center text-center text-white rounded-full gap-x-1"
        >
          {['futChampions', 'rivals'].map((option) => (
            <Radio
              key={option}
              value={option}
              className={({ checked }) =>
                checked
                  ? 'bg-cardGreen cursor-pointer rounded-full px-4 py-2 transition-colors duration-150 text-white'
                  : 'bg-transparent cursor-pointer rounded-full px-4 py-2 transition-all duration-150 text-white hover:scale-110'
              }
            >
              {option === 'futChampions' ? 'FUT Champions' : 'Division Rivals'}
            </Radio>
          ))}
        </RadioGroup>
      </fieldset>

      {/* Lista de precios */}
      <div className="grid w-4/5 max-w-screen-lg grid-cols-1 mx-auto mt-2 gap-y-2 md:grid-cols-3 sm:grid-cols-2 sm:gap-x-3 lg:mx-0 lg:-mb-14">
        {tiers.map((tier, index) => {
          const tierPrice = boostingPrices[frequency]?.[boostingType]?.[tier] || 'N/A';

          return (
            <div
              key={index}
              className="bg-gray-800/80 ring-1 ring-white/10 relative rounded-2xl w-full max-w-[300px] mx-auto text-center"
            >
              <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                <div className="flex items-center justify-center gap-2 italic text-center">
                  <h2
                    id={tier}
                    className="text-2xl font-semibold leading-6 text-center text-yellow-300"
                  >
                    {tier}
                  </h2>
                </div>
                <div className="flex items-center mt-2">
                  <p className="w-full text-xl font-bold text-center text-white">
                    ${getPriceWithSymbol(tierPrice, frequency)}
                  </p>
                </div>
                {/* Botón Comprar */}
                <div className="mt-4">
                  <a
                    href={randomHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-describedby={tier}
                    className="px-4 py-2 text-sm font-semibold leading-6 text-white rounded-md shadow-sm bg-cardGreen2 hover:bg-gray-800 focus-visible:outline-cardGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BoostingPricing;
