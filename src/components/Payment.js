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
        <section className="mt-12 mb-12 sm:mt-0 sm:mb-0 grid grid-cols-3 sm:grid-cols-none sm:flex sm:flex-row items-center justify-center justify-items-center w-[100vw] h-auto text-black gap-4">
            {methods.map((method, index) => (
                <img 
                    key={index} 
                    src={method} 
                    alt={`Payment method ${index}`} 
                    className='w-24 h-auto sm:w-28 opacity-30' 
                />
            ))}
        </section>
    );
}

export default Payment;
