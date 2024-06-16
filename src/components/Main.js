import '../App.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Pricing from './Pricing';
import CardComponent from './CardComponent';
import Social from './Social';
import Payment from './Payment';
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
    <div className="flex flex-col min-h-screen">
      <section className="flex flex-col items-center justify-center w-screen h-auto mt-8 text-black lg:mt-24 lg:flex-row lg:items-start gap-30 lg:gap-10">
        <div className="flex flex-col items-start justify-start w-full h-auto gap-4 p-5 mt-5 md:w-2/5">

          <h1 className='text-4xl font-bold sm:text-7xl' data-aos="fade-up">
            <span className='italic font-black'>LC </span>MONEDAS
          </h1>

          <p className='text-xl sm:text-xl font-regular' data-aos="fade-up" data-aos-delay="200">Comprá tus coins al mejor precio.</p>
          <p className='text-xl font-thin sm:text-lg' data-aos="fade-up" data-aos-delay="300">Seguro, confiable y rápido.</p>
          <h2 className='text-xl font-bold sm:text-lg' data-aos="fade-up" data-aos-delay="400">+11.000 personas confían en nosotros.</h2>
          <button className='px-4 py-2 text-xl font-bold transition-all duration-150 rounded-lg cursor-pointer bg-cardGreen hover:scale-110 bg-opacity-80'
            onClick={scrollToPricingSection}
          >Ver Precios</button>
        </div>
        <CardComponent />
      </section>

      <section id="pricing-section" className="flex-grow">
        <Payment />
        <Pricing />
        <Social />
      </section>
    </div>
  );
}

export default Main;
