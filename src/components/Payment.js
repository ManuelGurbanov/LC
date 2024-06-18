import React from 'react';
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

const methods = [
    s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13
];

const Payment = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-[80vh]">
            <h1 className='font-bold text-4xl w-[80vw] text-black mt-8 text-center'>Métodos de Pago</h1>
            <section className="flex flex-col items-center justify-start w-[80vw] sm:w-[60vw] flex-grow mt-4 sm:mt-12 text-black gap-1">
                <section className="grid items-center justify-center w-full h-auto grid-cols-3 gap-4 mt-12 mb-12 text-black sm:mt-0 sm:mb-0 sm:gap-0 sm:m-0 sm:grid-cols-4 justify-items-center">
                    {methods.map((method, index) => (
                        <img 
                            key={index} 
                            src={method} 
                            alt={`Payment method`} 
                            className='w-full h-auto p-1 sm:w-28 opacity-30' 
                        />
                    ))}
                </section>
            </section>
        </div>
    );
}

export default Payment;
