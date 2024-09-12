import AOS from 'aos';
import 'aos/dist/aos.css';

import Instagram from '../img/instagram.svg'
import WhatsApp from '../img/wpp.svg'

AOS.init({
    duration: 500,
    once: true,
});

function getRandomWhatsAppLink() {
    const links = [
        "https://wa.me/message/OWAU65Z5WGWMI1",
        "https://wa.me/message/BCJSJE3WA5BDE1"
    ];
    const randomIndex = Math.round(Math.random());
    return links[randomIndex];
}

export default function Social({phrase}) {

  return (
    <div className="flex flex-col items-center justify-start text-white h-[70vh]" id="social-section">
      <div className="flex flex-col items-center justify-start w-[80vw]">
        <h1 className='mt-24 text-4xl font-bold' data-aos="fade-up" data-aos-delay="100">Nuestras Redes</h1>
        <p className='mt-4 text-xl font-regular' data-aos="fade-up" data-aos-delay="200">
          {phrase}
        </p>
      </div>
      <div className="flex flex-col items-center justify-start w-[80vw] sm:mt-10" data-aos="fade-up" data-aos-delay="300">
        <div className="flex flex-col sm:flex-row items-center justify-center w-[80vw] gap-3 sm:gap-20 mt-5">

          <a href="https://www.instagram.com/monedas_fifalc/" 
             className="flex items-center justify-center px-3 py-2 transition-all duration-75 rounded-lg bg-cardGreen2 hover:bg-opacity-45"
             target="_blank"
             rel="noopener noreferrer"
          >
            <img className="w-8 h-8" src={Instagram} alt="Instagram"/>
            <p className="ml-2 font-bold text-white">Instagram</p>
          </a>

          <a href={getRandomWhatsAppLink()} 
            className="flex items-center justify-center px-3 py-2 transition-all duration-75 rounded-lg bg-cardGreen2 hover:bg-opacity-45"
            target="_blank"
            rel="noopener noreferrer">
            <img className="w-8 h-8" src={WhatsApp} alt="WhatsApp"/>
            <p className="ml-2 font-bold text-white">WhatsApp</p>
          </a>
        </div>

      </div>
    </div>
  )
}
