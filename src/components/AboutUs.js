import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 500,
  once: true,
});

function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen">
      <section className="flex flex-col items-center justify-start w-[70vw] sm:w-[80vw] flex-grow mt-12 text-black gap-1 p-4">
        <h1 className="text-4xl font-bold sm:text-5xl" data-aos="fade-up" data-aos-delay="10">Nosotros</h1>
        <p className="w-full p-4 mt-4 text-xl sm:w-auto font-regular" data-aos="fade-up" data-aos-delay="60">
          Comenzamos esta aventura hace 4 años, en FIFA 20, desde casa, con una play y con muchas ganas de aprender, de a poco fuimos evolucionando, creamos nuestro Instagram, conseguimos nuestros primeros clientes y seguidores, al principio fue difícil, pero con trabajo y constancia logramos que confíen en nosotros.
        </p>
        <p className="w-full p-4 mt-2 text-xl sm:w-auto font-regular" data-aos="fade-up" data-aos-delay="70">
          En la actualidad, nuestra comunidad cuenta con más de 11 mil personas y creemos que es una buena oportunidad para dar el salto, creando nuestra página web propia que nos dé mayor visibilidad y a ustedes mayor seguridad a la hora de comprar sus monedas.
        </p>

        <h2 className="mt-8 text-3xl font-bold sm:text-2xl" data-aos="fade-up" data-aos-delay="80">Acerca de las monedas EA FC 24:</h2>
        <p className="w-full p-4 mt-4 text-xl sm:w-auto font-regular" data-aos="fade-up" data-aos-delay="90">
          En FC 24, la moneda principal del juego se conoce como "FC 24 Coins". Estas monedas se pueden usar para casi todo lo que puedas imaginar, desde comprar sobres en la tienda, adquirir jugadores, venderlos en un mercado global, donde todas las consolas se unen, comprar uniformes, estadios, escudos y así, armar el equipo de tus sueños.
        </p>

        <h3 className="mt-6 text-2xl font-bold sm:text-2xl" data-aos="fade-up" data-aos-delay="100">Existen diferentes maneras de ganar monedas en EAFC24:</h3>
        <ul className="w-full p-4 mt-4 text-xl list-disc list-inside sm:w-auto font-regular" data-aos="fade-up" data-aos-delay="100">
          <li>Jugando Division rivals donde te darán sobres una vez a la semana (todos los jueves, se pueden elegir sobres transferibles o intransferibles).</li>
          <li>Jugando squad battles donde te darán sobres transferibles todos los domingos.</li>
          <li>Participando del Ut Champions: Modo más competitivo de Fc, donde las recompensas son mayores a las 2 anteriores.</li>
          <li>Fut Draft: Aquí te darán sobres en relación a los partidos ganados del Draft (Se juegan 4 partidos en total).</li>
          <li>Tradeando: Esto significa vender caro y comprar barato a los jugadores del Ut, aunque no todos tienen el tiempo y la dedicación para poder hacerlo, ya que el mercado fluctua y es muy cambiante a lo largo de juego.</li>
        </ul>

        <h3 className="mt-6 text-2xl font-bold sm:text-2xl" data-aos="fade-up" data-aos-delay="200">¿Por qué necesito comprar monedas FUT 24?</h3>
        <p className="w-full p-4 mt-4 text-xl sm:w-auto font-regular" data-aos="fade-up" data-aos-delay="300">
          Suena fácil ganar un flujo constante de monedas jugando Ultimate Team, ¿no? Sin embargo, el problema es que acumular suficientes monedas EA FC 24 puede ser un gran desafío. Los desarrolladores de juegos hacen que este proceso sea intencionalmente largo y tedioso para mantener la competitividad del juego y la equidad para todos los jugadores. Esto puede resultar frustrante para aquellos que quieren formar rápidamente el equipo de sus sueños.
        </p>
        <p className="w-full p-4 mt-2 text-xl sm:w-auto font-regular" data-aos="fade-up" data-aos-delay="400">
          Más que nada cuando muchos juegan por horas y el maldito azar de los sobres, hace que a la gran mayoría no les toquen muchos jugadores TOP para poder utilizarlos o venderlos, si es que necesitan mejorar su equipo.
        </p>
        <p className="w-full p-4 mt-2 text-xl sm:w-auto font-regular" data-aos="fade-up" data-aos-delay="500">
          Es por esto, que nuestros clientes depositan su confianza en nosotros para que sus monedas les lleguen de manera segura y rápida, y así, en cuestión de segundos, poder armar sus equipos y mejorar constantemente su nivel de juego.
        </p>
        <p className="w-full p-4 mt-2 text-xl sm:w-auto font-regular" data-aos="fade-up" data-aos-delay="600">
          Nuestro equipo de expertos en servicio siempre está listo para responder cualquier pregunta y garantizar que reciban un servicio de calidad. Otra cosa importante es que al convertirte en cliente nuestro, podrás contar con descuentos en tus próximas compras de monedas.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
