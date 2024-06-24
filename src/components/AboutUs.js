import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import c00 from '../img/cards/c00.webp';
import c01 from '../img/cards/c01.webp';
import c02 from '../img/cards/c02.webp';
import c03 from '../img/cards/c03.webp';
import c04 from '../img/cards/c04.webp';
import c05 from '../img/cards/c05.webp';
import c06 from '../img/cards/c06.webp';
import c07 from '../img/cards/c07.webp';

import Logo from '../img/Logo.png';
AOS.init({
  duration: 500,
  once: true,
});

function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen">
      <section className="flex flex-col items-center justify-start w-[90vw] sm:w-[80vw] flex-grow mt-12 text-black gap-1 p-4">
        <div className='flex items-center justify-center gap-4'>
          <img src={Logo} className='w-12 mt-3 sm:w-14' data-aos="fade-up"></img>
          <h1 className='text-4xl italic font-bold text-center sm:text-7xl' data-aos="fade-up">
            Nosotros
          </h1>
        </div>
        
        <div className="relative flex flex-col items-center w-full p-4 text-lg sm:flex-row sm:w-auto font-regular" data-aos="fade-up" data-aos-delay="60">
          <img src={c03} alt="c00" className="w-auto h-auto sm:max-w-[8%]"/>
          <p className="flex-grow px-4">
            Comenzamos esta aventura hace 4 años, en FIFA 20, desde casa, con una play y con muchas ganas de aprender, de a poco fuimos evolucionando, creamos nuestro Instagram, conseguimos nuestros primeros clientes y seguidores, al principio fue difícil, pero con trabajo y constancia logramos que confíen en nosotros.
          </p>
        </div>

        <div className="relative flex flex-col items-center w-full p-4 text-lg sm:flex-row sm:w-auto font-regular" data-aos="fade-up" data-aos-delay="70">
          <p className="flex-grow px-4">
            En la actualidad, nuestra comunidad cuenta con más de 11 mil personas y creemos que es una buena oportunidad para dar el salto, creando nuestra página web propia que nos dé mayor visibilidad y a ustedes mayor seguridad a la hora de comprar sus monedas.
          </p>
          <img src={c00} alt="c03" className="w-auto h-auto sm:max-w-[8%]"/>
        </div>

        <h2 className="mt-8 text-3xl italic font-bold text-center sm:text-2xl" data-aos="fade-up" data-aos-delay="80">Acerca de las monedas EA FC 24:</h2>
        <div className="relative flex flex-col items-center w-full p-4 text-lg sm:flex-row sm:w-auto font-regular" data-aos="fade-up" data-aos-delay="90">
          <img src={c04} alt="c04" className="w-auto h-auto sm:max-w-[8%]"/>
          <p className="flex-grow px-4">
            En FC 24, la moneda principal del juego se conoce como "FC 24 Coins". Estas monedas se pueden usar para casi todo lo que puedas imaginar, desde comprar sobres en la tienda, adquirir jugadores, venderlos en un mercado global, donde todas las consolas se unen, comprar uniformes, estadios, escudos y así, armar el equipo de tus sueños.
          </p>
        </div>

        <h3 className="mt-6 text-2xl italic font-bold text-center sm:text-2xl" data-aos="fade-up" data-aos-delay="100">Existen diferentes maneras de ganar monedas en EAFC24:</h3>
        <div className="relative flex flex-col items-center w-full p-4 text-lg sm:flex-row sm:w-auto font-regular" data-aos="fade-up" data-aos-delay="100">
          <ul className="flex-grow px-4 list-disc list-inside">
            <li>Jugando Division rivals donde te darán sobres una vez a la semana (todos los jueves, se pueden elegir sobres transferibles o intransferibles).</li>
            <li>Jugando squad battles donde te darán sobres transferibles todos los domingos.</li>
            <li>Participando del Ut Champions: Modo más competitivo de Fc, donde las recompensas son mayores a las 2 anteriores.</li>
            <li>Fut Draft: Aquí te darán sobres en relación a los partidos ganados del Draft (Se juegan 4 partidos en total).</li>
            <li>Tradeando: Esto significa vender caro y comprar barato a los jugadores del Ut, aunque no todos tienen el tiempo y la dedicación para poder hacerlo, ya que el mercado fluctua y es muy cambiante a lo largo de juego.</li>
          </ul>
          <img src={c01} alt="c01" className="w-auto h-auto sm:max-w-[8%]"/>
        </div>

        <h3 className="mt-6 text-2xl italic font-bold text-center sm:text-2xl" data-aos="fade-up" data-aos-delay="200">¿Por qué necesito comprar monedas FUT 24?</h3>
        <div className="relative flex flex-col items-center w-full p-4 text-lg sm:flex-row sm:w-auto font-regular" data-aos="fade-up" data-aos-delay="300">
          <img src={c02} alt="c02" className="w-auto h-auto sm:max-w-[8%]"/>
          <p className="flex-grow px-4">
            Suena fácil ganar un flujo constante de monedas jugando Ultimate Team, ¿no? Sin embargo, el problema es que acumular suficientes monedas EA FC 24 puede ser un gran desafío. Los desarrolladores de juegos hacen que este proceso sea intencionalmente largo y tedioso para mantener la competitividad del juego y la equidad para todos los jugadores. Esto puede resultar frustrante para aquellos que quieren formar rápidamente el equipo de sus sueños.
          </p>
        </div>
        
        <div className="relative flex flex-col items-center w-full p-4 text-lg sm:flex-row sm:w-auto font-regular" data-aos="fade-up" data-aos-delay="400">
          <p className="flex-grow px-4">
            Más que nada cuando muchos juegan por horas y el maldito azar de los sobres, hace que a la gran mayoría no les toquen muchos jugadores TOP para poder utilizarlos o venderlos, si es que necesitan mejorar su equipo.
          </p>
          <img src={c05} alt="c05" className="w-auto h-auto sm:max-w-[8%]"/>
        </div>
        
        <div className="relative flex flex-col items-center w-full p-4 text-lg sm:flex-row sm:w-auto font-regular" data-aos="fade-up" data-aos-delay="500">
          <img src={c06} alt="c00" className="w-auto h-auto sm:max-w-[8%]"/>
          <p className="flex-grow px-4">
            Es por esto, que nuestros clientes depositan su confianza en nosotros para que sus monedas les lleguen de manera segura y rápida, y así, en cuestión de segundos, poder armar sus equipos y mejorar constantemente su nivel de juego.
          </p>
        </div>
        
        <div className="relative flex flex-col items-center w-full p-4 text-lg sm:flex-row sm:w-auto font-regular" data-aos="fade-up" data-aos-delay="600">
          <p className="flex-grow px-4">
            Nuestro equipo de expertos en servicio siempre está listo para responder cualquier pregunta y garantizar que reciban un servicio de calidad. Otra cosa importante es que al convertirte en cliente nuestro, podrás contar con descuentos en tus próximas compras de monedas.
          </p>
          <img src={c07} alt="c03" className="w-auto h-auto sm:max-w-[8%]"/>
        </div>
        
        <h3 className="w-full p-4 mt-2 text-2xl italic font-bold text-center sm:w-auto" data-aos="fade-up" data-aos-delay="600">
          Comprá ya tus monedas
        </h3>
      </section>
    </div>
  );
}

export default AboutUs;
