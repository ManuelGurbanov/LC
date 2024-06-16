import React from 'react';
import s0 from '../img/sponsors/payment0.png';
import s1 from '../img/sponsors/payment1.png';
import s2 from '../img/sponsors/payment2.png';
import s3 from '../img/sponsors/payment3.png';
import s4 from '../img/sponsors/payment4.png';
import s5 from '../img/sponsors/payment5.png';

const methods = [
    s0,s1,s2,s3,s4,s5,
]
const Payment = () => {
    return (
        <section className="grid grid-cols-2 sm:flex sm:flex-row items-center justify-center justify-items-center w-[100vw] h-[10vh] text-black sm:gap-4">
            {methods.map((method, index) => (
                <img key={index} src={method} alt={`Payment method ${index}`}
                     className='w-24 h-auto sm:w-32 opacity-30' />
            ),
            )}
        </section>
    );
}

export default Payment;