import './App.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Main() {
  const scrollToPricingSection = () => {
    const pricingSection = document.getElementById('pricing-section');
    pricingSection.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <section className="flex flex-col items-start justify-start w-[80vw] h-[70vh] mt-24 text-white gap-4">
        <h1 className='text-4xl font-bold sm:text-7xl' data-aos="fade-up">LC MONEDAS</h1>
        <p className='text-xl font-regular' data-aos="fade-up" data-aos-delay="200">Comprá tus coins al mejor precio.</p>
        <p className='text-lg font-thin' data-aos="fade-up" data-aos-delay="300">Seguro, confiable y rápido.</p>
        <h2 className='text-lg font-bold' data-aos="fade-up" data-aos-delay="400">+11.000 personas confian en nosotros.</h2>
        <button className='px-4 py-2 text-xl transition-all duration-150 bg-indigo-600 rounded-lg cursor-pointer font-regular hover:scale-110 bg-opacity-40'
         onClick={scrollToPricingSection}
        >Ver Precios</button>
    </section>
  );
}

export default Main;
