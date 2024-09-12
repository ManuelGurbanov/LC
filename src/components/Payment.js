import React, { useState } from 'react';
import { RadioGroup, Radio } from '@headlessui/react';
import s0 from '../img/sponsors/payment0.webp';
import s1 from '../img/sponsors/payment1.webp';
import s2 from '../img/sponsors/payment2.webp';
import s3 from '../img/sponsors/payment3.webp';
import s4 from '../img/sponsors/payment4.webp';
import s5 from '../img/sponsors/payment5.webp';
import s6 from '../img/sponsors/payment6.webp';
import s7 from '../img/sponsors/payment7.webp'; 
import s8 from '../img/sponsors/payment8.webp';
import s9 from '../img/sponsors/payment9.webp';
import s10 from '../img/sponsors/payment10.webp';
import s11 from '../img/sponsors/payment11.webp';
import s12 from '../img/sponsors/payment12.webp';
import s13 from '../img/sponsors/payment13.webp';
import s14 from '../img/sponsors/payment14.webp';

import flagArg from '../img/flags/arg.webp';
import flagChi from '../img/flags/chi.webp';
import flagCol from '../img/flags/col.webp';
import flagEur from '../img/flags/eur.webp';
import flagEeuu from '../img/flags/eurusd.webp';

const methodsByCurrency = {
    arg: [s0, s1, s2, s3, s4],
    chi: [s6, s7, s8, s9],
    col: [s9, s10, s11, s12],
    eurusd: [s13, s3, s5],
    eeuu: [s3, s13, s14],
};

const currencyFlags = {
    arg: flagArg,
    chi: flagChi,
    col: flagCol,
    eurusd: flagEur,
    eeuu: flagEeuu,
};

const Payment = () => {
    const [currency, setCurrency] = useState('arg');

    const handleCurrencyChange = (value) => {
        setCurrency(value);
    };

    return (
        <div className="flex flex-col items-center justify-center w-screen h-[80vh]">
            <h1 className='font-bold text-4xl w-[80vw] text-white mt-24 lg:mt-28 text-center'>Métodos de Pago</h1>

            <div data-aos="fade-up" data-aos-delay="300" className="flex justify-center mt-10">
                <fieldset aria-label="Frecuencia de pago">
                    <RadioGroup
                        value={currency}
                        onChange={handleCurrencyChange}
                        className="grid grid-cols-5 p-1 text-xs font-semibold leading-5 text-center text-black rounded-full gap-x-1"
                    >
                        {['arg', 'chi', 'col', 'eeuu', 'eurusd'].map((option) => (
                            <Radio
                                key={option}
                                value={option}
                                className={({ checked }) =>
                                    checked
                                        ? 'bg-cardGreen cursor-pointer rounded-full px-4.5 py-3 transition-colors duration-150 overflow-hidden text-black w-16 h-8 flex items-center justify-center'
                                        : 'bg-transparent cursor-pointer rounded-full px-4.5 py-3 transition-all duration-150 overflow-hidden text-black w-16 h-8 flex items-center justify-center hover:scale-110'
                                }
                            >
                                <img 
                                    src={currencyFlags[option]} 
                                    alt={`${option} flag`} 
                                    className="w-10"
                                />
                            </Radio>
                        ))}
                    </RadioGroup>
                </fieldset>
            </div>

            <section className="flex flex-col items-center justify-start w-[80vw] sm:w-[60vw] flex-grow mt-4 sm:mt-12 text-black gap-1">
                <section className="grid items-center justify-center w-full h-auto grid-cols-2 gap-4 mt-12 mb-12 text-black sm:mt-0 sm:mb-0 sm:gap-0 sm:m-0 sm:grid-cols-3 justify-items-center">
                    {methodsByCurrency[currency].map((method, index) => (
                        <img 
                            key={index} 
                            src={method} 
                            alt={`Payment method`} 
                            className='w-full h-auto p-1 opacity-60 sm:w-28' 
                        />
                    ))}
                </section>
            </section>
        </div>
    );
}

export default Payment;
