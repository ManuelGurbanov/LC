import '../App.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Pricing from './Pricing';
import CardComponent from './CardComponent';
import Social from './Social';
import Faq from './Faq';
import Cards from '../img/cards.png'
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
    <div className="flex flex-col">
      <section className="flex flex-col items-center justify-center w-screen h-auto mt-8 text-black lg:mt-24 md:flex-row lg:items-start gap-30 lg:gap-10">

        <div className="flex flex-col items-start justify-start w-full h-auto gap-4 p-5 mt-5 md:w-2/5">
          <h1 className='text-4xl font-bold sm:text-7xl' data-aos="fade-up">
            <span className='italic font-black'>LC </span>MONEDAS
          </h1>
          <p className='text-3xl font-bold sm:text-xl' data-aos="fade-up" data-aos-delay="200">El mejor lugar para depositar tu confianza</p>
          <p className='text-2xl font-regular sm:text-lg' data-aos="fade-up" data-aos-delay="300">Comprá tus coins al mejor precio del mercado.</p>
          <h2 className='text-2xl font-bold sm:text-lg' data-aos="fade-up" data-aos-delay="400">Ofrecemos servicios de boosting.</h2>
          <button className='px-4 py-2 text-xl font-bold transition-all duration-150 rounded-lg cursor-pointer bg-cardGreen hover:scale-110 bg-opacity-80'
            onClick={scrollToPricingSection}
          >Ver Precios</button>
        </div>
        {/* <CardComponent /> */}
        <div className='flex items-center justify-center'>
          <img className='w-4/5'
          src={Cards} data-aos="fade-down" data-aos-delay="100">

          </img>
        </div>
      </section>

      <section id="pricing-section" className="flex-grow">
        <Pricing />
        <Faq/>
        <Social />
      </section>
    </div>
  );
}

export default Main;
