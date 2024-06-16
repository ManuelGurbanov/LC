import { useState } from 'react';
import { Radio, RadioGroup } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 500,
  once: true,
});
const pricing = {
  frequencies: [
    { value: 'arg', label: 'ARG' },
    { value: 'chi', label: 'CHI' },
    { value: 'col', label: 'COL' },
    { value: 'eurusd', label: 'EUR/USD' },
  ],
  tiers: [
    {
      name: '100K',
      href: 'https://www.instagram.com/monedas_fifalc/',
      description: 'P',
      price: { arg: '$3.500 ARS', chi: '$3.610 CLP', col: '$15.460 COP', eurusd: '$4,00 USD/EUR' },
      mainFeatures: ['Entrega rápida', 'Sin riesgo de Baneo'],
    },
    {
      name: '200K',
      href: 'https://www.instagram.com/monedas_fifalc/',
      description: 'P',
      price: { arg: '$7.600 ARS', chi: '$7.220 CLP', col: '$30.920 COP', eurusd: '$8,00 USD/EUR' },
      mainFeatures: ['Entrega rápida', 'Sin riesgo de Baneo'],
    },
    {
      name: '300K',
      href: 'https://www.instagram.com/monedas_fifalc/',
      description: 'Mejora tu plantilla rápidamente.',
      price: { arg: '$11.400 ARS', chi: '$10.830 CLP', col: '$46.380 COP', eurusd: '$12,00 USD/EUR' },
      mainFeatures: ['Entrega rápida', 'Sin riesgo de Baneo'],
    },
    {
      name: '400K',
      href: 'https://www.instagram.com/monedas_fifalc/',
      description: 'P',
      price: { arg: '$15.200 ARS', chi: '$14.440 CLP', col: '$61.840 COP', eurusd: '$16,00 USD/EUR' },
      mainFeatures: ['Entrega rápida', 'Sin riesgo de Baneo'],
    },
    {
      name: '500K',
      href: 'https://www.instagram.com/monedas_fifalc/',
      description: 'P',
      price: { arg: '$19.000 ARS', chi: '$18.050 CLP', col: '$77.300 COP', eurusd: '$20,00 USD/EUR' },
      mainFeatures: ['Entrega rápida', 'Sin riesgo de Baneo'],
    },
    {
      name: '600K',
      href: 'https://www.instagram.com/monedas_fifalc/',
      description: 'Mejora tu plantilla rápidamente.',
      price: { arg: '$22.800 ARS', chi: '$21.660 CLP', col: '$92.760 COP', eurusd: '$24,00 USD/EUR' },
      mainFeatures: ['Entrega rápida', 'Sin riesgo de Baneo'],
    },
    {
      name: '700K',
      href: 'https://www.instagram.com/monedas_fifalc/',
      description: 'P',
      price: { arg: '$26.600 ARS', chi: '$25.270 CLP', col: '$108.220 COP', eurusd: '$28,00 USD/EUR' },
      mainFeatures: ['Entrega rápida', 'Sin riesgo de Baneo'],
    },
    {
      name: '800K',
      href: 'https://www.instagram.com/monedas_fifalc/',
      description: 'P',
      price: { arg: '$30.400 ARS', chi: '$28.880 CLP', col: '$123.680 COP', eurusd: '$32,00 USD/EUR' },
      mainFeatures: ['Entrega rápida', 'Sin riesgo de Baneo'],
    },
    {
      name: '900K',
      href: 'https://www.instagram.com/monedas_fifalc/',
      description: 'Mejora tu plantilla rápidamente.',
      price: { arg: '$34.200 ARS', chi: '$32.490 CLP', col: '$139.140 COP', eurusd: '$36,00 USD/EUR' },
      mainFeatures: ['Entrega rápida', 'Sin riesgo de Baneo'],
    },
    {
      name: '1M',
      href: 'https://www.instagram.com/monedas_fifalc/',
      description: 'Mejora tu plantilla rápidamente.',
      price: { arg: '$38.000 ARS', chi: '$36.100 CLP', col: '$154.600 COP', eurusd: '$40,00 USD/EUR' },
      mainFeatures: ['Mejora TOP para tu equipo', 'Entrega rápida', 'Sin riesgo de Baneo'],
    },
  ],
};


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
  const [frequency, setFrequency] = useState(pricing.frequencies[0]);

  const scrollToPricingSection = () => {
    const pricingSection = document.getElementById('pricing-section');
    pricingSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full h-[190vh] sm:h-[80vh] bg-white">
      <main>
        <div id="pricing-section" className='h-min'>
          <div className="flow-root py-16 sm:pt-32 lg:pb-0 mb-80">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
              <div className="relative z-10">
                <h1 data-aos="fade-up" data-aos-delay="100"
                  className="max-w-4xl mx-auto text-5xl font-bold tracking-tight text-center text-black">
                  Precios de Monedas
                </h1>
                <p data-aos="fade-up" data-aos-delay="200"
                  className="max-w-2xl mx-auto mt-4 text-lg leading-8 text-center text-gray-800">
                  Precios para cada región
                </p>
                <div data-aos="fade-up" data-aos-delay="300"
                  className="flex justify-center mt-10">
                  <fieldset aria-label="Payment frequency">
                    <RadioGroup
                      value={frequency}
                      onChange={setFrequency}
                      className="grid grid-cols-4 p-1 text-xs font-semibold leading-5 text-center text-black rounded-full gap-x-1"
                    >
                      {pricing.frequencies.map((option) => (
                        <Radio
                          key={option.value}
                          value={option}
                          className={({ checked }) =>
                            classNames(
                              checked ? 'bg-cardGreen' : 'bg-transparent',
                              'cursor-pointer rounded-full px-2.5 py-1 transition-colors duration-150 overflow-hidden text-black'
                            )
                          }
                        >
                          {option.label}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>
              </div>
              <div className="relative grid max-w-md grid-cols-1 mx-auto mt-2 gap-y-2 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
                <div
                  className="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10"
                  aria-hidden="true"
                />
                {pricing.tiers.map((tier, index) => (
                  <div
                    key={index}
                    className={classNames(
                      tier.featured
                        ? 'z-10 bg-white shadow-xl ring-1 ring-gray-900/10'
                        : 'bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0',
                      'relative rounded-2xl'
                    )}
                  >
                    <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                      <h2
                        id={tier.id}
                        className={classNames(
                          'text-cardGreen',
                          'text-2xl font-semibold leading-6'
                        )}
                      >
                        {tier.name}
                      </h2>
                      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                        <div className="flex items-center mt-2 gap-x-4">
                          <p
                            className={classNames(
                              'text-white',
                              'text-4xl font-bold tracking-tight'
                            )}
                          >
                            {tier.price[frequency.value]}
                          </p>
                        </div>
                        <a
                          href={tier.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-describedby={tier.id}
                          className={classNames(
                            tier.featured
                              ? 'bg-cardGreen shadow-sm hover:bg-gray-800 focus-visible:outline-cardGreen'
                              : 'bg-white/10 hover:bg-white/20 focus-visible:outline-white',
                            'rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                          )}
                        >
                          Comprar
                        </a>
                      </div>
                      <div className="flow-root mt-8 sm:mt-10">
                        <ul
                          role="list"
                          className={classNames(
                            tier.featured
                              ? 'divide-gray-900/5 border-gray-900/5 text-gray-900'
                              : 'divide-white/5 border-white/5 text-white',
                            '-my-2 divide-y border-t text-sm leading-6'
                          )}
                        >
                          {tier.mainFeatures.map((mainFeature, idx) => (
                            <li key={idx} className="flex py-2 gap-x-3">
                              <CheckIcon
                                className={classNames(
                                  'text-cardGreen h-6 w-5 flex-none'
                                )}
                                aria-hidden="true"
                              />
                              {mainFeature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
