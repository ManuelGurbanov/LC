import React, { useState } from 'react';
import { RadioGroup, Radio } from '@headlessui/react';
import s0 from '../img/sponsors/payment0.png';
import s1 from '../img/sponsors/payment1.png';
import s2 from '../img/sponsors/payment2.png';
import s3 from '../img/sponsors/payment3.png';
import s4 from '../img/sponsors/payment4.png';
import s5 from '../img/sponsors/payment5.png';
import s6 from '../img/sponsors/payment6.png';
import s7 from '../img/sponsors/payment7.png'; 
import s8 from '../img/sponsors/payment8.png';
import s9 from '../img/sponsors/payment9.png';
import s10 from '../img/sponsors/payment10.png';
import s11 from '../img/sponsors/payment11.png';
import s12 from '../img/sponsors/payment12.png';
import s13 from '../img/sponsors/payment13.png';

import flagArg from '../img/flags/arg.png';
import flagChi from '../img/flags/chi.png';
import flagCol from '../img/flags/col.png';
import flagEurusd from '../img/flags/eurusd.png';

const methodsByCurrency = {
    arg: [s0, s1, s2, s3, s4],
    chi: [s6, s7, s8, s9],
    col: [s9, s10, s11, s12],
    eurusd: [s3, s5, s13],
};

const currencyFlags = {
    arg: flagArg,
    chi: flagChi,
    col: flagCol,
    eurusd: flagEurusd,
};

const Payment = () => {
    const [currency, setCurrency] = useState('arg');

    const handleCurrencyChange = (value) => {
        setCurrency(value);
    };

    return (
        <div className="flex flex-col items-center justify-center w-screen h-[80vh]">
            <h1 className='font-bold text-4xl w-[80vw] text-black mt-8 text-center'>Métodos de Pago</h1>

            <div data-aos="fade-up" data-aos-delay="300" className="flex justify-center mt-10">
                <fieldset aria-label="Frecuencia de pago">
                    <RadioGroup
                        value={currency}
                        onChange={handleCurrencyChange}
                        className="grid grid-cols-4 p-1 text-xs font-semibold leading-5 text-center text-black rounded-full gap-x-1"
                    >
                        {['arg', 'chi', 'col', 'eurusd'].map((option) => (
                            <Radio
                                key={option}
                                value={option}
                                className={({ checked }) =>
                                    checked
                                        ? 'bg-cardGreen cursor-pointer rounded-full px-2.5 py-1 transition-colors duration-150 overflow-hidden text-black w-16 h-8 flex items-center justify-center'
                                        : 'bg-transparent cursor-pointer rounded-full px-2.5 py-1 transition-colors duration-150 overflow-hidden text-black w-16 h-8 flex items-center justify-center'
                                }
                            >
                                <img 
                                    src={currencyFlags[option]} 
                                    alt={`${option} flag`} 
                                    className="w-6 h-4"
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
